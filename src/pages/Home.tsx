import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { StudioSection } from '../components/StudioSection';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

/**
 * The site's landing page — one long-form narrative, section by section.
 * Section links from other pages (e.g. "/#portfolio") land here and scroll
 * to the matching anchor.
 */
export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // When arriving from another route with a hash (e.g. /#portfolio) scroll to
    // that section; otherwise start at the very top.
    const id = location.hash.replace('#', '');
    if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
      else window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div id="top">
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <StudioSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;