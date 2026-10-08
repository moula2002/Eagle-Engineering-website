import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ArrowRight, Play, Car, Plane, Zap, Factory, Award, Users, Box, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Counter } from '../components/Counter';
import logo1 from '../assets/client_logo_1.png';
import logo2 from '../assets/client_logo_2.png';
import logo3 from '../assets/client_logo_3.png';
import logo4 from '../assets/client_logo_4.png';
import logo5 from '../assets/client_logo_5.png';
import fastener1 from '../assets/fastener_1.png';
import fastener2 from '../assets/fastener_2.png';
import { getProducts, getImageUrl } from '../api/api';

export const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('homeScrollTarget')) {
      setSkipAnimation(true);
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const json = await getProducts();
        if (json.success) {
          setProductsList(json.data);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
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
                ENGINEERING EXCELLENCE <br/>SINCE 1995
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-base font-light">
                Eagle Engineering is committed to delivering high-quality engineering components and solutions to diverse industries. With decades of experience, advanced manufacturing capabilities, and a dedicated team, we focus on innovation, precision, and complete customer satisfaction.
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
                <div className="text-4xl font-bold font-heading mb-1 text-center">25+</div>
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

      {/* Key Statistics Section */}
      <section className="py-16 bg-[#0b2545] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4"
          >
            {/* Stat 1 */}
            <div className="flex items-center group">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors border border-white/5">
                <Award className="w-7 h-7 text-[var(--brand-red)]" />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-3xl font-heading font-bold text-white mb-0">
                  <Counter from={0} to={10} duration={2} suffix="+" />
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">YEARS EXP</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center group">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors border border-white/5">
                <Users className="w-7 h-7 text-[var(--brand-red)]" />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-3xl font-heading font-bold text-white mb-0">
                  <Counter from={0} to={500} duration={2.5} suffix="+" />
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">CLIENTS</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center group">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors border border-white/5">
                <Box className="w-7 h-7 text-[var(--brand-red)]" />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-3xl font-heading font-bold text-white mb-0">
                  <Counter from={0} to={1000} duration={3} suffix="+" />
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">PRODUCTS</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center group">
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/10 transition-colors border border-white/5">
                <Percent className="w-7 h-7 text-[var(--brand-red)]" />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-3xl font-heading font-bold text-white mb-0">
                  <Counter from={0} to={99} duration={2} suffix="%" />
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">QUALITY</div>
              </div>
            </div>

          </motion.div>
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
                    <img src={getImageUrl(p.mainImage) || fastener1} alt={p.name} className="w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 mix-blend-multiply group-hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
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
      <section className="py-20 bg-gradient-to-r from-[#0b2545]/10 via-white to-[var(--brand-red)]/10 border-t border-gray-100 overflow-hidden relative">
        
        {/* Fade gradients on left and right edges for a seamless marquee effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f1f3f6] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fdf7f7] to-transparent z-10 pointer-events-none"></div>
        
        <div className="w-full text-center relative z-0">
          <h2 className="text-sm font-bold text-[#0b2545] uppercase tracking-widest mb-12">Trusted By Global Brands & Partners</h2>
          
          <div className="flex overflow-hidden">
            {/* First Set of Logos */}
            <motion.div 
              className="flex gap-16 md:gap-32 min-w-full shrink-0 pr-16 md:pr-32 items-center justify-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {[logo1, logo2, logo3, logo4, logo5].map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center w-36 h-20 shrink-0 mix-blend-multiply opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  <img src={logo} alt={`Client Brand ${idx + 1}`} className="max-w-full max-h-full object-contain drop-shadow-sm" loading="lazy" decoding="async" />
                </div>
              ))}
            </motion.div>
            
            {/* Second Duplicate Set for Seamless Looping */}
            <motion.div 
              className="flex gap-16 md:gap-32 min-w-full shrink-0 pr-16 md:pr-32 items-center justify-center"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
              {[logo1, logo2, logo3, logo4, logo5].map((logo, idx) => (
                <div key={`dup-${idx}`} className="flex items-center justify-center w-36 h-20 shrink-0 mix-blend-multiply opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300">
                  <img src={logo} alt={`Client Brand Duplicate ${idx + 1}`} className="max-w-full max-h-full object-contain drop-shadow-sm" loading="lazy" decoding="async" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-32 bg-[#0b2545] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1565439390111-e6e73775f0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Manufacturing Facility" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        {/* Premium Overlay gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0b2545] via-[#0b2545]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12"
          >
            <button className="flex-shrink-0 w-24 h-24 bg-[var(--brand-red)] rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-[0_0_0_8px_rgba(230,32,32,0.3)] hover:shadow-[0_0_0_12px_rgba(230,32,32,0.3)] hover:scale-105 duration-300 group">
              <Play className="w-10 h-10 text-white ml-2 fill-current group-hover:scale-110 transition-transform duration-300" />
            </button>
            <div className="text-left text-white max-w-xl">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide leading-tight">
                WATCH OUR<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">COMPANY VIDEO</span>
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                See our manufacturing process and quality standards in action. Experience the excellence that drives our engineering solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
