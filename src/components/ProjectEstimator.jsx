import React, { useState } from 'react';
import { Calculator, ChevronRight, CheckCircle2, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProjectEstimator: = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    sector: '',
    phase: '',
    scale: ''
  });
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    // Demo calculation logic
    let cost = "$1.5M - $3M";
    let time = "6 - 8 Months";

    if (formData.scale === 'Mega') {
      cost = "$400M - $1.2B";
      time = "3 - 5 Years";
    } else if (formData.phase === 'Turnkey') {
      cost = "$15M - $45M";
      time = "12 - 18 Months";
    }

    setResult({ cost, time });
    
    // Trigger celebration confetti
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#00f0ff', '#3b82f6', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#00f0ff', '#3b82f6', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section id="estimator" className="py-24 bg-[#0a0f1a] relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-4">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wider">AI ESTIMATOR</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono-tech">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Estimator</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            Get instant ballpark figures for timeline and budget based on your engineering requirements.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl border-slate-700 shadow-2xl relative overflow-hidden">
          
          {/* Progress Bar */}
          {!result && (
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-10 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 h-0.5 bg-cyan-500 -z-10 -translate-y-1/2 transition-all duration-300" style={{ width: `${(step - 1) * 50}%` }}></div>
              
              {[1, 2, 3].map(num => (
                <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm border-2 transition-colors ${
                  step >= num ? 'bg-cyan-900 border-cyan-500 text-cyan-400' : 'bg-slate-900 border-slate-700 text-slate-500'
                }`}>
                  {num}
                </div>
              ))}
            </div>
          )}

          {!result ? (
            <div className="min-h-[250px]">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-semibold text-white mb-6">Select Engineering Sector</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Aerospace', 'Civil Infrastructure', 'Renewable Energy', 'Mechatronics'].map(option => (
                      <button 
                        key={option}
                        onClick={() => { setFormData({...formData, sector: option}); setStep(2); }}
                        className="p-4 text-left rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-cyan-900/20 text-slate-300 transition-all group"
                      >
                        <div className="flex justify-between items-center">
                          <span>{option}</span>
                          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-semibold text-white mb-6">Select Project Phase</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { val: 'FEA', title: 'Consulting & FEA', desc: 'Concept, Simulation, Blueprinting' },
                      { val: 'Proto', title: 'Prototyping', desc: 'Test units, Initial Machining' },
                      { val: 'Turnkey', title: 'Full EPC Turnkey', desc: 'Design, Build, Deploy, Test' }
                    ].map(option => (
                      <button 
                        key={option.val}
                        onClick={() => { setFormData({...formData, phase: option.val}); setStep(3); }}
                        className="p-4 text-left rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-cyan-900/20 transition-all flex flex-col group"
                      >
                        <span className="text-slate-200 font-semibold mb-1">{option.title}</span>
                        <span className="text-xs text-slate-500">{option.desc}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(1)} className="text-xs font-mono text-slate-500 hover:text-cyan-400 mt-4">← BACK</button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-semibold text-white mb-6">Select Scale / Volume</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['Prototype', 'Mid-scale', 'Mega'].map(option => (
                      <button 
                        key={option}
                        onClick={() => { setFormData({...formData, scale: option}); }}
                        className={`p-4 text-center rounded-lg border transition-all ${
                          formData.scale === option ? 'border-cyan-500 bg-cyan-900/40 text-cyan-300' : 'border-slate-700 hover:border-slate-500 text-slate-400'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between mt-8 pt-6 border-t border-slate-800">
                    <button onClick={() => setStep(2)} className="text-xs font-mono text-slate-500 hover:text-cyan-400">← BACK</button>
                    <button 
                      onClick={handleCalculate}
                      disabled={!formData.scale}
                      className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded font-mono text-sm disabled:opacity-50 transition-all"
                    >
                      CALCULATE
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center animate-in zoom-in-95 duration-500 py-8">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2 font-mono-tech">Estimation Complete</h3>
              <p className="text-slate-400 mb-8 font-light">Based on your parameters: {formData.sector} • {formData.phase} • {formData.scale}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
                <div className="bg-[#03050a] border border-slate-700 p-6 rounded-xl">
                  <p className="text-xs font-mono text-slate-500 mb-2">ESTIMATED BUDGET</p>
                  <p className="text-2xl font-bold text-emerald-400">{result.cost}</p>
                </div>
                <div className="bg-[#03050a] border border-slate-700 p-6 rounded-xl">
                  <p className="text-xs font-mono text-slate-500 mb-2">ESTIMATED TIMELINE</p>
                  <p className="text-2xl font-bold text-cyan-400">{result.time}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => { setStep(1); setResult(null); setFormData({sector:'', phase:'', scale:''}); }}
                  className="px-6 py-3 border border-slate-600 text-slate-300 rounded hover:border-cyan-400 hover:text-cyan-400 transition-all font-mono text-sm w-full sm:w-auto"
                >
                  RECALCULATE
                </button>
                <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded flex items-center justify-center space-x-2 font-mono text-sm w-full sm:w-auto transition-all">
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD PDF SPEC</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
