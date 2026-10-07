import React, { useState } from 'react';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import fastener1 from '../assets/fastener_1.png';
import fastener2 from '../assets/fastener_2.png';

export const ProductDetails = () => {
  const images = [
    fastener1,
    fastener2,
    fastener1,
    fastener2,
  ];

  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm font-bold tracking-wider uppercase">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">HOME</Link>
          <span className="text-gray-500 hidden sm:inline">ABOUT US</span>
          <Link to="/products" className="text-[var(--brand-red)] bg-white/10 px-3 py-1 rounded-full border border-white/20">PRODUCTS</Link>
          <span className="text-gray-500">DOWNLOAD</span>
          <span className="text-gray-500 hidden sm:inline">QUALITY</span>
          <span className="text-gray-500 hidden sm:inline">CONTACT</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/products" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#0b2545] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-6"
          >
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto pb-2 md:pb-0 hide-scrollbar shrink-0">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setMainImg(img)}
                  className={`w-24 h-24 shrink-0 border-2 rounded-xl cursor-pointer overflow-hidden p-2 transition-all duration-300 ${mainImg === img ? 'border-[var(--brand-red)] shadow-md scale-105' : 'border-gray-100 hover:border-gray-300 hover:shadow-sm'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                </div>
              ))}
            </div>
            <div className="flex-grow bg-white border border-gray-100 rounded-2xl p-4 md:p-10 flex items-center justify-center h-[300px] md:h-[450px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={mainImg} alt="Spur Gears" className="max-h-full object-contain mix-blend-multiply relative z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl font-heading font-bold text-[#0b2545] mb-6 uppercase tracking-wide">Spur Gears</h1>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg font-light">
              High-precision spur gears manufactured with superior quality materials for reliable performance in industrial applications. Designed for durability and extreme environments.
            </p>

            <ul className="space-y-5 mb-12">
              <li className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                </div>
                High precision machining
              </li>
              <li className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                </div>
                Durable and long-lasting
              </li>
              <li className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                </div>
                Multiple sizes available
              </li>
              <li className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                </div>
                Custom specifications
              </li>
              <li className="flex items-center text-[15px] font-bold text-[#0b2545] group">
                <div className="bg-red-50 p-2 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-[var(--brand-red)] shrink-0" />
                </div>
                Quality tested
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link 
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-3.5 bg-[var(--brand-red)] text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-all uppercase tracking-wider w-full sm:w-auto shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] hover:-translate-y-0.5"
              >
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <button 
                className="inline-flex justify-center items-center px-8 py-3.5 bg-white border border-gray-200 text-[#0b2545] text-sm font-bold rounded-xl hover:bg-gray-50 transition-all uppercase tracking-wider w-full sm:w-auto shadow-[0_4px_14px_0_rgb(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)] hover:-translate-y-0.5"
              >
                Download Catalog
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-bold font-heading text-[#0b2545] uppercase tracking-wide">
              RELATED <span className="text-[var(--brand-red)]">PRODUCTS</span>
            </h3>
            <Link to="/products" className="text-sm font-bold text-gray-500 hover:text-[var(--brand-red)] transition-colors flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Helical Gears', img: fastener2 },
              { name: 'Bevel Gears', img: fastener1 },
              { name: 'Shaft Components', img: fastener2 },
              { name: 'Custom Flanges', img: fastener1 }
            ].map((prod, idx) => (
              <Link to="/product-details" key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:-translate-y-2 hover:shadow-lg transition-all duration-300 block">
                <div className="h-48 w-full bg-gray-50/50 p-4 flex items-center justify-center relative overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4 text-left border-t border-gray-50">
                  <h4 className="font-bold text-[#0b2545] group-hover:text-[var(--brand-red)] transition-colors">{prod.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
