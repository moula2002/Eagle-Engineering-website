import React from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, FileText, Eye } from 'lucide-react';

// Assets
import logoNew from '../assets/logo_new.png';
import eagleBrochureCover from '../assets/eagle_brochure_cover.png';
import eaglePdf from '../assets/Eagle_Brochure.pdf';

export const Download = () => {
  return (
    <section id="download" className="py-0 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-36 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            className="text-sm tracking-widest text-[var(--brand-red)] mb-2 uppercase font-bold"
          >
            DOWNLOAD
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide"
          >
            DOWNLOAD CENTER
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-sm text-gray-300 font-medium tracking-wide"
          >
            Home &gt; Download
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[#0b2545] mb-4 font-heading uppercase tracking-wide">
            OFFICIAL PRODUCT <span className="text-[var(--brand-red)]">BROCHURE</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base font-normal leading-relaxed">
            Explore our comprehensive range of precision engineering solutions and premium industrial fasteners. Download or view our official digital catalogue in high-definition PDF format.
          </p>
          <div className="w-20 h-1 bg-[var(--brand-red)] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Company Brand Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="p-4 px-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center">
            <img src={logoNew} alt="Eagle Engineering Logo" className="h-16 w-auto object-contain" />
          </div>
        </motion.div>

        {/* Single Eagle Brochure Card */}
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              
              {/* Cover Preview Area */}
              <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[var(--brand-red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={eagleBrochureCover} 
                  alt="Eagle Engineering Official Product Brochure" 
                  className="w-64 sm:w-72 h-auto max-h-[380px] object-cover rounded-lg shadow-md border border-gray-200 group-hover:scale-102 transition-transform duration-300" 
                />
              </div>

              {/* Card Meta & Actions */}
              <div className="p-6 sm:p-7 bg-white border-t border-gray-100 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[var(--brand-red)] text-xs font-bold uppercase tracking-wider mb-3">
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF Document • Product Catalogue</span>
                </div>

                <h4 className="text-xl font-bold text-[#0b2545] font-heading mb-2">
                  Eagle Engineering Product Brochure
                </h4>
                <p className="text-xs text-gray-500 mb-6">
                  Complete technical specifications, item codes, and dimensional drawings for all product lines.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a 
                    href={eaglePdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand-red)] hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Online</span>
                  </a>
                  
                  <a 
                    href={eaglePdf} 
                    download="Eagle_Engineering_Brochure.pdf"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0b2545] hover:bg-[#123561] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
