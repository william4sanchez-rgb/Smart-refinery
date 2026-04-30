import { motion } from 'motion/react';
import { FileText, Download, FileCheck } from 'lucide-react';

export default function Reports() {
  const reports = [
    { year: '2025', title: 'Annual Strategic Review', size: '14.2 MB', type: 'PDF' },
    { year: '2024', title: 'Full Financial Disclosure', size: '22.8 MB', type: 'PDF' },
    { year: '2024', title: 'Sustainability & ESG Report', size: '18.5 MB', type: 'PDF' },
    { year: '2023', title: 'Operational Performance Hub', size: '12.1 MB', type: 'PDF' }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale"
            alt="Reports Hub"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Investor Relations</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Annual <br />
              <span className="gradient-text">Reports</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              Transparent disclosure of financial, industrial, and social performance metrics for stakeholders and partners.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {reports.map((report, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-10 bg-white border border-slate-100 rounded-[48px] shadow-xl hover:shadow-2xl transition-all group flex flex-col justify-between"
             >
                <div className="flex justify-between items-start mb-12">
                   <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <FileText className="text-slate-400 group-hover:text-white w-8 h-8 transition-colors" />
                   </div>
                   <span className="text-4xl font-display font-black text-slate-900/10 uppercase italic">{report.year}</span>
                </div>
                <div>
                   <h3 className="text-2xl font-bold uppercase italic tracking-tight text-slate-900 mb-6">{report.title}</h3>
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{report.type} • {report.size}</span>
                      <button className="flex items-center gap-2 text-blue-600 font-black uppercase text-[10px] tracking-widest group-hover:translate-x-2 transition-transform">
                         Download <Download className="w-4 h-4" />
                      </button>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
