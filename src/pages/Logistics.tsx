import { motion } from 'motion/react';
import { Truck, Ship, Train, Box, Map, Globe, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Logistics() {
  const modes = [
    { icon: Truck, title: 'Road Transport', count: '140+', label: 'Fleet Units', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Train, title: 'Rail Logistics', count: '850', label: 'Cistern Cars', color: 'text-teal-600', bg: 'bg-teal-50' },
    { icon: Ship, title: 'Caspian Export', count: '12', label: 'Vessel Routes', color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale hover:grayscale-0"
            alt="Logistics Hub"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Supply Topology</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Global <br />
              <span className="gradient-text">Reach</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Our automated distribution architecture ensures that Smart Refinery products reach the heart of Kazakhstan and international markets with surgical precision.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative"
            >
              <div className={cn("inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-12 transition-transform group-hover:rotate-6", mode.bg)}>
                <mode.icon className={cn("w-8 h-8", mode.color)} />
              </div>
              <h3 className="text-slate-900 text-2xl font-black uppercase italic mb-2 leading-none">{mode.title}</h3>
              <div className="flex items-baseline gap-2 mt-4">
                 <span className="text-5xl font-display font-black text-slate-900 leading-none">{mode.count}</span>
                 <span className={cn("text-xs font-bold uppercase tracking-widest", mode.color)}>{mode.label}</span>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50">
                 <button className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-slate-900 transition-colors">
                    Logistics Schedule <Globe className="w-3 h-3" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="relative h-[600px] rounded-[64px] overflow-hidden shadow-2xl group border-8 border-white">
           <img 
             src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
             alt="Pipeline Network"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
           <div className="absolute inset-0 flex items-center p-12 md:p-24">
              <div className="max-w-xl">
                 <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-600/30">
                    <Map className="text-white w-8 h-8" />
                 </div>
                 <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.85]">
                   The Nerve <br /> Center.
                 </h2>
                 <p className="text-slate-100 text-lg mb-10 font-medium">
                   Strategic storage farms connected via direct high-pressure pipeline systems to the national export grid, minimizing transport latency.
                 </p>
                 <div className="flex gap-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                       <span className="text-white font-black text-2xl block">850km</span>
                       <span className="text-white/60 text-[8px] font-black uppercase tracking-widest">Pipe Capacity</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                       <span className="text-white font-black text-2xl block">12H</span>
                       <span className="text-white/60 text-[8px] font-black uppercase tracking-widest">Sync Period</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
