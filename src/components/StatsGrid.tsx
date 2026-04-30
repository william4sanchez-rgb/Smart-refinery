import { motion } from 'motion/react';
import { Target, Zap, Waves, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const stats = [
  { label: 'Annual Output', value: '27.4M', unit: 'm3', icon: Waves, color: 'text-blue-500', bg: 'bg-blue-50', description: 'State-of-the-art refining capacity across 4 main units.' },
  { label: 'Refining Purity', value: '99.9%', unit: 'GRADE', icon: Target, color: 'text-teal-500', bg: 'bg-teal-50', description: 'Exceeding international Euro-6 environment standards.' },
  { label: 'Safety Record', value: '0.0', unit: 'LTIFR', icon: ShieldCheck, color: 'text-amber-500', bg: 'bg-amber-50', description: 'Zero lost time incidents over the last 36 months.' },
  { label: 'Response Time', value: '<2.4h', unit: 'LOGIST', icon: Zap, color: 'text-indigo-500', bg: 'bg-indigo-50', description: 'Rapid fulfillment and logistics synchronization.' },
];

export default function StatsGrid() {
  return (
    <section className="py-24 px-6 relative bg-white">
       <div className="max-w-7xl mx-auto">
         <div className="mb-20">
           <span className="text-blue-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Metrics & Performance</span>
           <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter uppercase italic text-slate-900">
             Strategic <span className="text-blue-600 italic font-light whitespace-nowrap">Operational Data</span>
           </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {stats.map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-neutral-50 p-10 rounded-[32px] border border-neutral-100 flex flex-col items-start hover:shadow-2xl hover:shadow-blue-500/5 transition-all group cursor-default"
             >
               <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:rotate-6", stat.bg)}>
                 <stat.icon className={cn("w-7 h-7", stat.color)} />
               </div>
               
               <div className="flex items-baseline gap-2 mb-4">
                 <span className="text-4xl font-display font-black tracking-tight text-slate-900">{stat.value}</span>
                 <span className={cn("font-mono text-sm font-bold uppercase", stat.color)}>{stat.unit}</span>
               </div>

               <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">{stat.label}</h3>
               <p className="text-slate-500 text-sm leading-relaxed font-light">
                 {stat.description}
               </p>
             </motion.div>
           ))}
         </div>
       </div>
    </section>
  );
}
