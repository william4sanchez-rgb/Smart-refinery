import { motion } from 'motion/react';
import { Cpu, Activity, Database, Zap, ShieldCheck, Globe, Settings } from 'lucide-react';
import InteractiveUnitDiagram, { DiagramStage } from '../components/InteractiveUnitDiagram';

export default function DigitalTwin() {
  const twinStages: DiagramStage[] = [
    { id: 'sensors', title: 'Sensor Mesh', description: 'Deployment of 50,000+ IoT sensors capturing pressure, temperature, and vibration data in real-time.', icon: Activity, color: 'blue' },
    { id: 'edge', title: 'Edge Compute', description: 'Local processing of raw telemetry to filter noise and detect immediate anomalies at the asset level.', icon: Settings, color: 'indigo' },
    { id: 'ai-hub', title: 'AI Simulation', description: 'Cloud-powered neural networks running trillions of "What-If" scenarios to optimize long-term asset health.', icon: Cpu, color: 'blue' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Digital Twin"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Refinery 4.0</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Digital Twin <br />
              <span className="gradient-text">Simulation</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Real-time cyber-physical synchronization of all refinery asset data for predictive maintenance and operational optimization.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="mb-32">
           <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 uppercase italic tracking-tighter mb-4 leading-none">
                Synchronization <br /> <span className="text-blue-600">Engine</span>
              </h2>
              <p className="text-slate-500 font-medium">The digital pipeline from sensor to strategy.</p>
           </div>
           <InteractiveUnitDiagram stages={twinStages} unitName="Digital Twin Ecosystem" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
           {[
             { icon: Database, name: 'Live Data ingestion', val: '4.2TB/day' },
             { icon: Activity, name: 'Sensor Accuracy', val: '99.98%' },
             { icon: Cpu, name: 'Processing Latency', val: '<2ms' },
             { icon: Zap, name: 'Energy Savings', val: '12%' },
           ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl"
             >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8">
                   <stat.icon className="text-blue-600 w-6 h-6" />
                </div>
                <span className="text-3xl font-display font-black text-slate-900 block mb-1">{stat.val}</span>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.name}</span>
             </motion.div>
           ))}
        </div>

        <section className="bg-slate-900 rounded-[64px] p-12 md:p-24 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-20 opacity-10">
              <Cpu className="w-96 h-96 text-white" />
           </div>
           <div className="max-w-3xl relative z-10">
              <h2 className="text-5xl font-display font-black text-white uppercase italic tracking-tighter mb-8 leading-[0.85]">
                Predictive <br /> <span className="text-blue-500">Intelligence.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 font-medium">
                By modeling trillions of operational permutations, our digital twin platform identifies potential equipment failures weeks before they occur and optimizes furnace temperatures in real-time, reducing fuel consumption by thousands of tons per year.
              </p>
              <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all">
                 System Architecture Docs
              </button>
           </div>
        </section>
      </div>
    </div>
  );
}
