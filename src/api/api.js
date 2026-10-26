export const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '/api' : 'https://eagle-engineering-server-15wn.onrender.com/api');

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http') || imagePath.startsWith('data:') || imagePath.startsWith('/products')) return imagePath;
  const baseUrl = import.meta.env.VITE_API_URL 
    ? import.meta.env.VITE_API_URL.replace('/api', '') 
    : (import.meta.env.DEV ? '' : 'https://eagle-engineering-server-15wn.onrender.com');
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${baseUrl}${cleanPath}`;
};

// Helper to sanitize incoming server products
const sanitizeProducts = (products) => {
  if (!Array.isArray(products)) return [];
  return products.map(p => ({
    ...p,
    mainImage: p.mainImage || p.image || p.imageUrl || ''
  }));
};

export const getPreloadedProducts = () => {
  return [];
};

// ==========================================
// Session-Level Real-Data Cache & In-Flight Request Deduplication
// ==========================================
// CORS-safe headers (custom headers like Cache-Control trigger preflight failure on backend)
const SAFE_HEADERS = {
  'Accept': 'application/json'
};

const readSessionCache = (key) => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.data) && parsed.data.length > 0) {
      return parsed;
    }
  } catch {}
  return null;
};

const writeSessionCache = (key, data) => {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch {}
};

// In-memory runtime caches
let productsCache = null;
let productsCacheTime = 0;

let categoriesCache = null;
let categoriesCacheTime = 0;

let subCategoriesCache = null;
let subCategoriesCacheTime = 0;

const productDetailsCache = {};

// Active in-flight promises to eliminate duplicate concurrent requests
const inFlightRequests = {
  products: null,
  categories: null,
  subCategories: null,
  productById: {}
};

// ==========================================
// Products API: Stale-While-Revalidate with Auto-Refresh
// ==========================================
export const getProducts = async (forceRefresh = false) => {
  // 1. Force refresh bypasses cache completely
  if (forceRefresh) {
    return await fetchFreshProducts(true);
  }

  // 2. Return memory cache immediately and always trigger background revalidation
  if (productsCache && productsCache.data?.length > 0) {
    fetchFreshProducts(false).catch(() => {});
    return productsCache;
  }

  // 3. Return session cache immediately and always trigger background revalidation
  const sessionData = readSessionCache('eagle_live_products_v2');
  if (sessionData && sessionData.data?.length > 0) {
    productsCache = { success: true, data: sessionData.data };
    productsCacheTime = sessionData.timestamp;

    sessionData.data.forEach(p => {
      if (p._id && !productDetailsCache[p._id]?.hasFullDetails) {
        productDetailsCache[p._id] = { success: true, data: p, hasFullDetails: false, timestamp: sessionData.timestamp };
      }
    });

    fetchFreshProducts(false).catch(() => {});
    return productsCache;
  }

  // 4. No cache available: direct fetch
  return await fetchFreshProducts(false);
};

export const getFreshProducts = async () => {
  return await fetchFreshProducts(true);
};

const fetchFreshProducts = (forceRefresh = false) => {
  if (inFlightRequests.products) {
    return inFlightRequests.products;
  }

  inFlightRequests.products = (async () => {
    try {
      const url = `${API_URL}/products?_t=${Date.now()}`;
      const response = await fetch(url, {
        cache: 'no-store',
        headers: SAFE_HEADERS,
        signal: AbortSignal.timeout(45000)
      });
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        const sanitized = sanitizeProducts(data.data);
        const result = { success: true, data: sanitized };

        // Check if list changed compared to existing cache
        const isChanged = !productsCache?.data || 
          productsCache.data.length !== sanitized.length ||
          sanitized.some((p, i) => p._id !== productsCache.data[i]?._id || p.updatedAt !== productsCache.data[i]?.updatedAt);

        productsCache = result;
        productsCacheTime = Date.now();
        writeSessionCache('eagle_live_products_v2', sanitized);

        sanitized.forEach(p => {
          if (p._id && !productDetailsCache[p._id]?.hasFullDetails) {
            productDetailsCache[p._id] = { success: true, data: p, hasFullDetails: false, timestamp: Date.now() };
          }
        });

        if (typeof window !== 'undefined' && (isChanged || forceRefresh)) {
          window.dispatchEvent(new CustomEvent('eagle_products_updated', { detail: sanitized }));
        }
        return result;
      }
      return { success: false, data: [] };
    } catch (error) {
      console.error('API fetch products error:', error);
      if (productsCache?.data?.length) return productsCache;
      const sessionData = readSessionCache('eagle_live_products_v2');
      if (sessionData?.data?.length) {
        return { success: true, data: sessionData.data };
      }
      return { success: false, data: [] };
    } finally {
      inFlightRequests.products = null;
    }
  })();

  return inFlightRequests.products;
};

// ==========================================
// Product Details with Instant Lookup + Revalidate
// ==========================================
export const getCachedProductById = (id) => {
  if (!id) return null;
  if (productDetailsCache[id]) return productDetailsCache[id];
  if (productsCache?.data) {
    const match = productsCache.data.find(p => p._id === id || p.sku === id);
    if (match) return { success: true, data: match, hasFullDetails: false };
  }
  const sessionData = readSessionCache('eagle_live_products_v2');
  if (sessionData?.data) {
    const match = sessionData.data.find(p => p._id === id || p.sku === id);
    if (match) return { success: true, data: match, hasFullDetails: false };
  }
  return null;
};

export const getProductById = async (id, forceRefresh = false) => {
  if (!id) return { success: false, data: null };

  const cached = productDetailsCache[id];

  if (!forceRefresh && cached?.hasFullDetails) {
    fetchFreshProductById(id, false).catch(() => {});
    return cached;
  }

  if (inFlightRequests.productById[id]) {
    return inFlightRequests.productById[id];
  }

  return await fetchFreshProductById(id, forceRefresh);
};

const fetchFreshProductById = (id, forceRefresh = false) => {
  if (inFlightRequests.productById[id]) {
    return inFlightRequests.productById[id];
  }

  inFlightRequests.productById[id] = (async () => {
    try {
      const url = `${API_URL}/products/${id}?_t=${Date.now()}`;
      const response = await fetch(url, {
        cache: 'no-store',
        headers: SAFE_HEADERS,
        signal: AbortSignal.timeout(30000)
      });
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      if (data.success && data.data) {
        const p = data.data;
        const result = { success: true, data: p, hasFullDetails: true, timestamp: Date.now() };
        productDetailsCache[id] = result;

        if (productsCache?.data && Array.isArray(productsCache.data)) {
          const idx = productsCache.data.findIndex(item => item._id === id || item.sku === id);
          if (idx !== -1) {
            productsCache.data[idx] = { ...productsCache.data[idx], ...p };
          }
        }

        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('eagle_product_details_updated', { detail: p }));
        }
        return result;
      }
      return { success: false, data: null };
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      if (productDetailsCache[id]) return productDetailsCache[id];
      return { success: false, data: null };
    } finally {
      delete inFlightRequests.productById[id];
    }
  })();

  return inFlightRequests.productById[id];
};

// ==========================================
// Categories API: Stale-While-Revalidate with Auto-Refresh
// ==========================================
export const getCategories = async (forceRefresh = false) => {
  if (forceRefresh) {
    return await fetchFreshCategories(true);
  }

  if (categoriesCache && categoriesCache.data?.length > 0) {
    fetchFreshCategories(false).catch(() => {});
    return categoriesCache;
  }

  const sessionData = readSessionCache('eagle_live_categories_v2');
  if (sessionData && sessionData.data?.length > 0) {
    categoriesCache = { success: true, data: sessionData.data };
    categoriesCacheTime = sessionData.timestamp;
    fetchFreshCategories(false).catch(() => {});
    return categoriesCache;
  }

  return await fetchFreshCategories(false);
};

const fetchFreshCategories = (forceRefresh = false) => {
  if (inFlightRequests.categories) {
    return inFlightRequests.categories;
  }

  inFlightRequests.categories = (async () => {
    try {
      const url = `${API_URL}/categories?_t=${Date.now()}`;
      const response = await fetch(url, {
        cache: 'no-store',
        headers: SAFE_HEADERS,
        signal: AbortSignal.timeout(30000)
      });
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        const isChanged = !categoriesCache?.data || categoriesCache.data.length !== data.data.length;
        categoriesCache = data;
        categoriesCacheTime = Date.now();
        writeSessionCache('eagle_live_categories_v2', data.data);
        if (typeof window !== 'undefined' && (isChanged || forceRefresh)) {
          window.dispatchEvent(new CustomEvent('eagle_categories_updated', { detail: data.data }));
        }
        return data;
      }
      return { success: false, data: [] };
    } catch (error) {
      console.error('Error fetching categories from API:', error);
      if (categoriesCache?.data?.length) return categoriesCache;
      const sessionData = readSessionCache('eagle_live_categories_v2');
      if (sessionData?.data?.length) return { success: true, data: sessionData.data };
      return { success: false, data: [] };
    } finally {
      inFlightRequests.categories = null;
    }
  })();

  return inFlightRequests.categories;
};

// ==========================================
// SubCategories API: Stale-While-Revalidate with Auto-Refresh
// ==========================================
export const getSubCategories = async (forceRefresh = false) => {
  if (forceRefresh) {
    return await fetchFreshSubCategories(true);
  }

  if (subCategoriesCache && subCategoriesCache.data?.length > 0) {
    fetchFreshSubCategories(false).catch(() => {});
    return subCategoriesCache;
  }

  const sessionData = readSessionCache('eagle_live_subcategories_v2');
  if (sessionData && sessionData.data?.length > 0) {
    subCategoriesCache = { success: true, data: sessionData.data };
    subCategoriesCacheTime = sessionData.timestamp;
    fetchFreshSubCategories(false).catch(() => {});
    return subCategoriesCache;
  }

  return await fetchFreshSubCategories(false);
};

const fetchFreshSubCategories = (forceRefresh = false) => {
  if (inFlightRequests.subCategories) {
    return inFlightRequests.subCategories;
  }

  inFlightRequests.subCategories = (async () => {
    try {
      const timestamp = Date.now();
      let response = await fetch(`${API_URL}/sub-categories?_t=${timestamp}`, {
        cache: 'no-store',
        headers: SAFE_HEADERS,
        signal: AbortSignal.timeout(30000)
      });

      // Fallback if backend route is /subcategories
      if (!response.ok && response.status === 404) {
        response = await fetch(`${API_URL}/subcategories?_t=${timestamp}`, {
          cache: 'no-store',
          headers: SAFE_HEADERS,
          signal: AbortSignal.timeout(30000)
        });
      }

      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        const isChanged = !subCategoriesCache?.data || subCategoriesCache.data.length !== data.data.length;
        subCategoriesCache = data;
        subCategoriesCacheTime = Date.now();
        writeSessionCache('eagle_live_subcategories_v2', data.data);
        if (typeof window !== 'undefined' && (isChanged || forceRefresh)) {
          window.dispatchEvent(new CustomEvent('eagle_subcategories_updated', { detail: data.data }));
        }
        return data;
      }
      return { success: false, data: [] };
    } catch (error) {
      console.error('Error fetching subcategories from API:', error);
      if (subCategoriesCache?.data?.length) return subCategoriesCache;
      const sessionData = readSessionCache('eagle_live_subcategories_v2');
      if (sessionData?.data?.length) return { success: true, data: sessionData.data };
      return { success: false, data: [] };
    } finally {
      inFlightRequests.subCategories = null;
    }
  })();

  return inFlightRequests.subCategories;
};

// ==========================================
// Full System Refresh (Invalidates caches & triggers fresh fetches)
// ==========================================
export const refreshAllData = async () => {
  try {
    sessionStorage.removeItem('eagle_live_products_v2');
    sessionStorage.removeItem('eagle_live_categories_v2');
    sessionStorage.removeItem('eagle_live_subcategories_v2');
    productsCache = null;
    categoriesCache = null;
    subCategoriesCache = null;

    const [prods, cats, subCats] = await Promise.allSettled([
      fetchFreshProducts(true),
      fetchFreshCategories(true),
      fetchFreshSubCategories(true)
    ]);

    return {
      products: prods.status === 'fulfilled' ? prods.value : null,
      categories: cats.status === 'fulfilled' ? cats.value : null,
      subCategories: subCats.status === 'fulfilled' ? subCats.value : null
    };
  } catch (error) {
    console.error('Error during full data refresh:', error);
  }
};

// ==========================================
// Real-Time Synchronization (Focus, Visibility, Cross-Tab)
// ==========================================
if (typeof window !== 'undefined') {
  let lastSync = 0;
  let isSyncing = false;

  const handleSync = async (force = false) => {
    const now = Date.now();
    // 3-second debounce to prevent spamming while keeping updates near-instant
    if (isSyncing || (!force && now - lastSync < 3000)) return;
    isSyncing = true;
    lastSync = now;
    try {
      await Promise.allSettled([
        fetchFreshProducts(force),
        fetchFreshCategories(force),
        fetchFreshSubCategories(force)
      ]);
    } finally {
      isSyncing = false;
    }
  };

  // Revalidate immediately whenever the user switches back to this tab
  window.addEventListener('focus', () => handleSync(true));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      handleSync(true);
    }
  });

  // Cross-tab synchronization via storage event
  window.addEventListener('storage', (e) => {
    if (e.key === 'eagle_data_updated' || e.key === 'eagle_admin_action') {
      refreshAllData();
    }
  });

  // Cross-tab synchronization via BroadcastChannel
  try {
    const syncChannel = new BroadcastChannel('eagle_sync_channel');
    syncChannel.onmessage = () => {
      refreshAllData();
    };
  } catch {}
}

export const createInquiry = async (inquiryData) => {
  try {
    const response = await fetch(`${API_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inquiryData)
    });
    return await response.json();
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    throw error;
  }
};

// Default contact settings fallback
export const defaultContactSettings = {
  phone: '+91 96321 44367',
  fax: '+91 80-7966 7629',
  officePhone: '+91 80-7966 7629',
  email: 'info@eagleeng.in',
  companyName: 'EAGLE ENGINEERING',
  address: 'No. 22, First Floor, Kothnoor Dinne,\nJP Nagar 8th Phase, Kalena Agrahara, Kothnur,\nBengaluru, Karnataka - 560078'
};

export const getSettings = async () => {
  try {
    const response = await fetch(`${API_URL}/settings?_t=${Date.now()}`, {
      cache: 'no-store',
      headers: SAFE_HEADERS,
      signal: AbortSignal.timeout(10000)
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const res = await response.json();
    if (res.success && res.data) {
      const data = {
        ...defaultContactSettings,
        ...res.data,
        officePhone: res.data.officePhone || res.data.fax || defaultContactSettings.officePhone,
        fax: res.data.fax || defaultContactSettings.fax,
        phone: res.data.phone || defaultContactSettings.phone,
        email: res.data.email || defaultContactSettings.email,
        address: res.data.address || defaultContactSettings.address
      };
      return { success: true, data };
    }
    return { success: false, data: defaultContactSettings };
  } catch (error) {
    return { success: false, data: defaultContactSettings };
  }
};
