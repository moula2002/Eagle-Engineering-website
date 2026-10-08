import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import fastener1 from '../assets/fastener_1.png';
import { getProducts, getProductById, getImageUrl } from '../api/api';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const fromHome = location.state?.fromHome || false;
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainImg, setMainImg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch current product
        const json = await getProductById(id);
        if (json.success && json.data) {
          setProduct(json.data);
          setMainImg(getImageUrl(json.data.mainImage) || fastener1);
        }

        // Fetch related products
        const allProductsJson = await getProducts();
        if (allProductsJson.success && allProductsJson.data) {
          const filtered = allProductsJson.data.filter(p => p._id !== id);
          setRelatedProducts(filtered.slice(0, 4));
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[var(--brand-red)] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-[#0b2545]">Product Not Found</h2>
      </div>
    );
  }

  // Combine mainImage and gallery images
  const galleryImages = [
    getImageUrl(product.mainImage) || fastener1,
    ...(product.gallery || []).map(img => getImageUrl(img))
  ].filter(Boolean);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm font-bold tracking-wider uppercase">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">HOME</Link>
          <span className="text-gray-500 hidden sm:inline">ABOUT US</span>
          <Link to="/products" className="text-[var(--brand-red)] bg-white/10 px-3 py-1 rounded-full border border-white/20">PRODUCTS</Link>
          <span className="text-gray-500">DOWNLOAD</span>
          <span className="text-gray-500 hidden sm:inline">QUALITY</span>
          <span className="text-gray-500 hidden sm:inline">CONTACT</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button 
          onClick={() => {
            if (fromHome) {
              navigate('/');
            } else {
              navigate('/products');
            }
          }}
          className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#0b2545] transition-colors mb-8 bg-transparent border-none cursor-pointer p-0"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {fromHome ? 'Back to Home' : 'Back to Products'}
        </button>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-6"
          >
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto pb-2 md:pb-0 hide-scrollbar shrink-0">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setMainImg(img)}
                  className={`w-24 h-24 shrink-0 border-2 rounded-xl cursor-pointer overflow-hidden p-2 transition-all duration-300 ${mainImg === img ? 'border-[var(--brand-red)] shadow-md scale-105' : 'border-gray-100 hover:border-gray-300 hover:shadow-sm'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <div className="flex-grow bg-white border border-gray-100 rounded-2xl p-4 md:p-10 flex items-center justify-center h-[300px] md:h-[450px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={mainImg || fastener1} alt={product.name} className="max-h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            {/* Badges */}
            {(product.isNewProduct || product.isFeatured) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.isNewProduct && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider border border-green-200">New Product</span>
                )}
                {product.isFeatured && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-wider border border-amber-200">Featured</span>
                )}
              </div>
            )}

            <h1 className="text-4xl font-heading font-bold text-[#0b2545] mb-4 uppercase tracking-wide">{product.name}</h1>
            
            {/* Brand, Category, SKU */}
            {(product.brand || product.sku || product.category || product.subCategory) && (
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                {product.brand && (
                  <div className="flex items-center text-gray-500">
                    <span className="font-bold text-[#0b2545] uppercase tracking-wider text-xs mr-2">Brand:</span> 
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-700">{product.brand}</span>
                  </div>
                )}
                {product.category?.name && (
                  <div className="flex items-center text-gray-500">
                    <span className="font-bold text-[#0b2545] uppercase tracking-wider text-xs mr-2">Category:</span> 
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-700">{product.category.name}</span>
                  </div>
                )}
                {product.subCategory?.name && (
                  <div className="flex items-center text-gray-500">
                    <span className="font-bold text-[#0b2545] uppercase tracking-wider text-xs mr-2">Sub-Category:</span> 
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-700">{product.subCategory.name}</span>
                  </div>
                )}
                {product.sku && (
                  <div className="flex items-center text-gray-500">
                    <span className="font-bold text-[#0b2545] uppercase tracking-wider text-xs mr-2">SKU:</span> 
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-700 font-mono">{product.sku}</span>
                  </div>
                )}
              </div>
            )}

            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg font-light whitespace-pre-line">
              {product.fullDescription || product.shortDescription || 'High-precision components manufactured with superior quality materials for reliable performance in industrial applications.'}
            </p>

            {product.specifications && Object.keys(product.specifications).filter(key => product.specifications[key]).length > 0 ? (
              <ul className="space-y-5 mb-12">
                {Object.keys(product.specifications).map((key, idx) => {
                  const val = product.specifications[key];
                  if (!val) return null;
                  return (
                    <li key={idx} className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                      <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                      </div>
                      <span className="capitalize">{key}:</span> <span className="ml-2 font-normal text-gray-500">{val}</span>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <ul className="space-y-5 mb-12">
                <li className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                  <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                  </div>
                  High precision machining
                </li>
                <li className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                  <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                  </div>
                  Durable and long-lasting
                </li>
                <li className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                  <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                  </div>
                  Multiple sizes available
                </li>
              </ul>
            )}

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link 
                to="/contact"
                state={{ productName: product.name, productImage: mainImg || fastener1 }}
                className="inline-flex justify-center items-center px-8 py-3.5 bg-[var(--brand-red)] text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-all uppercase tracking-wider w-full sm:w-auto shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] hover:-translate-y-0.5"
              >
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <button 
                className="inline-flex justify-center items-center px-8 py-3.5 bg-white border border-gray-200 text-[#0b2545] text-sm font-bold rounded-xl hover:bg-gray-50 transition-all uppercase tracking-wider w-full sm:w-auto shadow-[0_4px_14px_0_rgb(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)] hover:-translate-y-0.5"
              >
                Download Catalog
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold font-heading text-[#0b2545] uppercase tracking-wide">
              RELATED <span className="text-[var(--brand-red)]">PRODUCTS</span>
            </h3>
            <Link to="/products" className="text-sm font-bold text-gray-500 hover:text-[var(--brand-red)] transition-colors flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((prod) => (
                <Link to={`/products/${prod._id}`} key={prod._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:-translate-y-2 hover:shadow-lg transition-all duration-300 block">
                  <div className="h-48 w-full bg-gray-50/50 p-4 flex items-center justify-center relative overflow-hidden">
                    <img src={getImageUrl(prod.mainImage) || fastener1} alt={prod.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4 text-left border-t border-gray-50">
                    <h4 className="font-bold text-[#0b2545] group-hover:text-[var(--brand-red)] transition-colors">{prod.name}</h4>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No related products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
