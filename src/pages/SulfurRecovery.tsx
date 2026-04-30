import { motion } from 'motion/react';
import { Wind, ShieldCheck, Activity, AlertCircle, Thermometer, Filter, Settings } from 'lucide-react';
import InteractiveUnitDiagram, { DiagramStage } from '../components/InteractiveUnitDiagram';

export default function SulfurRecovery() {
  const sulfurStages: DiagramStage[] = [
    { id: 'thermal', title: 'Thermal Stage', description: 'Partial combustion of acid gas at 1000°C+ to initiate the conversion of H2S into elemental sulfur.', icon: Thermometer, color: 'blue' },
    { id: 'catalytic', title: 'Catalytic Stage', description: 'Multiple catalytic converters maximize sulfur yield using activated alumina beds.', icon: Filter, color: 'teal' },
    { id: 'tg-treat', title: 'Tail Gas Treatment', description: 'Final reduction of trace sulfur compounds to ensure 99.9%+ total recovery efficiency.', icon: Activity, color: 'emerald' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
            alt="Sulfur Recovery Unit"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-teal-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Environmental Shield</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Sulfur <br />
              <span className="gradient-text">Recovery (SRU)</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Converting harmful industrial emissions into high-purity elemental sulfur for agricultural and chemical applications.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="mb-32">
           <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4 leading-none">
                Recovery <br /> <span className="text-emerald-600">Cycle</span>
              </h2>
              <p className="text-slate-500 font-medium italic">High-efficiency emission neutralisation workflow.</p>
           </div>
           <InteractiveUnitDiagram stages={sulfurStages} unitName="Sulfur Recovery Complex" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="md:col-span-2 bg-white rounded-[56px] p-12 md:p-20 border border-slate-100 shadow-2xl">
              <h2 className="text-4xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.9]">
                Closing the <br /> <span className="text-teal-600">Ecological Loop</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
                The SRU utilizes the Claus process to recover sulfur from acid gas streams. This not only prevents toxic SO2 emissions but transforms waste into a valuable industrial commodity, ensuring our operations meet the world's strictest air quality standards.
              </p>
              <div className="flex gap-4">
                 <div className="bg-teal-50 px-8 py-4 rounded-2xl border border-teal-100">
                    <span className="text-teal-600 font-display font-black text-4xl block leading-none">99.9%</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Recovery Rate</span>
                 </div>
                 <div className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100">
                    <span className="text-slate-900 font-display font-black text-4xl block leading-none">0.05</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">SOx Trace</span>
                 </div>
              </div>
           </div>
           <div className="bg-slate-900 rounded-[56px] p-12 flex flex-col justify-between shadow-2xl">
              <Wind className="text-white w-12 h-12 mb-8" />
              <div>
                 <h4 className="text-white text-2xl font-black uppercase italic mb-4">Zero Gas <br /> Flaring Target</h4>
                 <p className="text-slate-400 text-sm mb-8">Integrated vapor recovery systems to eliminate operational gas loss.</p>
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <AlertCircle className="text-white w-6 h-6" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
