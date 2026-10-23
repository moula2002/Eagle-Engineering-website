export const API_URL = import.meta.env.VITE_API_URL || 'https://eagle-engineering-server-15wn.onrender.com/api';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http') || imagePath.startsWith('data:') || imagePath.startsWith('/products')) return imagePath;
  const baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '') : 'https://eagle-engineering-server-15wn.onrender.com';
  return `${baseUrl}${imagePath}`;
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
const SESSION_CACHE_TTL = 3 * 60 * 1000; // 3 minutes fresh TTL

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
// Products API with Request Deduplication & Stale-While-Revalidate
// ==========================================
export const getProducts = async (forceRefresh = false) => {
  const now = Date.now();

  // 1. Check in-memory cache if not forcing refresh
  if (!forceRefresh && productsCache && (now - productsCacheTime < SESSION_CACHE_TTL)) {
    return productsCache;
  }

  // 2. Check session storage cache
  if (!forceRefresh) {
    const sessionData = readSessionCache('eagle_live_products_v2');
    if (sessionData) {
      const isFresh = (now - sessionData.timestamp) < SESSION_CACHE_TTL;
      productsCache = { success: true, data: sessionData.data };
      productsCacheTime = sessionData.timestamp;

      // Seed details cache (flagged as preview until full details fetched)
      sessionData.data.forEach(p => {
        if (p._id && !productDetailsCache[p._id]?.hasFullDetails) {
          productDetailsCache[p._id] = { success: true, data: p, hasFullDetails: false, timestamp: sessionData.timestamp };
        }
      });

      if (isFresh) {
        return productsCache;
      }
      // If stale, return cached live data immediately, then revalidate in background
      fetchFreshProducts().catch(() => {});
      return productsCache;
    }
  }

  // 3. Return active in-flight request if one is already pending
  if (inFlightRequests.products) {
    return inFlightRequests.products;
  }

  return await fetchFreshProducts(forceRefresh);
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
      const url = forceRefresh ? `${API_URL}/products?_t=${Date.now()}` : `${API_URL}/products`;
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json'
        },
        signal: AbortSignal.timeout(60000)
      });
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        const sanitized = sanitizeProducts(data.data);
        const result = { success: true, data: sanitized };
        productsCache = result;
        productsCacheTime = Date.now();
        writeSessionCache('eagle_live_products_v2', sanitized);

        sanitized.forEach(p => {
          if (p._id && !productDetailsCache[p._id]?.hasFullDetails) {
            productDetailsCache[p._id] = { success: true, data: p, hasFullDetails: false, timestamp: Date.now() };
          }
        });

        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('eagle_products_updated', { detail: sanitized }));
        }
        return result;
      }
      return { success: false, data: [] };
    } catch (error) {
      console.error('API fetch products error:', error);
      // Fallback to active cache if network drops
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

  const now = Date.now();
  const cached = productDetailsCache[id];

  // 1. If cache already has full details (including gallery) and is fresh, return immediately
  if (!forceRefresh && cached?.hasFullDetails && (now - (cached.timestamp || 0) < SESSION_CACHE_TTL)) {
    return cached;
  }

  // 2. Return active in-flight request if one is already pending
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
      const url = forceRefresh ? `${API_URL}/products/${id}?_t=${Date.now()}` : `${API_URL}/products/${id}`;
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json'
        },
        signal: AbortSignal.timeout(20000)
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
// Categories API with Request Deduplication
// ==========================================
export const getCategories = async (forceRefresh = false) => {
  const now = Date.now();

  if (!forceRefresh && categoriesCache && (now - categoriesCacheTime < SESSION_CACHE_TTL)) {
    return categoriesCache;
  }

  if (!forceRefresh) {
    const sessionData = readSessionCache('eagle_live_categories_v2');
    if (sessionData) {
      const isFresh = (now - sessionData.timestamp) < SESSION_CACHE_TTL;
      categoriesCache = { success: true, data: sessionData.data };
      categoriesCacheTime = sessionData.timestamp;
      if (isFresh) return categoriesCache;
      fetchFreshCategories().catch(() => {});
      return categoriesCache;
    }
  }

  if (inFlightRequests.categories) {
    return inFlightRequests.categories;
  }

  return await fetchFreshCategories(forceRefresh);
};

const fetchFreshCategories = (forceRefresh = false) => {
  if (inFlightRequests.categories) {
    return inFlightRequests.categories;
  }

  inFlightRequests.categories = (async () => {
    try {
      const url = forceRefresh ? `${API_URL}/categories?_t=${Date.now()}` : `${API_URL}/categories`;
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json'
        },
        signal: AbortSignal.timeout(20000)
      });
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        categoriesCache = data;
        categoriesCacheTime = Date.now();
        writeSessionCache('eagle_live_categories_v2', data.data);
        if (typeof window !== 'undefined') {
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
// SubCategories API with Request Deduplication
// ==========================================
export const getSubCategories = async (forceRefresh = false) => {
  const now = Date.now();

  if (!forceRefresh && subCategoriesCache && (now - subCategoriesCacheTime < SESSION_CACHE_TTL)) {
    return subCategoriesCache;
  }

  if (!forceRefresh) {
    const sessionData = readSessionCache('eagle_live_subcategories_v2');
    if (sessionData) {
      const isFresh = (now - sessionData.timestamp) < SESSION_CACHE_TTL;
      subCategoriesCache = { success: true, data: sessionData.data };
      subCategoriesCacheTime = sessionData.timestamp;
      if (isFresh) return subCategoriesCache;
      fetchFreshSubCategories().catch(() => {});
      return subCategoriesCache;
    }
  }

  if (inFlightRequests.subCategories) {
    return inFlightRequests.subCategories;
  }

  return await fetchFreshSubCategories(forceRefresh);
};

const fetchFreshSubCategories = (forceRefresh = false) => {
  if (inFlightRequests.subCategories) {
    return inFlightRequests.subCategories;
  }

  inFlightRequests.subCategories = (async () => {
    try {
      const url = forceRefresh ? `${API_URL}/sub-categories?_t=${Date.now()}` : `${API_URL}/sub-categories`;
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json'
        },
        signal: AbortSignal.timeout(20000)
      });
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        subCategoriesCache = data;
        subCategoriesCacheTime = Date.now();
        writeSessionCache('eagle_live_subcategories_v2', data.data);
        if (typeof window !== 'undefined') {
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
// Efficient Real-Time Synchronization (Focus & Cross-Tab, No Server Bombardment)
// ==========================================
if (typeof window !== 'undefined') {
  let lastSync = 0;
  let isSyncing = false;

  const syncAll = async (force = false) => {
    const now = Date.now();
    // Only revalidate if more than 30s passed since last sync
    if (isSyncing || (!force && now - lastSync < 30000)) return;
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

  // Revalidate when user switches back to tab
  window.addEventListener('focus', () => syncAll(false));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncAll(false);
    }
  });

  // Cross-tab real-time sync channel from admin panel
  try {
    const syncChannel = new BroadcastChannel('eagle_sync_channel');
    syncChannel.onmessage = () => {
      // Admin made changes: invalidate local session cache and force fresh fetch
      sessionStorage.removeItem('eagle_live_products_v2');
      sessionStorage.removeItem('eagle_live_categories_v2');
      sessionStorage.removeItem('eagle_live_subcategories_v2');
      syncAll(true);
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
    const response = await fetch(`${API_URL}/settings`, {
      headers: { 'Accept': 'application/json' },
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
