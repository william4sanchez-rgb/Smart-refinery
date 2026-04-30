import { motion } from 'motion/react';
import { History, Target, Users, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  const values = [
    { icon: History, title: 'Heritage', desc: 'Over a decade of commitment to refining Kazakhstan’s natural wealth.', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Target, title: 'Vision', desc: 'Becoming the digital benchmark for energy processing in Central Asia.', color: 'text-teal-600', bg: 'bg-teal-50' },
    { icon: Users, title: 'People', desc: 'Empowering local talent through advanced engineering training programs.', color: 'text-amber-600', bg: 'bg-amber-50' },
    { icon: MapPin, title: 'Impact', desc: 'Located at the axis of regional energy security and logistics.', color: 'text-indigo-600', bg: 'bg-indigo-50' }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
           >
              <span className="text-teal-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Corporate Ethos</span>
              <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-slate-900">
                Driven by <br />
                <span className="gradient-text">Values</span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-6">
                Smart Refinery Kazakhstan was founded on the principle that industrial power and environmental responsibility can coexist. We operate one of the most technologically advanced refineries in the region.
              </p>
              <div className="h-px bg-slate-200 w-full mb-10" />
              <div className="flex flex-wrap gap-12">
                 <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex-1 min-w-[150px]">
                    <span className="text-4xl font-display font-black tracking-tight block text-blue-600">2012</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Year Founded</span>
                 </div>
                 <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex-1 min-w-[150px]">
                    <span className="text-4xl font-display font-black tracking-tight block text-teal-600">450+</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Specialists</span>
                 </div>
                 <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex-1 min-w-[150px]">
                    <span className="text-4xl font-display font-black tracking-tight block text-amber-600">09</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Regions Served</span>
                 </div>
              </div>
           </motion.div>
           <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl p-4 bg-slate-100">
                 <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <img 
                      src="https://images.unsplash.com/photo-1542337316-df1ec36940af?auto=format&fit=crop&q=100&w=1000" 
                      className="w-full h-full object-cover"
                      alt="Refinery Aerial"
                    />
                 </div>
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center border-8 border-neutral-50 p-6 text-center shadow-2xl">
                 <span className="text-white text-xs font-black uppercase tracking-tighter leading-tight italic">Excellence <br /> Guaranteed</span>
              </div>
           </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
           {values.map((v, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-10 rounded-[48px] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
             >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-colors duration-500", v.bg)}>
                   <v.icon className={cn("w-7 h-7", v.color)} />
                </div>
                <h3 className="text-xl font-black uppercase italic mb-4 text-slate-900 leading-none">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.desc}</p>
             </motion.div>
           ))}
        </div>

        <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-50" />
           <div className="relative z-10">
             <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase italic tracking-tighter mb-8 max-w-3xl mx-auto leading-[0.85]">
               Build the <br /> <span className="text-blue-500">Future of Energy</span>
             </h2>
             <p className="text-slate-400 mb-12 max-w-xl mx-auto font-medium text-lg leading-relaxed">
               We are always looking for visionary engineers, safety specialists, and operational leaders to help us refine the future of Kazakhstan.
             </p>
             <button className="bg-white text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl hover:bg-blue-500 hover:text-white">
               Explore Open Roles
             </button>
           </div>
        </section>
      </div>
    </div>
  );
}
