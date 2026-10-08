import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import logoNew from '../assets/logo_new.png';

export const Footer = () => {
  return (
    <footer className="bg-[#0b2545] text-white pt-20 pb-10 mt-auto border-t-[6px] border-[var(--brand-red)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="bg-white/95 p-3 rounded-xl inline-block shadow-lg">
              <img src={logoNew} alt="Eagle Engineering Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light pr-4">
              Eagle Engineering is a premier manufacturer of precision engineering components, dedicated to delivering exceptional quality and innovative solutions to global industries since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--brand-red)] transition-all duration-300 group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--brand-red)] transition-all duration-300 group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--brand-red)] transition-all duration-300 group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading uppercase tracking-wider mb-6 text-white flex items-center">
              Quick <span className="text-[var(--brand-red)] ml-2">Links</span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Quality Assurance', path: '/quality' },
                { name: 'Download Center', path: '/download' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-[var(--brand-red)] transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-600 group-hover:text-[var(--brand-red)] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading uppercase tracking-wider mb-6 text-white flex items-center">
              Contact <span className="text-[var(--brand-red)] ml-2">Us</span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400 font-light group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white" />
                </div>
                <span className="mt-1">EAGLE ENGINEERING<br />No. 22, First Floor, Kothnoor Dinne,<br />JP Nagar 8th Phase, Kalena Agrahara, Kothnur,<br />Bengaluru, Karnataka - 560076</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 font-light group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white" />
                </div>
                <a href="tel:+919632144367" className="hover:text-[var(--brand-red)] transition-colors">+91 96321 44367</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 font-light group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white" />
                </div>
                <a href="mailto:info@eagleeng.in" className="hover:text-[var(--brand-red)] transition-colors">info@eagleeng.in</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold font-heading uppercase tracking-wider mb-6 text-white flex items-center">
              Our <span className="text-[var(--brand-red)] ml-2">Newsletter</span>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">
              Subscribe to our newsletter to receive the latest news, updates, and product announcements.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm text-white focus:outline-none focus:border-[var(--brand-red)] transition-colors placeholder-gray-500"
              />
              <button 
                type="button" 
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[var(--brand-red)] hover:bg-red-700 text-white rounded-full px-4 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Eagle Engineering. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-medium tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
