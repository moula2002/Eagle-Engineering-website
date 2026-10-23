import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Users, 
  Box,
  Factory
} from 'lucide-react';
import { Counter } from './Counter';
import heroFastenersBanner from '../assets/hero_fasteners_banner.png';

export const Hero = () => {
  return (
      <section className="relative w-full bg-[#f8fafc] overflow-hidden pt-20 sm:pt-22 md:pt-22 pb-6 sm:pb-8 border-b border-gray-100">
        
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
                    <Counter from={0} to={16} duration={1.5} suffix="+" />
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
  );
};

export default Hero;
