import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SmartImage } from './SmartImage';
import { IMAGES } from '../images';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-black">
      {/* ================= BACKGROUND IMAGE LAYER ================= */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={IMAGES.hero}
          alt="A refined interior designed by Lines & Designs"
          eager
          label="LINES & DESIGNS"
          className="absolute inset-0 w-full h-full"
          imgClassName="animate-kenburns brightness-[0.72] contrast-[1.06] saturate-[0.95]"
        />
        {/* left → right darkening for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        {/* top + bottom vignette to blend nav and next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        {/* cinematic film grain */}
        <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-[0.07] animate-grain pointer-events-none" />
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24 pt-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          {/* LEFT: headline + actions */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span
                className="text-[10.5px] sm:text-[11px] font-medium tracking-[0.34em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Interior Design Studio · Bengaluru
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] tracking-tight uppercase leading-[0.85] break-words select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E4DACE] to-[#7A6C5C] drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
                Designed
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#5A3F1C] drop-shadow-[0_8px_28px_rgba(201,158,93,0.4)]">
                To Be Lived In.
              </span>
            </motion.h1>

            {/* Discipline line */}
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.3em] uppercase text-[#C4B29E]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Residential <span className="text-[#8C6D4F] mx-1.5">·</span> Commercial
              <span className="text-[#8C6D4F] mx-1.5">·</span> Hospitality
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm md:text-[15px] font-light text-[#B9AA9C] leading-[1.85] tracking-wide max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              We shape refined, light-filled interiors where architecture, material,
              and mood come together — spaces that feel effortless the moment you
              step in, and endure for years after.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-4 sm:gap-5">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center justify-center sm:justify-start gap-3 px-7 py-4 border border-[#8C6D4F] bg-[#120F0C]/70 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_28px_rgba(212,175,55,0.16)] backdrop-blur-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent" />
                <span>View Our Work</span>
                <span className="text-xs">↗</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center sm:justify-start gap-2 px-7 py-4 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Book a Consultation</span>
                <span className="text-xs">→</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: floating statement + signature */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start shrink-0 pb-2 select-none"
          >
            <span className="text-2xl text-[#C99E5D] leading-none font-serif mb-2">“</span>
            <div
              className="text-[10px] font-medium tracking-[0.26em] uppercase text-[#E0D3C5] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>Form Meets Feeling.</p>
              <p>Every Line Considered.</p>
            </div>
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />
            <div
              className="text-[2.4rem] text-[#D8AB64] leading-none"
              style={{ fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive", letterSpacing: '0.02em' }}
            >
              Lines &amp; Designs
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden sm:flex flex-col items-center gap-2"
        >
          <span
            className="text-[9px] tracking-[0.35em] uppercase text-[#8C6D4F]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#D4AF37] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
