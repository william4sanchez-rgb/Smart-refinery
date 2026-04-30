import { motion } from 'motion/react';
import { ShieldAlert, PhoneCall, Zap, Map } from 'lucide-react';

export default function Emergency() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900 text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542337316-df1ec36940af?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50 grayscale transition-all duration-1000"
            alt="Emergency Response"
          />
          <div className="absolute inset-0 bg-red-950/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-red-600/50 pulse-ring">
               <ShieldAlert className="text-white w-10 h-10" />
            </div>
            <span className="text-red-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Deployment Architecture</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Emergency <br />
              <span className="text-red-500">Response</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed mx-auto">
              Rapid-deployment protocols and dedicated on-site rescue teams for instantaneous industrial event mitigation.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-12 md:p-20 bg-white border border-slate-100 rounded-[56px] shadow-2xl">
               <h2 className="text-4xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.85]">
                 Rapid Service <br /> <span className="text-red-600">Mobilization</span>
               </h2>
               <p className="text-slate-500 text-lg mb-10 font-medium">
                 Our facility maintains a dedicated 24/7 fire and hazardous materials response unit, trained to handle high-pressure hydrocarbon events with specialized suppression hardware.
               </p>
               <div className="space-y-6">
                  <div className="flex gap-6 items-center border-b border-slate-50 pb-6">
                     <span className="text-5xl font-display font-black text-slate-900 leading-none">60s</span>
                     <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Base Alert Response</span>
                  </div>
                  <div className="flex gap-6 items-center border-b border-slate-50 pb-6">
                     <span className="text-5xl font-display font-black text-slate-900 leading-none">05m</span>
                     <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Full Unit Deplyment</span>
                  </div>
               </div>
            </div>
            <div className="space-y-8">
               <div className="bg-slate-900 p-12 rounded-[48px] shadow-2xl">
                  <PhoneCall className="text-red-500 w-12 h-12 mb-8" />
                  <h3 className="text-white text-3xl font-black uppercase italic mb-4">Immediate Support</h3>
                  <p className="text-slate-400 font-medium mb-8">Direct line for critical industrial facility coordination.</p>
                  <span className="text-2xl font-display font-bold text-white block">+7 (727) 888-9111</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
