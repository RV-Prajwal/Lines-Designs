import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const footerNav = [
  { name: 'Services', to: '/services' },
  { name: 'Portfolio', to: '/#portfolio' },
  { name: 'Studio', to: '/#studio' },
  { name: 'Contact', to: '/#contact' },
];

/**
 * Shared site footer. Rendered at the bottom of every page.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-black text-[#E8DFD8] border-t border-[#8C6D4F]/15 px-6 sm:px-10 lg:px-14 pt-14 pb-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="inline-block hover:opacity-90 transition-opacity"
              aria-label="Lines & Designs — home"
            >
              <Logo variant="stacked" markSize={40} className="text-[15px]" />
            </Link>
            <p
              className="mt-4 text-xs font-light text-[#8C6D4F] leading-relaxed max-w-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              An interior design studio shaping refined, light-filled spaces across
              India — designed to be lived in.
            </p>
            <div
              className="mt-5 text-2xl text-[#D8AB64]"
              style={{ fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive" }}
            >
              Lines &amp; Designs
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <span className="block text-[10px] font-mono tracking-[0.22em] uppercase text-[#8C6D4F] mb-4">
              Explore
            </span>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-[13px] font-light text-[#C4B5A5] hover:text-[#F7E7C4] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <span className="block text-[10px] font-mono tracking-[0.22em] uppercase text-[#8C6D4F] mb-4">
              Connect
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:studio@linesanddesigns.in"
                  className="text-[13px] font-light text-[#C4B5A5] hover:text-[#F7E7C4] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  studio@linesanddesigns.in
                </a>
              </li>
              <li>
                <span
                  className="text-[13px] font-light text-[#C4B5A5]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  +91 80 4123 8890
                </span>
              </li>
              <li className="flex items-center gap-4 pt-1.5">
                {['Instagram', 'Pinterest', 'LinkedIn'].map((s) => (
                  <a
                    key={s}
                    href="/#contact"
                    className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#8C6D4F] hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {s}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 mt-10 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            © {new Date().getFullYear()} Lines &amp; Designs · Bengaluru, India
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            Designed To Be Lived In
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;