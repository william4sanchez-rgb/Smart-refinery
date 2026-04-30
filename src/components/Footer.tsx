import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Droplets className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight uppercase">
                Smart<span className="text-blue-500">Refinery</span>
              </span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Advancing Kazakhstan's energy landscape through technological innovation and sustainable refining processes since 2012.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Operations</h4>
            <ul className="flex flex-col gap-3">
              {['Refinery Process', 'Product Quality', 'Supply Chain', 'Ecology'].map(item => (
                <li key={item}>
                  <Link to="/refinery" className="text-neutral-500 hover:text-blue-400 text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Careers', 'Latest Awards', 'Contact'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-neutral-500 hover:text-blue-400 text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-neutral-500 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Almaty, Kazakhstan, Dostyk Ave 105</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-500 text-sm">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+7 (727) 888-22-33</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-500 text-sm">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>info@smartrefinery.kz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-xs tracking-wide font-mono">
            © {currentYear} SMART REFINERY KAZAKHSTAN. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-neutral-600 hover:text-neutral-400 text-xs uppercase tracking-widest font-mono">Privacy Policy</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-400 text-xs uppercase tracking-widest font-mono">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
