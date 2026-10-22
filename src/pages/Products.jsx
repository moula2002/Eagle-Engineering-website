import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, FolderTree, X, Layers, Filter } from 'lucide-react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProducts, getCategories, getSubCategories, getImageUrl } from '../api/api';
import { resolveProductImage, parseProductContent } from '../data/productDataHelper';
import { ProductImage } from '../components/ProductImage';

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

  // Clean server-only data initialization
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [subCategoriesList, setSubCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);
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
      // Don't show blocking loading if we already have data in state or session
      if (productsList.length === 0) {
        setLoading(true);
      }
      try {
        const [productsRes, categoriesRes, subCategoriesRes] = await Promise.allSettled([
          getProducts(false),
          getCategories(false),
          getSubCategories(false)
        ]);

        if (isMounted) {
          if (productsRes.status === 'fulfilled' && productsRes.value?.success && Array.isArray(productsRes.value.data)) {
            setProductsList(productsRes.value.data);
          } else {
            setProductsList([]);
          }
          if (categoriesRes.status === 'fulfilled' && categoriesRes.value?.success && Array.isArray(categoriesRes.value.data)) {
            setCategoriesList(categoriesRes.value.data);
          } else {
            setCategoriesList([]);
          }
          if (subCategoriesRes.status === 'fulfilled' && subCategoriesRes.value?.success && Array.isArray(subCategoriesRes.value.data)) {
            setSubCategoriesList(subCategoriesRes.value.data);
          } else {
            setSubCategoriesList([]);
          }
        }
      } catch (error) {
        console.error('Products fetch error:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchLatestData();

    const handleProductsUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail)) {
        setProductsList(e.detail);
      }
    };
    const handleCategoriesUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail)) {
        setCategoriesList(e.detail);
      }
    };
    const handleSubCategoriesUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail)) {
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

  // Infinite scroll pagination with IntersectionObserver
  const PAGE_SIZE = 12;
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerTargetRef = useRef(null);
  const isLoadingRef = useRef(false);

  // Reset pagination when category, subcategory, or search query changes
  useEffect(() => {
    setDisplayCount(PAGE_SIZE);
    setIsLoadingMore(false);
    isLoadingRef.current = false;
  }, [selectedCategory, selectedSubCategory, searchQuery]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  const hasMore = visibleProducts.length < filteredProducts.length;

  // Infinite scroll observer - auto-loads next batch when approaching end of list
  useEffect(() => {
    const target = observerTargetRef.current;
    if (!target || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoadingRef.current && hasMore) {
          isLoadingRef.current = true;
          setIsLoadingMore(true);

          setTimeout(() => {
            setDisplayCount(prev => prev + PAGE_SIZE);
            setIsLoadingMore(false);
            isLoadingRef.current = false;
          }, 300);
        }
      },
      {
        root: null,
        rootMargin: '250px 0px',
        threshold: 0.1
      }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      observer.disconnect();
    };
  }, [hasMore, visibleProducts.length, filteredProducts.length]);

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
              {loading && productsList.length === 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="bg-white border border-gray-100 rounded-2xl h-[360px] p-6 flex flex-col items-center justify-between animate-pulse shadow-sm">
                      <div className="w-44 h-44 flex items-center justify-center">
                        <div className="w-36 h-36 rounded-2xl bg-gray-100 border border-gray-200/60"></div>
                      </div>
                      <div className="space-y-2 mt-4 w-full flex flex-col items-center">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length === 0 ? (
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
                    className="px-5 py-2.5 bg-[#0b2545] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[var(--brand-red)] transition-colors active:scale-95 cursor-pointer"
                  >
                    View All Products
                  </button>
                </div>
              ) : (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
                  >
                    {visibleProducts.map((p, idx) => {
                      const prodImg = resolveProductImage(p);
                      const catName = p.category?.name || (typeof p.category === 'string' ? p.category : '');
                    
                      return (
                        <Link 
                          key={p._id || idx} 
                          to={`/products/${p._id}`}
                          state={{ fromCategory: selectedCategory, fromSubCategory: selectedSubCategory }}
                          className="group bg-white border border-gray-100 hover:border-red-200/80 rounded-2xl flex flex-col items-center p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(229,53,36,0.12)] hover:-translate-y-1.5 transition-all duration-300 block text-center"
                        >
                          {/* Upper Hexagon Product Frame (Matching Reference Hexagon) */}
                          <div className="w-full flex items-center justify-center py-2 sm:py-3">
                            <ProductImage
                              src={prodImg}
                              alt={p.name}
                              size="md"
                              hoverZoom={true}
                            />
                          </div>

                          {/* Content Section */}
                          <div className="w-full mt-3 flex flex-col items-center flex-1 justify-between">
                            <div>
                              {catName && (
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                                  {catName}
                                </span>
                              )}
                              <h3 className="text-sm sm:text-[15px] font-bold text-[#0b2545] tracking-wide uppercase line-clamp-2 group-hover:text-[var(--brand-red)] transition-colors">
                                {p.name}
                              </h3>
                            </div>

                            {/* Clean View Details Indicator */}
                            <div className="mt-4 pt-3 border-t border-gray-100/80 w-full flex items-center justify-center">
                              <span className="text-xs font-bold text-[var(--brand-red)] group-hover:text-red-700 uppercase tracking-wider flex items-center gap-1 transition-colors">
                                View Details 
                                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                              </span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>

                {/* Infinite Scrolling Sentinel & Subtle Loading Indicator */}
                {hasMore && (
                  <div 
                    ref={observerTargetRef} 
                    className="w-full mt-8 mb-4 py-4 flex flex-col items-center justify-center min-h-[48px]"
                    aria-live="polite"
                  >
                    {isLoadingMore ? (
                      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200/80 text-gray-600 text-xs font-semibold animate-pulse">
                        <div className="w-4 h-4 border-2 border-[var(--brand-red)] border-t-transparent rounded-full animate-spin" />
                        <span>Loading more products...</span>
                      </div>
                    ) : (
                      <div className="h-4 w-full" />
                    )}
                  </div>
                )}
              </>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
