import React, { useState } from 'react';
import { X, Send, Paperclip, CheckCircle } from 'lucide-react';



export const ProposalModal: = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#03050a]/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="bg-[#0a0f1a] border border-cyan-500/30 rounded-xl shadow-[0_0_50px_rgba(0,240,255,0.15)] max-w-2xl w-full relative z-10 overflow-hidden">
        
        {/* Animated top border */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 animate-[scanline_3s_linear_infinite]" style={{backgroundSize: '200% auto'}} />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-2 font-mono-tech">Submit Technical RFP</h2>
              <p className="text-sm text-slate-400 mb-8">
                Provide project specifications for our engineering team. Secure upload protocol active.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">PROJECT TITLE</label>
                    <input required type="text" className="w-full bg-[#03050a] border border-slate-700 rounded p-3 text-sm text-slate-200 focus:border-cyan-500 focus:outline-none" placeholder="e.g., Subsea Turbine V2" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">ENGINEERING DOMAIN</label>
                    <select className="w-full bg-[#03050a] border border-slate-700 rounded p-3 text-sm text-slate-200 focus:border-cyan-500 focus:outline-none">
                      <option>Aerospace</option>
                      <option>Civil Infrastructure</option>
                      <option>Mechatronics</option>
                      <option>Materials & Testing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">TECHNICAL REQUIREMENTS SUMMARY</label>
                  <textarea required rows={4} className="w-full bg-[#03050a] border border-slate-700 rounded p-3 text-sm text-slate-200 focus:border-cyan-500 focus:outline-none" placeholder="Outline load parameters, environmental constraints, material preferences..."></textarea>
                </div>

                <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors cursor-pointer group bg-[#03050a]">
                  <Paperclip className="w-6 h-6 text-slate-500 mx-auto mb-2 group-hover:text-cyan-400" />
                  <p className="text-sm text-slate-400 font-mono">Attach CAD Models, Blueprints, or Specs (PDF, STEP, IGES)</p>
                </div>

                <div className="flex justify-end pt-4">
                  <button type="submit" className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded shadow-lg flex items-center space-x-2 transition-all">
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT PROPOSAL</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-[bounce_1s_ease-in-out_1]" />
              <h2 className="text-2xl font-bold text-white mb-2 font-mono-tech">Transmission Successful</h2>
              <p className="text-slate-400 mb-6">Your technical requirements have been securely logged.</p>
              <div className="inline-block px-4 py-2 bg-slate-900 border border-slate-800 rounded font-mono text-sm text-cyan-400">
                REFERENCE: EAG-{Math.floor(Math.random() * 90000) + 10000}X
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
