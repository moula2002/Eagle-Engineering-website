import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  Crosshair, 
  ShieldCheck, 
  Cog, 
  Award,
  Users, 
  Box,
  Percent,
  CheckCircle,
  Shield,
  Headphones,
  Settings
} from 'lucide-react';
import { Counter } from './Counter';

import heroRightMachinery from '../assets/hero_right_clean_perfect.jpg';

const features = [
  {
    title: 'HIGH QUALITY',
    icon: CheckCircle,
    description: 'Precision manufacturing with unmatched quality assurance standards.'
  },
  {
    title: 'RELIABLE SOLUTIONS',
    icon: Shield,
    description: 'Durable and long-lasting performance for extreme environments.'
  },
  {
    title: 'CUSTOM SUPPORT',
    icon: Headphones,
    description: 'Dedicated engineering team providing bespoke technical support.'
  },
  {
    title: 'INDUSTRY EXPERTISE',
    icon: Settings,
    description: 'Decades of proven excellence in complex mechanical engineering.'
  }
];

export const Hero = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (idx) => {
    setFlippedIndex(prev => prev === idx ? null : idx);
  };

  return (
    <>
      <section className="relative w-full bg-[#f8fafc] overflow-hidden pt-24 sm:pt-28 md:pt-30 pb-6 sm:pb-8 border-b border-gray-100 min-h-[640px] lg:min-h-[720px] xl:min-h-[780px] flex flex-col justify-between">
      
      {/* Right Background Visual - Industrial Machinery with Smooth White Transition */}
      <div className="hidden lg:block absolute top-0 right-0 h-[480px] xl:h-[520px] w-[57%] xl:w-[55%] z-0 select-none overflow-hidden">
        <img
          src={heroRightMachinery}
          alt="Precision Industrial Machinery and Rollers"
          className="w-full h-full object-cover object-top transform scale-[1.01]"
        />

        {/* Smooth Bottom White Fade to completely remove any dark background */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/90 to-transparent pointer-events-none" />
        
        {/* Smooth Left White Fade */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#f8fafc] to-transparent pointer-events-none" />

        {/* Top-Right Signature: Precision in Motion */}
        <div className="absolute top-24 xl:top-28 right-8 xl:right-16 text-right z-20 pointer-events-none select-none">
          <p className="font-script text-white text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)] leading-tight tracking-wide">
            Precision <br />
            <span className="pl-6 text-white">in Motion</span>
          </p>
          <div className="w-24 xl:w-36 h-[2.5px] bg-gradient-to-r from-transparent via-[var(--brand-red)] to-transparent mt-1.5 ml-auto" />
        </div>
      </div>

      {/* Background CAD Blueprint Watermarks on Left */}
      <div className="absolute top-0 left-0 bottom-0 w-full lg:w-[48%] pointer-events-none select-none overflow-hidden z-0">
        {/* Subtle engineering grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        
        {/* Technical drafting watermark circles & dimensions */}
        <svg 
          className="absolute top-10 left-[62%] w-[500px] h-[500px] text-gray-300/40 -translate-x-1/2 opacity-70" 
          viewBox="0 0 500 500" 
          fill="none" 
          stroke="currentColor"
        >
          <circle cx="250" cy="250" r="230" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="170" strokeWidth="1.5" stroke="#94a3b8" strokeOpacity="0.5" />
          <circle cx="250" cy="250" r="105" strokeWidth="0.8" strokeDasharray="6 6" />
          <circle cx="250" cy="250" r="42" strokeWidth="1" />
          <line x1="250" y1="10" x2="250" y2="490" strokeWidth="0.8" strokeDasharray="8 4" />
          <line x1="10" y1="250" x2="490" y2="250" strokeWidth="0.8" strokeDasharray="8 4" />
          
          {/* Dimension Caliper Marks */}
          <line x1="230" y1="25" x2="270" y2="25" strokeWidth="1.5" stroke="#e62020" strokeOpacity="0.8" />
          <line x1="230" y1="475" x2="270" y2="475" strokeWidth="1.5" stroke="#e62020" strokeOpacity="0.8" />
        </svg>

        {/* Red Ø120 Dimension Marking */}
        <div className="absolute top-14 left-[61%] text-red-500 font-mono text-[11px] font-bold tracking-widest flex items-center gap-1.5 opacity-90 drop-shadow">
          <span className="w-3 h-[1px] bg-red-500" />
          <span>Ø120</span>
          <span className="w-3 h-[1px] bg-red-500" />
        </div>

        {/* Diagonal technical red guideline */}
        <div className="absolute top-0 right-12 w-[1.5px] h-[650px] bg-gradient-to-b from-transparent via-red-500/25 to-transparent rotate-[28deg] origin-top" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-1 sm:pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 xl:col-span-5 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Kicker Line */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-7 sm:w-9 h-[2px] bg-[var(--brand-red)] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#0b1e33] uppercase">
                  ENGINEERED FOR EVERY REVOLUTION
                </span>
                <span className="w-7 sm:w-9 h-[2px] bg-[var(--brand-red)] shrink-0" />
              </div>

              {/* Main Headline */}
              <h1 className="font-['Bebas_Neue'] uppercase font-normal text-6xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[96px] leading-[0.88] tracking-wide text-[#0b1e33] drop-shadow-sm">
                BUILT TO <span className="text-[var(--brand-red)]">MOVE.</span><br />
                MADE TO LAST.
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-[15px] md:text-base font-normal leading-relaxed mt-3.5 sm:mt-4 max-w-lg">
                Manufacturer and supplier of high quality industrial rollers, wheels, fasteners and precision components for a wide range of industries.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
                {/* Explore Components Button */}
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-[var(--brand-red)] text-white font-bold text-sm sm:text-[15px] rounded-full shadow-[0_4px_16px_rgba(230,32,32,0.35)] hover:bg-red-700 hover:shadow-[0_6px_22px_rgba(230,32,32,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore Components</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                {/* Talk to an Engineer Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-white border border-gray-300 text-[#0b1e33] font-semibold text-sm sm:text-[15px] rounded-full shadow-sm hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 text-[#0b1e33]" />
                  <span>Talk to an Engineer</span>
                </Link>
              </div>

              {/* 3 Outlined Feature Badges in Row */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200/80 max-w-lg">
                
                {/* Feature 1: Precision Machining */}
                <div className="flex items-start gap-2 sm:gap-2.5 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-red-500/70 bg-red-50/50 text-[var(--brand-red)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] group-hover:text-white transition-colors duration-200 shadow-sm mt-0.5">
                    <Crosshair className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-['Oswald'] font-bold text-xs sm:text-[13px] tracking-wide text-[#0b1e33] uppercase leading-tight">
                      PRECISION<br />MACHINING
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 leading-tight mt-0.5 hidden sm:block">
                      High accuracy manufacturing
                    </p>
                  </div>
                </div>

                {/* Feature 2: Industrial Durability */}
                <div className="flex items-start gap-2 sm:gap-2.5 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-red-500/70 bg-red-50/50 text-[var(--brand-red)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] group-hover:text-white transition-colors duration-200 shadow-sm mt-0.5">
                    <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-['Oswald'] font-bold text-xs sm:text-[13px] tracking-wide text-[#0b1e33] uppercase leading-tight">
                      INDUSTRIAL<br />DURABILITY
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 leading-tight mt-0.5 hidden sm:block">
                      Built for tough environments
                    </p>
                  </div>
                </div>

                {/* Feature 3: Cross-Industry Expertise */}
                <div className="flex items-start gap-2 sm:gap-2.5 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-red-500/70 bg-red-50/50 text-[var(--brand-red)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] group-hover:text-white transition-colors duration-200 shadow-sm mt-0.5">
                    <Cog className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-['Oswald'] font-bold text-xs sm:text-[13px] tracking-wide text-[#0b1e33] uppercase leading-tight">
                      CROSS-INDUSTRY<br />EXPERTISE
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 leading-tight mt-0.5 hidden sm:block">
                      Serving multiple industrial sectors
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Mobile Fallback: Machinery Image for screens smaller than lg */}
          <div className="lg:hidden relative w-full rounded-2xl overflow-hidden shadow-xl mt-4">
            <img
              src={heroRightMachinery}
              alt="Precision Industrial Machinery"
              className="w-full h-[280px] sm:h-[350px] object-cover"
            />
          </div>

        </div>
      </div>

      {/* Precision Engineering Key Statistics Dock (White Professional Theme) */}
      <div className="w-full relative z-20 mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pb-2">
        <div className="relative rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(11,37,69,0.1)] overflow-hidden backdrop-blur-xl">
          
          {/* Top Precision Red Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[var(--brand-red)] to-transparent opacity-90" />

          {/* Grid of 4 Statistics with Clean Dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 relative z-10">
            
            {/* Stat 1: 10+ Years Exp */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 lg:p-6 hover:bg-slate-50/80 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] transition-all duration-300 shadow-xs relative">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--brand-red)] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-['Oswald'] font-black tracking-tight text-[#0b1e33] leading-none flex items-baseline">
                  <Counter from={0} to={10} duration={2} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest font-['Oswald'] mt-1 truncate">
                  YEARS EXP
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wide hidden sm:block mt-0.5">
                  Industry Excellence
                </div>
              </div>
            </div>

            {/* Stat 2: 500+ Clients */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 lg:p-6 hover:bg-slate-50/80 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] transition-all duration-300 shadow-xs relative">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--brand-red)] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-['Oswald'] font-black tracking-tight text-[#0b1e33] leading-none flex items-baseline">
                  <Counter from={0} to={500} duration={2.5} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest font-['Oswald'] mt-1 truncate">
                  CLIENTS
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wide hidden sm:block mt-0.5">
                  Trusted Partners
                </div>
              </div>
            </div>

            {/* Stat 3: 1000+ Products */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 lg:p-6 hover:bg-slate-50/80 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] transition-all duration-300 shadow-xs relative">
                <Box className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--brand-red)] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-['Oswald'] font-black tracking-tight text-[#0b1e33] leading-none flex items-baseline">
                  <Counter from={0} to={1000} duration={3} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest font-['Oswald'] mt-1 truncate">
                  PRODUCTS
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wide hidden sm:block mt-0.5">
                  Standard & Custom
                </div>
              </div>
            </div>

            {/* Stat 4: 100% Quality */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 lg:p-6 hover:bg-slate-50/80 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-red-50/80 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-red)] transition-all duration-300 shadow-xs relative">
                <Percent className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--brand-red)] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="flex flex-col text-left min-w-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-['Oswald'] font-black tracking-tight text-[#0b1e33] leading-none flex items-baseline">
                  <Counter from={0} to={100} duration={2} suffix="%" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest font-['Oswald'] mt-1 truncate">
                  QUALITY
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-wide hidden sm:block mt-0.5">
                  Certified Assurance
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
                className="group h-[260px] w-full flip-card-container cursor-pointer select-none"
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
