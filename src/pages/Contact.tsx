import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 bg-neutral-50 min-h-screen">
       <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
               <span className="text-teal-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Get in Touch</span>
               <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase italic leading-none mb-8 text-slate-900">
                 Direct <br />
                 <span className="gradient-text">Channels</span>
               </h1>
               <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-lg">
                 Have a wholesale inquiry or partnership proposal? Our strategic communications team is responsive across all industrial sectors.
               </p>

               <div className="space-y-8">
                  <div className="flex gap-6 group cursor-default">
                     <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500">
                        <MapPin className="text-blue-600 group-hover:text-white w-7 h-7 transition-colors" />
                     </div>
                     <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-1 text-slate-900 leading-none">Operational HQ</h4>
                        <p className="text-slate-500 font-medium mt-1">Almaty, Kazakhstan, Dostyk Ave 105, Suite 402</p>
                     </div>
                  </div>
                  <div className="flex gap-6 group cursor-default">
                     <div className="w-16 h-16 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-all duration-500">
                        <Phone className="text-teal-600 group-hover:text-white w-7 h-7 transition-colors" />
                     </div>
                     <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-1 text-slate-900 leading-none">Commercial Enquiries</h4>
                        <p className="text-slate-500 font-medium mt-1">+7 (727) 888-22-33 (Support: Mon-Sat)</p>
                     </div>
                  </div>
                  <div className="flex gap-6 group cursor-default">
                     <div className="w-16 h-16 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-600 transition-all duration-500">
                        <Mail className="text-amber-600 group-hover:text-white w-7 h-7 transition-colors" />
                     </div>
                     <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-1 text-slate-900 leading-none">Digital Correspondence</h4>
                        <p className="text-slate-500 font-medium mt-1">contact@smartrefinery.kz</p>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-slate-100 p-8 md:p-12 rounded-[48px] relative overflow-hidden shadow-2xl shadow-blue-900/5"
            >
               <div className="absolute top-0 right-0 p-8">
                  <Globe className="text-slate-100 w-48 h-48 opacity-50" />
               </div>
               
               <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Full Name / Entity</label>
                        <input 
                          type="text" 
                          placeholder="Zhomart Tursynov"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white outline-none transition-all"
                        />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Direct Email</label>
                        <input 
                          type="email" 
                          placeholder="zhomart@energy.kz"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white outline-none transition-all"
                        />
                     </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Department</label>
                     <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 appearance-none focus:border-blue-600 focus:bg-white outline-none transition-all">
                        <option>Wholesale Fuel Supply</option>
                        <option>Refinery Services Enquiry</option>
                        <option>Investment and Partnerships</option>
                        <option>Careers and HR</option>
                        <option>Other Information</option>
                     </select>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Message Detail</label>
                     <textarea 
                        rows={5}
                        placeholder="Please describe your requirements in detail..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white outline-none transition-all resize-none"
                     ></textarea>
                  </div>
                  <button className="w-full bg-slate-900 hover:bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all shadow-xl hover:shadow-blue-600/20 flex items-center justify-center gap-3 group">
                     Submit Request
                     <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </form>
            </motion.div>
         </div>
       </div>
    </div>
  );
}
