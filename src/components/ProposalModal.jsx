import React, { useState } from 'react';
import { X, Send, Paperclip, CheckCircle, Loader2 } from 'lucide-react';

export const ProposalModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call and loading state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Auto close after success
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#03050a]/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="bg-[#0a0f1a] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] max-w-2xl w-full relative z-10 overflow-hidden transition-all duration-300 transform scale-100">
        
        {/* Animated top border */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 animate-[scanline_3s_linear_infinite]" style={{backgroundSize: '200% auto'}} />
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          {isSubmitting ? (
            <div className="text-center py-16 flex flex-col items-center justify-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-cyan-500/20 rounded-full"></div>
                <div className="w-20 h-20 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin absolute inset-0"></div>
                <Loader2 className="w-8 h-8 text-cyan-400 absolute inset-0 m-auto animate-pulse" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2 font-mono-tech tracking-wide animate-pulse">TRANSMITTING DATA</h2>
                <p className="text-slate-400 text-sm font-mono">Encrypting payload and connecting to secure server...</p>
              </div>
            </div>
          ) : !submitted ? (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <h2 className="text-3xl font-bold text-white mb-2 font-mono-tech tracking-tight">Submit Technical RFP</h2>
              <p className="text-sm text-cyan-500/80 mb-8 font-medium">
                Provide project specifications for our engineering team. Secure upload protocol active.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400 tracking-wider">PROJECT TITLE</label>
                    <input required type="text" className="w-full bg-[#050811] border border-slate-700/80 rounded-lg p-3 text-sm text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all outline-none" placeholder="e.g., Subsea Turbine V2" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400 tracking-wider">ENGINEERING DOMAIN</label>
                    <select className="w-full bg-[#050811] border border-slate-700/80 rounded-lg p-3 text-sm text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all outline-none appearance-none">
                      <option>Aerospace</option>
                      <option>Civil Infrastructure</option>
                      <option>Mechatronics</option>
                      <option>Materials & Testing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-400 tracking-wider">TECHNICAL REQUIREMENTS SUMMARY</label>
                  <textarea required rows={4} className="w-full bg-[#050811] border border-slate-700/80 rounded-lg p-3 text-sm text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all outline-none resize-none" placeholder="Outline load parameters, environmental constraints, material preferences..."></textarea>
                </div>

                <div className="border-2 border-dashed border-slate-700/80 rounded-xl p-8 text-center hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-pointer group bg-[#050811]">
                  <div className="bg-slate-800/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Paperclip className="w-6 h-6 text-slate-400 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-sm text-slate-300 font-medium mb-1">Click to attach files or drag and drop</p>
                  <p className="text-xs text-slate-500 font-mono">CAD Models, Blueprints, or Specs (PDF, STEP, IGES)</p>
                </div>

                <div className="flex justify-end pt-2">
                  <button type="submit" className="px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center space-x-2 transition-all duration-300 transform hover:-translate-y-0.5">
                    <Send className="w-4 h-4" />
                    <span className="tracking-wide">TRANSMIT PROPOSAL</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-12 animate-in zoom-in duration-500">
              <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-emerald-400 animate-[bounce_1s_ease-in-out_1]" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3 font-mono-tech tracking-tight">Transmission Successful</h2>
              <p className="text-slate-400 mb-8 text-lg">Your technical requirements have been securely logged.</p>
              <div className="inline-block px-6 py-3 bg-slate-900 border border-slate-800 rounded-lg shadow-inner">
                <span className="text-slate-500 text-xs mr-3 font-mono tracking-widest uppercase">Reference</span>
                <span className="font-mono text-base text-cyan-400 font-bold tracking-wider">EAG-{Math.floor(Math.random() * 90000) + 10000}X</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
