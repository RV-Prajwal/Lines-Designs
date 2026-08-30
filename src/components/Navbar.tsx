import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

const navItems = [
  { name: 'SERVICES', href: '#services' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'STUDIO', href: '#studio' },
  { name: 'PROCESS', href: '#process' },
  { name: 'CONTACT', href: '#contact' },
];

const Wordmark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a
    href="#top"
    className={`hover:opacity-90 transition-opacity ${className}`}
    aria-label="Lines & Designs — home"
  >
    <Logo variant="inline" markSize={30} className="text-[13px] sm:text-sm" />
  </a>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled
            ? 'bg-[#050403]/85 backdrop-blur-md border-b border-[#8C6D4F]/20 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          <Wordmark className="text-[13px] sm:text-sm z-[90]" />

          <nav
            className="hidden md:flex items-center gap-9 lg:gap-11 text-[11px] tracking-[0.26em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#D4AF37]/70 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-light uppercase py-2.5 px-5 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>BOOK A CONSULT</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-[90] flex flex-col items-end gap-[5px] w-8 py-2"
          >
            <span
              className={`h-[1.5px] bg-[#EAD8C7] transition-all duration-300 ${
                menuOpen ? 'w-6 translate-y-[6.5px] rotate-45' : 'w-6'
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#EAD8C7] transition-all duration-300 ${
                menuOpen ? 'opacity-0 w-6' : 'w-4'
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#EAD8C7] transition-all duration-300 ${
                menuOpen ? 'w-6 -translate-y-[6.5px] -rotate-45' : 'w-6'
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] bg-[#050403]/97 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="text-2xl tracking-[0.18em] uppercase text-[#D5CBC0] hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navItems.length * 0.07, duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-light uppercase py-3 px-6 border border-[#D4AF37]/60 text-[#EAD8C7]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              BOOK A CONSULT ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
