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
              <a href="https://www.facebook.com/ieagleng/?modal=admin_todo_tour" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(230,32,32,0.5)] hover:-translate-y-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </a>
              <a href="https://x.com/ieagleng" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(230,32,32,0.5)] hover:-translate-y-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ieagleng/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(230,32,32,0.5)] hover:-translate-y-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
                  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.6 4 4 5.6 4 7.6V16.4C4 18.4 5.6 20 7.6 20H16.4C18.4 20 20 18.4 20 16.4V7.6C20 5.6 18.4 4 16.4 4H7.6ZM12 6.8C14.8719 6.8 17.2 9.12812 17.2 12C17.2 14.8719 14.8719 17.2 12 17.2C9.12812 17.2 6.8 14.8719 6.8 12C6.8 9.12812 9.12812 6.8 12 6.8ZM12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8ZM17.2 5.6C17.8627 5.6 18.4 6.13726 18.4 6.8C18.4 7.46274 17.8627 8 17.2 8C16.5373 8 16 7.46274 16 6.8C16 6.13726 16.5373 5.6 17.2 5.6Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/eaglefasteners/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(230,32,32,0.5)] hover:-translate-y-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14 9.94 13.4 10.61 13 11.23V10.13H10.87V18.5H13V13.82C13 13.19 13.52 12.67 14.15 12.67 14.78 12.67 15.3 13.19 15.3 13.82V18.5H17.43M8.11 18.5V10.13H5.97V18.5H8.11M7.04 5.96C6.27 5.96 5.64 6.59 5.64 7.36 5.64 8.13 6.27 8.76 7.04 8.76 7.81 8.76 8.44 8.13 8.44 7.36 8.44 6.59 7.81 5.96 7.04 5.96Z"/>
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
