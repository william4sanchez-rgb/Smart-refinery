import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Info, Zap, Settings, ShieldCheck, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

export interface DiagramStage {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

interface InteractiveUnitDiagramProps {
  stages: DiagramStage[];
  unitName: string;
}

export default function InteractiveUnitDiagram({ stages, unitName }: InteractiveUnitDiagramProps) {
  const [activeStage, setActiveStage] = useState<string | null>(stages[0]?.id || null);

  const colorMap: Record<string, { border: string; shadow: string; bg: string }> = {
    blue: { border: 'border-blue-500', shadow: 'shadow-blue-500/20', bg: 'bg-blue-600' },
    emerald: { border: 'border-emerald-500', shadow: 'shadow-emerald-500/20', bg: 'bg-emerald-600' },
    amber: { border: 'border-amber-500', shadow: 'shadow-amber-500/20', bg: 'bg-amber-600' },
    indigo: { border: 'border-indigo-500', shadow: 'shadow-indigo-500/20', bg: 'bg-indigo-600' },
    red: { border: 'border-red-500', shadow: 'shadow-red-500/20', bg: 'bg-red-600' },
    teal: { border: 'border-teal-500', shadow: 'shadow-teal-500/20', bg: 'bg-teal-600' },
  };

  return (
    <div className="bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Settings className="w-64 h-64 animate-[spin_20s_linear_infinite]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Stages Visualization */}
        <div className="lg:col-span-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            {stages.map((stage, i) => (
              <div key={stage.id} className="flex-1 w-full md:w-auto relative group">
                {/* Connector Line */}
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0">
                    <motion.div 
                      className="h-full bg-blue-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStage(stage.id)}
                  className={cn(
                    "relative z-10 w-full aspect-square md:aspect-auto md:h-32 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all duration-500 border-2",
                    activeStage === stage.id 
                      ? `bg-white shadow-2xl ${colorMap[stage.color]?.border || 'border-blue-500'} ${colorMap[stage.color]?.shadow || 'shadow-blue-500/20'}`
                      : "bg-slate-50 border-transparent hover:bg-white hover:shadow-xl shadow-slate-200/50"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500",
                    activeStage === stage.id 
                      ? `${colorMap[stage.color]?.bg || 'bg-blue-600'} text-white` 
                      : "bg-white text-slate-400 group-hover:text-slate-900"
                  )}>
                    <stage.icon className="w-6 h-6" />
                  </div>
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest text-center px-2",
                    activeStage === stage.id ? "text-slate-900" : "text-slate-400"
                  )}>
                    {stage.title}
                  </span>
                </motion.button>
              </div>
            ))}
          </div>

          {/* Technical Drawing Context (Decorative) */}
          <div className="mt-12 pt-12 border-t border-slate-50 grid grid-cols-3 gap-8">
             <div className="space-y-2">
                <div className="h-1 w-12 bg-blue-600/20 rounded-full" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">Thermal Input Flow</span>
             </div>
             <div className="space-y-2">
                <div className="h-1 w-12 bg-emerald-600/20 rounded-full" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">Catalytic Buffer</span>
             </div>
             <div className="space-y-2">
                <div className="h-1 w-12 bg-amber-600/20 rounded-full" />
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-tighter">Pressure Relief</span>
             </div>
          </div>
        </div>

        {/* Explanation Card */}
        <div className="lg:col-span-5">
           <AnimatePresence mode="wait">
              {activeStage && (
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-slate-900 p-10 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      {(() => {
                        const stage = stages.find(s => s.id === activeStage);
                        return stage && <stage.icon className="w-32 h-32 text-white" />;
                      })()}
                   </div>
                   
                   <div className="relative z-10">
                      <span className="text-blue-400 font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Process Detail</span>
                      <h3 className="text-3xl font-display font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
                        {stages.find(s => s.id === activeStage)?.title}
                      </h3>
                      <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
                        {stages.find(s => s.id === activeStage)?.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-white">
                         <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                            <Info className="w-5 h-5 text-blue-400" />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-widest">Technical Specifications Applied</span>
                      </div>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
