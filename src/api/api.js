export const API_URL = import.meta.env.VITE_API_URL || 'https://eagle-engineering-server.onrender.com/api';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('/uploads')) {
    return `https://eagle-engineering-server.onrender.com${imagePath}`;
  }
  return imagePath;
};

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
