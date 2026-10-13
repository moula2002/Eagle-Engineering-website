import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProducts, getProductById, getImageUrl } from '../api/api';
import { resolveProductImage, parseProductContent, getFallbackProduct } from '../data/productDataHelper';
import { initialProducts } from '../data/catalogSnapshot';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const fromHome = location.state?.fromHome || false;

  // Immediate lookup from snapshot
  const initialMatch = initialProducts.find(p => p._id === id || p.sku === id) || getFallbackProduct(id);
  const [product, setProduct] = useState(initialMatch || null);
  const [relatedProducts, setRelatedProducts] = useState(() => {
    return initialProducts.filter(p => p._id !== id).slice(0, 4);
  });
  const [loading, setLoading] = useState(!initialMatch);
  const [mainImg, setMainImg] = useState(initialMatch ? resolveProductImage(initialMatch) : '');

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        if (!product) setLoading(true);
        // Fetch current product
        const json = await getProductById(id);
        if (isMounted) {
          if (json.success && json.data) {
            setProduct(json.data);
            const resolvedImg = resolveProductImage(json.data);
            setMainImg(resolvedImg);
          } else {
            const fallback = getFallbackProduct(id);
            if (fallback) {
              setProduct(fallback);
              setMainImg(resolveProductImage(fallback));
            }
          }
        }

        // Fetch related products
        const allProductsJson = await getProducts();
        if (isMounted && allProductsJson.success && allProductsJson.data) {
          const currentCat = json.data?.category?.name || product?.category?.name;
          let related = allProductsJson.data.filter(p => p._id !== id);
          if (currentCat) {
            const sameCat = related.filter(p => (p.category?.name || p.category) === currentCat);
            if (sameCat.length > 0) related = sameCat;
          }
          setRelatedProducts(related.slice(0, 4));
        }
      } catch (error) {
        console.warn('Failed to fetch product data from server:', error);
        if (isMounted && !product) {
          const fallback = getFallbackProduct(id);
          if (fallback) {
            setProduct(fallback);
            setMainImg(resolveProductImage(fallback));
          }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
    return () => { isMounted = false; };
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center pt-24">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#e53524] rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 font-medium text-sm">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-[#0b2545] mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">The product you are looking for does not exist or may have been removed.</p>
        <Link 
          to="/products"
          className="px-6 py-3 bg-[#e53524] text-white font-bold rounded-xl text-sm uppercase tracking-wider hover:bg-red-700 transition-colors shadow-md"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Parse structured description, features, applications matching the reference image layout
  const { description, features, applications } = parseProductContent(product);

  // Gallery images including mainImage
  const primaryResolved = resolveProductImage(product);
  const galleryImages = [
    primaryResolved,
    ...(product.gallery || []).map(img => getImageUrl(img))
  ].filter(Boolean);

  // Valid specifications
  const specs = product.specifications || {};
  const validSpecs = Object.entries(specs).filter(([_, val]) => Boolean(val && String(val).trim()));

  return (
    <div className="bg-white min-h-screen pt-28 md:pt-32 pb-20">
      
      {/* Top Breadcrumb & Back bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-gray-100">
          <button 
            onClick={() => {
              if (fromHome) {
                navigate('/');
              } else {
                navigate('/products');
              }
            }}
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#e53524] transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {fromHome ? 'Back to Home' : 'Back to Products'}
          </button>

          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gray-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#e53524] truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Showcase Section (Matches Reference Image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Product Info (Title, Description, Features, Applications) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12 flex flex-col text-left"
          >
            {/* Category badge if available */}
            {product.category?.name && (
              <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#09568a] bg-blue-50/80 border border-blue-100 px-3 py-1 rounded-full">
                  {product.category.name}
                  {product.subCategory?.name ? ` • ${product.subCategory.name}` : ''}
                </span>
              </div>
            )}

            {/* Product Title in Bold Red (Exact Reference Style) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-black text-[#e53524] uppercase tracking-wide mb-6 leading-tight">
              {product.name}
            </h1>

            {/* Description Paragraph */}
            {description && (
              <p className="text-[#555555] text-base md:text-[17px] leading-[30px] mb-8 font-normal text-justify sm:text-left">
                {description}
              </p>
            )}

            {/* FEATURES Heading & Bullets (Exact Reference Style) */}
            {features && features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-[#09568a] uppercase tracking-wide mb-4">
                  FEATURES
                </h3>
                <ul className="space-y-2.5 pl-5 list-disc marker:text-[#09568a] text-[#555555] text-base md:text-[16.5px] leading-[26px]">
                  {features.map((feat, idx) => (
                    <li key={idx} className="pl-1">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* APPLICATIONS Heading & Bullets (Exact Reference Style) */}
            {applications && applications.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-[#09568a] uppercase tracking-wide mb-4">
                  APPLICATIONS
                </h3>
                <ul className="space-y-2.5 pl-5 list-disc marker:text-[#09568a] text-[#555555] text-base md:text-[16.5px] leading-[26px]">
                  {applications.map((app, idx) => (
                    <li key={idx} className="pl-1">
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Specifications (if present) */}
            {validSpecs.length > 0 && (
              <div className="mb-10 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b2545] mb-3">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {validSpecs.map(([k, v]) => (
                    <div key={k} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <div className="text-[11px] uppercase tracking-wider text-gray-400 capitalize">{k}</div>
                      <div className="text-sm font-bold text-gray-800 mt-0.5">{String(v)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
              <Link 
                to="/contact"
                state={{ productName: product.name, productImage: mainImg }}
                className="inline-flex justify-center items-center px-8 py-3.5 bg-[#e53524] text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-all uppercase tracking-wider shadow-[0_4px_14px_0_rgba(229,53,36,0.39)] hover:shadow-[0_6px_20px_rgba(229,53,36,0.25)] hover:-translate-y-0.5"
              >
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <Link 
                to="/download"
                className="inline-flex justify-center items-center px-8 py-3.5 bg-white border border-gray-200 text-[#0b2545] text-sm font-bold rounded-xl hover:bg-gray-50 transition-all uppercase tracking-wider shadow-[0_4px_14px_0_rgb(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)] hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 mr-2 text-[#e53524]" />
                Download Catalog
              </Link>

              <a 
                href={`https://wa.me/919632144367?text=${encodeURIComponent(`Hello Eagle Engineering, I would like to inquire about ${product.name}. Please share pricing and technical specifications.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-3.5 bg-[#25D366] text-white text-sm font-bold rounded-xl hover:bg-[#20ba59] transition-all uppercase tracking-wider shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.25)] hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Column: Circular Product Image with Red Outline & Shadow (Exact Reference Style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-5/12 flex flex-col items-center justify-center lg:sticky lg:top-36"
          >
            {/* The Signature Circular Frame (Matches Reference Graphic) */}
            <div className="relative group w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] flex items-center justify-center">
              <img 
                src={mainImg || primaryResolved} 
                alt={product.name} 
                className="w-full h-auto max-h-[480px] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm" 
              />

              {/* Status Badge */}
              {(product.isNewProduct || product.isFeatured) && (
                <div className="absolute top-2 right-2 z-10">
                  {product.isNewProduct ? (
                    <span className="px-3 py-1 bg-emerald-500 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-md">
                      New
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-amber-500 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-md">
                      Featured
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Gallery Thumbnails (if multiple images available) */}
            {galleryImages.length > 1 && (
              <div className="flex flex-wrap gap-3 mt-8 justify-center max-w-md">
                {galleryImages.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setMainImg(img)}
                    className={`w-16 h-16 rounded-full border-2 p-1 overflow-hidden transition-all duration-300 ${
                      mainImg === img 
                        ? 'border-[#e53524] shadow-md scale-110 ring-2 ring-red-100' 
                        : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain rounded-full" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

        </div>
      </section>

      {/* Related Products Section */}
      <section className="bg-gray-50/70 py-20 mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#e53524] mb-1">DISCOVER MORE</p>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-[#0b2545] uppercase tracking-wide">
                RELATED <span className="text-[#e53524]">PRODUCTS</span>
              </h3>
            </div>
            <Link 
              to="/products" 
              className="text-sm font-bold text-gray-500 hover:text-[#e53524] transition-colors flex items-center group"
            >
              View All <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((prod) => {
                const prodImg = resolveProductImage(prod);
                return (
                  <Link 
                    to={`/products/${prod._id}`} 
                    key={prod._id} 
                    className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(229,53,36,0.12)] border border-gray-100 hover:border-red-100 transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-2"
                  >
                    {/* Circular Image Container for Related Product */}
                    <div className="w-36 h-36 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={prodImg} 
                        alt={prod.name} 
                        className="max-h-full max-w-full object-contain" 
                      />
                    </div>
                    <h4 className="font-bold text-[#0b2545] group-hover:text-[#e53524] transition-colors text-base line-clamp-1 mb-1">
                      {prod.name}
                    </h4>
                    {prod.category?.name && (
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{prod.category.name}</p>
                    )}
                  </Link>
                );
              })
            ) : (
              <p className="text-gray-500 col-span-full text-center py-8">No related products found.</p>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetails;
