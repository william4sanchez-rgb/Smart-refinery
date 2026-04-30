import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Droplets, Shield, Factory, Info, Phone, Wind, Truck, Users, ChevronDown, Cpu, Microscope, ClipboardCheck, Zap, BarChart, Gavel, Globe, ShieldAlert, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavLink {
  name: string;
  path: string;
  icon: any;
  sublinks?: { name: string; path: string; icon: any; }[];
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/', icon: Droplets },
  { 
    name: 'Operations', 
    path: '/refinery', 
    icon: Factory,
    sublinks: [
      { name: 'Refining Core', path: '/refinery', icon: Factory },
      { name: 'Isomerization', path: '/refinery/isomerization', icon: Zap },
      { name: 'Hydrocracking', path: '/refinery/hydrocracking', icon: Factory },
      { name: 'Sulfur Recovery', path: '/refinery/sulfur-recovery', icon: Factory },
      { name: 'Digital Twin', path: '/refinery/digital-twin', icon: Cpu },
    ]
  },
  { 
    name: 'Solutions', 
    path: '/products', 
    icon: Shield,
    sublinks: [
      { name: 'Full Range', path: '/products', icon: Shield },
      { name: 'Technical Lab', path: '/solutions/lab', icon: Microscope },
      { name: 'QA Standards', path: '/solutions/qa', icon: ClipboardCheck },
      { name: 'Procurement', path: '/solutions/procurement', icon: Zap },
    ]
  },
  { 
    name: 'Impact', 
    path: '/sustainability', 
    icon: Wind,
    sublinks: [
      { name: 'Sustainability', path: '/sustainability', icon: Wind },
      { name: 'Net Zero 2040', path: '/sustainability/net-zero', icon: BarChart },
      { name: 'Community', path: '/sustainability/community', icon: Users },
      { name: 'Biodiversity', path: '/sustainability/biodiversity', icon: Globe },
    ]
  },
  { 
    name: 'Company', 
    path: '/about', 
    icon: Info,
    sublinks: [
      { name: 'About SrK', path: '/about', icon: Info },
      { name: 'Annual Reports', path: '/about/reports', icon: ClipboardCheck },
      { name: 'Governance', path: '/about/governance', icon: Gavel },
      { name: 'Local Content', path: '/about/local-content', icon: Globe },
      { name: 'Logistics', path: '/logistics', icon: Truck },
    ]
  },
  { 
    name: 'Safety', 
    path: '/about/safety', 
    icon: ShieldCheck,
    sublinks: [
      { name: 'HSE Standards', path: '/about/safety', icon: ShieldCheck },
      { name: 'Emergency', path: '/about/emergency', icon: ShieldAlert },
    ]
  },
  { name: 'Careers', path: '/careers', icon: Users },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200 py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-extrabold text-xl tracking-tight leading-none uppercase transition-colors",
              scrolled ? "text-slate-900" : "text-white"
            )}>
              Smart<span className="text-blue-600">Refinery</span>
            </span>
            <span className={cn(
              "text-[10px] font-mono tracking-[0.2em] font-medium transition-colors",
              scrolled ? "text-slate-400" : "text-slate-300"
            )}>
              KAZAKHSTAN ENERGY
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group/parent"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer py-2">
                <Link
                  to={link.path}
                  className={cn(
                    'text-sm font-semibold tracking-wide transition-all hover:text-blue-600 flex items-center gap-1',
                    (location.pathname === link.path || (link.sublinks?.some(s => location.pathname === s.path))) 
                      ? 'text-blue-600' 
                      : (scrolled ? 'text-slate-600' : 'text-slate-100')
                  )}
                >
                  {link.name}
                </Link>
                {link.sublinks && (
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform group-hover/parent:rotate-180",
                    scrolled ? "text-slate-400" : "text-slate-300"
                  )} />
                )}
              </div>

              {/* Submenu */}
              {link.sublinks && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 rounded-3xl shadow-2xl p-4 origin-top-left"
                    >
                      <div className="grid gap-2">
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 hover:bg-blue-50 group/sub hover:translate-x-1",
                              location.pathname === sub.path ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:text-blue-600"
                            )}
                          >
                            <div className={cn(
                              "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                              location.pathname === sub.path ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-100 group-hover/sub:bg-blue-600 group-hover/sub:text-white group-hover/sub:shadow-lg group-hover/sub:shadow-blue-600/30"
                            )}>
                              <sub.icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider transition-colors group-hover/sub:text-blue-600">{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className={cn(
            "md:hidden transition-colors relative z-[60]",
            scrolled || isOpen ? "text-slate-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-8 pt-32 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      className={cn(
                        'text-2xl font-display font-black uppercase italic tracking-tighter transition-colors',
                        location.pathname === link.path ? 'text-blue-600' : 'text-slate-900'
                      )}
                      onClick={() => !link.sublinks && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
                  {link.sublinks && (
                    <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-slate-100">
                      {link.sublinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={cn(
                            "flex items-center gap-3 text-sm font-bold uppercase tracking-widest py-1 transition-colors",
                            location.pathname === sub.path ? "text-blue-600" : "text-slate-400 hover:text-blue-600"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <sub.icon className="w-4 h-4" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-8 bg-blue-600 text-white p-6 rounded-[32px] text-center font-display font-black uppercase italic tracking-tighter text-xl shadow-2xl shadow-blue-600/20"
                onClick={() => setIsOpen(false)}
              >
                Connect Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
