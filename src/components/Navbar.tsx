import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Droplets, Shield, Factory, Info, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Droplets },
    { name: 'Refinery', path: '/refinery', icon: Factory },
    { name: 'Products', path: '/products', icon: Shield },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

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
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-semibold tracking-wide transition-all hover:text-blue-600',
                location.pathname === link.path 
                  ? 'text-blue-600' 
                  : (scrolled ? 'text-slate-600' : 'text-slate-100')
              )}
            >
              {link.name}
            </Link>
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
            "md:hidden transition-colors",
            scrolled ? "text-slate-900" : "text-white"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'flex items-center gap-3 text-lg font-bold p-3 rounded-xl transition-colors',
                    location.pathname === link.path ? 'bg-blue-600/10 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
