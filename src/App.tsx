import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

// Operations Pages
import Refinery from './pages/Refinery';
import Isomerization from './pages/Isomerization';
import Hydrocracking from './pages/Hydrocracking';
import SulfurRecovery from './pages/SulfurRecovery';
import DigitalTwin from './pages/DigitalTwin';

// Products & Solutions
import Products from './pages/Products';
import TechnicalLab from './pages/TechnicalLab';
import QualityAssurance from './pages/QualityAssurance';
import Procurement from './pages/Procurement';

// Sustainability
import Sustainability from './pages/Sustainability';
import NetZero from './pages/NetZero';
import Community from './pages/Community';
import Biodiversity from './pages/Biodiversity';

// Governance & Safety
import Reports from './pages/Reports';
import Governance from './pages/Governance';
import LocalContent from './pages/LocalContent';
import Safety from './pages/Safety';
import Emergency from './pages/Emergency';
import Logistics from './pages/Logistics';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          
          {/* Operations */}
          <Route path="/refinery" element={<Refinery />} />
          <Route path="/refinery/isomerization" element={<Isomerization />} />
          <Route path="/refinery/hydrocracking" element={<Hydrocracking />} />
          <Route path="/refinery/sulfur-recovery" element={<SulfurRecovery />} />
          <Route path="/refinery/digital-twin" element={<DigitalTwin />} />
          
          {/* Solutions */}
          <Route path="/products" element={<Products />} />
          <Route path="/solutions/lab" element={<TechnicalLab />} />
          <Route path="/solutions/qa" element={<QualityAssurance />} />
          <Route path="/solutions/procurement" element={<Procurement />} />
          
          {/* Sustainability */}
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/sustainability/net-zero" element={<NetZero />} />
          <Route path="/sustainability/community" element={<Community />} />
          <Route path="/sustainability/biodiversity" element={<Biodiversity />} />
          
          {/* Governance & Safety */}
          <Route path="/about" element={<About />} />
          <Route path="/about/reports" element={<Reports />} />
          <Route path="/about/governance" element={<Governance />} />
          <Route path="/about/local-content" element={<LocalContent />} />
          <Route path="/about/safety" element={<Safety />} />
          <Route path="/about/emergency" element={<Emergency />} />
          <Route path="/logistics" element={<Logistics />} />
          
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
