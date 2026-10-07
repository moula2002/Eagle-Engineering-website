import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

export const StressTestSim = () => {
  const [force, setForce] = useState(50); // kN
  const [material, setMaterial] = useState('steel');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);

  const materials = {
    steel: { name: "Structural Steel (A36)", yield: 250, color: "text-slate-300" },
    aluminum: { name: "Aluminum (7075-T6)", yield: 500, color: "text-slate-400" },
    titanium: { name: "Titanium (Ti-6Al-4V)", yield: 880, color: "text-cyan-400" },
    carbon: { name: "Carbon Composite", yield: 1200, color: "text-purple-400" }
  };

  // Simplified logic for simulation demo
  const currentMaterial = materials[material as keyof typeof materials];
  
  // Calculate stress
  // Formula for demo purposes: Stress = Force * Factor
  const factor = material === 'steel' ? 4 : material === 'aluminum' ? 3.5 : material === 'titanium' ? 2 : 1.5;
  const calculatedStress = Math.round(force * factor);
  const safetyFactor = (currentMaterial.yield / (calculatedStress || 1)).toFixed(2);
  const isFailing = calculatedStress > currentMaterial.yield;
  const stressRatio = Math.min(calculatedStress / currentMaterial.yield, 1.2); // max 1.2 for bar visual

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationComplete(false);
    
    // Fake simulation delay
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationComplete(true);
    }, 1500);
  };

  // Reset simulation when inputs change
  useEffect(() => {
    setSimulationComplete(false);
  }, [force, material]);

  return (
    <section id="stress-test" className="py-24 relative overflow-hidden bg-[#0a0f1a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.05)_0%,rgba(10,15,26,1)_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-500/10 mb-4">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest uppercase">Live Demo</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono-tech">
                FEA Stress <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Simulator</span>
              </h2>
              <p className="text-slate-400 font-light">
                Experience our real-time Finite Element Analysis (FEA) engine. Adjust load parameters and material grades to observe structural integrity limits.
              </p>
            </div>

            <div className="space-y-5 glass-panel p-6 rounded-xl border-slate-800">
              {/* Material Selector */}
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">MATERIAL GRADE</label>
                <select 
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-[#03050a] border border-slate-700 rounded-lg p-3 text-sm text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                >
                  <option value="steel">Structural Steel (A36)</option>
                  <option value="aluminum">Aluminum Alloy (7075-T6)</option>
                  <option value="titanium">Aerospace Titanium (Ti-6Al-4V)</option>
                  <option value="carbon">Advanced Carbon Composite</option>
                </select>
              </div>

              {/* Force Slider */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-xs font-mono text-slate-400">APPLIED LOAD (kN)</label>
                  <span className="text-cyan-400 font-mono font-semibold">{force} kN</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="300" 
                  step="5"
                  value={force}
                  onChange={(e) => setForce(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>10 kN</span>
                  <span>300 kN</span>
                </div>
              </div>

              <button 
                onClick={handleSimulate}
                disabled={isSimulating}
                className="w-full py-3 mt-4 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 hover:from-cyan-900 hover:to-blue-900 border border-slate-600 hover:border-cyan-500 text-white font-semibold flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <span>CALCULATING MATRIX...</span>
                  </>
                ) : (
                  <>
                    <Activity className="w-5 h-5" />
                    <span>RUN FEA SIMULATION</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="glass-panel rounded-xl border border-slate-700 overflow-hidden relative">
              
              {/* Header */}
              <div className="bg-[#03050a]/80 border-b border-slate-800 px-6 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-75 ${simulationComplete ? (isFailing ? 'bg-red-400' : 'bg-emerald-400') : 'bg-cyan-400'}`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${simulationComplete ? (isFailing ? 'bg-red-500' : 'bg-emerald-500') : 'bg-cyan-500'}`}></span>
                  </span>
                  <span className="text-xs font-mono text-slate-300">FEA VISUALIZER</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  SOLVER: ABAQUS_V2
                </div>
              </div>

              {/* Simulation Canvas area */}
              <div className="h-64 sm:h-80 relative flex items-center justify-center p-8 bg-grid-pattern bg-[#070a12]">
                
                {/* The "Beam" */}
                <div className="w-full max-w-lg relative">
                  
                  {/* Load Arrow */}
                  <div className={`absolute left-1/2 -top-12 -translate-x-1/2 flex flex-col items-center transition-all duration-300 ${isSimulating ? 'translate-y-4' : ''}`}>
                    <span className="text-[10px] font-mono text-white mb-1 bg-slate-800 px-2 py-0.5 rounded">{force} kN</span>
                    <div className="w-0.5 h-6 bg-amber-500"></div>
                    <div className="w-3 h-3 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-amber-500"></div>
                  </div>

                  {/* Beam visual */}
                  <div className="relative w-full h-8 flex items-center justify-center perspective-[500px]">
                    <div className={`w-full h-full rounded-sm border border-slate-600 transition-all duration-700 transform-gpu ${isSimulating ? 'animate-pulse' : ''} ${
                      simulationComplete ? (isFailing ? 'rotate-[-3deg] translate-y-2' : 'rotate-[-1deg] translate-y-0.5') : ''
                    }`}
                    style={{
                      background: simulationComplete 
                        ? `linear-gradient(90deg, rgba(30,41,59,1) 0%, ${
                            stressRatio < 0.5 ? 'rgba(16,185,129,0.8)' : 
                            stressRatio < 0.9 ? 'rgba(245,158,11,0.8)' : 'rgba(239,68,68,0.9)'
                          } 50%, rgba(30,41,59,1) 100%)`
                        : 'linear-gradient(90deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
                      boxShadow: simulationComplete && isFailing ? '0 0 20px rgba(239,68,68,0.4)' : 'none'
                    }}
                    >
                      {/* Grid lines on beam */}
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_100%]"></div>
                    </div>
                  </div>

                  {/* Fixed Supports */}
                  <div className="absolute -left-2 top-8 w-4 h-8 bg-slate-700 rounded-t-sm border border-slate-600"></div>
                  <div className="absolute -right-2 top-8 w-4 h-8 bg-slate-700 rounded-t-sm border border-slate-600"></div>
                </div>

                {/* Overlay processing text */}
                {isSimulating && (
                  <div className="absolute inset-0 bg-[#070a12]/80 backdrop-blur-sm flex items-center justify-center flex-col z-10">
                    <Zap className="w-8 h-8 text-cyan-400 animate-bounce mb-2" />
                    <p className="text-cyan-400 font-mono text-sm tracking-widest animate-pulse">COMPUTING MESH MATRICES...</p>
                  </div>
                )}
              </div>

              {/* Results Dashboard */}
              <div className="bg-[#03050a] border-t border-slate-800 p-4 sm:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono mb-1">MATERIAL YIELD</p>
                    <p className={`text-lg font-semibold font-mono-tech ${currentMaterial.color}`}>{currentMaterial.yield} MPa</p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono mb-1">CALCULATED STRESS</p>
                    <p className="text-lg font-semibold font-mono-tech text-white">
                      {simulationComplete ? calculatedStress : '--'} MPa
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] text-slate-500 font-mono mb-1">SAFETY FACTOR</p>
                    <p className={`text-lg font-semibold font-mono-tech ${
                      !simulationComplete ? 'text-white' : (Number(safetyFactor) >= 2 ? 'text-emerald-400' : Number(safetyFactor) >= 1 ? 'text-amber-400' : 'text-red-500')
                    }`}>
                      {simulationComplete ? safetyFactor : '--'}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    {!simulationComplete ? (
                      <div className="text-slate-500 text-xs font-mono">AWAITING RUN</div>
                    ) : isFailing ? (
                      <div className="flex items-center space-x-2 text-red-500 bg-red-500/10 px-3 py-1.5 rounded border border-red-500/30">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-xs font-bold tracking-wider">FAILURE LIMIT</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded border border-emerald-400/30">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs font-bold tracking-wider">STRUCTURAL PASS</span>
                      </div>
                    )}
                  </div>

                </div>
                
                {/* Stress Bar Visualizer */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
                    <span>STRESS GRADIENT</span>
                    <span>100% YIELD</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500 opacity-30"></div>
                    {simulationComplete && (
                      <div 
                        className="h-full bg-white relative transition-all duration-1000 ease-out z-10 shadow-[0_0_10px_white]"
                        style={{ 
                          width: `${Math.min(stressRatio * 100, 100)}%`,
                          background: isFailing ? '#ef4444' : stressRatio > 0.8 ? '#f59e0b' : '#10b981'
                        }}
                      ></div>
                    )}
                    {/* 100% Yield line marker */}
                    <div className="absolute top-0 bottom-0 left-[83.33%] w-0.5 bg-red-500 z-20"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
