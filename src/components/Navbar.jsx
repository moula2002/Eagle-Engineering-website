import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import logoNew from '../assets/logo_new.png';
import { motion, AnimatePresence } from 'framer-motion';
import { getCategories, getSubCategories } from '../api/api';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catsRes, subCatsRes] = await Promise.all([
          getCategories(),
          getSubCategories()
        ]);
        if (catsRes.success) setCategories(catsRes.data);
        if (subCatsRes.success) setSubCategories(subCatsRes.data);
        console.log("NAVBAR DATA:", {
          categories: catsRes.data,
          subCategories: subCatsRes.data
        });
      } catch (error) {
        console.error('Failed to fetch navbar data:', error);
      }
    };
    fetchData();
  }, []);

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
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/download', label: 'Download' },
    { path: '/quality', label: 'Quality' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`w-full max-w-7xl rounded-full pointer-events-auto transition-all duration-500 border ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-2' 
            : 'bg-white/90 backdrop-blur-sm border-gray-100 shadow-sm py-3'
        }`}
      >
        <div className="px-6 md:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Brand Logo */}
            <Link 
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 cursor-pointer shrink-0"
            >
              <img src={logoNew} alt="Eagle Engineering" className="h-12 sm:h-14 w-auto object-contain" />
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
                      className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 inline-block ${
                        isActive || (isProducts && showDropdown)
                          ? 'text-[#0b2545] bg-gray-100/80' 
                          : 'text-gray-600 hover:text-[#0b2545] hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div 
                          layoutId="nav-indicator"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--brand-red)]"
                        />
                      )}
                    </Link>

                    {/* Dropdown for Products */}
                    {isProducts && (
                      <AnimatePresence>
                        {showDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50"
                          >
                            <div className="bg-[var(--brand-red)] shadow-xl flex flex-col relative">
                                {categories.length > 0 ? categories.map((cat, idx) => {
                                  const categorySubCats = subCategories.filter(sc => sc.category && (sc.category._id === cat._id || sc.category.name === cat.name));
                                  return (
                                    <div key={idx} className="group relative border-b border-white/20 last:border-b-0">
                                      <Link
                                        to={categorySubCats.length > 0 ? "/subcategories" : "/products"}
                                        state={{ selectedCategory: cat.name }}
                                        onClick={() => setShowDropdown(false)}
                                        className="px-5 py-3 text-[15px] font-medium text-white hover:bg-white/10 transition-colors flex justify-between items-center w-full"
                                      >
                                        {cat.name}
                                        {categorySubCats.length > 0 && <ChevronRight className="w-4 h-4 text-white opacity-70" />}
                                      </Link>
                                      
                                      {/* Subcategories Flyout */}
                                      {categorySubCats.length > 0 && (
                                        <div className="absolute top-0 left-full w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                                          <div className="bg-[var(--brand-red)] shadow-xl border-l border-white/20 flex flex-col h-full min-h-[100%]">
                                            {categorySubCats.map((sub, sIdx) => (
                                              <Link
                                                key={sIdx}
                                                to="/products"
                                                state={{ selectedCategory: cat.name, selectedSubCategory: sub.name }}
                                                onClick={() => setShowDropdown(false)}
                                                className="px-5 py-3 text-[15px] font-medium text-white hover:bg-white/10 transition-colors border-b border-white/20 last:border-b-0 block w-full"
                                              >
                                                {sub.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                              }) : (
                                <div className="px-4 py-3 text-sm text-gray-400 italic text-center">No categories</div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Get Quote Button - Desktop */}
            <div className="hidden md:flex items-center shrink-0">
              <Link 
                to="/contact"
                className="px-6 py-2.5 bg-[var(--brand-red)] text-white text-sm font-bold rounded-full hover:bg-red-700 transition-all shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] hover:-translate-y-0.5"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-[#0b2545] hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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
              className="md:hidden overflow-hidden bg-[#0b2545] rounded-3xl mt-4 mx-2 shadow-2xl border border-white/10"
            >
              <div className="flex flex-col py-4 px-4 space-y-2">
                {navLinks.map((link) => {
                  const isActive = activePath === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center px-6 py-3 rounded-xl transition-colors ${
                        isActive ? 'bg-[var(--brand-red)] text-white font-bold' : 'text-gray-300 hover:bg-white/5 hover:text-white font-medium'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 pb-2">
                  <Link 
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center w-full px-6 py-4 bg-[var(--brand-red)] text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-colors"
                  >
                    GET QUOTE
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

