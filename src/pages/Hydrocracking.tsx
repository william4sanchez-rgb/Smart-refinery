import { motion } from 'motion/react';
import { Factory, ShieldAlert, Thermometer, Droplets, Zap, ShieldCheck } from 'lucide-react';
import InteractiveUnitDiagram, { DiagramStage } from '../components/InteractiveUnitDiagram';

export default function Hydrocracking() {
  const hydrocrackingStages: DiagramStage[] = [
    { id: 'h2-feed', title: 'H2 Sourcing', description: 'Pure hydrogen is compressed and mixed with heavy feedstock to facilitate the cracking reaction.', icon: ShieldCheck, color: 'blue' },
    { id: 'reactor', title: 'Hydro-Reactor', description: 'Dual-bed catalytic reactor where heavy molecules are cracked at 400°C+ under immense pressure.', icon: Thermometer, color: 'red' },
    { id: 'fraction', title: 'Fractionation', description: 'Separation of the cracked stream into ultra-low sulfur diesel, jet fuel, and high-quality naphtha.', icon: Factory, color: 'indigo' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="Hydrocracking Unit"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Heavy Processing</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Hydrocracking <br />
              <span className="gradient-text">Complex</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Advanced thermal cracking of heavy hydrocarbons under high-pressure hydrogen to produce ultra-clean diesel and kerosene.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="mb-32">
           <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4 leading-none">
                Conversion <br /> <span className="text-blue-600">Dynamics</span>
              </h2>
              <p className="text-slate-500 font-medium italic">Inside the refinery's most high-pressure environment.</p>
           </div>
           <InteractiveUnitDiagram stages={hydrocrackingStages} unitName="Hydrocracking Unit" />
        </div>

         <div className="bg-white rounded-[44px] p-12 md:p-24 border border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl">
               <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-blue-600/20">
                  <Factory className="text-white w-8 h-8" />
               </div>
               <h2 className="text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.85]">
                 Maximum <br /> <span className="text-blue-600">Conversion</span>
               </h2>
               <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
                 Our hydrocracking unit represents the peak of industrial energy conversion. By breaking down heavy residue into high-value distillates, we maximize the refinery's yield while removing virtually all sulfur and nitrogen impurities.
               </p>
               <div className="flex flex-wrap gap-10">
                  <div className="flex items-center gap-4">
                     <Thermometer className="text-amber-500 w-8 h-8" />
                     <div>
                        <span className="text-slate-900 font-black text-2xl block">420°C</span>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Operating Temp</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <ShieldAlert className="text-red-500 w-8 h-8" />
                     <div>
                        <span className="text-slate-900 font-black text-2xl block">180 Bar</span>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Vessel Pressure</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
