import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-black text-xl tracking-tighter uppercase italic text-slate-900">
                Smart<span className="text-blue-600 italic font-light">Refinery</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
              Transforming Central Asia's energy sector through sustainable innovation and high-grade industrial processing.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Operations</h4>
            <ul className="flex flex-col gap-4">
              {['Refinery Process', 'Product Quality', 'Supply Chain', 'Ecology'].map(item => (
                <li key={item}>
                  <Link to="/refinery" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Refinery', 'Products', 'About', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Direct Access</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-slate-500 text-sm font-medium">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0" />
                <span>Almaty, Kazakhstan <br /> Dostyk Ave 105</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <span>+7 (727) 888-22-33</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>info@smartrefinery.kz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            © {currentYear} Smart Refinery Kazakhstan. Digital Sovereignty Approved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
