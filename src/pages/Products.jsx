import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, FolderTree, X, Layers, Filter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProducts, getCategories, getSubCategories, getImageUrl } from '../api/api';
import { resolveProductImage } from '../data/productDataHelper';
import { initialProducts, initialCategories, initialSubCategories } from '../data/catalogSnapshot';

export const Products = () => {
  const location = useLocation();
  const categoryScrollRef = useRef(null);

  // Instant data initialization - zero blank screen wait
  const [productsList, setProductsList] = useState(() => initialProducts);
  const [categoriesList, setCategoriesList] = useState(() => initialCategories);
  const [subCategoriesList, setSubCategoriesList] = useState(() => initialSubCategories);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory || 'All Products');
  const [selectedSubCategory, setSelectedSubCategory] = useState(location.state?.selectedSubCategory || 'All');

  // Handle route state updates
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
    if (location.state?.selectedSubCategory) {
      setSelectedSubCategory(location.state.selectedSubCategory);
    } else if (location.state?.selectedCategory) {
      setSelectedSubCategory('All');
    }
  }, [location.state]);

  // Background revalidation (Stale-While-Revalidate)
  useEffect(() => {
    let isMounted = true;
    const fetchLatestData = async () => {
      try {
        const [productsRes, categoriesRes, subCategoriesRes] = await Promise.allSettled([
          getProducts(),
          getCategories(),
          getSubCategories()
        ]);

        if (isMounted) {
          if (productsRes.status === 'fulfilled' && productsRes.value?.success && productsRes.value.data?.length > 0) {
            setProductsList(productsRes.value.data);
          }
          if (categoriesRes.status === 'fulfilled' && categoriesRes.value?.success && categoriesRes.value.data?.length > 0) {
            setCategoriesList(categoriesRes.value.data);
          }
          if (subCategoriesRes.status === 'fulfilled' && subCategoriesRes.value?.success && subCategoriesRes.value.data?.length > 0) {
            setSubCategoriesList(subCategoriesRes.value.data);
          }
        }
      } catch (error) {
        console.warn('Background refresh encountered error, using current cache:', error);
      }
    };

    fetchLatestData();
    return () => { isMounted = false; };
  }, []);

  // Category counts computation for rich sidebar and mobile pill badges
  const categoryCounts = useMemo(() => {
    const counts = { 'All Products': productsList.length };
    productsList.forEach(p => {
      const cName = (p.category?.name || (typeof p.category === 'string' ? p.category : '')).trim();
      if (cName) {
        counts[cName] = (counts[cName] || 0) + 1;
      }
    });
    return counts;
  }, [productsList]);

  // Build clean list of unique categories
  const allCategoryNames = useMemo(() => {
    const names = ['All Products'];
    categoriesList.forEach(c => {
      if (c?.name && !names.includes(c.name)) {
        names.push(c.name);
      }
    });
    // Ensure any category found on products is also selectable
    productsList.forEach(p => {
      const cName = (p.category?.name || (typeof p.category === 'string' ? p.category : '')).trim();
      if (cName && !names.includes(cName)) {
        names.push(cName);
      }
    });
    return names;
  }, [categoriesList, productsList]);

  // Subcategories relevant to the current selected category
  const currentSubCategories = useMemo(() => {
    if (selectedCategory === 'All Products') return [];
    const selNorm = selectedCategory.trim().toLowerCase().replace(/-/g, ' ');
    return subCategoriesList.filter(sc => {
      const scCat = (sc.category?.name || (typeof sc.category === 'string' ? sc.category : '')).trim().toLowerCase().replace(/-/g, ' ');
      return scCat === selNorm;
    });
  }, [selectedCategory, subCategoriesList]);

  // Subcategory metadata banner info if selected
  const selectedSubCategoryData = useMemo(() => {
    if (selectedSubCategory === 'All') return null;
    return subCategoriesList.find(sc => sc.name.toLowerCase() === selectedSubCategory.toLowerCase());
  }, [selectedSubCategory, subCategoriesList]);

  // Fast filtered products
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const selCatNorm = selectedCategory.trim().toLowerCase().replace(/-/g, ' ');
    const selSubNorm = selectedSubCategory.trim().toLowerCase();

    return productsList.filter(p => {
      // 1. Category Filter
      let matchesCategory = true;
      if (selCatNorm !== 'all products') {
        const pCatName = (p.category?.name || (typeof p.category === 'string' ? p.category : '')).trim().toLowerCase().replace(/-/g, ' ');
        matchesCategory = pCatName === selCatNorm;
      }

      // 2. Subcategory Filter
      let matchesSubCategory = true;
      if (selSubNorm !== 'all') {
        const pSubName = (p.subCategory?.name || (typeof p.subCategory === 'string' ? p.subCategory : '')).trim().toLowerCase();
        matchesSubCategory = pSubName === selSubNorm;
      }

      // 3. Search Filter
      let matchesSearch = true;
      if (query) {
        const pName = (p.name || '').toLowerCase();
        const pDesc = (p.shortDescription || '').toLowerCase();
        const pSku = (p.sku || '').toLowerCase();
        const pCat = (p.category?.name || (typeof p.category === 'string' ? p.category : '')).toLowerCase();
        const pSub = (p.subCategory?.name || (typeof p.subCategory === 'string' ? p.subCategory : '')).toLowerCase();
        matchesSearch = pName.includes(query) || pDesc.includes(query) || pSku.includes(query) || pCat.includes(query) || pSub.includes(query);
      }

      return matchesCategory && matchesSubCategory && matchesSearch;
    });
  }, [productsList, selectedCategory, selectedSubCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner - Responsive padding */}
      <div className="relative bg-[#0b2545] pt-28 pb-12 sm:pt-36 sm:pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <p className="text-xs sm:text-sm tracking-widest text-[var(--brand-red)] mb-1 sm:mb-2 uppercase font-bold">OUR PRODUCTS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4 uppercase tracking-wide">PRODUCTS</h2>
          <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-300 font-medium tracking-wide gap-1.5 sm:gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-semibold">Products</span>
            {selectedCategory !== 'All Products' && (
              <>
                <span>&gt;</span>
                <span className="text-[var(--brand-red)] font-semibold truncate max-w-[150px] sm:max-w-none">{selectedCategory}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <section className="py-8 sm:py-16 md:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Top Controls Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 sm:mb-8 gap-3 sm:gap-4"
          >
            <div>
              <h3 className="font-heading font-bold text-[#0b2545] text-xl sm:text-2xl uppercase tracking-wide">
                {selectedCategory === 'All Products' ? 'ALL PRODUCTS' : selectedCategory.toUpperCase()}
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
                {searchQuery && <span> matching "<strong className="text-gray-800">{searchQuery}</strong>"</span>}
              </p>
            </div>
            
            {/* Search Input - Full width on mobile */}
            <div className="w-full md:w-auto flex justify-end">
              <div className="flex w-full md:w-80 lg:w-96 shadow-[0_4px_20px_rgb(0,0,0,0.04)] rounded-xl overflow-hidden border border-gray-200/80 bg-white focus-within:border-[var(--brand-red)] transition-all">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..." 
                  className="flex-grow px-3.5 py-2.5 sm:py-3 border-none focus:outline-none bg-white text-sm text-gray-800"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="px-2.5 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button 
                  className="bg-[var(--brand-red)] text-white px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-red-700 transition-colors flex items-center justify-center shrink-0"
                  title="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Mobile Horizontal Scrolling Categories Bar (Visible only on < lg) */}
          <div className="lg:hidden mb-6 -mx-3 px-3 overflow-x-auto flex items-center gap-2 py-1 scroll-smooth [&::-webkit-scrollbar]:hidden">
            {allCategoryNames.map((cat, idx) => {
              const count = categoryCounts[cat] || (cat === 'All Products' ? productsList.length : 0);
              const isSelected = selectedCategory === cat;
              return (
                <button 
                  key={idx}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubCategory('All');
                  }}
                  className={`whitespace-nowrap px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 shadow-sm ${
                    isSelected 
                      ? 'bg-[var(--brand-red)] text-white shadow-red-200 ring-2 ring-red-200/50' 
                      : 'bg-white text-gray-700 border border-gray-200/80 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            
            {/* Desktop Sidebar Categories (Hidden on mobile, sticky on desktop) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="hidden lg:block w-72 shrink-0"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-24">
                <div className="px-5 py-4 bg-gray-50/80 border-b border-gray-100">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[var(--brand-red)]" />
                    Categories ({allCategoryNames.length - 1})
                  </h4>
                </div>
                
                <div className="flex flex-col max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                  {allCategoryNames.map((cat, idx) => {
                    const count = categoryCounts[cat] || (cat === 'All Products' ? productsList.length : 0);
                    const isSelected = selectedCategory === cat;
                    return (
                      <button 
                        key={idx}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSelectedSubCategory('All');
                        }}
                        className={`text-left px-5 py-3.5 text-[14px] font-semibold border-b border-gray-50 last:border-b-0 transition-all flex items-center justify-between group ${
                          isSelected 
                            ? 'bg-[var(--brand-red)] text-white shadow-sm font-bold' 
                            : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-[#0b2545] hover:pl-6'
                        }`}
                      >
                        <span className="truncate pr-2">{cat}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold shrink-0 transition-colors ${
                          isSelected 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-[var(--brand-red)]'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="w-full lg:flex-1 flex flex-col">
              
              {/* Subcategories Filter Pills (Horizontal swipeable on mobile) */}
              {currentSubCategories.length > 0 && (
                <div className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-4 sm:mb-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
                  <div className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <FolderTree className="w-3.5 h-3.5 text-[var(--brand-red)]" />
                    Filter by Subcategory
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap [&::-webkit-scrollbar]:hidden">
                    <button
                      onClick={() => setSelectedSubCategory('All')}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs font-bold transition-all shrink-0 ${
                        selectedSubCategory === 'All'
                          ? 'bg-[#0b2545] text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      All in {selectedCategory} ({filteredProducts.length})
                    </button>
                    {currentSubCategories.map((sub, idx) => {
                      const isSubSelected = selectedSubCategory.toLowerCase() === sub.name.toLowerCase();
                      const subCount = productsList.filter(p => {
                        const pSub = (p.subCategory?.name || (typeof p.subCategory === 'string' ? p.subCategory : '')).trim().toLowerCase();
                        return pSub === sub.name.trim().toLowerCase();
                      }).length;

                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedSubCategory(sub.name)}
                          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                            isSubSelected
                              ? 'bg-[var(--brand-red)] text-white shadow-sm'
                              : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-[var(--brand-red)]'
                          }`}
                        >
                          <span>{sub.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isSubSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                            {subCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Subcategory Details Banner (Responsive layout) */}
              {selectedSubCategoryData && (selectedSubCategoryData.image || selectedSubCategoryData.description) && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                >
                  {selectedSubCategoryData.image && (
                    <img 
                      src={getImageUrl(selectedSubCategoryData.image)} 
                      alt={selectedSubCategoryData.name} 
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl bg-gray-50 border border-gray-100 p-2 shadow-sm"
                    />
                  )}
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-base sm:text-lg font-bold text-[#0b2545] mb-1">{selectedSubCategoryData.name}</h4>
                    {selectedSubCategoryData.description && (
                      <p className="text-gray-600 text-xs leading-relaxed">{selectedSubCategoryData.description}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Products Grid - 2 columns on mobile, 3 on md/lg */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 text-center shadow-[0_4px_25px_rgb(0,0,0,0.03)]">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-red-50 flex items-center justify-center text-[var(--brand-red)]">
                    <Search className="w-7 h-7 sm:w-8 sm:h-8 opacity-60" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#0b2545] mb-1.5">No Products Found</h4>
                  <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto mb-5 sm:mb-6">
                    {searchQuery 
                      ? `We couldn't find any products matching "${searchQuery}". Try a different search term or clear the filter.`
                      : `No products available under ${selectedCategory}.`
                    }
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All Products');
                      setSelectedSubCategory('All');
                      setSearchQuery('');
                    }}
                    className="px-5 py-2.5 bg-[#0b2545] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[var(--brand-red)] transition-colors active:scale-95"
                  >
                    View All Products
                  </button>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-5 lg:gap-6"
                >
                  {filteredProducts.map((p, idx) => {
                    const prodImg = resolveProductImage(p);
                    const catName = p.category?.name || (typeof p.category === 'string' ? p.category : '');
                    
                    return (
                      <Link 
                        key={p._id || idx} 
                        to={`/products/${p._id}`}
                        className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-3 sm:p-5 lg:p-6 flex flex-col items-center text-center group shadow-[0_3px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(229,53,36,0.12)] hover:border-red-100 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 block relative"
                      >
                        {/* Hover search indicator */}
                        <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 bg-white/90 backdrop-blur rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-sm text-[#e53524]">
                          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        
                        {/* Circular Image Container with responsive sizing */}
                        <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center mb-2.5 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
                          <img 
                            src={prodImg} 
                            alt={p.name}
                            loading="lazy"
                            className="max-h-20 max-w-20 sm:max-h-32 sm:max-w-32 md:max-h-36 md:max-w-36 object-contain"
                          />
                        </div>

                        {/* Title - responsive typography */}
                        <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-[#0b2545] group-hover:text-[#e53524] transition-colors tracking-wide mb-1 sm:mb-1.5 line-clamp-2 leading-tight sm:leading-snug">
                          {p.name}
                        </h3>
                        
                        {/* Category badge */}
                        {catName && (
                          <span className="text-[9px] sm:text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wider mt-auto truncate max-w-full">
                            {catName}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </motion.div>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
