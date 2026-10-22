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
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
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
