export const API_URL = import.meta.env.VITE_API_URL || 'https://eagle-engineering-server.onrender.com/api';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('/uploads')) {
    return `https://eagle-engineering-server.onrender.com${imagePath}`;
  }
  return imagePath;
};

let productsCache = null;

export const getProducts = async () => {
  if (productsCache) return productsCache;
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    if (data.success) {
      productsCache = data;
    }
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const productDetailsCache = {};

export const getProductById = async (id) => {
  if (productDetailsCache[id]) return productDetailsCache[id];
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const data = await response.json();
    if (data.success) {
      productDetailsCache[id] = data;
    }
    return data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getSubCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/sub-categories`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    throw error;
  }
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
