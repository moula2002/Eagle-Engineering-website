import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { LandlineIcon } from './LandlineIcon';

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
    <footer className="bg-[#0b2545] text-white pt-14 sm:pt-16 pb-0 mt-auto border-t-4 border-[#E31E24] relative select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact 4-Column Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-14">

          {/* ============================================================ */}
          {/* COLUMN 1: QUICK LINKS (2 / 12 cols)                           */}
          {/* ============================================================ */}
          <div className="lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold font-['Oswald'] uppercase tracking-wider text-white">
              QUICK <span className="text-[#E31E24]">LINKS</span>
            </h4>
            {/* Red Underline Accent */}
            <div className="h-[2px] w-9 bg-[#E31E24] mt-2 mb-5" />

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={(e) => handleQuickLink(e, link.path)}
                    className="text-gray-300 text-xs sm:text-[13.5px] hover:text-[#E31E24] transition-colors flex items-center group font-normal"
                  >
                    <span className="text-gray-400 group-hover:text-[#E31E24] mr-2.5 font-light transition-colors text-xs">&gt;</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: CONTACT US (4 / 12 cols)                            */}
          {/* ============================================================ */}
          <div className="lg:col-span-4">
            <h4 className="text-base sm:text-lg font-bold font-['Oswald'] uppercase tracking-wider text-white">
              CONTACT <span className="text-[#E31E24]">US</span>
            </h4>
            {/* Red Underline Accent */}
            <div className="h-[2px] w-9 bg-[#E31E24] mt-2 mb-5" />

            <ul className="space-y-3.5">
              {/* Address */}
              <li className="flex items-start space-x-3.5 text-xs sm:text-[13.5px] text-gray-300 font-normal">
                <div className="w-9 h-9 rounded-2xl bg-[#133056] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4 text-[#E31E24]" />
                </div>
                <div className="leading-snug">
                  <strong className="block text-white font-bold text-sm mb-1 tracking-wide">EAGLE ENGINEERING</strong>
                  <span className="text-gray-300 text-xs sm:text-[13px] leading-relaxed block font-light">
                    No. 22, First Floor, Kothnoor Dinne,<br />
                    JP Nagar 8th Phase, Kalena Agrahara,<br />
                    Kothnur, Bengaluru, Karnataka - 560078
                  </span>
                </div>
              </li>

              {/* Landline */}
              <li className="flex items-center space-x-3.5 text-xs sm:text-[13.5px] text-gray-300 font-normal">
                <div className="w-9 h-9 rounded-2xl bg-[#133056] border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <LandlineIcon className="w-4 h-4 text-[#E31E24]" />
                </div>
                <a href="tel:+918079667629" className="hover:text-[#E31E24] text-gray-300 transition-colors font-medium">
                  +91 80-7966 7629
                </a>
              </li>

              {/* Mobile Phone */}
              <li className="flex items-center space-x-3.5 text-xs sm:text-[13.5px] text-gray-300 font-normal">
                <div className="w-9 h-9 rounded-2xl bg-[#133056] border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 text-[#E31E24]" />
                </div>
                <a href="tel:+919632144367" className="hover:text-[#E31E24] text-gray-300 transition-colors font-medium">
                  +91 96321 44367
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center space-x-3.5 text-xs sm:text-[13.5px] text-gray-300 font-normal">
                <div className="w-9 h-9 rounded-2xl bg-[#133056] border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 text-[#E31E24]" />
                </div>
                <a href="mailto:info@eagleeng.in" className="hover:text-[#E31E24] text-gray-300 transition-colors font-medium">
                  info@eagleeng.in
                </a>
              </li>

              {/* Working Hours */}
              <li className="flex items-center space-x-3.5 text-xs sm:text-[13.5px] text-gray-300 font-normal">
                <div className="w-9 h-9 rounded-2xl bg-[#133056] border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-4 h-4 text-[#E31E24]" />
                </div>
                <span className="text-gray-300 font-normal">
                  Mon – Sat: 9:00 AM – 6:30 PM
                </span>
              </li>
            </ul>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: OUR LOCATION (Google Map) (3 / 12 cols)            */}
          {/* ============================================================ */}
          <div className="lg:col-span-3">
            <h4 className="text-base sm:text-lg font-bold font-['Oswald'] uppercase tracking-wider text-white">
              OUR <span className="text-[#E31E24]">LOCATION</span>
            </h4>
            {/* Red Underline Accent */}
            <div className="h-[2px] w-9 bg-[#E31E24] mt-2 mb-5" />

            {/* Embedded Google Map with rounded card styling matching screenshot */}
            <div className="w-full h-[205px] sm:h-[215px] rounded-2xl overflow-hidden shadow-lg border border-white/15 bg-white relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4776113852863!2d77.5852965!3d12.8769811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152e562345af%3A0x37c75858c0db71df!2sEagle%20Engineering!5e0!3m2!1sen!2sin!4v1791458854562!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Eagle Engineering Google Map"
                className="w-full h-full block"
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 4: NEED FASTENING SOLUTIONS? (3 / 12 cols)            */}
          {/* ============================================================ */}
          <div className="lg:col-span-3">
            <h4 className="text-base sm:text-lg font-bold font-['Oswald'] uppercase tracking-wider text-white">
              NEED <span className="text-[#E31E24]">FASTENING</span> SOLUTIONS?
            </h4>
            {/* Red Underline Accent */}
            <div className="h-[2px] w-9 bg-[#E31E24] mt-2 mb-5" />

            <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed font-light mb-5">
              Looking for high-quality fasteners, anchors, uPVC hardware, chipboard screws or drywall screws? Contact our team for product information, competitive quotations and reliable supply.
            </p>
            
            {/* Glowing Request A Quote Button */}
            <div className="mb-6">
              <Link 
                to="/contact" 
                className="w-full max-w-[240px] py-3.5 px-6 bg-[#E31E24] hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-[0_6px_22px_rgba(227,30,36,0.45)] hover:shadow-[0_8px_28px_rgba(227,30,36,0.6)] hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0"></span>
                <span>REQUEST A QUOTE</span>
              </Link>
            </div>

            {/* Social Media Text Only */}
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

      {/* ============================================================ */}
      {/* EXACT COPYRIGHT BAR (Centered)                                */}
      {/* ============================================================ */}
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
