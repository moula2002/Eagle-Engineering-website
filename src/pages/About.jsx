import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Award } from 'lucide-react';

export const About = () => {
  const pillars = [
    {
      title: 'OUR VISION',
      icon: Eye,
      text: 'To be a trusted leader in fastening solutions, recognized for quality, innovation and reliability across industries.'
    },
    {
      title: 'OUR MISSION',
      icon: Target,
      text: 'To provide premium fastening solutions through consistent quality, competitive pricing, reliable supply and exceptional customer service.'
    },
    {
      title: 'OUR VALUES',
      icon: Award,
      text: 'Quality, integrity, reliability and customer commitment are the foundation of our business and lasting partnerships.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/70 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            className="text-sm tracking-widest text-[var(--brand-red)] mb-2 uppercase font-bold"
          >
            ABOUT US
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 uppercase tracking-wide"
          >
            ABOUT US
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide"
          >
            Home &gt; About Us
          </motion.p>
        </div>
      </div>

      {/* Main Content Section: WHO WE ARE */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-8">
            <h4 className="text-xs sm:text-sm font-bold text-gray-800 tracking-widest uppercase mb-3 font-heading">
              WHO WE ARE
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-heading font-bold text-[#0b2545] uppercase tracking-wide leading-tight">
              YOUR TRUSTED PARTNER IN FASTENING SOLUTIONS
            </h2>
          </div>

          {/* Paragraphs with bold highlights matching image */}
          <div className="space-y-5 text-gray-700 text-sm sm:text-[15px] leading-relaxed text-justify">
            <p>
              Eagle Engineering is a trusted supplier of premium industrial fasteners, anchors, uPVC door and window hardware, chipboard screws, drywall screws, and a comprehensive range of fastening solutions catering to diverse industrial and construction applications.
            </p>
            <p>
              With over <strong className="text-gray-900 font-bold">10 years of industry experience</strong>, we have established a strong reputation for delivering high-quality products, dependable service, and customer satisfaction. Our commitment to quality and reliability has enabled us to build long-lasting relationships with customers across a wide range of industries.
            </p>
            <p>
              We offer an extensive selection of fastening products designed to meet international standards and diverse application requirements. Our products are recognized for their <strong className="text-gray-900 font-bold">superior strength, durability, corrosion resistance, precision, and consistent performance</strong>, ensuring dependable solutions for demanding applications.
            </p>
            <p>
              At Eagle Engineering, we understand the importance of quality, product availability, and timely delivery. Through strong supplier partnerships, technical product knowledge, and efficient inventory management, we strive to provide <strong className="text-gray-900 font-bold">competitive pricing, consistent quality, and reliable supply</strong> to meet our customers' evolving requirements.
            </p>
            <p>
              Our fastening solutions serve various sectors, including <strong className="text-gray-900 font-bold">Pre-Engineered Buildings (PEB), roofing and cladding, construction, infrastructure, uPVC doors and windows, furniture manufacturing, woodworking, interior applications, and general engineering industries.</strong>
            </p>
            <p>
              Driven by a customer-focused approach, we continuously work towards expanding our product portfolio, strengthening our supply capabilities, and delivering greater value to our customers. We believe that every successful partnership is built on trust, integrity, quality, and dependable service.
            </p>
          </div>

        </div>
      </section>

      {/* STRATEGIC FOUNDATION: OUR VISION, OUR MISSION, OUR VALUES (Container UI Design) */}
      <section className="py-16 sm:py-20 bg-industrial-pattern border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0b2545] uppercase tracking-wide">
              OUR STRATEGIC FOUNDATION
            </h3>
            <div className="w-16 h-1 bg-[var(--brand-red)] mx-auto mt-3 rounded-full" />
          </div>

          {/* 3 Standalone Container Cards matching user's requested card UI design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (idx + 1), duration: 0.5 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col items-center justify-center text-center p-7 sm:p-8 hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="text-[var(--brand-red)] mb-4 bg-red-50/70 p-4 rounded-full group-hover:scale-110 group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[#0b2545] font-bold text-base sm:text-lg uppercase tracking-wide font-['Oswald'] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-light">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
