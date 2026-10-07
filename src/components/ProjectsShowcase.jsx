import React, { useState } from 'react';
import { ExternalLink, Filter, MapPin, Calendar, HardDrive } from 'lucide-react';

export const ProjectsShowcase: = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Apex Nexus Cable-Stayed Bridge",
      category: "Civil Infrastructure",
      location: "Kyoto, Japan",
      budget: "$420M",
      date: "Q4 2025",
      image: "/images/civil_bridge.png",
      specs: ["1200m Span", "Richter 8.5 Tolerance", "Carbon-Steel Cables"],
      description: "A monumental cable-stayed bridge designed to withstand extreme seismic activity while maintaining aesthetic elegance across the harbor."
    },
    {
      id: 2,
      title: "Oceanis Alpha Wind Array",
      category: "Renewable Energy",
      location: "North Sea",
      budget: "$1.2B",
      date: "Q2 2026",
      image: "/images/renewable_wind.png",
      specs: ["350 MW Output", "110m Depth Foundations", "Corrosion-resistant"],
      description: "Next-generation offshore wind farm utilizing proprietary anchoring structural designs to maximize energy yield in extreme deep-water environments."
    },
    {
      id: 3,
      title: "Helios Sub-Orbital Test Facility",
      category: "Aerospace",
      location: "Texas, USA",
      budget: "$850M",
      date: "Active",
      image: "/images/hero_bg.png",
      specs: ["Cryogenic Storage", "Acoustic Dampening", "Titanium Rebar"],
      description: "State-of-the-art rocket engine testing facility featuring advanced thermal and acoustic shielding for high-thrust aerospace prototyping."
    }
  ];

  const categories = ['All', 'Civil Infrastructure', 'Renewable Energy', 'Aerospace'];
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#070a12] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono-tech">
              Mega <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl font-light">
              Explore our portfolio of completed and active global engineering marvels.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-4 h-4 text-slate-500 mr-2" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  filter === cat 
                    ? 'bg-cyan-900/60 text-cyan-300 border border-cyan-500/50' 
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-panel rounded-xl overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-slate-700 rounded text-xs font-mono text-cyan-400 uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="absolute -top-6 right-6 z-20">
                  <button className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40 hover:bg-cyan-500 hover:scale-110 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 pr-10">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="flex items-center text-xs font-mono text-slate-300">
                    <MapPin className="w-4 h-4 mr-2 text-cyan-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center text-emerald-400">
                      <HardDrive className="w-4 h-4 mr-2" />
                      <span>{project.budget}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.specs.map(spec => (
                    <span key={spec} className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-[10px] font-mono text-slate-400">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
