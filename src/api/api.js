import { initialProducts, initialCategories, initialSubCategories } from '../data/catalogSnapshot';

export const API_URL = import.meta.env.VITE_API_URL || 'https://eagle-engineering-server.onrender.com/api';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('/uploads')) {
    return `https://eagle-engineering-server.onrender.com${imagePath}`;
  }
  return imagePath;
};

// Static image lookup for fast resolution without holding large base64 strings
const staticImageLookup = {};
initialProducts.forEach(p => {
  if (p.mainImage && p.mainImage.startsWith('/products/')) {
    staticImageLookup[p._id] = p.mainImage;
    if (p.name) staticImageLookup[p.name.toLowerCase().trim()] = p.mainImage;
  }
});

// Helper to sanitize incoming server products so huge base64 strings don't clog memory / storage
const sanitizeProducts = (products) => {
  if (!Array.isArray(products)) return [];
  return products.map(p => {
    let mainImg = p.mainImage;
    if (mainImg && mainImg.startsWith('data:image')) {
      const match = staticImageLookup[p._id] || (p.name && staticImageLookup[p.name.toLowerCase().trim()]);
      if (match) {
        mainImg = match;
      }
    }
    return {
      ...p,
      mainImage: mainImg || staticImageLookup[p._id] || ''
    };
  });
};

// In-memory caches pre-seeded with catalog snapshot
let productsCache = { success: true, data: initialProducts };
let categoriesCache = { success: true, data: initialCategories };
let subCategoriesCache = { success: true, data: initialSubCategories };
const productDetailsCache = {};

// Seed details cache
initialProducts.forEach(p => {
  productDetailsCache[p._id] = { success: true, data: p };
});

export const getProducts = async (forceRefresh = false) => {
  if (productsCache && !forceRefresh) {
    // Return instant preloaded cache, revalidate in background
    fetchFreshProducts().catch(() => {});
    return productsCache;
  }
  return await fetchFreshProducts();
};

const fetchFreshProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`, {
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
      return productsCache;
    }
    return productsCache || { success: true, data: initialProducts };
  } catch (error) {
    console.warn('API fetch products error, using snapshot/cached data:', error);
    return productsCache || { success: true, data: initialProducts };
  }
};

export const getProductById = async (id) => {
  if (productDetailsCache[id]) {
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
    const response = await fetch(`${API_URL}/products/${id}`, {
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (data.success && data.data) {
      const p = data.data;
      if (p.mainImage && p.mainImage.startsWith('data:image')) {
        const match = staticImageLookup[p._id] || (p.name && staticImageLookup[p.name.toLowerCase().trim()]);
        if (match) p.mainImage = match;
      }
      productDetailsCache[id] = data;
      return data;
    }
  } catch (error) {
    console.warn(`Error fetching product ${id}:`, error);
  }
  return productDetailsCache[id] || { success: false, data: null };
};

export const getCategories = async () => {
  if (categoriesCache) {
    fetchFreshCategories().catch(() => {});
    return categoriesCache;
  }
  return await fetchFreshCategories();
};

const fetchFreshCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      categoriesCache = data;
      return data;
    }
  } catch (error) {
    console.warn('Error fetching categories from API, using cached:', error);
  }
  return categoriesCache || { success: true, data: initialCategories };
};

export const getSubCategories = async () => {
  if (subCategoriesCache) {
    fetchFreshSubCategories().catch(() => {});
    return subCategoriesCache;
  }
  return await fetchFreshSubCategories();
};

const fetchFreshSubCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/sub-categories`, {
      signal: AbortSignal.timeout(15000)
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (data.success && Array.isArray(data.data) && data.data.length > 0) {
      subCategoriesCache = data;
      return data;
    }
  } catch (error) {
    console.warn('Error fetching subcategories from API, using cached:', error);
  }
  return subCategoriesCache || { success: true, data: initialSubCategories };
};

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
