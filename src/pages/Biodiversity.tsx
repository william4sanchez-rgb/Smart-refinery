import { motion } from 'motion/react';
import { Globe, Leaf, Wind, ShieldCheck } from 'lucide-react';

export default function Biodiversity() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="Biodiversity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-emerald-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Eco Stewardship</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Landscape <br />
              <span className="gradient-text">Protection</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Implementing active conservation programs to protect Central Asia's unique biodiversity across our operating territories.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
         <div className="bg-white rounded-[64px] p-12 md:p-24 border border-slate-100 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.9]">
              Scientific <br /> <span className="text-emerald-600">Preservation</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 font-medium max-w-3xl">
              We collaborate with ecological institutes to monitor soil health and water tables. Our refinery maintain a 500-hectare protective green belt, serving as a sanctuary for local flora and migratory species.
            </p>
         </div>
      </div>
    </div>
  );
}
