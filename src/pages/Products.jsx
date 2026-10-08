import React, { useState, useEffect } from 'react';
import { Search, FolderTree } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import fastener1 from '../assets/fastener_1.png';
import { getProducts, getCategories, getSubCategories, getImageUrl } from '../api/api';

export const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [subCategoriesList, setSubCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory || 'All Products');
  const [selectedSubCategory, setSelectedSubCategory] = useState(location.state?.selectedSubCategory || 'All');

  useEffect(() => {
    if (location.state?.selectedCategory) setSelectedCategory(location.state.selectedCategory);
    if (location.state?.selectedSubCategory) setSelectedSubCategory(location.state.selectedSubCategory);
  }, [location.state]);
  
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
      setSelectedSubCategory(location.state.selectedSubCategory || 'All');
    }
  }, [location.state]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsJson, categoriesJson, subCategoriesJson] = await Promise.all([
          getProducts(),
          getCategories(),
          getSubCategories()
        ]);
        
        if (productsJson.success) setProductsList(productsJson.data);
        if (categoriesJson.success) setCategoriesList(categoriesJson.data);
        if (subCategoriesJson.success) setSubCategoriesList(subCategoriesJson.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const allCategoryNames = ['All Products', ...categoriesList.map(c => c.name)];
  
  const currentSubCategories = selectedCategory === 'All Products' 
    ? [] 
    : subCategoriesList.filter(sc => sc.category && sc.category.name === selectedCategory);

  const selectedSubCategoryData = selectedSubCategory === 'All'
    ? null
    : subCategoriesList.find(sc => sc.name === selectedSubCategory);

  // Filter products based on search query, category, and subcategory
  const filteredProducts = productsList.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Products' || (p.category && p.category.name === selectedCategory);
    const matchesSubCategory = selectedSubCategory === 'All' || (p.subCategory && p.subCategory.name === selectedSubCategory);
    
    return matchesSearch && matchesCategory && matchesSubCategory;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <p className="text-sm tracking-widest text-[var(--brand-red)] mb-2 uppercase font-bold">OUR PRODUCTS</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide">PRODUCTS</h2>
          <p className="text-sm text-gray-300 font-medium tracking-wide">Home &gt; Products</p>
        </div>
      </div>

      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
          >
            <h3 className="font-heading font-bold text-[#0b2545] text-2xl uppercase tracking-wide">PRODUCT CATEGORIES</h3>
            
            <div className="w-full md:w-auto flex justify-end">
              <div className="flex w-full md:w-96 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl overflow-hidden">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..." 
                  className="flex-grow px-5 py-3.5 border-none focus:outline-none bg-white text-[15px]"
                />
                <button className="bg-[var(--brand-red)] text-white px-6 py-3.5 hover:bg-red-700 transition-colors flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10">
            
            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/4 shrink-0"
            >
              <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                {allCategoryNames.map((cat, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedSubCategory('All');
                    }}
                    className={`text-left px-6 py-4 text-[15px] font-bold border-b border-gray-50 last:border-b-0 transition-all ${
                      selectedCategory === cat 
                        ? 'bg-[var(--brand-red)] text-white' 
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#0b2545] hover:pl-8'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 flex flex-col">
              
              {/* Subcategories Grid (shown when 'All' is selected) */}
              {selectedSubCategory === 'All' && currentSubCategories.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {currentSubCategories.map((sub, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedSubCategory(sub.name)}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 text-left w-full flex flex-col items-center justify-center p-8"
                    >
                      {sub.image ? (
                        <img 
                          src={getImageUrl(sub.image)} 
                          alt={sub.name}
                          className="h-32 w-32 object-contain mb-6 group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="h-32 w-32 mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <FolderTree className="w-10 h-10 text-[var(--brand-red)] opacity-50" />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-[#0b2545] group-hover:text-[var(--brand-red)] transition-colors tracking-wide text-center">{sub.name}</h3>
                      {sub.description && (
                        <p className="text-sm text-gray-500 mt-3 text-center line-clamp-2 leading-relaxed">{sub.description}</p>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Subcategory Details Banner */}
              {selectedSubCategoryData && (selectedSubCategoryData.image || selectedSubCategoryData.description) && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  {selectedSubCategoryData.image && (
                    <img 
                      src={getImageUrl(selectedSubCategoryData.image)} 
                      alt={selectedSubCategoryData.name} 
                      className="w-32 h-32 object-contain rounded-xl bg-white border border-gray-100 p-2 shadow-sm"
                    />
                  )}
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold text-[#0b2545] mb-2">{selectedSubCategoryData.name}</h4>
                    {selectedSubCategoryData.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{selectedSubCategoryData.description}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Products Grid (shown when a specific subcategory is selected, or if there are no subcategories) */}
              {!(selectedSubCategory === 'All' && currentSubCategories.length > 0) && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {loading ? (
                    <div className="col-span-full py-20 flex justify-center">
                      <div className="w-10 h-10 border-4 border-gray-200 border-t-[var(--brand-red)] rounded-full animate-spin"></div>
                    </div>
                  ) : filteredProducts.length === 0 ? (
                    <div className="col-span-full py-20 text-center text-gray-500">
                      No products found matching your search.
                    </div>
                  ) : (
                    filteredProducts.map((p, idx) => (
                  <Link 
                    key={idx} 
                    to={`/products/${p._id}`}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 block relative"
                  >
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm text-[var(--brand-red)]">
                      <Search className="w-4 h-4" />
                    </div>
                    <div className="h-56 w-full bg-white p-8 flex items-center justify-center border-b border-gray-50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img 
                        src={getImageUrl(p.mainImage) || fastener1} 
                        alt={p.name}
                        className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
                      />
                    </div>
                    <div className="p-5 text-center bg-white group-hover:bg-gray-50/50 transition-colors">
                      <h3 className="text-[16px] font-bold text-[#0b2545] group-hover:text-[var(--brand-red)] transition-colors tracking-wide">{p.name}</h3>
                      {p.category && <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{p.category.name}</p>}
                    </div>
                  </Link>
                )))}
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
