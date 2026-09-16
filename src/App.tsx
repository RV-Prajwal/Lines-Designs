import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';

const App: React.FC = () => {
  const skipPreloader =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('skip') === '1';
  const [loaded, setLoaded] = useState(skipPreloader);

  return (
    <BrowserRouter>
      <Preloader onFinished={() => setLoaded(true)} />

      {loaded && (
        <motion.div
          id="top"
          className="relative w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <CustomCursor />
          <Navbar />
          <WhatsAppButton />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      )}
    </BrowserRouter>
  );
};

export default App;