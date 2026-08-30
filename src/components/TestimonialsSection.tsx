import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  project: string;
  location: string;
  span: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'They understood our home before we could even describe it. Every room feels like us — just calmer, warmer, and more considered than we imagined.',
    name: 'Ananya & Rohit Mehra',
    project: 'The Terrace House',
    location: 'Bengaluru',
    span: 'lg:col-span-7',
  },
  {
    quote:
      'The most organised project we have ever run. Fixed scope, clear drawings, and a site that actually matched the renders.',
    name: 'Kavya Reddy',
    project: 'Meridian Workspace',
    location: 'Bengaluru',
    span: 'lg:col-span-5',
  },
  {
    quote:
      'Our café was full from week one. People come as much for the room as for the coffee.',
    name: 'Daniel Fernandes',
    project: 'Atelier Coffee & Co.',
    location: 'Hyderabad',
    span: 'lg:col-span-5',
  },
  {
    quote:
      'Restrained, considered and completely liveable. Two years on, it still feels current — and it still feels like home.',
    name: 'Priya Nair',
    project: 'The Monochrome Penthouse',
    location: 'Pune',
    span: 'lg:col-span-7',
  },
];

const initialsOf = (name: string) =>
  name
    .replace(/&/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black pt-20 pb-24 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/5 w-[26rem] h-[26rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / Client Voices
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Kind Words
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              From Our Clients.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            The real measure of a space is how it feels to live and work in, long after
            the last delivery van has left.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariant}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${t.span} relative p-8 sm:p-10 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.12)] group flex flex-col justify-between`}
            >
              {/* Top hover highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Quote mark */}
                <span
                  className="block text-6xl text-[#C99E5D]/60 leading-[0.6] mb-4 select-none group-hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  &ldquo;
                </span>

                <p
                  className="text-lg sm:text-xl lg:text-2xl font-light italic text-[#D5CBC0] leading-[1.6] mb-8 group-hover:text-[#EDE3D6] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#8C6D4F]/20">
                <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-[#8C6D4F]/50 bg-[#17130F] text-[11px] font-medium tracking-[0.12em] text-[#F3DBB3] group-hover:border-[#D4AF37]/70 transition-colors">
                  {initialsOf(t.name)}
                </span>
                <div className="min-w-0">
                  <span
                    className="block text-sm text-[#F1E7DB] truncate"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t.name}
                  </span>
                  <span className="block text-[10px] font-medium tracking-[0.16em] uppercase text-[#8C6D4F] mt-0.5">
                    {t.project} · {t.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
