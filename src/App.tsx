import React from 'react';
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
  return (
    <div
      id="top"
      className="relative w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black"
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
    </div>
  );
};

export default App;
