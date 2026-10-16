import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronRight, Printer } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050b14] text-white pt-16 md:pt-20 pb-0 mt-auto border-t-4 border-[var(--brand-red)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16">

          {/* Column 1: Quick Links (3 cols = 25%) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-base sm:text-lg font-bold font-heading uppercase tracking-wider mb-6 text-white flex items-center">
              Quick <span className="text-[var(--brand-red)] ml-2">Links</span>
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Quality Assurance', path: '/quality' },
                { name: 'Download Center', path: '/download' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 text-sm hover:text-[var(--brand-red)] transition-colors flex items-center group font-normal">
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-500 group-hover:text-[var(--brand-red)] group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Us (5 cols = 41.7%) */}
          <div className="md:col-span-5 lg:col-span-5">
            <h4 className="text-base sm:text-lg font-bold font-heading uppercase tracking-wider mb-6 text-white flex items-center">
              Contact <span className="text-[var(--brand-red)] ml-2">Us</span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3.5 text-sm text-gray-300 font-normal group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] group-hover:border-[var(--brand-red)] transition-all duration-300 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                </div>
                <div className="leading-relaxed">
                  <strong className="block text-white font-semibold text-sm mb-1 tracking-wide">EAGLE ENGINEERING</strong>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    No. 22, First Floor, Kothnoor Dinne,<br />
                    JP Nagar 8th Phase, Kalena Agrahara, Kothnur,<br />
                    Bengaluru, Karnataka - 560078
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-3.5 text-sm text-gray-300 font-normal group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] group-hover:border-[var(--brand-red)] transition-all duration-300 shadow-sm">
                  <Printer className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+918079667629" className="hover:text-[var(--brand-red)] text-gray-300 transition-colors font-medium">
                  +91 80-7966 7629
                </a>
              </li>
              <li className="flex items-center space-x-3.5 text-sm text-gray-300 font-normal group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] group-hover:border-[var(--brand-red)] transition-all duration-300 shadow-sm">
                  <Phone className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+919632144367" className="hover:text-[var(--brand-red)] text-gray-300 transition-colors font-medium">
                  +91 96321 44367
                </a>
              </li>
              <li className="flex items-center space-x-3.5 text-sm text-gray-300 font-normal group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] group-hover:border-[var(--brand-red)] transition-all duration-300 shadow-sm">
                  <Mail className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:info@eagleeng.in" className="hover:text-[var(--brand-red)] text-gray-300 transition-colors font-medium">
                  info@eagleeng.in
                </a>
              </li>
              <li className="flex items-center space-x-3.5 text-sm text-gray-300 font-normal group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] group-hover:border-[var(--brand-red)] transition-all duration-300 shadow-sm">
                  <Clock className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">
                  Mon – Sat: 9:00 AM – 6:30 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter & Connect (4 cols = 33.3%) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-base sm:text-lg font-bold font-heading uppercase tracking-wider mb-6 text-white flex items-center">
              Our <span className="text-[var(--brand-red)] ml-2">Newsletter</span>
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed font-normal mb-5">
              Subscribe to our newsletter to receive the latest technical updates, product catalogs, and engineering announcements.
            </p>
            
            {/* Pill input group that never clips */}
            <form className="mb-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center rounded-xl bg-white/5 border border-white/15 focus-within:border-[var(--brand-red)] focus-within:bg-white/10 transition-all p-1.5 shadow-inner">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-transparent py-2 px-3 text-sm text-white focus:outline-none placeholder-gray-400 min-w-0"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[var(--brand-red)] hover:bg-red-700 text-white rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 whitespace-nowrap cursor-pointer hover:shadow-[0_4px_14px_rgba(230,32,32,0.4)]"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="pt-1">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3.5">
                Connect With Us
              </h5>
              <div className="flex items-center space-x-3">
                <a href="https://www.facebook.com/ieagleng/?modal=admin_todo_tour" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:-translate-y-1" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                  </svg>
                </a>
                <a href="https://x.com/ieagleng" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:-translate-y-1" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-gray-300 group-hover:text-white transition-colors">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ieagleng/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:-translate-y-1" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors">
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.6 4 4 5.6 4 7.6V16.4C4 18.4 5.6 20 7.6 20H16.4C18.4 20 20 18.4 20 16.4V7.6C20 5.6 18.4 4 16.4 4H7.6ZM12 6.8C14.8719 6.8 17.2 9.12812 17.2 12C17.2 14.8719 14.8719 17.2 12 17.2C9.12812 17.2 6.8 14.8719 6.8 12C6.8 9.12812 9.12812 6.8 12 6.8ZM12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8ZM17.2 5.6C17.8627 5.6 18.4 6.13726 18.4 6.8C18.4 7.46274 17.8627 8 17.2 8C16.5373 8 16 7.46274 16 6.8C16 6.13726 16.5373 5.6 17.2 5.6Z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/eaglefasteners/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:-translate-y-1" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors">
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14 9.94 13.4 10.61 13 11.23V10.13H10.87V18.5H13V13.82C13 13.19 13.52 12.67 14.15 12.67 14.78 12.67 15.3 13.19 15.3 13.82V18.5H17.43M8.11 18.5V10.13H5.97V18.5H8.11M7.04 5.96C6.27 5.96 5.64 6.59 5.64 7.36 5.64 8.13 6.27 8.76 7.04 8.76 7.81 8.76 8.44 8.13 8.44 7.36 8.44 6.59 7.81 5.96 7.04 5.96Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Dedicated Bottom Copyright Bar */}
      <div className="bg-[#020509] border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="pl-14 md:pl-16 font-light text-center md:text-left">
            © {new Date().getFullYear()} Eagle Engineering. All Rights Reserved.
          </p>
          <div className="flex space-x-6 font-medium tracking-wide pr-0 md:pr-16">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/quality" className="hover:text-white transition-colors">Quality Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
