import { motion } from 'motion/react';
import { Fuel, Droplets, Thermometer, ShieldCheck, Layers, Truck } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-1 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-[32px] overflow-hidden hover:from-blue-600/50 hover:to-blue-600/20 transition-all duration-500"
            >
              <div className="bg-neutral-950 h-full w-full rounded-[30px] p-10 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors">
                    <product.icon className="text-blue-500 group-hover:text-white w-7 h-7 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase italic tracking-tight mb-4 group-hover:text-blue-400 transition-colors uppercase">{product.name}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light">{product.usage}</p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold border-b border-neutral-900 pb-2 mb-4">Technical Specifications</p>
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-neutral-300 text-xs font-medium uppercase tracking-wide">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="bg-neutral-900/40 border border-neutral-800 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
          <Truck className="absolute -bottom-10 -right-10 w-96 h-96 text-neutral-800 opacity-20" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ShieldCheck className="text-blue-500 w-12 h-12 mb-8" />
              <h2 className="text-4xl font-display font-bold uppercase italic mb-6">Guaranteed Supply Chain</h2>
              <p className="text-neutral-400 leading-relaxed mb-10 font-light">
                Our logistics infrastructure includes high-capacity storage farms and dedicated pipeline access, ensuring uninterrupted product availability even during peak seasonal demands.
              </p>
              <button className="flex items-center gap-4 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all">
                Request Wholesale Quote
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 bg-neutral-950 rounded-3xl border border-neutral-800 flex flex-col items-center justify-center">
                <span className="text-blue-500 text-3xl font-display font-black tracking-tighter">0%</span>
                <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Downtime</span>
              </div>
              <div className="h-40 bg-neutral-950 rounded-3xl border border-neutral-800 flex flex-col items-center justify-center">
                <span className="text-blue-500 text-3xl font-display font-black tracking-tighter">24H</span>
                <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Monitoring</span>
              </div>
              <div className="h-40 bg-neutral-950 rounded-3xl border border-neutral-800 flex flex-col items-center justify-center">
                <span className="text-blue-500 text-3xl font-display font-black tracking-tighter">ISO</span>
                <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Certified</span>
              </div>
              <div className="h-40 bg-neutral-950 rounded-3xl border border-neutral-800 flex flex-col items-center justify-center">
                <span className="text-blue-500 text-3xl font-display font-black tracking-tighter">QA</span>
                <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Standards</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
