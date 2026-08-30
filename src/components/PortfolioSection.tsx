import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { SmartImage } from './SmartImage';
import { IMAGES } from '../images';

interface Project {
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'The Terrace House',
    category: 'Residential · Bengaluru',
    image: IMAGES.projects.one,
    description:
      'A four-bedroom villa reimagined around light and connection. Warm oak, travertine, and a muted palette let the garden read as another room — calm, grounded, and unmistakably lived-in.',
    specs: [
      { label: 'Area', value: '3,200 sq ft' },
      { label: 'Location', value: 'Bengaluru' },
      { label: 'Year', value: '2025' },
      { label: 'Scope', value: 'Turnkey' },
    ],
  },
  {
    number: '02',
    title: 'Nordic Light Apartment',
    category: 'Residential · Mumbai',
    image: IMAGES.projects.two,
    description:
      'A compact city apartment opened up into an airy, Scandinavian-leaning home. Pale timber, soft linen, and hidden storage do the heavy lifting so the space feels twice its footprint.',
    specs: [
      { label: 'Area', value: '1,450 sq ft' },
      { label: 'Location', value: 'Mumbai' },
      { label: 'Year', value: '2024' },
      { label: 'Scope', value: 'Design + Build' },
    ],
  },
  {
    number: '03',
    title: 'Atelier Coffee & Co.',
    category: 'Hospitality · Café',
    image: IMAGES.projects.three,
    description:
      'A neighbourhood roastery built around a single idea: slow mornings. Board-formed concrete, brass, and a long communal table create a room people want to linger in.',
    specs: [
      { label: 'Area', value: '2,100 sq ft' },
      { label: 'Location', value: 'Hyderabad' },
      { label: 'Year', value: '2024' },
      { label: 'Scope', value: 'Turnkey' },
    ],
  },
  {
    number: '04',
    title: 'Meridian Workspace',
    category: 'Commercial · Office',
    image: IMAGES.projects.four,
    description:
      'Headquarters for a design-led studio, planned for focus and collision in equal measure. Acoustic zones, biophilia, and a material language that quietly carries the brand throughout.',
    specs: [
      { label: 'Area', value: '8,500 sq ft' },
      { label: 'Location', value: 'Bengaluru' },
      { label: 'Year', value: '2023' },
      { label: 'Scope', value: 'Fit-out' },
    ],
  },
  {
    number: '05',
    title: 'The Monochrome Penthouse',
    category: 'Residential · Penthouse',
    image: IMAGES.projects.five,
    description:
      'A top-floor residence composed almost entirely in tone and texture. Charcoal stone, smoked glass, and sculptural lighting turn restraint into the loudest statement in the room.',
    specs: [
      { label: 'Area', value: '4,600 sq ft' },
      { label: 'Location', value: 'Pune' },
      { label: 'Year', value: '2025' },
      { label: 'Scope', value: 'Turnkey' },
    ],
  },
];

export const PortfolioSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative w-full bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black pt-20 pb-24 px-6 sm:px-10 lg:px-14"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

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
            02 / Selected Work
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
              Spaces We've
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              Brought To Life.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll to move through a selection of recent projects — each one shaped
            by its people, its light, and the way it's meant to be used.
          </p>
        </motion.div>

        {/* Stacking deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="16%"
          scaleEndPosition="8%"
          baseScale={0.9}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                {/* Top gold flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent z-20" />

                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image */}
                  <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[460px] overflow-hidden">
                    <SmartImage
                      src={project.image}
                      alt={project.title}
                      label={project.title}
                      className="absolute inset-0 w-full h-full"
                      imgClassName="brightness-[0.9] contrast-[1.05] group-hover:scale-[1.04] transition-transform duration-[1400ms] ease-out"
                    />
                    {/* blend into the card on the right/bottom */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0E0C0A] lg:to-[#0E0C0A] opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/80 via-transparent to-transparent" />

                    {/* Category chip */}
                    <span
                      className="absolute top-5 left-5 z-10 px-3 py-1.5 text-[9.5px] font-medium tracking-[0.22em] uppercase text-[#F7E7C4] bg-black/45 border border-[#D4AF37]/40 backdrop-blur-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {project.category}
                    </span>

                    {/* Watermark number */}
                    <span
                      className="absolute bottom-2 left-4 z-10 text-7xl sm:text-8xl text-white/10 leading-none select-none pointer-events-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {project.number}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between relative z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#A8988B]">
                          Case Study
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors leading-[0.95]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-px bg-[#8C6D4F]/20 border border-[#8C6D4F]/20 mb-6">
                        {project.specs.map((spec) => (
                          <div key={spec.label} className="bg-[#0B0908] p-3.5">
                            <span className="block text-[9px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1">
                              {spec.label}
                            </span>
                            <span
                              className="block text-[13px] text-[#F1E7DB]"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-3 w-full px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>Enquire About This Project</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default PortfolioSection;
