import { motion } from 'motion/react';
import { Microscope, FlaskConical, ClipboardCheck, Activity } from 'lucide-react';

export default function TechnicalLab() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579152276503-31581deccc92?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="Technical Lab"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-emerald-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Chemical Authority</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Regional <br />
              <span className="gradient-text">R&D Lab</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Certified world-class laboratory facility specialized in petroleum analysis, catalytic innovation, and heavy-oil fingerprinting.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <FlaskConical className="text-emerald-600 w-6 h-6" />
                 </div>
                 <span className="text-slate-900 font-black uppercase tracking-widest text-xs">Certified Testing Center</span>
              </div>
              <h2 className="text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.85]">
                Molecular <br /> <span className="text-emerald-600">Verification</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 font-medium">
                Our R&D team works on next-generation desulfurization catalysts and bio-refining integration. We provide comprehensive analytical services for crude oil sourcing and finished product certification according to Euro-6 standards.
              </p>
              <ul className="space-y-4 mb-10">
                 {['Gas Chromatography Testing', 'Mass Spectrometry Analysis', 'Viscosity & Distillation Specs', 'Impurity Trace Detection'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-slate-800 font-bold uppercase tracking-tight text-sm">
                      <ClipboardCheck className="text-emerald-600 w-5 h-5" /> {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] bg-white rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 p-8">
                 <Microscope className="text-slate-900 w-12 h-12 mb-8" />
                 <h4 className="text-xl font-black uppercase italic mb-4">Precision <br /> Metrics</h4>
                 <p className="text-slate-500 text-xs">High-accuracy spectral analysis for all feedstock types.</p>
              </div>
              <div className="aspect-[4/5] bg-emerald-600 rounded-[48px] overflow-hidden shadow-2xl p-8 flex flex-col justify-end">
                 <Activity className="text-white w-12 h-12 mb-8" />
                 <h4 className="text-xl font-black uppercase italic text-white mb-4">Live <br /> Results</h4>
                 <p className="text-emerald-100 text-xs">Real-time sampling linked directly to unit control rooms.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
