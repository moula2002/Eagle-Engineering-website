import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import {
  ArrowRight,
  Factory,
  HardHat,
  Layers,
  ArrowUpDown,
  DoorClosed,
  Hammer,
  LayoutGrid,
  Sun,
  Warehouse,
  Building,
  Building2,
  Wind,
  ShieldCheck,
  ArrowDown,
  SignpostBig,
  Bus,
  Container
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Counter } from '../components/Counter';
import fastener1 from '../assets/fastener_1.png';
import fastener2 from '../assets/fastener_2.png';
import warehouseFacilityImg from '../assets/new.jpeg';
import { getProducts, getImageUrl } from '../api/api';
import { resolveProductImage } from '../data/productDataHelper';
import { ProductImage } from '../components/ProductImage';

import indPebSteel from '../assets/industries/ind_peb_steel.jpg';
import indRoofingCladding from '../assets/industries/ind_roofing_cladding.jpg';
import indElevatorsLifts from '../assets/industries/ind_elevators_lifts.jpg';
import indUpvcWindows from '../assets/industries/ind_upvc_windows.jpg';
import indFurnitureWoodworking from '../assets/industries/ind_furniture_woodworking.jpg';
import indInteriorDrywall from '../assets/industries/ind_interior_drywall.jpg';
import indIndustrialMfg from '../assets/industries/ind_industrial_mfg.jpg';
import indConstructionInfra from '../assets/industries/ind_construction_infra.jpg';
import indSolarEnergy from '../assets/industries/ind_solar_energy.jpg';
import indFacadeCurtain from '../assets/industries/ind_facade_curtain.jpg';
import indWarehouseSheds from '../assets/industries/ind_warehouse_sheds.jpg';
import indCommercialBldg from '../assets/industries/ind_commercial_bldg.jpg';
import indHvacMep from '../assets/industries/ind_hvac_mep.jpg';
import indSignageBoard from '../assets/industries/ind_signage_board.jpg';
import indBusCoach from '../assets/industries/ind_bus_coach.jpg';
import indModularCabin from '../assets/industries/ind_modular_cabin.jpg';

const industriesList = [
  {
    name: 'PEB & STEEL CONSTRUCTION',
    icon: HardHat,
    image: indPebSteel,
    description: 'High-tensile structural fasteners and heavy anchor bolts engineered for PEB frameworks.',
    backDescription: 'Structural grade 8.8/10.9 bolts, heavy wedge anchors, and self-drilling screws for steel erections.',
    badge: 'Heavy Structural'
  },
  {
    name: 'ROOFING & CLADDING',
    icon: Layers,
    image: indRoofingCladding,
    description: 'Self-drilling screws with EPDM washers engineered for leak-proof metal roof installations.',
    backDescription: 'Hex head tek screws, vulcanized washers, and lap stitch screws with corrosion-resistant coatings.',
    badge: 'Weatherproof Seal'
  },
  {
    name: 'ELEVATORS, ESCALATORS & LIFTS',
    icon: ArrowUpDown,
    image: indElevatorsLifts,
    description: 'Vibration-proof dynamic fasteners and anchors calibrated for passenger transport safety.',
    backDescription: 'Guide rail anchors, counterweight bolts, and high-tensile locking fasteners resisting dynamic fatigue.',
    badge: 'Zero Vibration'
  },
  {
    name: 'uPVC DOORS & WINDOWS',
    icon: DoorClosed,
    image: indUpvcWindows,
    description: 'Specialized reinforcement and hardware fixing screws designed for multi-chamber profiles.',
    backDescription: 'Steel reinforcement screws, friction stay fixings, and flush countersunk self-tapping screws.',
    badge: 'Fenestration Fixings'
  },
  {
    name: 'FURNITURE & WOODWORKING',
    icon: Hammer,
    image: indFurnitureWoodworking,
    description: 'Deep-thread chipboard and confirmat screws providing strong grip without wood splitting.',
    backDescription: 'Yellow zinc chipboard screws, cabinet assembly hardware, and flush drywall screws for woodwork.',
    badge: 'Deep Thread Grip'
  },
  {
    name: 'INTERIOR & DRYWALL',
    icon: LayoutGrid,
    image: indInteriorDrywall,
    description: 'Black phosphate bugle head screws and rapid ceiling anchors for partition wall systems.',
    backDescription: 'Fast-driving drywall screws, drop-in ceiling anchors, and toggle bolts for gypsum partitions.',
    badge: 'Acoustic & Drywall'
  },
  {
    name: 'INDUSTRIAL & MANUFACTURING',
    icon: Factory,
    image: indIndustrialMfg,
    description: 'Certified DIN/ISO standard machine screws and bolts for assembly lines and plant machinery.',
    backDescription: 'Hex socket head cap screws, metric machine bolts, flange nuts, and industrial spring washers.',
    badge: 'DIN / ISO Certified'
  },
  {
    name: 'CONSTRUCTION & INFRASTRUCTURE',
    icon: Building2,
    image: indConstructionInfra,
    description: 'Heavy-duty chemical and mechanical through-bolts for concrete and civil engineering works.',
    backDescription: 'Chemical anchor rods, foundation bolts, and structural through-bolts for bridges and infrastructure.',
    badge: 'Seismic Rated'
  },
  {
    name: 'SOLAR & RENEWABLE ENERGY',
    icon: Sun,
    image: indSolarEnergy,
    description: 'Marine-grade stainless steel hardware and bi-metal screws resisting outdoor UV and salt spray.',
    backDescription: 'SS 304/316 solar mounting bolts, rail clamps, and weather-resistant rooftop fixing screws.',
    badge: 'Corrosion Proof'
  },
  {
    name: 'FACADE & CURTAIN WALL SYSTEMS',
    icon: ShieldCheck,
    image: indFacadeCurtain,
    description: 'Architectural fasteners engineered to withstand extreme wind shear and thermal building movement.',
    backDescription: 'Bi-metal facade screws, undercut anchors, and isolation fixings for glass and ACP cladding.',
    badge: 'Wind Shear Rated'
  },
  {
    name: 'WAREHOUSING & INDUSTRIAL SHEDS',
    icon: Warehouse,
    image: indWarehouseSheds,
    description: 'Heavy base-plate anchors and purlin fasteners for high-bay racking and logistics facilities.',
    backDescription: 'Expansion floor anchors, bracing hardware, and portal frame fasteners for high-capacity racking.',
    badge: 'High Load Bearing'
  },
  {
    name: 'COMMERCIAL & RESIDENTIAL BUILDINGS',
    icon: Building,
    image: indCommercialBldg,
    description: 'Comprehensive range of multi-substrate fixing screws and masonry anchors for modern buildings.',
    backDescription: 'Frame fixings, multi-purpose screws, and nylon wall plugs supporting MEP and architectural fit-outs.',
    badge: 'Universal Fixings'
  },
  {
    name: 'HVAC & MEP INSTALLATIONS',
    icon: Wind,
    image: indHvacMep,
    description: 'Continuously threaded rods, beam clamps, and duct screws for secure overhead suspensions.',
    backDescription: 'M6-M24 threaded rods, channel strut nuts, and drop-in anchors for ventilation and piping routes.',
    badge: 'Fire & Load Rated'
  },
  {
    name: 'SIGNAGE & BOARD INDUSTRIES',
    icon: SignpostBig,
    image: indSignageBoard,
    description: 'Self-drilling screws and fixing solutions for ACP, signage boards and cladding applications.',
    backDescription: 'Specialized self-drilling screws and fixing solutions engineered for ACP panels, outdoor signage boards, and architectural cladding.',
    badge: 'Signage & Cladding'
  },
  {
    name: 'BUS BODY & COACH BUILDING',
    icon: Bus,
    image: indBusCoach,
    description: 'Specialized fasteners for bus body fabrication, panels, interior fittings and structural assemblies.',
    backDescription: 'High-vibration resistant screws, structural rivets, and precision fasteners for commercial vehicle bodies, coaches, and panel fittings.',
    badge: 'Automotive & Coach'
  },
  {
    name: 'PORTABLE CABIN & MODULAR STRUCTURES',
    icon: Container,
    image: indModularCabin,
    description: 'Self-drilling screws and structural fasteners for modular cabins and prefabricated units.',
    backDescription: 'Heavy-duty self-drilling screws, frame connectors, and corrosion-resistant fasteners for prefab cabins, containers, and modular structures.',
    badge: 'Prefab & Modular'
  }
];

export const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [flippedIndustryIndex, setFlippedIndustryIndex] = useState(null);

  const handleIndustryCardClick = (idx) => {
    setFlippedIndustryIndex(prev => prev === idx ? null : idx);
  };

  useEffect(() => {
    if (sessionStorage.getItem('homeScrollTarget')) {
      setSkipAnimation(true);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const json = await getProducts(false);
        if (isMounted) {
          if (json.success && Array.isArray(json.data)) {
            setProductsList(json.data);
          } else {
            setProductsList([]);
          }
        }
      } catch (error) {
        console.error('Home page products refresh error:', error);
        if (isMounted) setProductsList([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchProducts();

    const handleProductsUpdated = (e) => {
      if (isMounted && Array.isArray(e.detail)) {
        setProductsList(e.detail);
      }
    };
    window.addEventListener('eagle_products_updated', handleProductsUpdated);

    return () => {
      isMounted = false;
      window.removeEventListener('eagle_products_updated', handleProductsUpdated);
    };
  }, []);

  useEffect(() => {
    if (!loading && productsList.length > 0) {
      const scrollTarget = sessionStorage.getItem('homeScrollTarget');
      if (scrollTarget) {
        setTimeout(() => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'auto', block: 'center' });
            sessionStorage.removeItem('homeScrollTarget');
          }
        }, 300);
      }
    }
  }, [loading, productsList]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Hero />

      {/* About Us Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden bg-dot-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[var(--brand-red)]"></div>
                <h3 className="text-[var(--brand-red)] font-bold uppercase tracking-widest text-sm">WHO WE ARE</h3>
              </div>
              <h2 className="text-3xl sm:text-4xl text-[#0b2545] font-bold mb-6 font-heading uppercase tracking-wide leading-tight">
                10+ YEARS OF <br />FASTENING EXCELLENCE
              </h2>
              <div className="space-y-4 text-gray-600 mb-8 leading-relaxed text-[15px] font-normal">
                <p>
                  Eagle Engineering is a trusted supplier of premium industrial fasteners, anchors, uPVC door and window hardware, chipboard screws, drywall screws, and a comprehensive range of fastening solutions.
                </p>
                <p>
                  With over a decade of industry experience, we are committed to delivering high-quality products that meet international standards and diverse customer requirements. Our products are known for their superior strength, durability, corrosion resistance, precision, and reliable performance across a wide range of industries.
                </p>
                <p>
                  At Eagle Engineering, quality, customer satisfaction, and reliability are at the heart of everything we do. With an extensive product range, strong supplier partnerships, technical expertise, and efficient inventory management, we ensure consistent quality, competitive pricing, and timely delivery.
                </p>
                <p>
                  We take pride in building long-term customer relationships by providing dependable fastening solutions, professional service, and technical support tailored to the evolving needs of the construction, engineering, and industrial sectors.
                </p>
              </div>
              <div className="flex gap-4">
                <Link to="/about" className="px-8 py-3.5 bg-[var(--brand-red)] text-white font-bold rounded-xl text-sm hover:bg-red-700 transition-all uppercase shadow-[0_4px_14px_0_rgba(230,32,32,0.39)] hover:shadow-[0_6px_20px_rgba(230,32,32,0.23)] hover:-translate-y-0.5">
                  Discover More
                </Link>
                <Link to="/contact" className="px-8 py-3.5 bg-white border border-gray-200 text-[#0b2545] font-bold rounded-xl text-sm hover:bg-gray-50 transition-all uppercase shadow-[0_4px_14px_0_rgb(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.08)] hover:-translate-y-0.5">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-[var(--brand-blue)] rounded-2xl rotate-3 scale-105 opacity-10"></div>
              <div className="bg-white p-2 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] relative z-10 overflow-hidden group">
                <img src={warehouseFacilityImg} alt="Eagle Engineering Warehouse Facility" className="w-full h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[var(--brand-red)] text-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(230,32,32,0.3)] z-20 hidden md:block"
              >
                <div className="text-4xl font-bold font-heading mb-1 text-center">10+</div>
                <div className="text-xs font-semibold tracking-wider uppercase text-center text-white/90">Years of<br />Fastening Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Industries Section */}
      <section id="industries" className="bg-gray-50 pb-6 pt-16 sm:pb-8 sm:pt-20 relative z-20 bg-industrial-pattern border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--brand-red)]"></div>
              <span className="text-[var(--brand-red)] font-bold uppercase tracking-widest text-xs sm:text-sm">SECTORS &amp; APPLICATIONS</span>
              <div className="h-[2px] w-8 sm:w-12 bg-[var(--brand-red)]"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0b2545] uppercase tracking-wide mb-3">
              INDUSTRIES <span className="text-[var(--brand-red)]">WE SERVE</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm font-light leading-relaxed">
              Delivering high-quality fastening solutions across a wide range of industries, ensuring superior strength, durability, and reliable performance for every application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industriesList.map((industry, idx) => {
              const Icon = industry.icon;
              const isFlipped = flippedIndustryIndex === idx;

              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * (idx % 4), duration: 0.4 }}
                  className="group h-[310px] sm:h-[320px] w-full flip-card-container cursor-pointer select-none"
                  onClick={() => handleIndustryCardClick(idx)}
                >
                  <div className={`flip-card-inner rounded-3xl ${isFlipped ? 'is-flipped' : ''}`}>
                    {/* Front */}
                    <div className="flip-card-front bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col items-center justify-center text-center p-6 sm:p-7">
                      <div className="relative mb-4 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-xs shrink-0 bg-slate-50">
                        <img 
                          src={industry.image} 
                          alt={industry.name} 
                          className="w-full h-full object-cover select-none" 
                          loading="lazy" 
                        />
                      </div>
                      <h3 className="text-[#0b2545] font-bold text-[14px] sm:text-[15px] uppercase tracking-wide font-['Oswald'] mb-2 px-1">
                        {industry.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-light max-w-[240px]">
                        {industry.description}
                      </p>
                    </div>

                    {/* Back */}
                    <div className="flip-card-back bg-[#0b2545] rounded-3xl flex flex-col items-center justify-center text-center p-6 sm:p-7 border border-[#0b2545] shadow-[0_12px_36px_rgba(11,37,69,0.35)]">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border border-red-500/40 mb-3 shrink-0 shadow-xs">
                        <img 
                          src={industry.image} 
                          alt={industry.name} 
                          className="w-full h-full object-cover select-none" 
                          loading="lazy" 
                        />
                      </div>
                      <h3 className="text-[var(--brand-red)] font-bold text-[14px] sm:text-[15px] mb-2 uppercase tracking-wide font-['Oswald'] px-1">
                        {industry.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light mb-3 max-w-[240px]">
                        {industry.backDescription}
                      </p>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                        {industry.badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 24 Watermark on Right Side (Compact Height) */}
          <div className="mt-2 sm:mt-3 relative flex items-center justify-end overflow-hidden py-1 px-2 sm:px-6">
            <div
              onClick={() => {
                const el = document.getElementById('products-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative flex items-center justify-center cursor-pointer group select-none pr-0 sm:pr-4"
              title="Click to explore products"
            >
              {/* Compact 24 Number BG Watermark */}
              <span className="text-[65px] sm:text-[80px] md:text-[95px] font-black font-['Oswald'] text-slate-300/80 group-hover:text-red-200/80 leading-none tracking-tighter select-none transition-all duration-300 block group-hover:scale-105">
                24
              </span>
              
              {/* Minimal Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-[var(--brand-red)] transition-colors mt-0.5 font-['Oswald']">
                  HOURS RAPID DISPATCH
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Products Section */}
      <section id="products-section" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-red)] opacity-5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-blue)] opacity-5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4 sm:gap-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0b2545] uppercase tracking-wide mb-2">
                OUR <span className="text-[var(--brand-red)]">PRODUCTS</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed">
                Explore our comprehensive range of premium fasteners, anchors and hardware solutions designed for strength, durability and reliable performance.
              </p>
            </div>
            <Link to="/products" className="shrink-0 flex items-center text-[var(--brand-red)] font-bold text-sm hover:text-red-800 transition-colors group">
              View All Products <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center gap-8 py-10">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex flex-col items-center w-44 md:w-52 animate-pulse">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gray-100 border border-gray-200/80 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-28"></div>
              </div>
            ))}
          </div>
        ) : productsList.length === 0 ? (
          <div className="w-full py-20 text-center text-gray-500 font-medium">
            No products available at the moment.
          </div>
        ) : (
          (() => {
            const getMarqueeProducts = (list) => {
              if (!list || list.length === 0) return [];
              let items = [...list];
              while (items.length < 8) {
                items = [...items, ...list];
              }
              return items;
            };
            const marqueeProducts = getMarqueeProducts(productsList);

            return (
              <div className="w-full overflow-hidden relative py-2">
                <div className="marquee-container py-6">
                  <div className="marquee-track">
                    {/* First Track Half */}
                    <div className="flex items-center shrink-0 gap-8 sm:gap-12 md:gap-14 pr-8 sm:pr-12 md:pr-14">
                      {marqueeProducts.map((p, idx) => (
                        <div
                          key={`prod-a-${idx}-${p._id}`}
                          id={`product-${p._id}`}
                          className="flex flex-col items-center group w-44 md:w-52 shrink-0 cursor-pointer"
                        >
                          <Link
                            to={`/products/${p._id}`}
                            state={{ fromHome: true }}
                            onClick={() => sessionStorage.setItem('homeScrollTarget', `product-${p._id}`)}
                            className="hover:-translate-y-2.5 transition-transform duration-300 block"
                          >
                            <ProductImage
                              src={resolveProductImage(p)}
                              alt={p.name}
                              size="md"
                              hoverZoom={true}
                            />
                          </Link>
                          <Link
                            to={`/products/${p._id}`}
                            state={{ fromHome: true }}
                            onClick={() => sessionStorage.setItem('homeScrollTarget', `product-${p._id}`)}
                            className="w-full text-center"
                          >
                            <h3 className="font-bold text-[#0b2545] mt-4 text-sm md:text-[15px] px-2 group-hover:text-[var(--brand-red)] transition-colors line-clamp-2">
                              {p.name}
                            </h3>
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Second Track Half (Exact clone for 100% seamless infinite loop) */}
                    <div className="flex items-center shrink-0 gap-8 sm:gap-12 md:gap-14 pr-8 sm:pr-12 md:pr-14" aria-hidden="true">
                      {marqueeProducts.map((p, idx) => (
                        <div
                          key={`prod-b-${idx}-${p._id}`}
                          className="flex flex-col items-center group w-44 md:w-52 shrink-0 cursor-pointer"
                        >
                          <Link
                            to={`/products/${p._id}`}
                            state={{ fromHome: true }}
                            onClick={() => sessionStorage.setItem('homeScrollTarget', `product-${p._id}`)}
                            className="hover:-translate-y-2.5 transition-transform duration-300 block"
                          >
                            <ProductImage
                              src={resolveProductImage(p)}
                              alt={p.name}
                              size="md"
                              hoverZoom={true}
                            />
                          </Link>
                          <Link
                            to={`/products/${p._id}`}
                            state={{ fromHome: true }}
                            onClick={() => sessionStorage.setItem('homeScrollTarget', `product-${p._id}`)}
                            className="w-full text-center"
                          >
                            <h3 className="font-bold text-[#0b2545] mt-4 text-sm md:text-[15px] px-2 group-hover:text-[var(--brand-red)] transition-colors line-clamp-2">
                              {p.name}
                            </h3>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()
        )}
      </section>
    </>
  );
};
