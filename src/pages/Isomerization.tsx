import { motion } from 'motion/react';
import { Zap, Settings, ShieldCheck, Activity, Filter, Thermometer, FlaskConical } from 'lucide-react';
import { cn } from '../lib/utils';
import InteractiveUnitDiagram, { DiagramStage } from '../components/InteractiveUnitDiagram';

export default function Isomerization() {
  const isomerizationStages: DiagramStage[] = [
    { id: 'prep', title: 'Feed Prep', description: 'Light naphtha is dried and de-pentanized to remove moisture and heavy components that could deactivate the catalyst.', icon: Filter, color: 'blue' },
    { id: 'reaction', title: 'Catalytic Stage', description: 'Exposure to platinum catalysts at moderate temperatures converts low-octane pentanes/hexanes into high-octane iso-paraffins.', icon: FlaskConical, color: 'indigo' },
    { id: 'stab', title: 'Stabilization', description: 'Removal of light gaseous by-products to ensure the final isomerate meets vapor pressure specifications.', icon: Thermometer, color: 'amber' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
            alt="Isomerization Unit"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Refining Advanced</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Isomerization <br />
              <span className="gradient-text">Unit 04</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Enhancing the octane number of light naphtha streams using high-precision catalytic isomerization for premium gasoline production.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="mb-32">
           <div className="mb-12">
              <h2 className="text-4xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4 leading-none">
                Process <br /> <span className="text-blue-600">Architecture</span>
              </h2>
              <p className="text-slate-500 font-medium">Molecular restructuring stages from raw feed to premium isomerate.</p>
           </div>
           <InteractiveUnitDiagram stages={isomerizationStages} unitName="Isomerization Unit" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
           <div>
              <h2 className="text-4xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.9]">
                Molecular <br /> <span className="text-blue-600">Restructuring</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
                Our isomerization unit utilizes platinum-on-alumina catalysts to convert linear paraffin molecules into branched alternatives, significantly boosting chemical performance without environmental compromise.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50">
                    <Zap className="text-blue-600 w-8 h-8 mb-4" />
                    <span className="text-2xl font-display font-black block text-slate-900">92+</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Octane Yield</span>
                 </div>
                 <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-200/50">
                    <ShieldCheck className="text-teal-600 w-8 h-8 mb-4" />
                    <span className="text-2xl font-display font-black block text-slate-900">Safe-Ops</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Digital Monitored</span>
                 </div>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-square bg-slate-200 rounded-[56px] overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://images.unsplash.com/photo-1542337316-df1ec36940af?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Unit Hardware" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-slate-900 p-8 rounded-[40px] shadow-2xl">
                 <Activity className="text-amber-500 w-10 h-10 mb-4" />
                 <span className="text-white font-mono text-xl font-black block">Active</span>
                 <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Real-time Telemetry</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
