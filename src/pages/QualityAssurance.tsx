import { motion } from 'motion/react';
import { ClipboardCheck, ShieldCheck, Award, FileCheck } from 'lucide-react';

export default function QualityAssurance() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7e8a?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
            alt="Quality Assurance"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Zero Tolerance</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Quality <br />
              <span className="gradient-text">Assurance</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Uncompromising adherence to international fuel specifications and industrial lubricants standards.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Compliance', desc: 'Full alignment with K-4 and K-5 (Euro-5/6) ecological standards.' },
              { icon: FileCheck, title: 'Certification', desc: 'Digital quality passports issued for every batch dispatched.' },
              { icon: Award, title: 'Excellence', desc: 'Winner of National Industrial Quality Award for 4 consecutive years.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50"
              >
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
                    <item.icon className="text-blue-600 w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-black uppercase italic mb-4 text-slate-900">{item.title}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
         </div>
         
         <div className="mt-32 p-12 md:p-24 bg-slate-900 rounded-[64px] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
               <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.9]">
                 Certified Batch <br /> <span className="text-blue-600">Traceability</span>
               </h2>
               <p className="text-slate-400 text-lg mb-10 font-medium">
                 Every kilogram of product leaving our terminal is backed by a cryptographically signed quality certificate, ensuring full provenance from the crude well to the end-user.
               </p>
               <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all">
                  Sample Certificates
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
