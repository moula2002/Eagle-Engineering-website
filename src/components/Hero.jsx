import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Users, 
  Box,
  Factory,
  Percent,
  CheckCircle,
  Shield,
  Headphones,
  Settings
} from 'lucide-react';
import { Counter } from './Counter';
import heroFastenersBanner from '../assets/hero_fasteners_banner.png';

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

export const Hero = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (idx) => {
    setFlippedIndex(prev => prev === idx ? null : idx);
  };

  return (
    <>
      <section className="relative w-full bg-[#f8fafc] overflow-hidden pt-14 sm:pt-16 md:pt-20 pb-6 sm:pb-8 border-b border-gray-100">
        
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

        {/* Full-Width Hero Banner (Edge-to-Edge) */}
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full overflow-hidden shadow-sm bg-white"
          >
            {/* Full-Width Banner Image */}
            <img
              src={heroFastenersBanner}
              alt="Built to Hold. Made to Last. Eagle Engineering Fasteners and Hardware"
              className="w-full h-auto object-cover block select-none"
              loading="eager"
            />
          </motion.div>
        </div>

        {/* Precision Engineering Key Statistics Dock */}
        <div className="w-full relative z-20 mt-6 sm:mt-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-2">
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_40px_-10px_rgba(11,37,69,0.08)] overflow-hidden">
            
            {/* Top Red Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E31E24]" />

            {/* Grid of 4 Statistics with Clean Dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 relative z-10">
              
              {/* Stat 1: 5000+ CUSTOMERS */}
              <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 lg:p-6 hover:bg-slate-50/60 transition-all duration-300 group cursor-default">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF1F2] border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] transition-all duration-300 shadow-xs">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#E31E24] group-hover:text-white transition-all duration-300" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#0B2545] leading-none flex items-baseline tracking-tight">
                    <Counter from={0} to={5000} duration={2.5} suffix="+" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0B2545] uppercase tracking-wider mt-1.5 truncate">
                    CUSTOMERS
                  </div>
                  <div className="text-[10px] sm:text-[11px] xl:text-xs text-slate-500 font-normal mt-0.5 whitespace-nowrap">
                    Trusted Across Industries
                  </div>
                </div>
              </div>

              {/* Stat 2: 200+ PRODUCTS */}
              <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 lg:p-6 hover:bg-slate-50/60 transition-all duration-300 group cursor-default">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF1F2] border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] transition-all duration-300 shadow-xs">
                  <Box className="w-6 h-6 sm:w-7 sm:h-7 text-[#E31E24] group-hover:text-white transition-all duration-300" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#0B2545] leading-none flex items-baseline tracking-tight">
                    <Counter from={0} to={200} duration={2} suffix="+" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0B2545] uppercase tracking-wider mt-1.5 truncate">
                    PRODUCTS
                  </div>
                  <div className="text-[10px] sm:text-[11px] xl:text-xs text-slate-500 font-normal mt-0.5 whitespace-nowrap">
                    Wide Range of Fastening Solutions
                  </div>
                </div>
              </div>

              {/* Stat 3: 15+ INDUSTRIES SERVED */}
              <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 lg:p-6 hover:bg-slate-50/60 transition-all duration-300 group cursor-default">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF1F2] border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] transition-all duration-300 shadow-xs">
                  <Factory className="w-6 h-6 sm:w-7 sm:h-7 text-[#E31E24] group-hover:text-white transition-all duration-300" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#0B2545] leading-none flex items-baseline tracking-tight">
                    <Counter from={0} to={15} duration={1.5} suffix="+" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0B2545] uppercase tracking-wider mt-1.5 truncate">
                    INDUSTRIES SERVED
                  </div>
                  <div className="text-[10px] sm:text-[11px] xl:text-xs text-slate-500 font-normal mt-0.5 whitespace-nowrap">
                    Construction, Industrial & More
                  </div>
                </div>
              </div>

              {/* Stat 4: 10+ YEARS SERVED */}
              <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 lg:p-6 hover:bg-slate-50/60 transition-all duration-300 group cursor-default">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF1F2] border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24] transition-all duration-300 shadow-xs">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#E31E24] group-hover:text-white transition-all duration-300" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#0B2545] leading-none flex items-baseline tracking-tight">
                    <Counter from={0} to={10} duration={1.5} suffix="+" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0B2545] uppercase tracking-wider mt-1.5 truncate">
                    YEARS SERVED
                  </div>
                  <div className="text-[10px] sm:text-[11px] xl:text-xs text-slate-500 font-normal mt-0.5 whitespace-nowrap">
                    A Decade of Trust & Growth
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Key Highlights / Features Strip */}
      <section className="bg-gray-50 pb-16 pt-14 relative z-30 bg-industrial-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading: WHY CHOOSE EAGLE ENGINEERING? */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--brand-red)]"></div>
              <span className="text-[var(--brand-red)] font-bold uppercase tracking-widest text-xs sm:text-sm">WHY CHOOSE US</span>
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
    </>
  );
};

export default Hero;
