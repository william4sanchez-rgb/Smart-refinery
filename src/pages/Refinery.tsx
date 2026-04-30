import { motion } from 'motion/react';
import { Settings, Cpu, Wind, Droplets, Factory, Database, Filter, Gauge, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import InteractiveUnitDiagram, { DiagramStage } from '../components/InteractiveUnitDiagram';

export default function Refinery() {
  const refineryStages: DiagramStage[] = [
    { id: 'desalting', title: 'Desalting', description: 'Removal of salt, water, and suspended solids from crude oil before it enters the distillation units to prevent corrosion.', icon: Droplets, color: 'blue' },
    { id: 'distillation', title: 'Distillation', description: 'Fractionation of crude oil into different boiling point ranges, producing light gases, naphtha, kerosene, and diesel.', icon: Filter, color: 'emerald' },
    { id: 'cracking', title: 'Cracking', description: 'Breaking down heavy hydrocarbon molecules into lighter, higher-value products like gasoline and jet fuel.', icon: Zap, color: 'amber' },
    { id: 'reforming', title: 'Reforming', description: 'Final molecular restructuring to boost octane levels and purity before final product blending.', icon: Settings, color: 'indigo' },
  ];

  const units = [
    { title: 'ATU-1', label: 'Atmospheric Distillation', desc: 'Primary separation of crude oil into fractions by boiling range.', color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'VDU-2', label: 'Vacuum Distillation', desc: 'Processing heavy residuals under reduced pressure for bitumen production.', color: 'text-teal-600', bg: 'bg-teal-50' },
    { title: 'CCR', label: 'Catalytic Reforming', desc: 'Upgrading low-octane naphtha to high-value gasoline components.', color: 'text-amber-600', bg: 'bg-amber-50' },
    { title: 'DHT', label: 'Diesel Hydrotreating', desc: 'Removing sulfur and impurities to meet Euro-5/6 environmental standards.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
            alt="Refinery Infrastructure"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Refined Technology</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Industrial <br />
              <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Our facility integrates the latest vertical refining technologies, reducing operational footprint while maximizing high-value yield and environmental safety.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="mb-32">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4">
              Operational <br /> <span className="text-blue-600">Flow Map</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-xl">Interactive breakdown of the core refining sequence at SmartRefinery Kazakhstan.</p>
          </div>
          <InteractiveUnitDiagram stages={refineryStages} unitName="Central Refinery Complex" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {units.map((unit, i) => (
            <motion.div
              key={unit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-12">
                <span className={cn("font-display font-black text-7xl opacity-20 transition-opacity group-hover:opacity-40 uppercase italic", unit.color)}>{unit.title}</span>
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", unit.bg)}>
                   <Settings className={cn("w-6 h-6", unit.color)} />
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-slate-900">{unit.label}</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-8">{unit.desc}</p>
              <div className="flex gap-4">
                 <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Pressure: 45 BAR</div>
                 <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Temp: 320°C</div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[40px] p-12 flex flex-col justify-between shadow-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-20 shadow-xl shadow-blue-600/30">
               <Cpu className="text-white w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white text-3xl font-black uppercase italic mb-6 tracking-tight">Quantum <br /> Monitoring</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                Our plant is fully digitalized, allowing real-time monitoring of every valve and temperature sensor to ensure sub-millisecond safety responses.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">Operational Dashboard</button>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative h-[600px] rounded-[40px] overflow-hidden group shadow-2xl border-8 border-white">
             <img 
               src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
               alt="Control Center"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
             <div className="absolute bottom-10 left-10 flex flex-wrap gap-4">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-[24px] border border-white shadow-xl">
                  <span className="text-blue-600 font-mono text-3xl font-black block leading-none mb-1">0.8ms</span>
                   <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Sync Latency</span>
                </div>
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-[24px] border border-white shadow-xl">
                  <span className="text-teal-600 font-mono text-3xl font-black block leading-none mb-1">94.2%</span>
                   <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Refining Accuracy</span>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
