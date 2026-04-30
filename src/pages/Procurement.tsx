import { motion } from 'motion/react';
import { ShoppingCart, ShieldCheck, Zap, Handshake } from 'lucide-react';

export default function Procurement() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542337316-df1ec36940af?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="Procurement"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Commercial Operations</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Bulk <br />
              <span className="gradient-text">Procurement</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Strategic partnerships and wholesale fuel supply chain solutions for national and international energy distributors.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
           <div className="bg-white p-12 rounded-[56px] border border-slate-100 shadow-2xl">
              <ShoppingCart className="text-blue-600 w-12 h-12 mb-8" />
              <h2 className="text-3xl font-black uppercase italic mb-6 text-slate-900">Wholesale <br /> Solutions</h2>
              <p className="text-slate-500 font-medium mb-8">We offer flexible procurement contracts for Jet-A1, Euro-6 Gasoline, and Ultra-Low Sulfur Diesel, backed by our state-managed logistics priority.</p>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">Download Terms</button>
           </div>
           <div className="bg-white p-12 rounded-[56px] border border-slate-100 shadow-2xl">
              <Handshake className="text-teal-600 w-12 h-12 mb-8" />
              <h2 className="text-3xl font-black uppercase italic mb-6 text-slate-900">Partner <br /> Integration</h2>
              <p className="text-slate-500 font-medium mb-8">Direct ERP integration for high-volume partners, allowing real-time order tracking and dynamic pricing based on global energy indices.</p>
              <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-teal-700 transition-all">Portal Access</button>
           </div>
        </div>
      </div>
    </div>
  );
}
