import React from 'react';
import { Eye, Rocket, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import engineerWorking from '../assets/engineer_working.png';

export const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545]/60 to-transparent h-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-sm tracking-widest text-[var(--brand-red)] mb-2 uppercase font-bold">ABOUT US</motion.p>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide">ABOUT US</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-sm text-gray-300 font-medium tracking-wide">Home &gt; About Us</motion.p>
        </div>
      </div>

      <section className="py-24 relative overflow-hidden bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl text-[#0b2545] font-bold mb-8 font-heading uppercase tracking-wide">WHO WE ARE</h3>
              <p className="text-gray-500 leading-relaxed text-base md:text-[15px] font-light text-justify md:text-center px-4">
                Eagle Engineering is one of the leading Importers/Exporters and Suppliers of Industrial fasteners. We supply a wide range of fasteners and self-drilling screws, which comply with international standards and specifications. Our fasteners are made in accordance to particular requirements, and are manufactured to best suit the needs of the clients. Moreover, the products offered by us are widely known for their features like high strength, superior finish, corrosion resistance, and accurate dimensions. We have never compromised on the quality and the services provided to the customer. Our company has established a well-equipped infrastructural unit. It has various departments like Technical, Quality control, and others, which helps us in performing our business process in the best possible way. We provide technical support, customer service, experience, and dependability. We maintain an extensive inventory of Fasteners to provide our customers with fast delivery of their products.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            
            <motion.div variants={fadeUp} className="bg-white border border-gray-100 p-10 text-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--brand-red)] transition-all duration-300">
                <Eye className="w-10 h-10 text-[var(--brand-red)] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-[#0b2545] font-heading font-bold text-2xl mb-4 uppercase tracking-wide">Vision</h4>
              <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                To become the world's leading fasteners company by achieving sustainable and consistent growth by providing consumer preferred products that enable superior quality with best service.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white border border-gray-100 p-10 text-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--brand-red)] transition-all duration-300">
                <Rocket className="w-10 h-10 text-[var(--brand-red)] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-[#0b2545] font-heading font-bold text-2xl mb-4 uppercase tracking-wide">Mission</h4>
              <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                Eagle Engineering is dedication to the highest quality of customer service delivered with a sense of warmth, friendliness, individual pride, and company spirit.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white border border-gray-100 p-10 text-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--brand-red)] transition-all duration-300">
                <CheckCircle className="w-10 h-10 text-[var(--brand-red)] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-[#0b2545] font-heading font-bold text-2xl mb-4 uppercase tracking-wide">Value</h4>
              <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                We committed to our values on reliability, integrity, customer Commitment, Innovation, passion, Ethics and Teamwork.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};
