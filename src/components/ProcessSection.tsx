import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Step {
  id: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
}

const steps: Step[] = [
  {
    id: '01',
    phase: 'STEP 01',
    title: 'DISCOVERY & BRIEF',
    duration: 'WEEK 1 – 2',
    description:
      'We start with how you actually live or work — routines, taste, budget and timeline. A site visit and a focused brief give every later decision something solid to stand on.',
  },
  {
    id: '02',
    phase: 'STEP 02',
    title: 'CONCEPT & MOODBOARD',
    duration: 'WEEK 2 – 4',
    description:
      'Direction takes shape: spatial concept, material palette and reference imagery. You sign off on a clear creative vision before any detailing begins.',
  },
  {
    id: '03',
    phase: 'STEP 03',
    title: 'DESIGN DEVELOPMENT',
    duration: 'WEEK 4 – 8',
    description:
      'Layouts, joinery drawings, lighting plans and finishes are resolved down to the millimetre — then brought to life as photorealistic 3D visuals you can walk through.',
  },
  {
    id: '04',
    phase: 'STEP 04',
    title: 'PROCUREMENT & BUILD',
    duration: 'WEEK 8 – 20',
    description:
      'We source, order and manage everything on site — civil, joinery, services and finishing — under a fixed scope, with weekly updates so nothing drifts.',
  },
  {
    id: '05',
    phase: 'STEP 05',
    title: 'STYLING & HANDOVER',
    duration: 'FINAL WEEK',
    description:
      'Furniture, lighting, art and the final layer of styling go in. We snag, clean and hand over a space that is ready to be lived in from day one.',
  },
];

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black pt-20 pb-28 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / How We Work
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              From First Sketch
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              To Front Door.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Background track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

          {/* Animated gold track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop phase (left of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="block text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {step.phase}
                  </span>
                  <span className="block text-[9px] font-mono tracking-[0.16em] text-[#6E5C4C] mt-1">
                    {step.duration}
                  </span>
                </div>

                {/* Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile phase */}
                  <div className="md:hidden mb-1.5 flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {step.phase}
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.16em] text-[#6E5C4C]">
                      {step.duration}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-2 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.75] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
