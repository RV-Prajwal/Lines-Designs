import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { StudioSection } from './components/StudioSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
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
          <main>
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <StudioSection />
            <ProcessSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
        </motion.div>
      )}
    </>
  );
};

export default App;
