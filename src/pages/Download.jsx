import React from 'react';
import { motion } from 'framer-motion';

// Assets
import logoNew from '../assets/logo_new.png';
import bdnLogo from '../assets/bdn_logo.png';
import eagleBrochureCover from '../assets/eagle_brochure_cover.png';
import bdnBrochureCover from '../assets/bdn_brochure_cover.png';
import eaglePdf from '../assets/Eagle_Brochure.pdf';
import bdnPdf from '../assets/BDNcatalogue6.pdf';

export const Download = () => {
  return (
    <section id="download" className="py-0 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-sm tracking-widest text-[var(--brand-red)] mb-2 uppercase font-bold">DOWNLOAD</motion.p>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide">DOWNLOAD CENTER</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-sm text-gray-300 font-medium tracking-wide">Home &gt; Download</motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-[32px] font-bold text-[#0b2545] mb-4 font-heading uppercase tracking-wide">
            PRODUCT CATALOGUES & <span className="text-[var(--brand-red)]">BROCHURES</span>
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-base font-light leading-relaxed">
            Explore our comprehensive range of precision engineering solutions and premium fasteners. Click on the covers below to view or download our official digital brochures and product catalogues in PDF format.
          </p>
          <div className="w-24 h-1 bg-[var(--brand-red)] mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Logos Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-48 h-32 flex items-center justify-center"
          >
            <img src={logoNew} alt="Eagle Engineering Logo" className="max-w-full max-h-full object-contain" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-48 h-32 flex items-center justify-center"
          >
            <img src={bdnLogo} alt="BDN Fasteners Logo" className="max-w-full max-h-full object-contain" />
          </motion.div>
        </div>

        {/* Brochures Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
          
          {/* Eagle Brochure */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <a href={eaglePdf} target="_blank" rel="noopener noreferrer" className="block relative bg-white p-2 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[var(--brand-red)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <img src={eagleBrochureCover} alt="Eagle Brochure" className="w-64 h-[350px] object-cover rounded-lg border border-gray-100" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[var(--brand-red)] text-white px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View PDF
                </div>
              </div>
            </a>
          </motion.div>

          {/* BDN Brochure */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <a href={bdnPdf} target="_blank" rel="noopener noreferrer" className="block relative bg-white p-2 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[#009bd9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <img src={bdnBrochureCover} alt="BDN Catalogue" className="w-64 h-[350px] object-cover rounded-lg border border-gray-100" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#009bd9] text-white px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View PDF
                </div>
              </div>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
