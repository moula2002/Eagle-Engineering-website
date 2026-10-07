import React from 'react';
import { ArrowRight, Shield, Award, Headphones, Settings, CheckCircle, Users, Box, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <section className="relative w-full min-h-[800px] md:min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Premium Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/images/hero_bg.png" 
            alt="Engineering Background" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
            }}
          />
          {/* Enhanced Gradients for Premium Feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2545] via-[#0b2545]/90 to-[#0b2545]/40 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/40 to-transparent h-40" /> {/* Top shadow for nav */}
          
          {/* Subtle animated background shapes */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute -top-64 -right-64 w-[800px] h-[800px] border border-white/5 rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 -right-32 w-[600px] h-[600px] border border-[var(--brand-red)]/10 rounded-full border-dashed"
          />

          <div className="absolute top-0 right-0 h-full w-1/3 bg-[var(--brand-red)]/20 clip-path-polygon-[100%_0,100%_100%,0_100%] hidden md:block backdrop-blur-sm" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white pt-16 md:pt-10 pb-40 md:pb-24">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="text-xs md:text-sm font-semibold tracking-widest mb-6 text-[var(--brand-red)] flex items-center">
              <span className="w-8 h-[2px] bg-[var(--brand-red)] mr-4"></span>
              PRECISION <span className="mx-2 text-gray-400">|</span> QUALITY <span className="mx-2 text-gray-400">|</span> RELIABILITY
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              ENGINEERING<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">A BETTER </span>
              <span className="text-[var(--brand-red)]">TOMORROW</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-sm md:text-lg text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
              High quality industrial components and engineering solutions for a stronger and sustainable future. Experience the peak of precision.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-5">
              <Link 
                to="/products"
                className="group relative inline-flex justify-center items-center px-8 py-4 text-sm font-bold text-white bg-[var(--brand-red)] rounded-sm overflow-hidden w-full sm:w-auto shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold text-white bg-transparent border-2 border-white/30 rounded-sm hover:border-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>
            
          </motion.div>
        </div>

        {/* Statistics Bar at Bottom */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="bg-[#0b2545]/90 backdrop-blur-xl rounded-t-2xl text-white py-8 px-6 md:px-10 grid grid-cols-2 md:flex md:justify-between items-center border-t border-x border-white/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] gap-8 md:gap-0 relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <div className="flex items-center space-x-3 md:space-x-4 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm shrink-0 group-hover:border-[var(--brand-red)] transition-colors">
                  <Award className="w-5 h-5 md:w-7 md:h-7 text-[var(--brand-red)]" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold tracking-tight">10+</div>
                  <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Years Exp</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm shrink-0 group-hover:border-[var(--brand-red)] transition-colors">
                  <Users className="w-5 h-5 md:w-7 md:h-7 text-[var(--brand-red)]" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold tracking-tight">500+</div>
                  <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Clients</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm shrink-0 group-hover:border-[var(--brand-red)] transition-colors">
                  <Box className="w-5 h-5 md:w-7 md:h-7 text-[var(--brand-red)]" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold tracking-tight">1000+</div>
                  <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Products</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 md:space-x-4 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm shrink-0 group-hover:border-[var(--brand-red)] transition-colors">
                  <Percent className="w-5 h-5 md:w-7 md:h-7 text-[var(--brand-red)]" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold tracking-tight">99%</div>
                  <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Quality</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-gray-50 pb-16 relative z-30 pt-16 bg-industrial-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group h-[260px] w-full [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-xl">
                {/* Front */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden]">
                  <div className="text-[var(--brand-red)] mb-6 bg-red-50/50 p-4 rounded-full">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-[#0b2545] font-bold text-[15px] uppercase tracking-wide">HIGH QUALITY</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full bg-[#0b2545] rounded-xl flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#0b2545]">
                  <h3 className="text-[var(--brand-red)] font-bold text-[15px] mb-4 uppercase tracking-wide">HIGH QUALITY</h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">Precision manufacturing with unmatched quality assurance standards.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group h-[260px] w-full [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-xl">
                {/* Front */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden]">
                  <div className="text-[var(--brand-red)] mb-6 bg-red-50/50 p-4 rounded-full">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-[#0b2545] font-bold text-[15px] uppercase tracking-wide">RELIABLE SOLUTIONS</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full bg-[#0b2545] rounded-xl flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#0b2545]">
                  <h3 className="text-[var(--brand-red)] font-bold text-[15px] mb-4 uppercase tracking-wide">RELIABLE SOLUTIONS</h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">Durable and long-lasting performance for extreme environments.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group h-[260px] w-full [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-xl">
                {/* Front */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden]">
                  <div className="text-[var(--brand-red)] mb-6 bg-red-50/50 p-4 rounded-full">
                    <Headphones className="w-8 h-8" />
                  </div>
                  <h3 className="text-[#0b2545] font-bold text-[15px] uppercase tracking-wide">CUSTOM SUPPORT</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full bg-[#0b2545] rounded-xl flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#0b2545]">
                  <h3 className="text-[var(--brand-red)] font-bold text-[15px] mb-4 uppercase tracking-wide">CUSTOM SUPPORT</h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">Dedicated engineering team providing bespoke technical support.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group h-[260px] w-full [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] rounded-xl">
                {/* Front */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden]">
                  <div className="text-[var(--brand-red)] mb-6 bg-red-50/50 p-4 rounded-full">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h3 className="text-[#0b2545] font-bold text-[15px] uppercase tracking-wide">INDUSTRY EXPERTISE</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full bg-[#0b2545] rounded-xl flex flex-col items-center justify-center text-center p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#0b2545]">
                  <h3 className="text-[var(--brand-red)] font-bold text-[15px] mb-4 uppercase tracking-wide">INDUSTRY EXPERTISE</h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">Decades of proven excellence in complex mechanical engineering.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};
