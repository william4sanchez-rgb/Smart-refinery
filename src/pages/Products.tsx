import { motion } from 'motion/react';
import { Fuel, Droplets, Thermometer, ShieldCheck, Layers, Truck, Zap, FlaskConical, Microscope, Activity } from 'lucide-react';

const products = [
  {
    icon: Fuel,
    name: 'AI-92 / AI-95 Gasoline',
    specs: ['Euro-5 Standard', 'Ultra Low Sulfur', 'High Octane Rating'],
    usage: 'Modern passenger vehicles and high-compression engines.'
  },
  {
    icon: Droplets,
    name: 'Euro Diesel (Summer/Winter)',
    specs: ['Cetan Number 51+', 'Cloud Point -35°C', 'Lubricity Enhanced'],
    usage: 'Agricultural machinery, specialized transport, and industrial generators.'
  },
  {
    icon: Layers,
    name: 'Road Bitumen',
    specs: ['BND 70/100 Grade', 'High Ductility', 'Oxidation Resistant'],
    usage: 'Critical infrastructure projects and nationwide highway construction.'
  },
  {
    icon: Thermometer,
    name: 'Heating Oil',
    specs: ['High Calorific Value', 'Clean Ignition', 'Standardized Flashpoint'],
    usage: 'Residential heating complexes and industrial boiler systems.'
  }
];

export default function Products() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
            alt="Petroleum Inventory"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic mb-6 text-white">
                Strategic <br />
                <span className="gradient-text">Inventory</span>
              </h1>
              <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
                Smart Refinery processes a diverse range of petroleum products, ensuring energy security for Kazakhstan and international partners through certified chemical consistency.
              </p>
            </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        {/* Section Heading */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">Product Portfolio</span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 uppercase italic tracking-tighter leading-[0.85]">
              Core Energy <br /> <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-slate-500 max-w-sm font-medium">
              Every liter of fuel produced at SmartRefinery is calibrated for maximum efficiency and minimum environmental trace.
            </p>
          </div>
        </div>

        {/* Detailed Products Grid */}
        <div className="grid grid-cols-1 gap-12 mb-32">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[48px] overflow-hidden border border-slate-100 shadow-2xl hover:shadow-blue-900/5 transition-all duration-700"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 p-12 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-50">
                  <div>
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-all duration-500 group-hover:rotate-6 shadow-xl shadow-blue-600/5">
                      <product.icon className="text-blue-600 group-hover:text-white w-8 h-8 transition-colors" />
                    </div>
                    <h3 className="text-4xl font-display font-black uppercase italic tracking-tighter text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest leading-relaxed">
                      Primary Application: <br />
                      <span className="text-slate-900 italic font-medium">{product.usage}</span>
                    </p>
                  </div>
                </div>

                <div className="lg:w-2/3 p-12 md:p-16 bg-slate-50/50">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-8">Technical Parameters</span>
                         <div className="space-y-6">
                            {product.specs.map((spec, si) => (
                              <div key={si} className="flex items-center gap-4 group/spec">
                                 <div className="w-2 h-2 rounded-full bg-blue-600 group-hover/spec:scale-150 transition-transform" />
                                 <span className="text-slate-700 font-bold uppercase text-sm tracking-tight">{spec}</span>
                              </div>
                            ))}
                         </div>
                      </div>
                      <div className="flex flex-col justify-between">
                         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                            <ShieldCheck className="text-emerald-500 w-8 h-8 mb-4" />
                            <h4 className="text-slate-900 font-black uppercase italic text-sm mb-2">Compliance Rating</h4>
                            <p className="text-slate-500 text-xs font-medium">Fully certified according to Kazakhstan State Standards (GOST) and International ISO requirements.</p>
                         </div>
                         <button className="mt-8 flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:-translate-y-1 transition-all">
                            View Data Sheet
                         </button>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytical Precision Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-4">
                      <div className="aspect-square bg-white rounded-[40px] border border-slate-100 shadow-xl p-8 flex flex-col justify-end">
                         <FlaskConical className="text-blue-600 w-10 h-10 mb-4" />
                         <span className="text-2xl font-display font-black text-slate-900 uppercase italic leading-tight">99.9% <br /> Purity</span>
                      </div>
                      <div className="aspect-[4/5] bg-slate-900 rounded-[40px] p-8 flex flex-col justify-end">
                         <Microscope className="text-white/20 w-12 h-12 mb-4" />
                         <span className="text-white font-display font-black text-xl uppercase italic leading-tight">Spectral <br /> Analysis</span>
                      </div>
                   </div>
                   <div className="space-y-4 pt-12">
                      <div className="aspect-[4/5] bg-blue-600 rounded-[40px] p-8 flex flex-col justify-end">
                         <Activity className="text-white w-10 h-10 mb-4" />
                         <span className="text-white font-display font-black text-xl uppercase italic leading-tight">Real-time <br /> Monitoring</span>
                      </div>
                      <div className="aspect-square bg-slate-50 rounded-[40px] border border-slate-200 p-8 flex flex-col justify-end">
                         <ShieldCheck className="text-slate-400 w-10 h-10 mb-4" />
                         <span className="text-slate-900 font-display font-black text-xl uppercase italic leading-tight">Bureau <br /> Veritas</span>
                      </div>
                   </div>
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <span className="text-blue-600 font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Quality Integration</span>
                <h2 className="text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-8 leading-[0.85]">
                  Beyond <br /> <span className="text-blue-600">Refinement</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                  Our products don't just meet standards; they redefine them. Through our advanced Regional R&D Lab, we ensure every molecular chain is optimized for the specific climate and engineering requirements of Central Asia.
                </p>
                <div className="space-y-6">
                   {[
                     { t: 'Catalytic Optimization', d: 'Proprietary molecular cracking agents.' },
                     { t: 'Cold Flow Innovation', d: 'Winter diesel tested for -45°C extreme conditions.' },
                     { t: 'Additive Synergy', d: 'Custom friction-reduction compounds for heavy machinery.' }
                   ].map((feat, i) => (
                     <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                           <Zap className="text-blue-600 w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-slate-900 font-black uppercase italic text-sm mb-1">{feat.t}</h4>
                           <p className="text-slate-500 text-xs font-medium">{feat.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Global Logistics Section */}
        <section className="bg-slate-900 rounded-[64px] p-12 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
            <Truck className="w-96 h-96 text-white" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-blue-400 font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block italic">Ready for Dispatch</span>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.85]">
                Uninterrupted <br /> <span className="text-blue-600">Supply Priority</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed max-w-xl italic">
                "Our logistics infrastructure isn't just about movement; it's about the security of a nation's heartbeat. We maintain 30-day strategic reserves in our tank farms to ensure continuity."
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                 <div>
                    <span className="text-5xl font-display font-black text-white block mb-2">99.8%</span>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none">Schedule Reliability</span>
                 </div>
                 <div>
                    <span className="text-5xl font-display font-black text-white block mb-2">350k</span>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none">Cubic Meters Storage</span>
                 </div>
              </div>

              <button className="bg-white text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-2xl shadow-white/10">
                Logistics Portal Access
              </button>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
               <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 border border-white/10">
                  <Layers className="text-blue-500 w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold uppercase italic text-white mb-2">Multi-Modal Flow</h3>
                  <p className="text-slate-500 text-sm">Synchronized pipeline, rail, and road terminal operations for maximum versatility.</p>
               </div>
               <div className="bg-blue-600 rounded-[40px] p-10 shadow-2xl shadow-blue-600/20">
                  <ShieldCheck className="text-white w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold uppercase italic text-white mb-2">Secure Transit</h3>
                  <p className="text-blue-100 text-sm">Every batch is digitally tracked and sealed with cryptographically verified purity seals.</p>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
