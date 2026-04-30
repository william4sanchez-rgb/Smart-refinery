import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, ShieldCheck, Globe, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    operations: [
      { name: 'Refining Process', path: '/refinery' },
      { name: 'Isomerization', path: '/refinery/isomerization' },
      { name: 'Hydrocracking', path: '/refinery/hydrocracking' },
      { name: 'Sulfur Recovery', path: '/refinery/sulfur-recovery' }
    ],
    solutions: [
      { name: 'Premium Diesel', path: '/products' },
      { name: 'Aviation Fuel', path: '/products' },
      { name: 'Digital Twin', path: '/digital-twin' },
      { name: 'Technical Lab', path: '/technical-lab' }
    ],
    company: [
      { name: 'About PKOP', path: '/about' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Community', path: '/community' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  return (
    <footer className="bg-slate-50 text-slate-900 pt-32 pb-12 px-6 relative overflow-hidden border-t border-slate-200">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Upper Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-600/20 group-hover:rotate-6 transition-transform">
                <Droplets className="text-white w-7 h-7" />
              </div>
              <span className="font-display font-black text-3xl tracking-tighter uppercase italic text-slate-900">
                Smart<span className="text-blue-600 italic font-light">Refinery</span>
              </span>
            </Link>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-md">
              The vanguard of Central Asian petrochemical excellence. Pioneering a sustainable path through digital-first industrial engineering.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all transform hover:-translate-y-1 shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200 p-10 md:p-12 rounded-[48px] shadow-xl shadow-slate-200/50">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-xs">
                   <h4 className="text-xl font-display font-black uppercase italic tracking-tight text-slate-900 mb-2">Technical Updates</h4>
                   <p className="text-slate-500 text-sm font-medium">Subscribe to our monthly operational performance reports and industry analysis.</p>
                </div>
                <div className="flex-1 w-full max-w-md">
                   <div className="relative group">
                      <input 
                        type="email" 
                        placeholder="Corporate Email Address" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-6 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 transition-all"
                      />
                      <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-6 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-blue-500 transition-colors">
                        Sourcing <ArrowRight className="w-3 h-3" />
                      </button>
                   </div>
                   <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest px-2">GDPR Compliant Data Handling Protocol Active</p>
                </div>
             </div>
          </div>
        </div>

        {/* Middle Section: Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 pb-4 border-b border-slate-200">Headquarters</h4>
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                     <MapPin className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-slate-600 text-sm font-medium leading-relaxed">
                     Almaty Financial District <br />
                     Dostyk Ave 105, Unit 4A <br />
                     Republic of Kazakhstan
                  </span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                     <Phone className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-slate-600 text-sm font-medium">+7 (727) 888 22 33</span>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 pb-4 border-b border-slate-200 uppercase">Operations</h4>
            <ul className="space-y-4">
              {footerLinks.operations.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-blue-600 text-sm font-bold uppercase tracking-tight transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 pb-4 border-b border-slate-200 uppercase">Refinement</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-blue-600 text-sm font-bold uppercase tracking-tight transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 pb-4 border-b border-slate-200 uppercase">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-blue-600 text-sm font-bold uppercase tracking-tight transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
             <div className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-slate-100 rounded-3xl p-8">
                <ShieldCheck className="text-emerald-500 w-10 h-10 mb-6" />
                <h5 className="text-slate-900 font-black uppercase italic tracking-tighter mb-2">Zero-Harm Policy</h5>
                <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">Our commitment to safety is absolute. 1,450 days since last LTI.</p>
                <Link to="/sustainability" className="text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-blue-700 transition-colors">
                   Safety Reports <ArrowRight className="w-3 h-3" />
                </Link>
             </div>
          </div>
        </div>

        {/* Lower Section: Compliance & Legal */}
        <div className="pt-12 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Systems Online: Shymkent Facility</span>
             </div>
             <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
               © {currentYear} PKOP. Smart Refinery Infrastructure. All Rights Reserved.
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10">
            <a href="#" className="text-slate-400 hover:text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Privacy & Data Protection</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Operational Terms</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Whistleblower Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
