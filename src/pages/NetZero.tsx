import { motion } from 'motion/react';
import { Zap, BarChart, ShieldCheck, Files } from 'lucide-react';

export default function NetZero() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="Net Zero Roadmap"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-emerald-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Sustainability 2040</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Net Zero <br />
              <span className="gradient-text">Roadmap</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Our strategic commitment to achieving carbon neutrality across all refinery processes by 2040 through massive technological investment.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-24 px-6">
         <div className="space-y-16">
            {[
              { year: '2025', title: 'Emissions Baseline Audit', desc: 'Deployment of refinery-wide real-time GHG monitoring systems.' },
              { year: '2028', title: 'Renewable Integration', desc: 'Commissioning of a 150MW solar farm to power auxiliary systems.' },
              { year: '2032', title: 'CCUS Implementation', desc: 'Full-scale Carbon Capture, Utilization, and Storage facility launch.' },
              { year: '2040', title: 'Carbon Neutrality', desc: 'Achieving Net Zero through offsets and 100% emission-free processing.' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-12 group"
              >
                 <div className="flex flex-col items-center shrink-0">
                    <div className="w-20 h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center shadow-xl group-hover:bg-emerald-600 transition-colors">
                       <span className="text-xl font-display font-black text-slate-900 group-hover:text-white transition-colors">{step.year}</span>
                    </div>
                    <div className="w-px h-full bg-slate-200 mt-4" />
                 </div>
                 <div className="pb-16 border-b border-slate-100 w-full">
                    <h3 className="text-2xl font-black uppercase italic mb-4 text-slate-900">{step.title}</h3>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">{step.desc}</p>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
