import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { createInquiry } from '../api/api';

export const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: location.state?.productName ? `Quote Request: ${location.state.productName}` : '',
    message: '',
    productImage: location.state?.productImage || ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    try {
      const result = await createInquiry(formData);
      if (result.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: result.message || 'Failed to submit.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'An error occurred while submitting.' });
    }
  };
  return (
    <section id="contact" className="py-0 bg-gray-50 min-h-screen bg-industrial-pattern">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-sm tracking-widest text-[var(--brand-red)] mb-2 uppercase font-bold">CONTACT</motion.p>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide">CONTACT US</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-sm text-gray-300 font-medium tracking-wide">Home &gt; Contact</motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-heading font-bold text-[#0b2545] mb-6 uppercase tracking-wide">
              GET IN TOUCH
            </h2>
            <p className="text-gray-500 mb-12 text-base font-light leading-relaxed max-w-md">
              We are here to help. Reach out to us for any inquiries, quotations or support.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-white border border-gray-100 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-[var(--brand-red)] group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                </div>
                <div className="ml-6 flex flex-col items-start">
                  <h4 className="text-[16px] font-bold text-[#0b2545] mb-1">Phone</h4>
                  <a href="tel:+918079667629" className="text-[15px] text-gray-500 font-light hover:text-[var(--brand-red)] transition-colors inline-block">+91 80-7966 7629 (Fax)</a>
                  <a href="tel:+919632144367" className="text-[15px] text-gray-500 font-light hover:text-[var(--brand-red)] transition-colors inline-block">+91 96321 44367</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-white border border-gray-100 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-[var(--brand-red)] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                </div>
                <div className="ml-6 flex flex-col items-start">
                  <h4 className="text-[16px] font-bold text-[#0b2545] mb-1">Email</h4>
                  <a href="mailto:info@eagleeng.in" className="text-[15px] text-gray-500 font-light hover:text-[var(--brand-red)] transition-colors inline-block">info@eagleeng.in</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-white border border-gray-100 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-[var(--brand-red)] group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[var(--brand-red)] group-hover:text-white transition-colors" />
                </div>
                <div className="ml-6">
                  <h4 className="text-[16px] font-bold text-[#0b2545] mb-1">Address</h4>
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                    <strong>EAGLE ENGINEERING</strong><br />
                    No. 22, First Floor, Kothnoor Dinne,<br />
                    JP Nagar 8th Phase, Kalena Agrahara, Kothnur,<br />
                    Bengaluru, Karnataka - 560076
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-8 mt-10 border-t border-gray-200">
              <h4 className="text-[16px] font-bold text-[#0b2545] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/ieagleng/?modal=admin_todo_tour" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                  </svg>
                </a>
                <a href="https://x.com/ieagleng" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ieagleng/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors">
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.6 4 4 5.6 4 7.6V16.4C4 18.4 5.6 20 7.6 20H16.4C18.4 20 20 18.4 20 16.4V7.6C20 5.6 18.4 4 16.4 4H7.6ZM12 6.8C14.8719 6.8 17.2 9.12812 17.2 12C17.2 14.8719 14.8719 17.2 12 17.2C9.12812 17.2 6.8 14.8719 6.8 12C6.8 9.12812 9.12812 6.8 12 6.8ZM12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8ZM17.2 5.6C17.8627 5.6 18.4 6.13726 18.4 6.8C18.4 7.46274 17.8627 8 17.2 8C16.5373 8 16 7.46274 16 6.8C16 6.13726 16.5373 5.6 17.2 5.6Z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/eaglefasteners/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition-all duration-300 group shadow-sm hover:shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors">
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14 9.94 13.4 10.61 13 11.23V10.13H10.87V18.5H13V13.82C13 13.19 13.52 12.67 14.15 12.67 14.78 12.67 15.3 13.19 15.3 13.82V18.5H17.43M8.11 18.5V10.13H5.97V18.5H8.11M7.04 5.96C6.27 5.96 5.64 6.59 5.64 7.36 5.64 8.13 6.27 8.76 7.04 8.76 7.81 8.76 8.44 8.13 8.44 7.36 8.44 6.59 7.81 5.96 7.04 5.96Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#0b2545] mb-8 font-heading uppercase tracking-wide">SEND US A MESSAGE</h3>
            
            {status.success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-medium">
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}
            
            {status.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl font-medium">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name" 
                  className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px]"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email" 
                  className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px]"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number" 
                  className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px]"
                />
              </div>
              <div className="relative flex items-center">
                {formData.productImage && (
                  <div className="absolute left-3 w-10 h-10 bg-white rounded-lg p-1 border border-gray-100 flex items-center justify-center pointer-events-none">
                    <img src={formData.productImage} alt="Product" className="max-w-full max-h-full object-contain" />
                  </div>
                )}
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject" 
                  className={`w-full ${formData.productImage ? 'pl-16' : 'px-5'} py-4 pr-5 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px]`}
                />
              </div>
              <div>
                <textarea 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message" 
                  className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px] resize-none"
                ></textarea>
              </div>
              <div className="flex justify-start">
                <button 
                  type="submit"
                  disabled={status.loading}
                  className="px-8 py-4 bg-[var(--brand-red)] text-white font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-all rounded-xl w-full shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] hover:-translate-y-0.5 disabled:opacity-70 flex justify-center items-center"
                >
                  {status.loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : 'SEND MESSAGE →'}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Google Map Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full h-[500px] mt-10 relative"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4776113852863!2d77.5852965!3d12.8769811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152e562345af%3A0x37c75858c0db71df!2sEagle%20Engineering!5e0!3m2!1sen!2sin!4v1791458854562!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
          className="grayscale hover:grayscale-0 transition-all duration-700"
          title="Google Map"
        ></iframe>
      </motion.div>
    </section>
  );
};
