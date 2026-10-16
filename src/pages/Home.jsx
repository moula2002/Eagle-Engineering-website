import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ArrowRight, Car, Plane, Zap, Factory, Award, Users, Box, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Counter } from '../components/Counter';
import logo1 from '../assets/client_logo_1_color.jpg';
import logo2 from '../assets/client_logo_2_color.jpg';
import logo3 from '../assets/client_logo_3_color.jpg';
import logo4 from '../assets/client_logo_4_color.jpg';
import logo5 from '../assets/client_logo_5_color.jpg';
import fastener1 from '../assets/fastener_1.png';
import fastener2 from '../assets/fastener_2.png';
import { getProducts, getImageUrl, getPreloadedProducts } from '../api/api';
import { resolveProductImage } from '../data/productDataHelper';
import { initialProducts } from '../data/catalogSnapshot';

export const Home = () => {
  const [productsList, setProductsList] = useState(() => getPreloadedProducts());
  const [loading, setLoading] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('homeScrollTarget')) {
      setSkipAnimation(true);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const json = await getProducts(true);
        if (isMounted && json.success && json.data) {
          setProductsList(json.data);
        }
      } catch (error) {
        console.warn('Home page products refresh error:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchProducts();

    const handleProductsUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail) && e.detail.length > 0) {
        setProductsList(e.detail);
      }
    };
    window.addEventListener('eagle_products_updated', handleProductsUpdated);

    return () => {
      isMounted = false;
      window.removeEventListener('eagle_products_updated', handleProductsUpdated);
    };
  }, []);

  useEffect(() => {
    if (!loading && productsList.length > 0) {
      const scrollTarget = sessionStorage.getItem('homeScrollTarget');
      if (scrollTarget) {
        setTimeout(() => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'auto', block: 'center' });
            sessionStorage.removeItem('homeScrollTarget');
          }
        }, 300);
      }
    }
  }, [loading, productsList]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Hero />
      
      {/* About Us Preview Section */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[var(--brand-red)]"></div>
                <h3 className="text-[var(--brand-red)] font-bold uppercase tracking-widest text-sm">WHO WE ARE</h3>
              </div>
              <h2 className="text-4xl text-[#0b2545] font-bold mb-6 font-heading uppercase tracking-wide leading-tight">
                10+ YEARS OF <br/>ENGINEERING EXCELLENCE
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-base font-light">
                Eagle Engineering is one of the leading Importers/Exporters and Suppliers of Industrial fasteners. We supply a wide range of fasteners and self-drilling screws, which comply with international standards and specifications. Our fasteners are made in accordance to particular requirements, and are manufactured to best suit the needs of the clients. Moreover, the products offered by us are widely known for their features like high strength, superior finish, corrosion resistance, and accurate dimensions. We have never compromised on the quality and the services provided to the customer. Our company has established a well-equipped infrastructural unit. It has various departments like Technical, Quality control, and others, which helps us in performing our business process in the best possible way. We provide technical support, customer service, experience, and dependability. We maintain an extensive inventory of Fasteners to provide our customers with fast delivery of their products.
              </p>
              <div className="flex gap-4">
                <Link to="/about" className="px-8 py-3.5 bg-[var(--brand-red)] text-white font-bold rounded-xl text-sm hover:bg-red-700 transition-all uppercase shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] hover:-translate-y-0.5">
                  Discover More
                </Link>
                <Link to="/contact" className="px-8 py-3.5 bg-white border border-gray-200 text-[#0b2545] font-bold rounded-xl text-sm hover:bg-gray-50 transition-all uppercase shadow-[0_4px_14px_0_rgb(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)] hover:-translate-y-0.5">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-[var(--brand-blue)] rounded-2xl rotate-3 scale-105 opacity-10"></div>
              <div className="bg-white p-2 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] relative z-10 overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Precision Engineering" className="w-full h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
              </div>
              
              {/* Floating Experience Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[var(--brand-red)] text-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(230,32,32,0.3)] z-20 hidden md:block"
              >
                <div className="text-4xl font-bold font-heading mb-1 text-center">10+</div>
                <div className="text-xs font-semibold tracking-wider uppercase text-center text-white/90">Years of<br/>Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-[#0b2545] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-industrial-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-wide mb-4">
              INDUSTRIES <span className="text-[var(--brand-red)]">WE SERVE</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Our precision components power the world's most demanding applications across a variety of crucial sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'Automotive', icon: <Car className="w-8 h-8 text-white group-hover:text-white transition-colors" /> },
              { name: 'Aerospace', icon: <Plane className="w-8 h-8 text-white group-hover:text-white transition-colors" /> },
              { name: 'Energy', icon: <Zap className="w-8 h-8 text-white group-hover:text-white transition-colors" /> },
              { name: 'Manufacturing', icon: <Factory className="w-8 h-8 text-white group-hover:text-white transition-colors" /> }
            ].map((industry, i) => (
              <motion.div 
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm cursor-pointer group"
              >
                <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--brand-red)] group-hover:scale-110 transition-all duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-white font-bold tracking-wider uppercase text-sm">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* Products Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-red)] opacity-5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-blue)] opacity-5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 sm:gap-0"
          >
            <h2 className="text-3xl font-heading font-bold text-[#0b2545] uppercase tracking-wide">
              OUR <span className="text-[var(--brand-red)]">PRODUCTS</span>
            </h2>
            <Link to="/products" className="flex items-center text-[var(--brand-red)] font-bold text-sm hover:text-red-800 transition-colors group">
              View All Products <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          {loading ? (
            <div className="w-full py-10 flex justify-center">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-[var(--brand-red)] rounded-full animate-spin"></div>
            </div>
          ) : productsList.length === 0 ? (
            <div className="w-full py-20 text-center text-gray-500 font-medium">
              No products available at the moment.
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial={skipAnimation ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-wrap justify-center gap-x-8 gap-y-12"
            >
              {productsList.slice(0, 5).map((p, idx) => (
              <motion.div key={idx} variants={itemVariant} id={`product-${p._id}`}>
                <motion.div 
                  className="flex flex-col items-center group w-44 md:w-48 cursor-pointer"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.2 // Stagger the floating effect
                  }}
                >
                  <Link 
                    to={`/products/${p._id}`} 
                    state={{ fromHome: true }}
                    onClick={() => sessionStorage.setItem('homeScrollTarget', `product-${p._id}`)}
                    className="relative w-40 h-40 md:w-44 md:h-44 flex items-center justify-center hover:-translate-y-2 transition-transform duration-300"
                  >
                    <svg className="absolute inset-0 w-full h-full text-[var(--brand-red)] drop-shadow-sm" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 5C125 5 135 15 155 25C175 35 195 55 195 100C195 145 175 165 155 175C135 185 125 195 100 195C75 195 65 185 45 175C25 165 5 145 5 100C5 55 25 35 45 25C65 15 75 5 100 5Z" stroke="currentColor" strokeWidth="4" fill="white" />
                    </svg>
                    <img src={resolveProductImage(p)} alt={p.name} className="w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 mix-blend-multiply group-hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
                  </Link>
                  <Link 
                    to={`/products/${p._id}`}
                    state={{ fromHome: true }}
                    onClick={() => sessionStorage.setItem('homeScrollTarget', `product-${p._id}`)}
                  >
                    <h3 className="text-center font-bold text-[#0b2545] mt-4 text-sm md:text-[15px] px-2 group-hover:text-[var(--brand-red)] transition-colors">{p.name}</h3>
                  </Link>
                </motion.div>
              </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Client/Brand Presentation Section */}
      <section className="py-20 md:py-24 bg-white border-t border-gray-100 overflow-hidden relative">
        <div className="w-full text-center relative z-0">
          <h2 className="text-xs md:text-sm font-bold text-[#0b2545] uppercase tracking-widest mb-12">
            Trusted By Global Brands &amp; Partners
          </h2>
          
          {(() => {
            const brandLogos = [
              { img: logo4, name: 'Vanguard Motors' },
              { img: logo5, name: 'Prime Engineering' },
              { img: logo1, name: 'Apex Industrial' },
              { img: logo2, name: 'Nexus Manufacturing' },
              { img: logo3, name: 'Titan Aerospace' }
            ];
            // Repeat 3 times per half for over 4,500px of content, ensuring continuous flow on all screens
            const marqueeList = [...brandLogos, ...brandLogos, ...brandLogos];

            return (
              <div className="marquee-container py-4">
                <div className="marquee-track">
                  {/* First Track Half */}
                  <div className="flex items-center shrink-0 gap-16 md:gap-24 pr-16 md:pr-24">
                    {marqueeList.map((brand, idx) => (
                      <div 
                        key={`brand-a-${idx}`} 
                        className="flex items-center justify-center w-52 md:w-64 h-24 md:h-28 shrink-0 cursor-pointer group"
                        title={brand.name}
                      >
                        <img 
                          src={brand.img} 
                          alt={brand.name} 
                          className="max-w-full max-h-full object-contain scale-140 md:scale-155 group-hover:scale-160 md:group-hover:scale-175 transition-transform duration-300 select-none pointer-events-none drop-shadow-xs" 
                          loading="lazy" 
                          decoding="async" 
                        />
                      </div>
                    ))}
                  </div>

                  {/* Second Track Half (Exact clone for 100% seamless infinite loop) */}
                  <div className="flex items-center shrink-0 gap-16 md:gap-24 pr-16 md:pr-24" aria-hidden="true">
                    {marqueeList.map((brand, idx) => (
                      <div 
                        key={`brand-b-${idx}`} 
                        className="flex items-center justify-center w-52 md:w-64 h-24 md:h-28 shrink-0 cursor-pointer group"
                        title={brand.name}
                      >
                        <img 
                          src={brand.img} 
                          alt={brand.name} 
                          className="max-w-full max-h-full object-contain scale-140 md:scale-155 group-hover:scale-160 md:group-hover:scale-175 transition-transform duration-300 select-none pointer-events-none drop-shadow-xs" 
                          loading="lazy" 
                          decoding="async" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>
    </>
  );
};
