import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FolderTree } from 'lucide-react';
import { getCategories, getSubCategories, getImageUrl } from '../api/api';

export const SubCategories = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoriesList, setCategoriesList] = useState([]);
  const [subCategoriesList, setSubCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Read category with priority: URL query param -> route state -> sessionStorage -> first available category
  const initialCategory = 
    searchParams.get('category') || 
    location.state?.selectedCategory || 
    sessionStorage.getItem('eagle_selected_category') || 
    '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Synchronize state with URL or route updates
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory) {
      setSelectedCategory(urlCategory);
      sessionStorage.setItem('eagle_selected_category', urlCategory);
    } else if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
      sessionStorage.setItem('eagle_selected_category', location.state.selectedCategory);
      setSearchParams({ category: location.state.selectedCategory }, { replace: true });
    }
  }, [searchParams, location.state]);

  const handleCategoryChange = (catName) => {
    setSelectedCategory(catName);
    sessionStorage.setItem('eagle_selected_category', catName);
    setSearchParams({ category: catName }, { replace: true });
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (categoriesList.length === 0) {
        setLoading(true);
      }
      try {
        const [categoriesJson, subCategoriesJson] = await Promise.allSettled([
          getCategories(false),
          getSubCategories(false)
        ]);
        
        if (isMounted) {
          if (categoriesJson.status === 'fulfilled' && categoriesJson.value?.success && Array.isArray(categoriesJson.value.data)) {
            setCategoriesList(categoriesJson.value.data);
          } else {
            setCategoriesList([]);
          }
          if (subCategoriesJson.status === 'fulfilled' && subCategoriesJson.value?.success && Array.isArray(subCategoriesJson.value.data)) {
            setSubCategoriesList(subCategoriesJson.value.data);
          } else {
            setSubCategoriesList([]);
          }
        }
      } catch (error) {
        console.error('SubCategories fetch error:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, []);

  const currentSubCategories = subCategoriesList.filter(sc => {
    const scCat = (sc.category?.name || (typeof sc.category === 'string' ? sc.category : '')).trim().toLowerCase();
    return scCat === selectedCategory.trim().toLowerCase();
  });
  const allCategoryNames = categoriesList.map(c => c.name);



  return (
    <div className="pt-24 min-h-screen bg-[var(--bg-primary)]">
      {/* Header Section */}
      <section className="bg-[#0b2545] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-red)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
              Product Categories
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {selectedCategory ? `${selectedCategory} Categories` : 'Our Product Categories'}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Browse through our specialized subcategories to find the exact engineering components and solutions you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10">
            
            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/4 shrink-0"
            >
              <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <button 
                  onClick={() => navigate('/products')}
                  className={`text-left px-6 py-4 text-[15px] font-bold border-b border-gray-50 last:border-b-0 transition-all ${
                    !selectedCategory 
                      ? 'bg-[var(--brand-red)] text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#0b2545] hover:pl-8'
                  }`}
                >
                  All Products
                </button>
                {allCategoryNames.map((cat, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleCategoryChange(cat)}
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

            {/* Subcategories Grid */}
            <div className="w-full md:w-3/4 flex flex-col">
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
                ) : currentSubCategories.length === 0 ? (
                  <div className="col-span-full py-20 text-center text-gray-500">
                    No subcategories found for {selectedCategory}.
                  </div>
                ) : (
                  currentSubCategories.map((sub, idx) => (
                    <Link 
                      key={idx}
                      to={`/products?category=${encodeURIComponent(selectedCategory)}&subCategory=${encodeURIComponent(sub.name)}`}
                      state={{ selectedCategory, selectedSubCategory: sub.name }}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 text-left w-full h-full flex flex-col items-center justify-center p-8"
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
                    </Link>
                  ))
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
