import { motion } from 'motion/react';
import { Gavel, ShieldCheck, Scale, FileText } from 'lucide-react';

export default function Governance() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="Governance"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Corporate Ethics</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Institutional <br />
              <span className="gradient-text">Governance</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Maintaining the highest standards of transparency, ethical conduct, and strategic oversight in the Central Asian energy sector.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: Scale, title: 'Code of Ethics', desc: 'Strict zero-tolerance policy towards corruption and unfair market practices.' },
              { icon: ShieldCheck, title: 'Board Oversight', desc: 'Independently audited governance structures ensuring strategic accountability.' },
              { icon: FileText, title: 'Whistleblower', desc: 'Secure, anonymous digital channels for reporting ethical concerns.' },
              { icon: Gavel, title: 'Compliance', desc: 'Full adherence to Kazakhstan industrial law and international trade regulations.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-xl flex gap-8">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="text-blue-600 w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black uppercase italic mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
