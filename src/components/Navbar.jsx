import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import logoNew from '../assets/logo_new.png';
import { motion, AnimatePresence } from 'framer-motion';
import { getCategories, getSubCategories, getProducts } from '../api/api';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState({});
  const location = useLocation();
  const activePath = location.pathname;

  // 3 Static Column Headings matching specification with dynamic category & subcategory classification
  const megaMenuColumns = useMemo(() => {
    const col1 = [];
    const col2 = [];
    const col3 = [];

    (categories || []).forEach(cat => {
      const n = (cat.name || '').toLowerCase();
      // Column 2: Anchors & Rivets & Frame Fasteners
      if (n.includes('anchor') || n.includes('rivet') || n.includes('frame') || n.includes('torx')) {
        col2.push(cat);
      }
      // Column 1: Screws & Fasteners
      else if (
        (n.includes('screw') && !n.includes('cap')) ||
        n.includes('fastener') ||
        n.includes('csk') ||
        n.includes('drywall') ||
        n.includes('chipboard') ||
        n.includes('truss')
      ) {
        col1.push(cat);
      }
      // Column 3: Hardware & Accessories
      else {
        col3.push(cat);
      }
    });

    return [
      { title: 'Screws & Fasteners', items: col1 },
      { title: 'Anchors & Rivets', items: col2 },
      { title: 'Hardware & Accessories', items: col3 },
    ];
  }, [categories]);

  const toggleCategoryExpand = (catKey, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setExpandedCategories(prev => ({
      ...prev,
      [catKey]: !prev[catKey]
    }));
  };

  const toggleMobileCategoryExpand = (catKey, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMobileExpandedCategories(prev => ({
      ...prev,
      [catKey]: !prev[catKey]
    }));
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const [catsRes, subCatsRes, prodsRes] = await Promise.allSettled([
          getCategories(false),
          getSubCategories(false),
          getProducts(false)
        ]);
        if (isMounted) {
          if (catsRes.status === 'fulfilled' && catsRes.value?.success && Array.isArray(catsRes.value.data)) {
            setCategories(catsRes.value.data);
          } else {
            setCategories([]);
          }
          if (subCatsRes.status === 'fulfilled' && subCatsRes.value?.success && Array.isArray(subCatsRes.value.data)) {
            setSubCategories(subCatsRes.value.data);
          } else {
            setSubCategories([]);
          }
          if (prodsRes.status === 'fulfilled' && prodsRes.value?.success && Array.isArray(prodsRes.value.data)) {
            setProducts(prodsRes.value.data);
          } else {
            setProducts([]);
          }
        }
      } catch (error) {
        console.error('Navbar fetch error:', error);
      }
    };
    fetchData();

    const handleProductsUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail)) {
        setProducts(e.detail);
      }
    };
    const handleCategoriesUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail)) {
        setCategories(e.detail);
      }
    };
    const handleSubCategoriesUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail)) {
        setSubCategories(e.detail);
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

  // Determine target link for category items in dropdown and mobile drawer
  const getCategoryNavigation = (cat) => {
    const categorySubCats = subCategories.filter(sc => {
      if (!sc.category) return false;
      const scCatId = typeof sc.category === 'object' ? sc.category._id : sc.category;
      const scCatName = typeof sc.category === 'object' ? sc.category.name : '';
      const catId = cat._id;
      const catName = (cat.name || '').trim().toLowerCase();

      if (catId && scCatId && String(catId) === String(scCatId)) return true;
      if (catName && scCatName && scCatName.trim().toLowerCase() === catName) return true;
      return false;
    });

    // If category has subcategories, it ONLY expands/collapses and does NOT navigate anywhere
    if (categorySubCats.length > 0) {
      return {
        to: null,
        state: null,
        hasSubCats: true,
        categorySubCats,
        isSingleProduct: false
      };
    }

    // Match products for this category (by ID or normalized name)
    const catNorm = (cat.name || '').trim().toLowerCase().replace(/-/g, ' ');
    const matchingProducts = products.filter(p => {
      if (p.category?._id && cat._id && p.category._id === cat._id) return true;
      const pCatName = (p.category?.name || (typeof p.category === 'string' ? p.category : '')).trim().toLowerCase().replace(/-/g, ' ');
      return pCatName === catNorm;
    });

    // If this category represents a single product, navigate directly to that product's details page!
    if (matchingProducts.length === 1) {
      return {
        to: `/products/${matchingProducts[0]._id}`,
        state: { fromNavbar: true, fromCategory: cat.name },
        hasSubCats: false,
        categorySubCats: [],
        isSingleProduct: true,
        product: matchingProducts[0]
      };
    }

    // Multi-product category (e.g. Accessories, UPVC Hardware, Roller) with query param
    return {
      to: `/products?category=${encodeURIComponent(cat.name)}`,
      state: { selectedCategory: cat.name },
      hasSubCats: false,
      categorySubCats: [],
      isSingleProduct: false
    };
  };

  // Determine target link for subcategories inside dropdown
  const getSubCategoryNavigation = (cat, sub) => {
    const subNorm = (sub.name || '').trim().toLowerCase();
    const matchingProducts = products.filter(p => {
      if (p.subCategory?._id && sub._id && p.subCategory._id === sub._id) return true;
      const pSubName = (p.subCategory?.name || (typeof p.subCategory === 'string' ? p.subCategory : '')).trim().toLowerCase();
      return pSubName === subNorm;
    });

    // If subcategory has a single product, directly navigate to product details
    if (matchingProducts.length === 1) {
      return {
        to: `/products/${matchingProducts[0]._id}`,
        state: { fromNavbar: true, fromCategory: cat.name, fromSubCategory: sub.name },
        isSingleProduct: true
      };
    }

    return {
      to: `/products?category=${encodeURIComponent(cat.name)}&subCategory=${encodeURIComponent(sub.name)}`,
      state: { selectedCategory: cat.name, selectedSubCategory: sub.name },
      isSingleProduct: false
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/quality', label: 'Quality Assurance' },
    { path: '/download', label: 'Download' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay - Tapping anywhere outside cancels/closes menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden pointer-events-auto"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-3 sm:mt-4 px-3 sm:px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`w-full max-w-7xl pointer-events-auto transition-all duration-300 border ${
            mobileMenuOpen ? 'rounded-2xl sm:rounded-3xl' : 'rounded-full'
          } ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-1.5 sm:py-2'
              : 'bg-white/90 backdrop-blur-sm border-gray-100 shadow-sm py-2 sm:py-3'
          }`}
        >
          <div className="px-3.5 sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-12 sm:h-14">

              {/* Brand Logo - Responsive height */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer shrink-0"
              >
                <img src={logoNew} alt="Eagle Engineering" className="h-8 sm:h-11 md:h-14 w-auto object-contain" />
              </Link>

              {/* Nav Links - Desktop */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => {
                  const isActive = activePath === link.path;
                  const isProducts = link.path === '/products';

                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => isProducts && setShowDropdown(true)}
                      onMouseLeave={() => isProducts && setShowDropdown(false)}
                    >
                      <Link
                        to={link.path}
                        className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 inline-block ${
                          isActive || (isProducts && showDropdown)
                            ? 'text-[var(--brand-red)]'
                            : 'text-slate-700 hover:text-[var(--brand-red)]'
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute -bottom-1 left-2.5 right-2.5 flex items-center justify-center pointer-events-none"
                          >
                            <div className="w-full h-[2px] bg-[var(--brand-red)] rounded-full relative flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-red)] ring-2 ring-white" />
                            </div>
                          </motion.div>
                        )}
                      </Link>

                      {/* Dropdown Mega Menu for Products */}
                      {isProducts && (
                        <AnimatePresence>
                          {showDropdown && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 6 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[92vw] sm:w-[680px] md:w-[740px] lg:w-[880px] xl:w-[940px] max-w-[calc(100vw-2rem)] z-50 pointer-events-auto"
                            >
                              <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#E5E7EB] p-6 sm:p-8 max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-0 items-start">
                                  {megaMenuColumns.map((col) => (
                                    <div key={col.title} className="flex flex-col">
                                      {/* Static Column Heading */}
                                      <div className="py-2.5 border-b border-[#E5E7EB] mb-0.5">
                                        <h3 className="text-[15px] sm:text-[16px] font-bold text-[#17365D] tracking-tight">
                                          {col.title}
                                        </h3>
                                      </div>

                                      {/* Dynamic Categories & Subcategories */}
                                      {col.items && col.items.length > 0 ? (
                                        col.items.map((cat, idx) => {
                                          const navInfo = getCategoryNavigation(cat);
                                          const catKey = cat._id || cat.name || idx;
                                          const isCatActive =
                                            (location.pathname === '/products' && (
                                              location.search.includes(encodeURIComponent(cat.name)) ||
                                              location.state?.selectedCategory === cat.name
                                            )) ||
                                            (navInfo.to && location.pathname === navInfo.to);

                                          return (
                                            <div key={catKey} className="flex flex-col">
                                              {navInfo.hasSubCats ? (
                                                <div className="flex flex-col">
                                                  {/* Category Heading with Subcategories */}
                                                  <Link
                                                    to={`/products?category=${encodeURIComponent(cat.name)}`}
                                                    state={{ selectedCategory: cat.name }}
                                                    onClick={() => setShowDropdown(false)}
                                                    className={`group flex items-center justify-between py-2.5 text-[14px] font-semibold border-b border-[#E5E7EB] transition-colors duration-150 ${
                                                      isCatActive
                                                        ? 'text-[#D62828]'
                                                        : 'text-[#17365D] hover:text-[#D62828]'
                                                    }`}
                                                  >
                                                    <span className="truncate group-hover:translate-x-0.5 transition-transform duration-150">
                                                      {cat.name}
                                                    </span>
                                                    <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:text-[#D62828] group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                                                  </Link>

                                                  {/* Subcategories (Product links under this category) */}
                                                  <div className="flex flex-col pl-2.5">
                                                    {navInfo.categorySubCats.map((sub, sIdx) => {
                                                      const subNav = getSubCategoryNavigation(cat, sub);
                                                      const isSubActive =
                                                        (location.pathname === '/products' && (
                                                          location.search.includes(encodeURIComponent(sub.name)) ||
                                                          location.state?.selectedSubCategory === sub.name
                                                        )) ||
                                                        (subNav.to && location.pathname === subNav.to);

                                                      return (
                                                        <Link
                                                          key={sub._id || sIdx}
                                                          to={subNav.to}
                                                          state={subNav.state}
                                                          onClick={() => setShowDropdown(false)}
                                                          className={`group flex items-center justify-between py-2 text-[13.5px] border-b border-[#E5E7EB] transition-colors duration-150 ${
                                                            isSubActive
                                                              ? 'text-[#D62828] font-semibold'
                                                              : 'text-[#17365D]/90 hover:text-[#D62828] font-normal'
                                                          }`}
                                                        >
                                                          <span className="truncate group-hover:translate-x-0.5 transition-transform duration-150">
                                                            {sub.name}
                                                          </span>
                                                          <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#D62828] transition-all duration-150 shrink-0" />
                                                        </Link>
                                                      );
                                                    })}
                                                  </div>
                                                </div>
                                              ) : (
                                                /* Direct Category Link */
                                                <Link
                                                  to={navInfo.to}
                                                  state={navInfo.state}
                                                  onClick={() => setShowDropdown(false)}
                                                  className={`group flex items-center justify-between py-2.5 text-[14px] border-b border-[#E5E7EB] transition-colors duration-150 ${
                                                    isCatActive
                                                      ? 'text-[#D62828] font-semibold'
                                                      : 'text-[#17365D] hover:text-[#D62828] font-normal'
                                                  }`}
                                                >
                                                  <span className="truncate group-hover:translate-x-0.5 transition-transform duration-150">
                                                    {cat.name}
                                                  </span>
                                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#D62828] transition-all duration-150 shrink-0" />
                                                </Link>
                                              )}
                                            </div>
                                          );
                                        })
                                      ) : (
                                        <div className="py-3 text-xs text-[#17365D]/40 italic">
                                          Loading categories...
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Get a Quote Button - Desktop */}
              <div className="hidden md:flex items-center shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[var(--brand-red)] text-white text-sm font-bold rounded-full hover:bg-red-700 transition-all shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] hover:-translate-y-0.5"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu / Cancel Toggle Button - High Contrast, Visible & Labeled */}
              <div className="flex md:hidden items-center shrink-0">
                {mobileMenuOpen ? (
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[var(--brand-red)] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-md ring-2 ring-red-200 transition-all active:scale-95 hover:bg-red-700"
                    aria-label="Cancel and close menu"
                    title="Cancel menu"
                  >
                    <X className="w-4 h-4 stroke-[3]" />
                    <span>Cancel</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="p-2 sm:p-2.5 rounded-full bg-gray-100 text-[#0b2545] hover:bg-gray-200 transition-all flex items-center justify-center shadow-sm active:scale-95"
                    aria-label="Open menu"
                    title="Menu"
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-[#0b2545] rounded-2xl sm:rounded-3xl mt-2 mx-1 sm:mx-2 shadow-2xl border border-white/10"
              >
                <div className="flex flex-col py-3 px-3.5 sm:px-4 space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
                  
                  {/* Top Drawer Header */}
                  <div className="flex items-center gap-2 pb-2.5 mb-1 border-b border-white/10 px-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white/80">Menu Navigation</span>
                  </div>

                {navLinks.map((link) => {
                  const isActive = activePath === link.path;
                  const isProducts = link.path === '/products';

                  return (
                    <div key={link.path} className="flex flex-col">
                      <div className="flex items-center">
                        <Link
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-colors ${
                            isActive ? 'bg-[var(--brand-red)] text-white font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white font-medium'
                          }`}
                        >
                          {link.label}
                        </Link>
                        {isProducts && (
                          <button 
                            onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                            className="p-2.5 text-gray-300 hover:text-white"
                          >
                            <ChevronRight className={`w-5 h-5 transition-transform ${mobileProductsExpanded ? 'rotate-90' : ''}`} />
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Categories Accordion */}
                      {isProducts && (
                        <AnimatePresence>
                          {mobileProductsExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white rounded-xl mx-1 mt-1 text-[#17365D] border border-[#E5E7EB] shadow-md"
                            >
                              <div className="py-1 flex flex-col">
                                {megaMenuColumns.map((col) => (
                                  <div key={col.title} className="flex flex-col border-b border-[#E5E7EB] last:border-b-0 pb-1">
                                    <div className="px-4 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#17365D]/70 bg-gray-50/60">
                                      {col.title}
                                    </div>
                                    {col.items.map((cat, idx) => {
                                      const navInfo = getCategoryNavigation(cat);
                                      const catKey = cat._id || cat.name || idx;
                                      const isExpanded = !!mobileExpandedCategories[catKey];
                                      const isCatActive =
                                        (location.pathname === '/products' && (
                                          location.search.includes(encodeURIComponent(cat.name)) ||
                                          location.state?.selectedCategory === cat.name
                                        )) ||
                                        (navInfo.to && location.pathname === navInfo.to);

                                      return (
                                        <div key={catKey} className="flex flex-col border-b border-[#E5E7EB]/50 last:border-b-0">
                                          {navInfo.hasSubCats ? (
                                            <button
                                              type="button"
                                              onClick={(e) => toggleMobileCategoryExpand(catKey, e)}
                                              className={`px-4 py-2.5 text-[13px] font-semibold flex items-center justify-between w-full text-left transition-colors ${
                                                isCatActive
                                                  ? 'text-[#D62828] bg-red-50/60'
                                                  : 'text-[#17365D] hover:text-[#D62828] hover:bg-red-50/30'
                                              }`}
                                              aria-expanded={isExpanded}
                                            >
                                              <span>{cat.name}</span>
                                              <ChevronRight className={`w-3.5 h-3.5 text-[#17365D]/60 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-[#D62828]' : ''}`} />
                                            </button>
                                          ) : (
                                            <Link
                                              to={navInfo.to}
                                              state={navInfo.state}
                                              onClick={() => setMobileMenuOpen(false)}
                                              className={`px-4 py-2.5 text-[13px] font-medium flex items-center justify-between transition-colors ${
                                                isCatActive
                                                  ? 'text-[#D62828] font-semibold bg-red-50/60'
                                                  : 'text-[#17365D] hover:text-[#D62828] hover:bg-red-50/30'
                                              }`}
                                            >
                                              <span>{cat.name}</span>
                                            </Link>
                                          )}

                                          {/* Mobile Subcategories Accordion */}
                                          {navInfo.hasSubCats && (
                                            <AnimatePresence>
                                              {isExpanded && (
                                                <motion.div
                                                  initial={{ height: 0, opacity: 0 }}
                                                  animate={{ height: 'auto', opacity: 1 }}
                                                  exit={{ height: 0, opacity: 0 }}
                                                  transition={{ duration: 0.2 }}
                                                  className="overflow-hidden bg-gray-50/80"
                                                >
                                                  <div className="py-1 flex flex-col pl-3">
                                                    {navInfo.categorySubCats.map((sub, sIdx) => {
                                                      const subNav = getSubCategoryNavigation(cat, sub);
                                                      const isSubActive =
                                                        (location.pathname === '/products' && (
                                                          location.search.includes(encodeURIComponent(sub.name)) ||
                                                          location.state?.selectedSubCategory === sub.name
                                                        )) ||
                                                        (subNav.to && location.pathname === subNav.to);

                                                      return (
                                                        <Link
                                                          key={sub._id || sIdx}
                                                          to={subNav.to}
                                                          state={subNav.state}
                                                          onClick={() => setMobileMenuOpen(false)}
                                                          className={`px-4 py-2 text-[12.5px] flex items-center justify-between border-b border-[#E5E7EB] last:border-b-0 transition-colors ${
                                                            isSubActive
                                                              ? 'text-[#D62828] font-semibold bg-red-50/60'
                                                              : 'text-[#17365D]/85 hover:text-[#D62828] hover:bg-red-50/30'
                                                          }`}
                                                        >
                                                          <span>{sub.name}</span>
                                                          <ArrowRight className="w-3 h-3 text-[#D62828] opacity-60" />
                                                        </Link>
                                                      );
                                                    })}
                                                  </div>
                                                </motion.div>
                                              )}
                                            </AnimatePresence>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}

                <div className="pt-2 pb-1">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center w-full px-6 py-3.5 bg-[var(--brand-red)] text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-colors shadow-md"
                  >
                    GET A QUOTE
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  </>
);
};
