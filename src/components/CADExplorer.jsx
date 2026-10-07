import React, { useState } from 'react';
import { Box, Layers, Play, Database, Maximize2, GitMerge } from 'lucide-react';

export const CADExplorer = () => {
  const [activeModel, setActiveModel] = useState(0);
  const [viewMode, setViewMode] = useState('3d');

  const models = [
    {
      id: 0,
      name: "Aerospace Turbine Rotor",
      material: "Titanium Grade 5 (Ti-6Al-4V)",
      tolerance: "±0.0005mm",
      specs: {
        rpm: "45,000 Max",
        temp: "1450°C Thermal Limit",
        weight: "124 kg",
        blades: "36 High-Bypass"
      },
      description: "High-performance turbine rotor assembly engineered for next-generation commercial aerospace engines. Features active cooling channels and proprietary thermal barrier coatings."
    },
    {
      id: 1,
      name: "Structural Cable Truss Joint",
      material: "Ultra High-Strength Steel (UHS-1200)",
      tolerance: "±0.01mm",
      specs: {
        yield: "1200 MPa",
        load: "4,500 kN Axial",
        weight: "340 kg",
        coating: "Galvanized Anti-Corrosion"
      },
      description: "Critical node joint designed for mega-bridge cable-stayed infrastructure. Validated through intense seismic FEA simulation."
    },
    {
      id: 2,
      name: "Hydroelectric Impeller",
      material: "High Nickel Alloy (Inconel 718)",
      tolerance: "±0.002mm",
      specs: {
        output: "850MW Capacity",
        flow: "12,000 m³/s",
        weight: "4,200 kg",
        cavitation: "Zero-rating design"
      },
      description: "Massive scale Francis turbine impeller optimized through computational fluid dynamics (CFD) for maximum renewable energy extraction efficiency."
    }
  ];

  const current = models[activeModel];

  return (
    <section id="cad-explorer" className="py-24 bg-[#070a12] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono-tech">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">Interactive</span>
            <span className="text-cyan-400"> 3D Spec Viewer</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            Inspect our flagship engineering modules. Switch between physical render, structural wireframe, and FEA stress maps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Model Selection List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-sm font-mono text-cyan-400 mb-4 tracking-widest border-b border-slate-800 pb-2">AVAILABLE MODULES</h3>
            {models.map((model, idx) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(idx)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  activeModel === idx 
                    ? 'bg-cyan-950/40 border-cyan-500 shadow-[0_0_15px_rgba(0,240,255,0.15)]' 
                    : 'bg-[#0f1524] border-slate-800 hover:border-slate-600 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold ${activeModel === idx ? 'text-cyan-300' : 'text-slate-200'}`}>
                    {model.name}
                  </h4>
                  {activeModel === idx && <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                </div>
                <p className="text-xs text-slate-500 font-mono">{model.material}</p>
              </button>
            ))}
          </div>

          {/* Interactive Viewer Area */}
          <div className="lg:col-span-2 relative">
            
            {/* The Viewer Canvas Simulator */}
            <div className="glass-panel-cyan rounded-xl border border-cyan-500/30 overflow-hidden relative aspect-video flex flex-col group">
              
              {/* Toolbar */}
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20">
                <div className="flex space-x-2">
                  <button onClick={() => setViewMode('3d')} className={`p-2 rounded flex items-center space-x-2 text-xs font-mono transition-colors ${viewMode === '3d' ? 'bg-cyan-500 text-slate-900' : 'bg-slate-900/80 text-slate-300 hover:text-cyan-400'}`}>
                    <Box className="w-4 h-4" /> <span>RENDER</span>
                  </button>
                  <button onClick={() => setViewMode('wireframe')} className={`p-2 rounded flex items-center space-x-2 text-xs font-mono transition-colors ${viewMode === 'wireframe' ? 'bg-cyan-500 text-slate-900' : 'bg-slate-900/80 text-slate-300 hover:text-cyan-400'}`}>
                    <Layers className="w-4 h-4" /> <span>WIREFRAME</span>
                  </button>
                  <button onClick={() => setViewMode('stress')} className={`p-2 rounded flex items-center space-x-2 text-xs font-mono transition-colors ${viewMode === 'stress' ? 'bg-amber-500 text-slate-900' : 'bg-slate-900/80 text-slate-300 hover:text-amber-400'}`}>
                    <Play className="w-4 h-4" /> <span>FEA STRESS MAP</span>
                  </button>
                  <button onClick={() => setViewMode('explosive')} className={`p-2 rounded flex items-center space-x-2 text-xs font-mono transition-colors ${viewMode === 'explosive' ? 'bg-blue-500 text-white' : 'bg-slate-900/80 text-slate-300 hover:text-blue-400'}`}>
                    <GitMerge className="w-4 h-4" /> <span>EXPLOSIVE</span>
                  </button>
                </div>
                <button className="p-2 bg-slate-900/80 text-slate-300 rounded hover:text-white">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Viewport Simulation Area */}
              <div className="flex-1 bg-[#03050a] flex items-center justify-center relative overflow-hidden">
                {/* Radial glow based on mode */}
                <div className={`absolute inset-0 opacity-20 transition-colors duration-700 ${
                  viewMode === 'stress' ? 'bg-[radial-gradient(circle,rgba(245,158,11,0.8)_0%,rgba(0,0,0,0)_60%)]' :
                  viewMode === 'wireframe' ? 'bg-[radial-gradient(circle,rgba(0,240,255,0.4)_0%,rgba(0,0,0,0)_60%)]' :
                  'bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,rgba(0,0,0,0)_60%)]'
                }`} />
                
                {/* Simulated Grid Floor */}
                <div className="absolute bottom-0 w-full h-32 bg-[linear-gradient(to_top,rgba(0,240,255,0.1),transparent)] [transform:rotateX(60deg)] scale-150 transform-gpu perspective-[1000px] border-t border-cyan-500/20">
                   <div className="w-full h-full bg-blueprint-grid opacity-40"></div>
                </div>

                {/* Abstract Object representation - In a real app this would be a Three.js canvas */}
                <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center transition-all duration-700 group-hover:scale-105">
                  <div className={`absolute inset-0 rounded-full border-4 border-dashed animate-[spin_10s_linear_infinite] ${
                    viewMode === 'stress' ? 'border-amber-500/80' : 
                    viewMode === 'wireframe' ? 'border-cyan-400' : 'border-slate-600'
                  }`}></div>
                  <div className={`absolute inset-4 rounded-full border border-t-2 animate-[spin_8s_linear_infinite_reverse] ${
                    viewMode === 'stress' ? 'border-red-500/60 border-t-red-400' : 
                    viewMode === 'wireframe' ? 'border-cyan-500/50 border-t-cyan-300' : 'border-slate-500 border-t-slate-300 bg-slate-800/80 backdrop-blur'
                  }`}></div>
                  <div className="text-center font-mono">
                    <Database className={`w-12 h-12 mx-auto mb-2 ${
                      viewMode === 'stress' ? 'text-amber-400' : 
                      viewMode === 'wireframe' ? 'text-cyan-400' : 'text-slate-300'
                    }`} />
                    <span className={`text-xs ${
                      viewMode === 'stress' ? 'text-amber-400/80' : 
                      viewMode === 'wireframe' ? 'text-cyan-400/80' : 'text-slate-400'
                    }`}>
                      {viewMode === '3d' && "HQ RENDER"}
                      {viewMode === 'wireframe' && "TOPOLOGY"}
                      {viewMode === 'stress' && "FEA SIMULATION"}
                      {viewMode === 'explosive' && "ASSEMBLY VIEW"}
                    </span>
                  </div>
                </div>

                {/* Interactive Tooltips Simulated */}
                {viewMode === 'stress' && (
                  <div className="absolute right-10 bottom-10 glass-panel p-3 border-amber-500/40 rounded shadow-[0_0_15px_rgba(245,158,11,0.2)] z-20">
                    <p className="text-[10px] text-amber-400 font-mono mb-1">PEAK STRESS DETECTED</p>
                    <p className="text-sm font-bold text-white">420 MPa <span className="text-slate-400 font-normal text-xs">(Safety Factor: 2.8)</span></p>
                  </div>
                )}
                
              </div>
            </div>

            {/* Spec Details Below Viewer */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(current.specs).map(([key, value]) => (
                <div key={key} className="glass-panel p-4 rounded-lg border-slate-800 border">
                  <p className="text-[10px] text-slate-500 font-mono uppercase mb-1">{key}</p>
                  <p className="text-sm font-semibold text-slate-200">{value}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800/50">
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                <strong className="text-cyan-400 font-mono uppercase text-xs mr-2">Description:</strong> 
                {current.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
