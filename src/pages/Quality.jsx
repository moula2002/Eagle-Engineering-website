import React from 'react';
import { motion } from 'framer-motion';
import qualityInspection from '../assets/quality_inspection.png';

export const Quality = () => {
  return (
    <section id="quality" className="py-0 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565439390111-e6e73775f0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-sm tracking-widest text-[var(--brand-red)] mb-2 uppercase font-bold">QUALITY</motion.p>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide">QUALITY</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-sm text-gray-300 font-medium tracking-wide">Home &gt; Quality</motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[40px] font-bold text-[var(--brand-red)] mb-8 font-heading uppercase tracking-wide">QUALITY</h3>
            
            <p className="text-gray-600 mb-6 text-[15px] leading-relaxed">
              Eagle Engineering are committed to comply with the most exacting customer needs and provide satisfaction through prompt supply of high quality products, at the right time, in the right quantity and at the right price. We are meet customer's requirements for all range of high quality fasteners by supplying International Quality Products meeting all the requirements and continually improve business effectiveness through optimisation of process.
            </p>

            <p className="text-gray-600 mb-8 text-[15px] leading-relaxed">
              The Quality team is also responsible for maintaining all certifications from our suppliers. Certifications are kept on file for our customers to meet dimensional, material and mechanical properties as required by specifications and customer requirements. Quality also performs internal audits to assure compliance to our strict quality guidelines. Our customers recognize and appreciate that they are getting high quality fasteners.
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-600">
              <li>High quality fasteners guarantee high safety levels.</li>
              <li>High quality fasteners have good coatings that protect against corrosion, which reduces the requirement for rust damage inspections.</li>
              <li>High quality fasteners significantly affect life cycle costs. In the long run, they save you money.</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full relative group mt-8 lg:mt-0"
          >
            <div className="bg-gray-100 h-[500px] rounded-lg overflow-hidden shadow-xl relative z-10">
              <img src={qualityInspection} alt="Quality Inspection" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Soft decorative shadow offset */}
            <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] bg-gray-200 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
