import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Shield, 
  Headphones, 
  Settings 
} from 'lucide-react';

const features = [
  {
    title: 'PREMIUM QUALITY',
    icon: CheckCircle,
    description: 'High-quality fasteners and hardware engineered for strength, durability and reliable performance.'
  },
  {
    title: 'COMPLETE FASTENING SOLUTIONS',
    icon: Shield,
    description: 'A comprehensive range of fasteners, anchors and hardware solutions for diverse industrial applications.'
  },
  {
    title: 'CUSTOMER-FOCUSED SUPPORT',
    icon: Headphones,
    description: 'Dedicated customer service, technical guidance and reliable support to meet your fastening requirements.'
  },
  {
    title: 'INDUSTRY EXPERTISE',
    icon: Settings,
    description: 'Over a decade of experience delivering dependable fastening solutions across a wide range of industries.'
  }
];

export const WhyChooseUs = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (idx) => {
    setFlippedIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-gray-50 pb-16 pt-14 relative z-30 bg-industrial-pattern border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: WHY CHOOSE EAGLE ENGINEERING? */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--brand-red)]"></div>
            <span className="text-[var(--brand-red)] font-bold uppercase tracking-widest text-xs sm:text-sm">
              WHY CHOOSE US
            </span>
            <div className="h-[2px] w-8 sm:w-12 bg-[var(--brand-red)]"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0b2545] uppercase tracking-wide">
            WHY CHOOSE <span className="text-[var(--brand-red)]">EAGLE ENGINEERING?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isFlipped = flippedIndex === idx;

            return (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (idx + 1), duration: 0.5 }}
                className="group h-[280px] w-full flip-card-container cursor-pointer select-none"
                onClick={() => handleCardClick(idx)}
              >
                <div className={`flip-card-inner rounded-2xl ${isFlipped ? 'is-flipped' : ''}`}>
                  {/* Front */}
                  <div className="flip-card-front bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col items-center justify-center text-center p-6 sm:p-7">
                    <div className="text-[var(--brand-red)] mb-3.5 bg-red-50/70 p-3.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                    </div>
                    <h3 className="text-[#0b2545] font-bold text-[14px] sm:text-[15px] uppercase tracking-wide font-['Oswald'] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-light max-w-[240px]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back bg-[#0b2545] rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-7 border border-[#0b2545] shadow-[0_12px_36px_rgba(11,37,69,0.35)]">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3 text-[var(--brand-red)]">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className="text-[var(--brand-red)] font-bold text-[14px] sm:text-[15px] mb-2 uppercase tracking-wide font-['Oswald']">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light mb-3 max-w-[240px]">
                      {feature.description}
                    </p>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      Eagle Standard
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
