import { motion } from 'motion/react';
import { Globe, Users, Zap, ShieldCheck } from 'lucide-react';

export default function LocalContent() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="Local Content"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">National Sovereignty</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Kazakhstan <br />
              <span className="gradient-text">Local Content</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Prioritizing domestic manufacturing, local engineering talent, and regional supply chains to drive national economic growth.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6 text-center">
         <div className="p-12 md:p-24 bg-white border border-slate-100 rounded-[64px] shadow-2xl relative overflow-hidden mb-32">
            <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.85]">
              Empowering <br /> <span className="text-blue-600">National Industry</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto mb-16 font-medium leading-relaxed italic">
              "Our strategy is built on the belief that for every drop of oil refined, a new opportunity for a Kazakhstan citizen must be created. We target 95% local workforce participation by 2028."
            </p>
            <div className="flex flex-wrap justify-center gap-12">
               <div>
                  <span className="text-6xl font-display font-black text-slate-900 block leading-none">82%</span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Local Spending</span>
               </div>
               <div>
                  <span className="text-6xl font-display font-black text-slate-900 block leading-none">400+</span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Local Vendors</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
