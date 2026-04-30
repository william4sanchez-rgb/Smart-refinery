import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542337316-df1ec36940af?auto=format&fit=crop&q=80&w=2000"
          alt="Smart Refinery Kazakhstan"
          className="w-full h-full object-cover opacity-50 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-teal-500/10 to-transparent opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-amber-500" />
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Central Asian Energy Hub
            </span>
          </div>
          
          <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 uppercase italic text-white">
            Beyond <br />
            <span className="gradient-text">Refining</span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
            Smart Refinery Kazakhstan sets the benchmark for operational intelligence and sustainable performance in the oil and gas sector.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-xl shadow-blue-600/30"
            >
              Our Product Range
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center gap-4 group text-white hover:text-amber-400 transition-colors">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 transition-colors bg-white/5 backdrop-blur-sm">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <span className="font-bold tracking-wide uppercase text-sm">Experience Tour</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-teal-500/20 to-amber-500/10 rounded-full blur-3xl" />
            <div className="relative glass-panel p-10 rounded-[48px] h-full flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                    <ChevronRight className="text-blue-600 w-8 h-8" />
                 </div>
              </div>
              
              <div>
                <span className="text-slate-900 font-display font-black text-5xl mb-2 block leading-none">27.4<span className="text-blue-600 text-2xl ml-1 uppercase">M</span></span>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] leading-snug">
                   ANNUAL CAPACITY (m3) <br />
                   <span className="text-teal-600">CERTIFIED UNIT 2026</span>
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-3xl border border-white/10 shadow-2xl">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-3 font-bold">Optimization Quotient</p>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '94%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)]" 
                  />
                </div>
                <div className="flex justify-between mt-3">
                   <span className="text-[10px] font-bold text-teal-400">MAXIMIZED</span>
                   <span className="text-[10px] font-mono text-slate-500">PEAK PERFORMANCE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Discover</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 1.5 }}
           className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </div>
    </section>
  );
}
