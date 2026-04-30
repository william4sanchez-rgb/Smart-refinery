import { motion } from 'motion/react';
import { Wind, Droplets, Leaf, ShieldCheck, BarChart3, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Sustainability() {
  const initiatives = [
    { 
      icon: Wind, 
      title: 'Emissions Control', 
      desc: 'Reducing carbon footprint through advanced catalytic filtration and methane capture technologies.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    { 
      icon: Droplets, 
      title: 'Water Recycling', 
      desc: 'Closed-loop cooling systems that recycle 92% of industrial water back into the refinery process.',
      color: 'text-teal-600',
      bg: 'bg-teal-50'
    },
    { 
      icon: Leaf, 
      title: 'Ecology Monitoring', 
      desc: '24/7 autonomous landscape sensors monitoring air quality across a 10km radius from the core.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Eco Preservation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-emerald-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Future Heritage</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Green <br />
              <span className="gradient-text">Operations</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              We believe that the energy of tomorrow must be refined with the highest respect for Kazakhstan's natural landscape.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110", item.bg)}>
                <item.icon className={cn("w-8 h-8", item.color)} />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="bg-white rounded-[64px] border border-slate-100 p-12 md:p-24 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="text-emerald-600 w-8 h-8" />
                <span className="text-emerald-600 font-mono text-xs font-bold tracking-[0.2em] uppercase">Impact Report 2025</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.9]">
                Zero Waste <br />
                <span className="text-emerald-600">Ambition</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                Our refinery is on a trajectory to achieve carbon neutrality by 2040. We invest 15% of our annual gross revenue into environmental restoration and local ecosystem preservation projects.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <span className="text-slate-900 font-display font-black text-4xl block leading-none mb-1">-24%</span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">CO2 Redux</span>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <span className="text-slate-900 font-display font-black text-4xl block leading-none mb-1">98%</span>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Safe Disposal</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-100 rounded-[56px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Nature Preservation"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-panel p-8 rounded-[40px] shadow-2xl max-w-[280px]">
                <AlertCircle className="text-amber-500 w-8 h-8 mb-4" />
                <p className="text-slate-900 text-sm font-bold leading-tight">Implementing ISO 14001:2015 Standards across all units.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
