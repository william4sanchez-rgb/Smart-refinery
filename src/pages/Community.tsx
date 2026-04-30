import { motion } from 'motion/react';
import { Users, Heart, GraduationCap, Home } from 'lucide-react';

export default function Community() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
            alt="Community Impact"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Social Responsibility</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Community <br />
              <span className="gradient-text">Prosperity</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed mx-auto">
              Investing in the education, health, and infrastructure of the regions where we operate.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, title: 'STEM Grants', val: '250+' },
              { icon: Heart, title: 'Health Centers', val: '12' },
              { icon: Home, title: 'Social Housing', val: '800' },
              { icon: Users, title: 'Local Jobs', val: '1.2k' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl text-center">
                 <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-6" />
                 <span className="text-4xl font-display font-black text-slate-900 block leading-none mb-1">{stat.val}</span>
                 <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.title}</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
