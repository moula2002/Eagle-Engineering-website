import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Layers, 
  Building2, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import qualityAssurancePhoto from '../assets/quality_assurance_photo.png';

export const Quality = () => {
  const priorities = [
    {
      number: '1.',
      title: 'Product Quality & Reliability',
      icon: ShieldCheck,
      description: 'We supply fastening products selected for strength, durability, dimensional accuracy and dependable performance.'
    },
    {
      number: '2.',
      title: 'International Standards',
      icon: Award,
      description: 'Our product range includes fasteners manufactured in accordance with applicable international standards and customer specifications.'
    },
    {
      number: '3.',
      title: 'Corrosion Resistance',
      icon: Layers,
      description: 'We offer fastening solutions with suitable protective coatings designed to enhance durability in different environmental conditions.'
    },
    {
      number: '4.',
      title: 'Trusted Supplier Network',
      icon: Building2,
      description: 'We work with established manufacturers and suppliers to maintain consistent product quality and reliable availability.'
    },
    {
      number: '5.',
      title: 'Customer Satisfaction',
      icon: HeartHandshake,
      description: 'We are committed to providing dependable products, technical product guidance and responsive customer service.'
    }
  ];

  return (
    <section id="quality" className="py-0 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative bg-[#0b2545] pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565439390111-e6e73775f0f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/70 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            className="text-sm tracking-widest text-[var(--brand-red)] mb-2 uppercase font-bold"
          >
            QUALITY ASSURANCE
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 uppercase tracking-wide"
          >
            QUALITY ASSURANCE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide flex items-center gap-2"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">&gt;</span>
            <span className="text-white">Quality Assurance</span>
          </motion.p>
        </div>
      </div>

      {/* Main Content Area: Narrative & Photo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Text Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h4 className="text-xs sm:text-sm font-bold text-[#0b2545] tracking-widest uppercase mb-2 font-heading">
              QUALITY ASSURANCE
            </h4>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 uppercase tracking-wide mb-6 leading-tight">
              COMMITTED TO QUALITY. BUILT ON TRUST.
            </h2>

            <div className="space-y-4 text-gray-700 text-sm sm:text-[15px] leading-relaxed text-justify">
              <p>
                At Eagle Engineering, quality is the foundation of our business. We are committed to supplying high-quality industrial fasteners, anchors, uPVC hardware, chipboard screws, drywall screws and fastening solutions that meet the diverse requirements of our customers across a wide range of industries.
              </p>
              <p>
                With over <strong className="text-gray-900 font-bold">10 years of industry experience</strong>, we understand the importance of product reliability, dimensional accuracy, strength and durability. We work closely with trusted manufacturers and suppliers to source products manufactured in accordance with applicable international standards and customer specifications.
              </p>
              <p>
                Our commitment to quality extends beyond product selection. We emphasize <strong className="text-gray-900 font-bold">consistent product specifications, reliable performance, appropriate corrosion protection and dependable supply</strong> to ensure our customers receive fastening solutions suitable for their applications.
              </p>
              <p>
                We recognize that different industries require different levels of performance. From roofing and cladding to construction, uPVC fabrication, furniture manufacturing and drywall installations, we strive to provide products that meet the technical and functional requirements of each application.
              </p>
              <p>
                Through continuous improvement, strong supplier relationships and a customer-focused approach, we aim to maintain high standards of product quality, service and customer satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Right: Quality Inspection Image from Image 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white p-2">
              <img 
                src={qualityAssurancePhoto} 
                alt="Quality Assurance Inspection" 
                className="w-full h-auto object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="p-4 bg-gray-50/90 rounded-b-xl border-t border-gray-100 mt-2">
                <span className="text-xs font-bold text-[#0b2545] uppercase tracking-wider block">
                  Precision Inspection & Quality Verification
                </span>
                <span className="text-[11px] text-gray-500 mt-0.5 block">
                  Dimensional accuracy, thread pitch verification, and pull-out strength testing
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* OUR QUALITY PRIORITIES (Container-Wise UI Design) */}
      <section className="py-16 sm:py-20 bg-industrial-pattern border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--brand-red)]"></div>
              <span className="text-[var(--brand-red)] font-bold uppercase tracking-widest text-xs sm:text-sm">KEY BENCHMARKS</span>
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--brand-red)]"></div>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0b2545] uppercase tracking-wide">
              OUR QUALITY PRIORITIES
            </h3>
          </div>

          {/* Container-wise Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
            {priorities.map((item, idx) => {
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
                  {/* Top Circular Icon */}
                  <div className="text-[var(--brand-red)] mb-4 bg-red-50/70 p-4 rounded-full group-hover:scale-110 group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                  </div>

                  {/* Priority Number Pill */}
                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[var(--brand-red)] bg-red-50/90 px-3 py-1 rounded-full mb-3 border border-red-100">
                    Priority 0{idx + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-[#0b2545] font-bold text-base sm:text-lg uppercase tracking-wide font-['Oswald'] mb-3">
                    {item.number} {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </section>
  );
};

export default Quality;
