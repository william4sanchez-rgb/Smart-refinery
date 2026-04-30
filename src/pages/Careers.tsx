import { motion } from 'motion/react';
import { Users, Briefcase, GraduationCap, Award, Search, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Careers() {
  const departments = [
    { name: 'Engineering', count: '12 OPENINGS', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Safety & ECO', count: '04 OPENINGS', icon: Award, color: 'text-teal-600', bg: 'bg-teal-50' },
    { name: 'Digital Ops', count: '08 OPENINGS', icon: GraduationCap, color: 'text-amber-600', bg: 'bg-amber-50' }
  ];

  const jobs = [
    { title: 'Chief Distillation Engineer', loc: 'Almaty Site', ref: 'ENG-2026-X1', type: 'Full-time' },
    { title: 'Cybersecurity Analyst', loc: 'Digital Hub', ref: 'OPS-2026-X9', type: 'Contract' },
    { title: 'Environmental Auditor', loc: 'Field Operations', ref: 'ECO-2026-X2', type: 'Interm' }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 transition-all duration-1000"
            alt="Careers Team"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Talent Ecosystem</span>
            <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-white">
              Join the <br />
              <span className="gradient-text">Elite</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl font-medium leading-relaxed">
              We are looking for the next generation of energy experts to pioneer industrial digitalization in Kazakhstan.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {departments.map((dept, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group"
             >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform", dept.bg)}>
                   <dept.icon className={cn("w-7 h-7", dept.color)} />
                </div>
                <h3 className="text-slate-900 text-2xl font-black uppercase italic mb-2">{dept.name}</h3>
                <span className={cn("text-[10px] font-bold uppercase tracking-widest", dept.color)}>{dept.count}</span>
             </motion.div>
          ))}
        </div>

        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
           <div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-4">
                Active <span className="text-blue-600">Vacancies</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg">Direct applications to the 2026 Strategic cohort.</p>
           </div>
           <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search positions..."
                className="w-full bg-slate-100 border border-slate-200 rounded-full px-8 py-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 outline-none transition-all"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
           </div>
        </div>

        <div className="space-y-6">
           {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 bg-white border border-slate-100 rounded-[32px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-2xl transition-all cursor-pointer group"
              >
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                       <Briefcase className="text-slate-400 group-hover:text-white w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-slate-900 uppercase italic tracking-tight">{job.title}</h4>
                       <div className="flex gap-4 mt-2">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                             <Users className="w-3 h-3" /> {job.loc}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                             <Award className="w-3 h-3" /> {job.ref}
                          </span>
                       </div>
                    </div>
                 </div>
                 <div className="flex items-center gap-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 bg-slate-100 px-4 py-2 rounded-full">{job.type}</span>
                    <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                       <ChevronRight className="w-5 h-5" />
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
