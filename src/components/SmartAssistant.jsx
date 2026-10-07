import React, { useState } from 'react';
import { MessageSquare, X, Search, FileText, Download, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const SmartAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAssistant = () => setIsOpen(!isOpen);

  const assistantOptions = [
    { icon: <Search className="w-5 h-5" />, label: 'Find Products', link: '/products' },
    { icon: <FileText className="w-5 h-5" />, label: 'Request Quotation', link: '/contact' },
    { icon: <Download className="w-5 h-5" />, label: 'Download Catalogues', link: '/download' },
    { icon: <Phone className="w-5 h-5" />, label: 'Contact Sales', link: '/contact' },
  ];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919632144367" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 cursor-pointer"
        aria-label="Connect on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Smart Assistant Toggle Button */}
      <button 
        onClick={toggleAssistant}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#0b2545] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Smart Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 group-hover:animate-pulse" />
        )}
      </button>

      {/* Smart Assistant Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-40 right-6 w-80 bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.16)] border border-gray-100 z-50 overflow-hidden"
          >
            <div className="bg-[#0b2545] p-5 text-white">
              <h4 className="font-bold font-heading tracking-wide mb-1 flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-pulse"></span>
                EAGLE ASSISTANT
              </h4>
              <p className="text-xs text-gray-300 font-light">How can we help you today?</p>
            </div>
            
            <div className="p-4 bg-gray-50/50">
              <div className="space-y-2">
                {assistantOptions.map((option, idx) => (
                  <Link 
                    key={idx}
                    to={option.link}
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] transition-all duration-200 group text-sm font-semibold text-[#0b2545]"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 mr-3 group-hover:bg-red-50 group-hover:text-[var(--brand-red)] transition-colors">
                      {option.icon}
                    </div>
                    {option.label}
                  </Link>
                ))}
                
                <a 
                  href="https://wa.me/919632144367" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#25D366] hover:text-[#25D366] transition-all duration-200 group text-sm font-semibold text-[#0b2545]"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 mr-3 group-hover:bg-[#25D366]/10 group-hover:text-[#25D366] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  Connect on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400">Prefer to call? <a href="tel:+919632144367" className="text-[var(--brand-red)] font-bold hover:underline">+91 96321 44367</a></p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
