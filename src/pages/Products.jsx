import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, FolderTree, X, Layers, Filter } from 'lucide-react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProducts, getCategories, getSubCategories, getImageUrl, getPreloadedProducts } from '../api/api';
import { resolveProductImage, parseProductContent } from '../data/productDataHelper';
import { initialProducts, initialCategories, initialSubCategories } from '../data/catalogSnapshot';

// Helper to extract clean specifications/details for the sliding hover card
const getProductCardDetails = (p) => {
  const shortDesc = (p.shortDescription || '').trim();
  
  // 1. Check if shortDescription contains formatted specs (e.g. Screw Cap, UPVC Hardware, etc.)
  if (shortDesc && (shortDesc.includes('\n') || shortDesc.includes(' - ') || shortDesc.includes('Colour') || shortDesc.includes('Specification') || shortDesc.includes('Packing'))) {
    const rawLines = shortDesc.split('\n').map(l => l.trim()).filter(Boolean);
    const items = [];
    let pendingLabel = '';
    rawLines.forEach(line => {
      if (line.toLowerCase().startsWith('specification') && line.endsWith('-')) {
        pendingLabel = line.replace(/-\s*$/, '').trim();
        return;
      }
      if (line.includes(' - ')) {
        const [label, ...valParts] = line.split(' - ');
        items.push({ label: label.trim(), value: valParts.join(' - ').trim() });
      } else if (line.includes(':')) {
        const [label, ...valParts] = line.split(':');
        items.push({ label: label.trim(), value: valParts.join(':').trim() });
      } else if (/^[LWT]\s*=/i.test(line)) {
        items.push({ label: pendingLabel || 'Dimension', value: line });
        pendingLabel = '';
      } else {
        items.push({ label: pendingLabel || '', value: line });
        pendingLabel = '';
      }
    });
    if (items.length > 0) return items.slice(0, 4);
  }

  // 2. Check explicit specifications object
  if (p.specifications) {
    const validSpecs = Object.entries(p.specifications)
      .filter(([_, val]) => typeof val === 'string' && val.trim().length > 0);
    if (validSpecs.length > 0) {
      return validSpecs.slice(0, 3).map(([key, val]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        value: val
      }));
    }
  }

  // 3. Check parsed features from catalog
  const parsed = parseProductContent(p);
  if (parsed.features && parsed.features.length > 0) {
    return parsed.features.slice(0, 2).map(f => ({
      label: 'Feature',
      value: f
    }));
  }

  // 4. If short description paragraph exists
  const catName = p.category?.name || (typeof p.category === 'string' ? p.category : '');
  if (shortDesc) {
    return [
      { label: 'Category', value: catName || 'Industrial Fastener' },
      { label: 'Overview', value: shortDesc.slice(0, 90) + (shortDesc.length > 90 ? '...' : '') }
    ];
  }

  return [
    { label: 'Category', value: catName || 'Industrial Hardware' },
    { label: 'Quality', value: 'High Tensile & Durable' }
  ];
};

export const Products = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryScrollRef = useRef(null);

  // Read initial states from URL params -> route state -> sessionStorage -> default
  const paramCategory = searchParams.get('category');
  const paramSubCategory = searchParams.get('subCategory');
  const paramSearch = searchParams.get('search');

  const initialCat = paramCategory || location.state?.selectedCategory || sessionStorage.getItem('eagle_selected_category') || 'All Products';
  const initialSubCat = paramSubCategory || location.state?.selectedSubCategory || sessionStorage.getItem('eagle_selected_subcategory') || 'All';
  const initialSearchVal = paramSearch || '';

  // Instant data initialization - zero blank screen wait
  const [productsList, setProductsList] = useState(() => getPreloadedProducts());
  const [categoriesList, setCategoriesList] = useState(() => initialCategories);
  const [subCategoriesList, setSubCategoriesList] = useState(() => initialSubCategories);
  const [searchQuery, setSearchQuery] = useState(initialSearchVal);
  
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedSubCategory, setSelectedSubCategory] = useState(initialSubCat);

  // Synchronize state when URL searchParams or route state changes
  useEffect(() => {
    const urlCat = searchParams.get('category');
    const urlSub = searchParams.get('subCategory');
    const urlSearch = searchParams.get('search');

    if (urlCat) {
      setSelectedCategory(urlCat);
      sessionStorage.setItem('eagle_selected_category', urlCat);
    } else if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
      sessionStorage.setItem('eagle_selected_category', location.state.selectedCategory);
    }

    if (urlSub) {
      setSelectedSubCategory(urlSub);
      sessionStorage.setItem('eagle_selected_subcategory', urlSub);
    } else if (location.state?.selectedSubCategory) {
      setSelectedSubCategory(location.state.selectedSubCategory);
      sessionStorage.setItem('eagle_selected_subcategory', location.state.selectedSubCategory);
    } else if (urlCat || location.state?.selectedCategory) {
      setSelectedSubCategory('All');
      sessionStorage.setItem('eagle_selected_subcategory', 'All');
    }

    if (urlSearch !== null && urlSearch !== undefined) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams, location.state]);

  // Handlers with persistent URL sync
  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubCategory('All');
    sessionStorage.setItem('eagle_selected_category', cat);
    sessionStorage.setItem('eagle_selected_subcategory', 'All');

    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (cat === 'All Products') {
        next.delete('category');
      } else {
        next.set('category', cat);
      }
      next.delete('subCategory');
      return next;
    }, { replace: true });
  };

  const handleSubCategorySelect = (subName) => {
    setSelectedSubCategory(subName);
    sessionStorage.setItem('eagle_selected_subcategory', subName);

    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (selectedCategory && selectedCategory !== 'All Products') {
        next.set('category', selectedCategory);
      }
      if (subName === 'All') {
        next.delete('subCategory');
      } else {
        next.set('subCategory', subName);
      }
      return next;
    }, { replace: true });
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (query && query.trim()) {
        next.set('search', query);
      } else {
        next.delete('search');
      }
      return next;
    }, { replace: true });
  };

  const handleResetFilters = () => {
    setSelectedCategory('All Products');
    setSelectedSubCategory('All');
    setSearchQuery('');
    sessionStorage.setItem('eagle_selected_category', 'All Products');
    sessionStorage.setItem('eagle_selected_subcategory', 'All');
    setSearchParams({}, { replace: true });
  };

  // Background revalidation (Stale-While-Revalidate)
  useEffect(() => {
    let isMounted = true;
    const fetchLatestData = async () => {
      try {
        const [productsRes, categoriesRes, subCategoriesRes] = await Promise.allSettled([
          getProducts(true),
          getCategories(true),
          getSubCategories(true)
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

    const handleProductsUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail) && e.detail.length > 0) {
        setProductsList(e.detail);
      }
    };
    const handleCategoriesUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail) && e.detail.length > 0) {
        setCategoriesList(e.detail);
      }
    };
    const handleSubCategoriesUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail) && e.detail.length > 0) {
        setSubCategoriesList(e.detail);
      }
    };

    window.addEventListener('eagle_products_updated', handleProductsUpdated);
    window.addEventListener('eagle_categories_updated', handleCategoriesUpdated);
    window.addEventListener('eagle_subcategories_updated', handleSubCategoriesUpdated);

    return () => {
      isMounted = false;
      window.removeEventListener('eagle_products_updated', handleProductsUpdated);
      window.removeEventListener('eagle_categories_updated', handleCategoriesUpdated);
      window.removeEventListener('eagle_subcategories_updated', handleSubCategoriesUpdated);
    };
  }, []);


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
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search products..." 
                  className="flex-grow px-3.5 py-2.5 sm:py-3 border-none focus:outline-none bg-white text-sm text-gray-800"
                />
                {searchQuery && (
                  <button 
                    onClick={() => handleSearchChange('')}
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
              const isSelected = selectedCategory === cat;
              return (
                <button 
                  key={idx}
                  onClick={() => handleCategorySelect(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 shadow-sm ${
                    isSelected 
                      ? 'bg-[var(--brand-red)] text-white shadow-red-200 ring-2 ring-red-200/50' 
                      : 'bg-white text-gray-700 border border-gray-200/80 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                >
                  {cat}
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
                    Categories
                  </h4>
                </div>
                
                <div className="flex flex-col max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                  {allCategoryNames.map((cat, idx) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button 
                        key={idx}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSelectedSubCategory('All');
                        }}
                        className={`text-left px-5 py-3.5 text-[14px] font-semibold border-b border-gray-50 last:border-b-0 transition-all flex items-center group ${
                          isSelected 
                            ? 'bg-[var(--brand-red)] text-white shadow-sm font-bold' 
                            : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-[#0b2545] hover:pl-6'
                        }`}
                      >
                        <span className="truncate">{cat}</span>
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
                      onClick={() => handleSubCategorySelect('All')}
                      className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs font-bold transition-all shrink-0 ${
                        selectedSubCategory === 'All'
                          ? 'bg-[#0b2545] text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      All in {selectedCategory}
                    </button>
                    {currentSubCategories.map((sub, idx) => {
                      const isSubSelected = selectedSubCategory.toLowerCase() === sub.name.toLowerCase();

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSubCategorySelect(sub.name)}
                          className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs font-bold transition-all flex items-center shrink-0 ${
                            isSubSelected
                              ? 'bg-[var(--brand-red)] text-white shadow-sm'
                              : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-[var(--brand-red)]'
                          }`}
                        >
                          <span>{sub.name}</span>
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
                    onClick={handleResetFilters}
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
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
                >
                  {filteredProducts.map((p, idx) => {
                    const prodImg = resolveProductImage(p);
                    const details = getProductCardDetails(p);
                    
                    return (
                      <Link 
                        key={p._id || idx} 
                        to={`/products/${p._id}`}
                        state={{ fromCategory: selectedCategory, fromSubCategory: selectedSubCategory }}
                        className="product-card-container group bg-white border border-gray-200/90 rounded-xl flex flex-col h-[380px] sm:h-[400px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,136,204,0.12)] hover:border-[#0088cc]/40 block"
                      >
                        {/* Upper Big Image Section */}
                        <div className="w-full h-[280px] sm:h-[300px] flex items-center justify-center p-6 sm:p-8 bg-white overflow-hidden">
                          <img 
                            src={prodImg} 
                            alt={p.name}
                            loading="lazy"
                            className="product-card-img max-h-full max-w-full object-contain"
                          />
                        </div>

                        {/* Sliding Content Drawer with Blue Accent Line on Top */}
                        <div className="product-card-drawer bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.05)] flex flex-col">
                          {/* Vibrant Blue Accent Line */}
                          <div className="w-full h-[3px] bg-[#0088cc] shrink-0" />

                          {/* Title Area (always visible in idle state, ~57px tall) */}
                          <div className="px-5 py-3.5 min-h-[57px] flex items-center bg-white shrink-0">
                            <h3 className="text-sm sm:text-[15px] font-bold text-[#0b2545] tracking-wide uppercase line-clamp-1 group-hover:text-[#0088cc] transition-colors">
                              {p.name}
                            </h3>
                          </div>

                          {/* Hover Details Panel (reveals smoothly when sliding up) */}
                          <div className="px-5 pb-5 pt-1 text-[12px] sm:text-[12.5px] text-gray-600 flex flex-col gap-1.5 bg-white border-t border-gray-100">
                            {details.map((item, i) => (
                              <div key={i} className="leading-snug">
                                {item.label ? (
                                  <span>
                                    <strong className="text-gray-800 font-semibold">{item.label}</strong>
                                    <span className="text-gray-400 mx-1.5">-</span>
                                    <span className="text-gray-600">{item.value}</span>
                                  </span>
                                ) : (
                                  <span className="text-gray-600 line-clamp-2">{item.value}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
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
