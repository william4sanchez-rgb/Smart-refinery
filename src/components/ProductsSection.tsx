import { motion } from 'motion/react';
import { Fuel, Droplet, Thermometer, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'p1',
    name: 'K-5 Euro Fuel',
    type: 'High Grade Gasoline',
    description: 'Ultra-low sulfur content high-octane gasoline designed for modern internal combustion engines.',
    icon: Fuel,
    img: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p2',
    name: 'Arctic Diesel',
    type: 'Climate-Adaptive',
    description: 'Specialized low-temperature stable diesel fuel, essential for Central Asian winters.',
    icon: Thermometer,
    img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function ProductsSection() {
  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-teal-600 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Product Ecosystem</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase italic leading-[0.85] text-slate-900">
              Energy <br />
              <span className="text-blue-600 italic font-light">Solutions</span>
            </h2>
          </div>
          <Link to="/products" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 group border-b border-slate-200 pb-2">
            <span className="text-xs font-bold uppercase tracking-widest">Full Specification Sheets</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[600px] overflow-hidden rounded-[48px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:-translate-y-2">
                   <product.icon className="text-blue-600 w-8 h-8" />
                </div>
                <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block">{product.type}</span>
                <h3 className="text-4xl font-display font-black text-white mb-6 uppercase italic tracking-tight">{product.name}</h3>
                <p className="text-slate-200 max-w-sm text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {product.description}
                </p>
                <Link to={`/products#${product.id}`} className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all">
                  Technical Data
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
