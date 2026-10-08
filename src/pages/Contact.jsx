import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
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
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px]"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px]"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px]"
                />
              </div>
              <div>
                <textarea 
                  rows={5} 
                  placeholder="Message" 
                  className="w-full px-5 py-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[var(--brand-blue)] focus:bg-white transition-all text-[15px] resize-none"
                ></textarea>
              </div>
              <div className="flex justify-start">
                <button 
                  type="button"
                  className="px-8 py-4 bg-[var(--brand-red)] text-white font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-all rounded-xl w-full shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] hover:-translate-y-0.5"
                >
                  SEND MESSAGE →
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.808012643534!2d76.9537446!3d11.0116773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
          title="Google Map"
        ></iframe>
      </motion.div>
    </section>
  );
};
