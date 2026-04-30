import Hero from '../components/Hero';
import StatsGrid from '../components/StatsGrid';
import ProductsSection from '../components/ProductsSection';
import { motion } from 'motion/react';
import { Shield, Recycle, Award, Globe, Cpu, Zap, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-neutral-50">
      <Hero />
      
      {/* Intro Section - Light */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               <span className="text-teal-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Legacy & Leadership</span>
               <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter uppercase italic leading-[0.9] mb-8 text-slate-900">
                 Powering <br />
                 <span className="text-blue-600 italic font-light">National Prosperity</span>
               </h2>
               <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                 Since its inception, Smart Refinery Kazakhstan has been a cornerstone of the nation’s energy transition. We transform raw resources into the high-grade fuels that drive commerce and community.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide mb-1 text-slate-900">National Priority</h4>
                      <p className="text-xs text-slate-500 font-medium">Strategic infrastructure designation</p>
                    </div>
                 </div>
                 <div className="p-6 bg-teal-50 border border-teal-100 rounded-2xl flex gap-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-teal-600/20">
                      <Recycle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide mb-1 text-slate-900">Bio-Integration</h4>
                      <p className="text-xs text-slate-500 font-medium">Next-gen low emission targets</p>
                    </div>
                 </div>
               </div>
             </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1542337316-df1ec36940af?auto=format&fit=crop&q=80&w=1000" 
                  alt="Industrial Facility"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-slate-900 p-10 rounded-[40px] hidden lg:block shadow-2xl">
                <Globe className="text-amber-500 w-10 h-10 mb-4" />
                <span className="text-white font-display font-black text-4xl block">12+</span>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Logistics Hubs</span>
             </div>
          </div>
        </div>
      </section>

      <StatsGrid />

      {/* Innovation Section - Modern Bento */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-blue-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Future-Ready Infrastructure</span>
            <h2 className="font-display font-black text-5xl md:text-7xl text-slate-900 uppercase italic tracking-tighter leading-[0.85]">
              Digital <br /> <span className="text-blue-600">Refinery 2.0</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 group relative h-[500px] rounded-[56px] overflow-hidden bg-slate-900 p-12 flex flex-col justify-between shadow-2xl transition-all hover:shadow-blue-500/10">
               <div className="flex justify-between items-start relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/30">
                     <Cpu className="text-white w-8 h-8" />
                  </div>
                  <span className="text-white/20 font-display font-black text-6xl italic uppercase">01</span>
               </div>
               <div className="relative z-10">
                  <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-6">Autonomous <br /> Processing</h3>
                  <p className="text-slate-400 text-lg max-w-md font-medium">Real-time AI synchronization across all distillation columns, maximizing extraction purity while minimizing energy waste by up to 22%.</p>
               </div>
               <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" alt="Tech" />
            </div>

            <div className="group relative h-[500px] rounded-[56px] overflow-hidden bg-teal-600 p-12 flex flex-col justify-between shadow-2xl transition-all hover:shadow-teal-500/10">
               <div className="flex justify-between items-start relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                     <Activity className="text-white w-8 h-8" />
                  </div>
                  <span className="text-white/20 font-display font-black text-6xl italic uppercase">02</span>
               </div>
               <div className="relative z-10">
                  <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4">Live <br /> Telemetry</h3>
                  <p className="text-teal-50 text-sm font-medium">Remote monitoring available via satellite links for 24/7 strategic oversight.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />

      {/* Philosophy Section - Vibrant Color */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 rotate-12">
          <DropletsIcon className="w-[500px] h-[500px] text-white" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-10 border border-white/20">
              <Award className="w-10 h-10 text-amber-400" />
            </div>
            <h2 className="font-display font-black text-5xl md:text-8xl text-white uppercase italic tracking-tighter mb-10 leading-[0.85]">
              Efficiency <br />
              <span className="text-white/50">Redefined.</span>
            </h2>
            <p className="text-blue-50 text-xl md:text-2xl mb-12 font-medium leading-relaxed">
              "We are building a legacy where industrial capacity meets digital precision. Every drop we refine is a step towards a more sustainable and secure energy future for Kazakhstan."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['2026 Strategic Target', 'Safety First Culture', 'Technological Sovereignty'].map(tag => (
                <div key={tag} className="bg-slate-900/40 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full text-white font-bold uppercase tracking-widest text-[10px]">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DropletsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-5.5c-.5 1.5-2 3.9-4 5.5s-3 3.5-3 5.5a7 7 0 0 0 7 7Z" />
    </svg>
  );
}
