import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const navItems = [
  { name: 'HOME', to: '/' },
  { name: 'SERVICES', to: '/services' },
  { name: 'PORTFOLIO', to: '/#portfolio' },
  { name: 'STUDIO', to: '/#studio' },
  { name: 'CONTACT', to: '/#contact' },
];

// The SERVICES link is "active" only on the dedicated services route.
const ACTIVE_ROUTE = '/services';

const Wordmark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <Link
    to="/"
    className={`hover:opacity-90 transition-opacity ${className}`}
    aria-label="Lines & Designs — home"
  >
    <Logo variant="inline" markSize={30} className="text-[13px] sm:text-sm" />
  </Link>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes (a Link was followed).
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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
            {navItems.map((item) => {
              const active = item.to === ACTIVE_ROUTE && location.pathname === ACTIVE_ROUTE;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB] ${
                    active ? 'text-[#F7E7C4]' : ''
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1px] bg-[#D4AF37]/70 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            to="/#contact"
            className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-light uppercase py-2.5 px-5 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>BOOK A CONSULT</span>
            <span className="text-xs">↗</span>
          </Link>

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
            {navItems.map((item, i) => {
              const active = item.to === ACTIVE_ROUTE && location.pathname === ACTIVE_ROUTE;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl tracking-[0.18em] uppercase transition-colors ${
                      active ? 'text-[#D4AF37]' : 'text-[#D5CBC0] hover:text-[#D4AF37]'
                    }`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navItems.length * 0.07, duration: 0.5 }}
            >
              <Link
                to="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-light uppercase py-3 px-6 border border-[#D4AF37]/60 text-[#EAD8C7]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                BOOK A CONSULT ↗
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;