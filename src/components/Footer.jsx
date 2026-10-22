import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Phone, PhoneCall, Mail, Clock, ChevronRight } from 'lucide-react';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleQuickLink = (e, path) => {
    if (path.includes('#')) {
      e.preventDefault();
      const [route, hash] = path.split('#');
      if (location.pathname === route || (route === '' && location.pathname === '/')) {
        const elem = document.getElementById(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(route || '/');
        setTimeout(() => {
          const elem = document.getElementById(hash);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Industries We Serve', path: '/#industries' },
    { name: 'Quality Assurance', path: '/quality' },
    { name: 'Download Catalogue', path: '/download' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-[#0b2545] text-white pt-16 md:pt-20 pb-0 mt-auto border-t-4 border-[var(--brand-red)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16">

          {/* Column 1: Quick Links (4 cols = 33.3%) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-base sm:text-lg font-bold font-heading uppercase tracking-wider mb-6 text-white flex items-center">
              Quick <span className="text-[var(--brand-red)] ml-2">Links</span>
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={(e) => handleQuickLink(e, link.path)}
                    className="text-gray-300 text-sm hover:text-[var(--brand-red)] transition-colors flex items-center group font-normal"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-gray-500 group-hover:text-[var(--brand-red)] group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Us (5 cols = 41.7%) */}
          <div className="md:col-span-8 lg:col-span-5">
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
                  <PhoneCall className="w-4 h-4 text-[var(--brand-red)] group-hover:text-white transition-colors" />
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

          {/* Column 3: Need Fastening Solutions (3 cols = 25%) */}
          <div className="md:col-span-12 lg:col-span-3">
            <h4 className="text-base sm:text-lg font-bold font-heading uppercase tracking-wider mb-4 text-white">
              NEED FASTENING SOLUTIONS?
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal mb-5">
              Looking for high-quality fasteners, anchors, uPVC hardware, chipboard screws or drywall screws? Contact our team for product information, competitive quotations and reliable supply.
            </p>
            
            <div className="mb-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[var(--brand-red)] hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-[0_4px_14px_rgba(229,53,36,0.35)] hover:-translate-y-0.5"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                REQUEST A QUOTE
              </Link>
            </div>

            <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-gray-300">
              <a 
                href="https://www.linkedin.com/company/eaglefasteners/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--brand-red)] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="https://www.facebook.com/ieagleng/?modal=admin_todo_tour" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--brand-red)] transition-colors"
              >
                Facebook
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="https://www.instagram.com/ieagleng/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--brand-red)] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Dedicated Bottom Copyright Bar */}
      <div className="bg-[#07192f] border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-xs text-gray-400">
          <p className="font-light text-center">
            © {new Date().getFullYear()} Eagle Engineering. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
