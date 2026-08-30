import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type IconName =
  | 'residential'
  | 'visual'
  | 'planning'
  | 'commercial'
  | 'turnkey'
  | 'styling';

const ServiceIcon: React.FC<{ name: IconName }> = ({ name }) => {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'residential':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" {...common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case 'visual':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" {...common}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
          <path d="M12 3v18M4 7.5l8 4.5 8-4.5" />
        </svg>
      );
    case 'planning':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 10h11M14 3v18M14 14h7" />
        </svg>
      );
    case 'commercial':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" {...common}>
          <path d="M4 21V5l8-2v18M12 21V9l8 2v10" />
          <path d="M7 8v.01M7 12v.01M7 16v.01M16 13v.01M16 17v.01" />
        </svg>
      );
    case 'turnkey':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" {...common}>
          <circle cx="8" cy="8" r="4" />
          <path d="M11 11l7 7 2-2-3-3 2-2-2-2-2 2-2-2z" />
        </svg>
      );
    case 'styling':
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" {...common}>
          <path d="M5 11V8a3 3 0 013-3h8a3 3 0 013 3v3" />
          <path d="M4 11a2 2 0 012 2v3h12v-3a2 2 0 012-2 2 2 0 012 2v6M4 19v-6" />
          <path d="M4 19h16" />
        </svg>
      );
  }
};

interface Service {
  key: IconName;
  title: string;
  badge: string;
  stat: string;
  span: string;
  description: string;
  items: string[];
}

const services: Service[] = [
  {
    key: 'residential',
    title: 'Residential Interiors',
    badge: 'Signature',
    stat: '150+ Homes',
    span: 'lg:col-span-8',
    description:
      'From city apartments to standalone villas — full-home interiors that balance warmth, function, and a clear point of view. We design around how you actually live, not a catalogue.',
    items: ['Apartments', 'Villas', 'Penthouses', 'Renovations'],
  },
  {
    key: 'visual',
    title: '3D Visualization',
    badge: 'See It First',
    stat: 'Photoreal',
    span: 'lg:col-span-4',
    description:
      'Photorealistic renders and walkthroughs, so you experience every material and lighting decision before a single wall moves.',
    items: ['Renders', 'Walkthroughs', 'Mood Boards'],
  },
  {
    key: 'planning',
    title: 'Space Planning',
    badge: 'Foundation',
    stat: 'Every Sq Ft',
    span: 'lg:col-span-4',
    description:
      'Intelligent layouts that make a space feel larger, flow better, and work harder — the groundwork beneath every great interior.',
    items: ['Layouts', 'Circulation', 'Ergonomics'],
  },
  {
    key: 'commercial',
    title: 'Commercial & Workspace',
    badge: 'Brand-Led',
    stat: '40+ Spaces',
    span: 'lg:col-span-8',
    description:
      'Offices, retail, cafés and studios designed to express a brand and elevate the way people work, gather, and buy — spaces that perform as hard as they look.',
    items: ['Offices', 'Retail', 'F&B', 'Studios'],
  },
  {
    key: 'turnkey',
    title: 'Turnkey Execution',
    badge: 'End To End',
    stat: 'On Site',
    span: 'lg:col-span-6',
    description:
      'Design through delivery under one roof — civil, joinery, services and finishing, managed to a fixed scope and timeline.',
    items: ['Civil Works', 'Joinery', 'MEP', 'Handover'],
  },
  {
    key: 'styling',
    title: 'Styling & FF&E',
    badge: 'The Final 10%',
    stat: 'Curated',
    span: 'lg:col-span-6',
    description:
      'Furniture, lighting, art and objects — sourced and styled so the finished space feels collected over time, never merely decorated.',
    items: ['Furniture', 'Lighting', 'Art', 'Décor'],
  },
];

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

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black pt-24 lg:pt-28 pb-24 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

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
            01 / What We Do
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Headline + intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              A Full-Service
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              Design Studio.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            One team, from the first sketch to the final cushion. Every discipline
            you need to take a space from empty shell to finished home or workplace.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={cardVariant}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${service.span} relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] group`}
            >
              {/* Top highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Corner pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* Meta row */}
              <div className="flex items-center justify-between mb-5">
                <span className="flex items-center gap-3 text-[#D4AF37] group-hover:text-[#F3DBB3] transition-colors">
                  <ServiceIcon name={service.key} />
                  <span
                    className="text-[10px] font-medium tracking-[0.25em] uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {service.badge}
                  </span>
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F] group-hover:border-[#D4AF37]/50 group-hover:text-white transition-all">
                  {service.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#D5CBC0] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {service.description}
              </p>

              {/* Tag chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
