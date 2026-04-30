import { motion } from 'motion/react';
import { ShieldCheck, HardHat, ClipboardCheck, Activity } from 'lucide-react';

export default function Safety() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5f649774?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="HSE Standards"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-red-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">HSE Hierarchy</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Industrial <br />
              <span className="gradient-text">Safety First</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Ensuring a zero-harm environment through rigorous process safety management and an uncompromising safety-first industrial culture.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            {[
              { icon: HardHat, title: 'Personal Protective Equipment', desc: 'State-of-the-art sensory integrated PPE for all field personnel.' },
              { icon: ShieldCheck, title: 'Process Safety', desc: 'Automated shutdown protocols triggered by sub-millisecond pressure anomalies.' },
              { icon: ClipboardCheck, title: 'Audit protocols', desc: 'Daily industrial safety walkthroughs and weekly third-party compliance audits.' },
              { icon: Activity, title: 'Live Health Monitoring', desc: 'Biometric tracking for technicians working in high-intensity industrial zones.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50 flex gap-8 items-start"
              >
                 <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="text-red-600 w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black uppercase italic mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
