import { initialProducts, initialCategories, initialSubCategories } from '../data/catalogSnapshot';

export const API_URL = import.meta.env.VITE_API_URL || 'https://eagle-engineering-server.onrender.com/api';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http') || imagePath.startsWith('data:') || imagePath.startsWith('/products')) return imagePath;
  const baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '') : 'https://eagle-engineering-server.onrender.com';
  return `${baseUrl}${imagePath}`;
};

export const productSuffixToImage = {
  "ec9bb8": "/products/zinc_fasteners_ec9bb8.png",
  "ec9d97": "/products/csk_head_screws_ec9d97.png",
  "0a6224": "/products/pan_head_screws_0a6224.png",
  "0a6277": "/products/truss_button_head_screws_0a6277.png",
  "1a5b61": "/products/frame_fixing_screws_1a5b61.jpg",
  "1a5b9d": "/products/wedge_anchors_1a5b9d.png",
  "1a5bd2": "/products/chipboard_screws_1a5bd2.png",
  "1a5c07": "/products/drywall_screws_1a5c07.png",
  "1a5c55": "/products/cutting_wheels_1a5c55.png",
  "1a5c93": "/products/grinding_wheels_1a5c93.png",
  "1a5d2b": "/products/silicon_sealent_1a5d2b.png",
  "1a5d50": "/products/mastic_butyl_tape_1a5d50.png",
  "1a5d6f": "/products/mesh_roll_1a5d6f.png",
  "1a5d8e": "/products/socket_1a5d8e.png",
  "1a5d95": "/products/star_bit_1a5d95.png",
  "1a5de0": "/products/screw_cap_1a5de0.png",
  "1a5dfd": "/products/screw_cap_1a5dfd.png",
  "1a5e3b": "/products/glass_frame_packer_1a5e3b.png",
  "1a5e66": "/products/glass_frame_packer_1a5e66.png",
  "1a5e6d": "/products/casement_packer_1a5e6d.png",
  "1a5e74": "/products/2_profile_packer_1a5e74.png",
  "1a5e7b": "/products/2_5_profile_packer_1a5e7b.png",
  "1a5e82": "/products/3_profile_packer_1a5e82.png",
  "1a5e95": "/products/bump_stopper_1a5e95.png",
  "1a5e9f": "/products/bump_stopper_1a5e9f.png",
  "1a5ea6": "/products/bump_stopper_1a5ea6.png",
  "1a5ead": "/products/louvers_1a5ead.png",
  "1a5eb4": "/products/louvers_1a5eb4.png",
  "1a5ebb": "/products/louvers_1a5ebb.png",
  "1a5ece": "/products/adjustable_louvers_1a5ece.png",
  "1a5ed5": "/products/jump_arrester_1a5ed5.png",
  "1a5edc": "/products/spacer_block_plastic_1a5edc.png",
  "1a5ee3": "/products/spacer_block_rubber_1a5ee3.png",
  "1a5eea": "/products/pvc_bump_stopper_small_1a5eea.png",
  "1a5ef1": "/products/pvc_bump_stopper_big_1a5ef1.png",
  "1a5ef8": "/products/anti_lift_small_1a5ef8.png",
  "1a5f0b": "/products/anti_lift_small_1a5f0b.png",
  "1a5f18": "/products/anti_lift_small_1a5f18.png",
  "1a5f1f": "/products/anti_lift_small_1a5f1f.png",
  "1a5f26": "/products/anti_lift_rehau_1a5f26.png",
  "1a5f2d": "/products/anti_lift_rehau_1a5f2d.png",
  "1a5f34": "/products/anti_lift_lhs_and_rhs_1a5f34.png",
  "1a5f3b": "/products/anti_lift_outer_frame_big_1a5f3b.png",
  "1a5f43": "/products/casement_wedge_big_1a5f43.png",
  "1a5f4a": "/products/cavity_block_1a5f4a.png",
  "1a5f51": "/products/nylon_anchor_1a5f51.png",
  "1a5f64": "/products/mechanical_joint_sliding_1a5f64.png",
  "1a5f9c": "/products/16mm_single_roller_flat_and_groove_1a5f9c.jpg",
  "1a5fd9": "/products/double_wheel_roller_1a5fd9.jpg",
  "1a5fe0": "/products/double_well_udjustable_roller_1a5fe0.jpg",
  "1a5fe7": "/products/mesh_roller_1a5fe7.jpg"
};

// Helper to sanitize incoming server products - preserves dynamic admin images
const sanitizeProducts = (products) => {
  if (!Array.isArray(products)) return [];
  return products.map(p => {
    let mainImg = p.mainImage || p.image || p.imageUrl || '';
    // Only fallback to productSuffixToImage if no image exists in database
    if (!mainImg && p._id) {
      const suffix = String(p._id).slice(-6).toLowerCase();
      if (productSuffixToImage[suffix]) {
        mainImg = productSuffixToImage[suffix];
      }
    }
    return {
      ...p,
      mainImage: mainImg || ''
    };
  });
};

export const getPreloadedProducts = () => {
  try {
    const cached = localStorage.getItem('eagle_cached_products');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) return sanitizeProducts(parsed);
    }
  } catch (e) {}
  return sanitizeProducts(initialProducts);
};

// In-memory caches pre-seeded with latest known products
let productsCache = { success: true, data: getPreloadedProducts() };
let categoriesCache = { success: true, data: initialCategories };
let subCategoriesCache = { success: true, data: initialSubCategories };
const productDetailsCache = {};

// Seed details cache
getPreloadedProducts().forEach(p => {
  productDetailsCache[p._id] = { success: true, data: p };
});

export const getProducts = async (forceRefresh = false) => {
  if (productsCache && !forceRefresh) {
    // Return instant preloaded cache, but trigger background refresh
    fetchFreshProducts().catch(() => {});
    return productsCache;
  }
  return await fetchFreshProducts();
};

export const getFreshProducts = async () => {
  return await fetchFreshProducts();
};

const fetchFreshProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products?_t=${Date.now()}`, {
      headers: {
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(25000)
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      const sanitized = sanitizeProducts(data.data);
      productsCache = { success: true, data: sanitized };
      sanitized.forEach(p => {
        productDetailsCache[p._id] = { success: true, data: p };
      });
      try {
        localStorage.setItem('eagle_cached_products', JSON.stringify(sanitized));
      } catch (e) {}
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('eagle_products_updated', { detail: sanitized }));
      }
      return productsCache;
    }
    return productsCache || { success: true, data: initialProducts };
  } catch (error) {
    console.warn('API fetch products error, using snapshot/cached data:', error);
    return productsCache || { success: true, data: initialProducts };
  }
};

export const getProductById = async (id, forceRefresh = false) => {
  if (forceRefresh) {
    return await fetchFreshProductById(id);
  }
  if (productDetailsCache[id]) {
    fetchFreshProductById(id).catch(() => {});
    return productDetailsCache[id];
  }
  const preloaded = getPreloadedProducts();
  const preMatch = preloaded.find(p => p._id === id || p.sku === id);
  if (preMatch) {
    productDetailsCache[id] = { success: true, data: preMatch };
    fetchFreshProductById(id).catch(() => {});
    return productDetailsCache[id];
  }
  const match = initialProducts.find(p => p._id === id || p.sku === id);
  if (match) {
    productDetailsCache[id] = { success: true, data: match };
    fetchFreshProductById(id).catch(() => {});
    return productDetailsCache[id];
  }
  return await fetchFreshProductById(id);
};

const fetchFreshProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}?_t=${Date.now()}`, {
      headers: {
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (data.success && data.data) {
      const p = data.data;
      productDetailsCache[id] = data;

      // Also update in productsCache if present
      if (productsCache?.data && Array.isArray(productsCache.data)) {
        const idx = productsCache.data.findIndex(item => item._id === id || item.sku === id);
        if (idx !== -1) {
          productsCache.data[idx] = { ...productsCache.data[idx], ...p };
          try {
            localStorage.setItem('eagle_cached_products', JSON.stringify(productsCache.data));
          } catch (e) {}
        }
      }

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('eagle_product_details_updated', { detail: p }));
      }
      return data;
    }
  } catch (error) {
    console.warn(`Error fetching product ${id}:`, error);
  }
  return productDetailsCache[id] || { success: false, data: null };
};

export const getCategories = async (forceRefresh = false) => {
  if (categoriesCache && !forceRefresh) {
    fetchFreshCategories().catch(() => {});
    return categoriesCache;
  }
  return await fetchFreshCategories();
};

const fetchFreshCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories?_t=${Date.now()}`, {
      headers: {
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      categoriesCache = data;
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('eagle_categories_updated', { detail: data.data }));
      }
      return data;
    }
  } catch (error) {
    console.warn('Error fetching categories from API, using cached:', error);
  }
  return categoriesCache || { success: true, data: initialCategories };
};

export const getSubCategories = async (forceRefresh = false) => {
  if (subCategoriesCache && !forceRefresh) {
    fetchFreshSubCategories().catch(() => {});
    return subCategoriesCache;
  }
  return await fetchFreshSubCategories();
};

const fetchFreshSubCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/sub-categories?_t=${Date.now()}`, {
      headers: {
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      subCategoriesCache = data;
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('eagle_subcategories_updated', { detail: data.data }));
      }
      return data;
    }
  } catch (error) {
    console.warn('Error fetching subcategories from API, using cached:', error);
  }
  return subCategoriesCache || { success: true, data: initialSubCategories };
};

// Real-time synchronization: active heartbeat polling, tab focus, and cross-tab BroadcastChannel
if (typeof window !== 'undefined') {
  let lastSync = 0;
  let isSyncing = false;

  const syncAll = async () => {
    const now = Date.now();
    if (isSyncing || now - lastSync < 2000) return; // 2s throttle
    isSyncing = true;
    lastSync = now;
    try {
      await Promise.allSettled([
        fetchFreshProducts(),
        fetchFreshCategories(),
        fetchFreshSubCategories()
      ]);
    } finally {
      isSyncing = false;
    }
  };

  // Immediate revalidation on tab focus and window visibility change
  window.addEventListener('focus', syncAll);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      syncAll();
    }
  });

  // Active heartbeat: poll every 10 seconds while the website tab is open
  setInterval(() => {
    if (document.visibilityState === 'visible') {
      syncAll();
    }
  }, 10000);

  // Cross-tab real-time sync channel
  try {
    const syncChannel = new BroadcastChannel('eagle_sync_channel');
    syncChannel.onmessage = () => syncAll();
  } catch (e) {}
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
