import React, { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

/* ─────────────────────────────────────────────
   Image imports — using verified folder assets
───────────────────────────────────────────── */
import imgVilla from '../assets/services_assets/Architecture and space planning/Modern Tropical Luxury Villa.webp';
import imgLiving from '../assets/services_assets/Residential interiors/Warm Neutral Luxury Living Room.webp';
import imgBedroom from '../assets/services_assets/Bedroom interiors/Warm Neutral Luxury Bedroom.webp';
import imgKitchen from '../assets/services_assets/Modular kitchen/Warm Modern Kitchen with Garden View.webp';
import imgRenovation from '../assets/services_assets/Renovation and execution/Warm Contemporary Living and Dining Interior.webp';
import imgReception from '../assets/services_assets/Commercial interiors/Modern Warm-Toned Office Reception.webp';

/* High-res generated & project static imagery */
const imgSiteAnalysis = '/images/services/site-analysis-planning.jpg';
const imgStructural = '/images/services/structural-engineering.jpg';
const imgApprovals = '/images/services/approvals-coordination.jpg';
const imgConstruction = '/images/services/construction-execution.jpg';
const imgHandover = '/images/services/project-handover.jpg';

/* ─────────────────────────────────────────────
   Typography & Motion Presets
───────────────────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1] as const;
const MONS = { fontFamily: "'Montserrat', sans-serif" } as const;
const BEBAS = { fontFamily: "'Bebas Neue', sans-serif" } as const;

/* ─────────────────────────────────────────────
   Data Structures
───────────────────────────────────────────── */
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  deliverables: string[];
  scope: string[];
  clarification?: string;
}

export interface ProcessStep {
  no: string;
  short: string;
  title: string;
  tagline: string;
  blurb: string;
  features: string[];
  deliverables: string[];
  image: string;
  alt: string;
}

export interface ProjectType {
  id: string;
  category: 'residential' | 'commercial' | 'interior';
  title: string;
  badge: string;
  description: string;
  specs: string[];
  image: string;
}

/* ─────────────────────────────────────────────
   The 7 Core Services Data
───────────────────────────────────────────── */
const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'site-analysis',
    number: '01',
    category: 'Initial Stage',
    title: 'Site Analysis & Planning',
    tagline: 'Understanding the land before drawing a single line.',
    summary:
      'We begin every project by understanding the site, the client’s requirements, and the natural possibilities of the land.',
    description:
      'The first stage of every successful build is understanding the land and aligning expectations. Our initial planning process establishes a practical, scientific foundation for architectural design, ensuring zero surprises when ground breaks.',
    image: imgSiteAnalysis,
    alt: 'Professional land surveying and site analysis on an open plot of land',
    deliverables: [
      'Site Boundary & Dimension Map',
      'Topographical & Physical Condition Survey',
      'Zoning & Feasibility Assessment',
      'Client Requirements & Budget Charter',
      'Preliminary Project Scope & Timeline',
    ],
    scope: [
      'Site measurement and area assessment',
      'Understanding site dimensions and physical terrain',
      'Initial site analysis and orientation assessment',
      'Discussion of requirements, lifestyle, budget, and expectations',
      'Understanding intended use and spatial zoning',
      'Site investigation and technical assessment coordination',
    ],
    clarification:
      'Technical soil testing and geotechnical investigation can be coordinated with accredited specialists based on site requirements.',
  },
  {
    id: 'architectural-design',
    number: '02',
    category: 'Core Design',
    title: 'Architectural Design',
    tagline: 'Balancing functionality, aesthetics, and structural logic.',
    summary:
      'Our architectural design process transforms your ideas into thoughtfully planned, visually compelling spaces.',
    description:
      'From initial massing concepts to millimeter-accurate 2D drawings and photorealistic 3D visual walkthroughs, we create architecture that responds to light, ventilation, lifestyle, and site context.',
    image: imgVilla,
    alt: 'Modern tropical luxury villa architectural design and space planning',
    deliverables: [
      '2D Architectural Working Drawings',
      'Optimized Floor Plans & Layouts',
      '3D Exterior Photorealistic Views',
      'Building Elevations & Sections',
      'Vastu & Space Planning Matrices',
    ],
    scope: [
      'Architectural concept development',
      'Building planning and spatial flow',
      'Floor plan development and optimization',
      '2D architectural permit & execution drawings',
      '3D exterior visualization and material studies',
      'Facade and elevation design',
      'Design revisions aligned with client feedback',
    ],
  },
  {
    id: 'structural-engineering',
    number: '03',
    category: 'Technical Core',
    title: 'Structural Engineering',
    tagline: 'Developing technically sound structures engineered to endure.',
    summary:
      'We develop structurally robust building frameworks that safely support and elevate the architectural vision.',
    description:
      'Structural design is the backbone of any structure. We coordinate structural engineering in direct lockstep with architectural drawings to ensure practical execution, safety compliance, and material efficiency.',
    image: imgStructural,
    alt: 'Civil structural engineer reviewing reinforcement blueprints on site',
    deliverables: [
      'Structural Analysis & Load Calculation Model',
      'Foundation & Footing Blueprints',
      'Column, Beam & Slab Reinforcement Schedules',
      'Bar Bending Schedules (BBS)',
      'Structural Coordination Documentation',
    ],
    scope: [
      'Structural planning and framing layout',
      'Structural load analysis and design calculations',
      'Comprehensive structural working drawings',
      'Foundation design suited to soil conditions',
      'Column, beam, and slab reinforcement detailing',
      'Rigorous coordination with architectural layouts',
    ],
    clarification:
      'Structural calculations are coordinated with licensed structural consultants and vetted against prevailing building codes.',
  },
  {
    id: 'approvals-coordination',
    number: '04',
    category: 'Coordination',
    title: 'Approval Assistance & Coordination',
    tagline: 'Connecting design with statutory and municipal compliance.',
    summary:
      'We assist clients with project-related approvals, connecting the design process with regulatory requirements.',
    description:
      'Navigating regulatory requirements, building plan sanctions, and utility permissions can be complex. We assist with documentation and liaison to help ensure the build proceeds smoothly without bureaucratic friction.',
    image: imgApprovals,
    alt: 'Architectural blueprints with approved stamps, permit applications, and documentation',
    deliverables: [
      'Sanction Drawing Set Preparation',
      'Regulatory Compliance Checklist',
      'NOC Coordination Documentation',
      'Utility Liaison Records (Water & Power)',
      'Statutory Submission Dossier',
    ],
    scope: [
      'Building plan approval coordination',
      'Coordination with local planning authorities',
      'Assistance with necessary No-Objection Certificates (NOCs)',
      'Coordination for electricity and water utility connections',
      'Documentation support for submission files',
      'Liaison with relevant departmental consultants',
    ],
    clarification:
      'Scope of government approvals is customized per project based on municipal jurisdiction and client preferences.',
  },
  {
    id: 'construction-execution',
    number: '05',
    category: 'Execution',
    title: 'Construction & Project Execution',
    tagline: 'Bringing architectural blueprints to life on the ground.',
    summary:
      'Our construction services transform approved drawings into high-quality physical reality under strict site supervision.',
    description:
      'A design is only as good as its on-site execution. We manage site mobilization, structural civil works, masonry, MEP installation, and finishing works with disciplined progress tracking and quality control.',
    image: imgConstruction,
    alt: 'Modern architectural construction site in progress with engineers supervising civil works',
    deliverables: [
      'Project Construction Schedule & Gantt Charts',
      'Daily & Weekly Site Progress Reports',
      'Material Quality Verification Logs',
      'Civil & Structural Execution Milestones',
      'On-Site Safety & Quality Checklists',
    ],
    scope: [
      'Construction planning and site mobilization',
      'Civil construction and structural RCC works',
      'Foundation, column, beam, and slab casting',
      'Brickwork, blockwork, and plastering',
      'Electrical and plumbing (MEP) coordination',
      'Flooring, waterproofing, and surface finishing',
      'Continuous on-site supervision and progress tracking',
    ],
    clarification:
      'We offer flexible contract models ranging from complete turnkey construction to civil execution and project management.',
  },
  {
    id: 'interior-design',
    number: '06',
    category: 'Interior & Styling',
    title: 'Interior Design & Finishing',
    tagline: 'Spaces crafted around warmth, materiality, and your lifestyle.',
    summary:
      'We extend our design vision inward to curate bespoke interiors, cabinetry, lighting, and tactile finishes.',
    description:
      'From custom modular kitchens and serene bedroom suites to acoustic planning, architectural lighting, and bespoke joinery, our interior design team creates cohesive, lived-in environments with enduring elegance.',
    image: imgLiving,
    alt: 'Warm neutral luxury living room interior with contemporary finishes',
    deliverables: [
      '3D Photorealistic Interior Walkthroughs',
      'Modular Kitchen Detail Drawings',
      'Wardrobe & Joinery Fabrication Drawings',
      'Lighting & False Ceiling Reflected Plans',
      'Material Palette & Furniture Schedules',
    ],
    scope: [
      'Interior space planning and circulation design',
      'Living room, master suite, and bedroom styling',
      'Modular kitchen design and appliance integration',
      'Luxury bathroom layouts and sanitary selection',
      'False ceiling and layered lighting design',
      'Flooring, wall claddings, and paint finishes',
      'Custom furniture, cabinetry, and soft furnishings',
    ],
  },
  {
    id: 'project-handover',
    number: '07',
    category: 'Handover & Beyond',
    title: 'Project Handover & Support',
    tagline: 'A seamless transition from construction to occupancy.',
    summary:
      'A thorough inspection, complete documentation package, and keys in hand — backed by ongoing support.',
    description:
      'Our commitment doesn’t conclude when the paint dries. We conduct rigorous snagging audits, compile as-built documentation, and walk you through every operational system of your new building before final handover.',
    image: imgHandover,
    alt: 'Brass architectural house keys resting on marble counter during handover',
    deliverables: [
      'Comprehensive Handover Dossier & As-Built Plans',
      'Equipment Warranties & Care Manuals',
      'Signed Snagging & Quality Audit Certificate',
      'Official Key Handover Ceremony',
      'Post-Handover Support Schedule',
    ],
    scope: [
      'Final comprehensive quality & snagging walkthrough',
      'Rectification of minor touchpoints and finishes',
      'Compilation of as-built architectural & MEP drawings',
      'Testing and commissioning of electrical & plumbing fixtures',
      'Formal key handover and user orientation',
      'Long-term client relationship and post-handover warranty guidance',
    ],
  },
];

/* ─────────────────────────────────────────────
   The 8-Stage End-to-End Journey
───────────────────────────────────────────── */
const PROCESS_STEPS: ProcessStep[] = [
  {
    no: '01',
    short: 'Brief',
    title: 'Discover & Understand',
    tagline: 'Your vision starts here.',
    blurb:
      'We begin by listening deeply — understanding your plot, lifestyle requirements, aesthetic aspirations, and budget boundaries.',
    features: [
      'Initial site consultation & vision session',
      'Lifestyle & functional brief alignment',
      'Budget definition and timeline expectations',
      'Zoning and preliminary project roadmap',
    ],
    deliverables: ['Project Charter', 'Brief Summary', 'Roadmap'],
    image: imgSiteAnalysis,
    alt: 'Site discovery and client brief session',
  },
  {
    no: '02',
    short: 'Survey',
    title: 'Site Assessment',
    tagline: 'Reading the contours of the land.',
    blurb:
      'Our technical team visits the plot to record physical dimensions, orientations, natural light angles, and soil conditions.',
    features: [
      'Physical site boundary measurement',
      'Topography & sun path orientation study',
      'Adjacent structure & access evaluation',
      'Soil investigation & testing coordination',
    ],
    deliverables: ['Site Survey Map', 'Feasibility Report', 'Site Insights'],
    image: imgSiteAnalysis,
    alt: 'Technical land survey and site assessment',
  },
  {
    no: '03',
    short: 'Design',
    title: 'Architectural Design',
    tagline: 'From concept sketch to spatial volume.',
    blurb:
      'We craft architectural floor plans, exterior massing, and 3D visualisations that transform your brief into walk-through spaces.',
    features: [
      'Conceptual floor plans and spatial layouts',
      'Building elevations and exterior facades',
      '3D photorealistic architectural renders',
      'Vastu compliance & microclimate ventilation',
    ],
    deliverables: ['2D Floor Plans', '3D Visualizations', 'Elevation Drawings'],
    image: imgVilla,
    alt: 'Architectural design, floor plans and 3D visualization',
  },
  {
    no: '04',
    short: 'Structure',
    title: 'Engineering & Documentation',
    tagline: 'Engineering the bones of the building.',
    blurb:
      'Structural calculations, foundation engineering, and MEP services are detailed to code, ensuring total build safety and durability.',
    features: [
      'Structural load analysis & foundation design',
      'Column, beam, and slab rebar detailing',
      'Plumbing, electrical, and drainage schematics',
      'Comprehensive Bill of Quantities (BOQ)',
    ],
    deliverables: ['Structural Blueprints', 'Rebar Schedules', 'BOQ Document'],
    image: imgStructural,
    alt: 'Structural engineering blueprints and site calculation',
  },
  {
    no: '05',
    short: 'Sanction',
    title: 'Approvals & Coordination',
    tagline: 'Frictionless regulatory navigation.',
    blurb:
      'We coordinate sanction drawings, municipal documentation, and utility liaison so the project breaks ground without friction.',
    features: [
      'Building permit documentation preparation',
      'Coordination with municipal authorities',
      'NOC applications and status follow-ups',
      'Electricity and water utility liaison',
    ],
    deliverables: ['Sanction File', 'Compliance Records', 'Approval Tracking'],
    image: imgApprovals,
    alt: 'Official building permits and approval coordination',
  },
  {
    no: '06',
    short: 'Build',
    title: 'Construction Execution',
    tagline: 'Crafting quality with on-site discipline.',
    blurb:
      'One dedicated on-site team executes civil works, concrete casting, masonry, and infrastructure with unwavering quality control.',
    features: [
      'Site mobilization and foundation earthworks',
      'Reinforced concrete structure (RCC) casting',
      'High-grade masonry, blockwork & plastering',
      'Continuous daily site supervision and testing',
    ],
    deliverables: ['Progress Logs', 'Material Test Sheets', 'Safety Audits'],
    image: imgConstruction,
    alt: 'Active architectural construction and civil execution on site',
  },
  {
    no: '07',
    short: 'Interiors',
    title: 'Interior Design & Finishing',
    tagline: 'Layering material, light, and tactile comfort.',
    blurb:
      'Our team crafts custom joinery, modular kitchens, bathrooms, architectural lighting, and wall finishes to create a cohesive home.',
    features: [
      'Modular kitchen and bespoke wardrobe joinery',
      'Living and bedroom layout execution',
      'False ceiling, ambient lighting, and electricals',
      'Premium flooring, painting, and surface styling',
    ],
    deliverables: ['Interior Renders', 'Joinery Drawings', 'Finished Interiors'],
    image: imgKitchen,
    alt: 'Precision modular kitchen and interior finishing',
  },
  {
    no: '08',
    short: 'Keys',
    title: 'Project Handover',
    tagline: 'Your dream made tangible.',
    blurb:
      'A thorough snagging audit, complete as-built documentation dossier, and keys in your hand — with lifelong support for your home.',
    features: [
      'Multi-point quality & snagging inspection',
      'Complete as-built drawings & warranty manual handover',
      'System walkthrough (electrical, water, fixtures)',
      'Official key handover and post-occupancy care',
    ],
    deliverables: ['Key Presentation', 'As-Built Dossier', 'Warranty Package'],
    image: imgHandover,
    alt: 'Official project completion and handover keys',
  },
];

/* ─────────────────────────────────────────────
   Spaces We Design & Build (Typologies)
───────────────────────────────────────────── */
const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'villas',
    category: 'residential',
    title: 'Luxury Villas & Residences',
    badge: 'Residential',
    description:
      'Custom standalone homes crafted around expansive volumes, courtyard gardens, and tropical architectural sensibility.',
    specs: ['Bespoke Architecture', 'Private Estates', 'Vastu Aligned'],
    image: imgVilla,
  },
  {
    id: 'commercial',
    category: 'commercial',
    title: 'Corporate Offices & Showrooms',
    badge: 'Commercial',
    description:
      'Inspiring commercial environments, client receptions, and retail showrooms designed for productivity and brand distinction.',
    specs: ['Boutique Offices', 'Client Lounges', 'Modern Retail'],
    image: imgReception,
  },
  {
    id: 'living',
    category: 'interior',
    title: 'Contemporary Living Environments',
    badge: 'Interior Spaces',
    description:
      'Expansive living and dining zones balancing warmth, acoustic comfort, bespoke woodcraft, and refined lighting.',
    specs: ['Open-Plan Lounges', 'Double-Height Living', 'Custom Joinery'],
    image: imgLiving,
  },
  {
    id: 'master-suites',
    category: 'interior',
    title: 'Sanctuary Master Suites',
    badge: 'Interior Spaces',
    description:
      'Tailored bedroom suites designed as tranquil retreats with integrated dressing suites and walk-in wardrobes.',
    specs: ['Bespoke Wardrobes', 'Acoustic Wall Panels', 'Layered Lighting'],
    image: imgBedroom,
  },
  {
    id: 'kitchens',
    category: 'interior',
    title: 'Precision Modular Kitchens',
    badge: 'Interior Spaces',
    description:
      'Ergonomic culinary centers featuring concealed hardware, seamless quartz surfaces, and garden connection.',
    specs: ['High-Grade Hardware', 'Quartz Worktops', 'Pantry Units'],
    image: imgKitchen,
  },
  {
    id: 'renovation',
    category: 'residential',
    title: 'Comprehensive Rebuilds & Renovation',
    badge: 'Execution',
    description:
      'Transforming existing residential structures into fresh, structurally sound, contemporary architectural statements.',
    specs: ['Structural Strengthening', 'Façade Makeover', 'Turnkey Finishes'],
    image: imgRenovation,
  },
];

/* ─────────────────────────────────────────────
   Shared Decorative UI Components
───────────────────────────────────────────── */
const GoldHeadline: React.FC<{ light: string; gold: string; size?: string }> = ({
  light,
  gold,
  size = 'text-5xl sm:text-6xl md:text-7xl',
}) => (
  <h2
    className={`${size} tracking-tight uppercase leading-[0.85] select-none`}
    style={BEBAS}
  >
    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#736353] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
      {light}
    </span>
    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
      {gold}
    </span>
  </h2>
);

const SectionLabel: React.FC<{ index: string; title: string }> = ({ index, title }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8 }}
    className="flex items-center gap-4 mb-4"
  >
    <span
      className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
      style={MONS}
    >
      {index} / {title}
    </span>
    <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
  </motion.div>
);

const DiamondDot: React.FC = () => (
  <span
    aria-hidden="true"
    className="h-[6px] w-[6px] shrink-0 rotate-45 bg-gradient-to-br from-[#F7E7C4] to-[#8C6D4F]"
  />
);

/* Fixed top scroll progress line */
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[95] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(to right, rgba(201,158,93,0.8), #D4AF37 45%, #F7E7C4)',
      }}
    />
  );
};

/* ─────────────────────────────────────────────
   01 / HERO SECTION
───────────────────────────────────────────── */
const HeroSection: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="services-hero"
      className="relative min-h-[92vh] w-full flex items-center overflow-hidden pt-24 pb-16 bg-black"
    >
      {/* Background Hero Asset */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: EASE }}
        className="absolute inset-0 z-0"
      >
        <img
          src={imgVilla}
          alt="Lines & Designs architectural design and construction excellence"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/65 sm:bg-black/55 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <div className="max-w-3xl">
          {/* Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 border border-[#8C6D4F]/50 bg-[#120F0C]/85 backdrop-blur-md mb-6"
          >
            <DiamondDot />
            <span
              className="text-[10.5px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]"
              style={MONS}
            >
              From Concept to Completion
            </span>
            <span className="hidden sm:inline text-[10px] text-[#8C6D4F]">·</span>
            <span
              className="hidden sm:inline text-[10.5px] font-light tracking-[0.2em] uppercase text-[#D9CBBE]"
              style={MONS}
            >
              Architecture + Engineering + Construction
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease: EASE }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] tracking-tight uppercase leading-[0.88] select-none"
            style={BEBAS}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#EFE5DB] to-[#8C7B6D] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              Designing Spaces.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_30px_rgba(201,158,93,0.35)]">
              Building Possibilities.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: EASE }}
            className="mt-6 text-sm sm:text-base font-light text-[#D8C9B9] max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            style={MONS}
          >
            From initial site assessment and architectural design to structural
            engineering, construction execution, and interior finishing — we
            bring together every essential stage of building development under one
            accountable team.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#8C6D4F] bg-[#14100C]/90 hover:border-[#D4AF37] text-[#F3E5D8] hover:text-white text-[11px] font-medium tracking-[0.26em] uppercase transition-all duration-300 backdrop-blur-md group cursor-pointer"
              style={MONS}
            >
              <span>Book a Consultation</span>
              <span className="text-xs transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <button
              type="button"
              onClick={() => scrollTo('process-journey')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] bg-black/40 text-[#D8C9B9] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 cursor-pointer"
              style={MONS}
            >
              <span>Explore The Journey</span>
              <span className="text-xs">↓</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo('core-services')}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[#C4B5A5] hover:text-[#D4AF37] text-[11px] font-medium tracking-[0.22em] uppercase transition-colors cursor-pointer"
              style={MONS}
            >
              <span>Our 7 Services</span>
              <span className="text-xs">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Edge Badges (Desktop) */}
      <div className="hidden xl:flex absolute bottom-12 right-14 items-center gap-8 border-l border-[#8C6D4F]/30 pl-8 bg-black/40 backdrop-blur-sm p-4">
        <div>
          <span
            className="block text-2xl text-[#E6C88A]"
            style={BEBAS}
          >
            07
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.25em] text-[#A8988B]"
            style={MONS}
          >
            Integrated Services
          </span>
        </div>
        <div className="w-[1px] h-8 bg-[#8C6D4F]/30" />
        <div>
          <span
            className="block text-2xl text-[#E6C88A]"
            style={BEBAS}
          >
            01
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.25em] text-[#A8988B]"
            style={MONS}
          >
            Accountable Team
          </span>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   02 / CORE SERVICES GRID WITH EXPANDABLE MODAL
───────────────────────────────────────────── */
const CoreServicesSection: React.FC<{
  onSelectService: (service: ServiceItem) => void;
}> = ({ onSelectService }) => {
  return (
    <section
      id="core-services"
      className="relative w-full bg-black py-24 sm:py-32 text-[#E8DFD8] border-t border-[#8C6D4F]/20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel index="02" title="Our Core Capabilities" />
            <GoldHeadline light="From Land to Living," gold="Seven Unified Services." />
          </div>
          <p
            className="max-w-md text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
            style={MONS}
          >
            We organize your project into seven distinct yet seamlessly connected
            disciplines. Tap any service to inspect detailed deliverables, on-site
            scope, and technical inclusions.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, idx) => {
            const isLarge = idx === 0 || idx === 4; // Highlight Site Analysis and Construction
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE }}
                className={`group relative flex flex-col justify-between overflow-hidden border border-[#8C6D4F]/30 bg-[#0E0B08] hover:border-[#D4AF37]/70 transition-all duration-500 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Photo Top Container */}
                <div
                  className={`relative w-full overflow-hidden ${
                    isLarge ? 'h-64 sm:h-80' : 'h-56'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B08] via-[#0E0B08]/40 to-transparent" />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 text-[9px] font-mono tracking-[0.25em] uppercase text-[#F7E7C4] bg-black/75 border border-[#8C6D4F]/40 backdrop-blur-sm"
                      style={MONS}
                    >
                      {service.category}
                    </span>
                    <span
                      className="text-2xl sm:text-3xl text-white/30 group-hover:text-[#D4AF37] transition-colors"
                      style={BEBAS}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Tagline over image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p
                      className="text-[10.5px] uppercase tracking-[0.25em] text-[#D4AF37]"
                      style={MONS}
                    >
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl uppercase tracking-tight text-[#EFE5DB] group-hover:text-[#F7E7C4] transition-colors"
                      style={BEBAS}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="mt-3 text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed"
                      style={MONS}
                    >
                      {service.summary}
                    </p>

                    {/* Scope Highlight Preview */}
                    <div className="mt-5 pt-4 border-t border-[#8C6D4F]/20">
                      <span
                        className="block text-[9.5px] font-mono uppercase tracking-[0.28em] text-[#8C6D4F] mb-3"
                        style={MONS}
                      >
                        Key Scope Inclusions:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.scope.slice(0, 4).map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[11px] text-[#C4B5A5]/90 font-light"
                            style={MONS}
                          >
                            <span className="mt-1 text-[#D4AF37] text-[8px]">◆</span>
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-7 pt-4 border-t border-[#8C6D4F]/20 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-2 text-[10.5px] font-medium tracking-[0.24em] uppercase text-[#D4AF37] hover:text-[#FFF5EB] transition-colors cursor-pointer"
                      style={MONS}
                    >
                      <span>View Full Scope & Deliverables</span>
                      <span className="text-sm">→</span>
                    </button>
                    <span
                      className="text-[10px] font-mono text-[#8C6D4F]"
                      style={MONS}
                    >
                      {service.deliverables.length} Deliverables
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   03 / SPACES WE DESIGN & BUILD (PROJECT TYPES)
───────────────────────────────────────────── */
const SpacesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'interior'>('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECT_TYPES
      : PROJECT_TYPES.filter((p) => p.category === filter);

  return (
    <section
      id="spaces-we-build"
      className="relative w-full bg-[#080605] py-24 sm:py-32 text-[#E8DFD8] border-t border-[#8C6D4F]/20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <SectionLabel index="03" title="Spaces We Shape" />
            <GoldHeadline light="Spaces We Shape," gold="From Plot to Finish." />
            <p
              className="mt-4 max-w-xl text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
              style={MONS}
            >
              Whether an expansive countryside farmhouse, private urban villa, or
              sophisticated corporate reception, our team handles the entire lifecycle
              with singular aesthetic focus.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b lg:border-b-0 border-[#8C6D4F]/25 pb-4 lg:pb-0">
            {(
              [
                { key: 'all', label: 'All Projects' },
                { key: 'residential', label: 'Residential & Villas' },
                { key: 'commercial', label: 'Commercial Spaces' },
                { key: 'interior', label: 'Curated Interiors' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2.5 text-[10.5px] uppercase tracking-[0.2em] font-medium transition-all cursor-pointer ${
                  filter === tab.key
                    ? 'border border-[#D4AF37] bg-[#18130E] text-[#F7E7C4] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'border border-[#8C6D4F]/30 bg-transparent text-[#A8988B] hover:text-[#E8DFD8] hover:border-[#8C6D4F]'
                }`}
                style={MONS}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="group relative overflow-hidden border border-[#8C6D4F]/30 bg-[#0E0B08]"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B08] via-black/30 to-transparent" />

                  {/* Badge */}
                  <span
                    className="absolute top-4 left-4 px-3 py-1 text-[9px] font-mono tracking-[0.25em] uppercase text-[#F7E7C4] bg-black/80 border border-[#8C6D4F]/50"
                    style={MONS}
                  >
                    {proj.badge}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7">
                  <h3
                    className="text-2xl uppercase tracking-tight text-[#EFE5DB] group-hover:text-[#F7E7C4] transition-colors"
                    style={BEBAS}
                  >
                    {proj.title}
                  </h3>
                  <p
                    className="mt-2 text-xs font-light text-[#A8988B] leading-relaxed"
                    style={MONS}
                  >
                    {proj.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#8C6D4F]/20 flex flex-wrap gap-2">
                    {proj.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[9.5px] uppercase tracking-[0.16em] px-2.5 py-1 bg-[#15110D] border border-[#8C6D4F]/30 text-[#C4B5A5]"
                        style={MONS}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   04 / END-TO-END PROCESS (8-STAGE TIMELINE)
───────────────────────────────────────────── */
const ProcessSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const step = PROCESS_STEPS[active];
  const progressRatio = active / (PROCESS_STEPS.length - 1);

  return (
    <section
      id="process-journey"
      className="relative w-full bg-black py-24 sm:py-32 text-[#E8DFD8] border-t border-[#8C6D4F]/20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel index="01" title="End-to-End Journey" />
            <GoldHeadline
              light="From Your First Idea"
              gold="To the Final Handover."
            />
          </div>
          <p
            className="max-w-md text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
            style={MONS}
          >
            We coordinate your building project from the initial idea to the
            completed space. Eight deliberate stages, one single contract, and zero
            fractured handoffs.
          </p>
        </div>

        {/* Desktop Rail Navigation */}
        <div className="hidden lg:block">
          <div className="relative mb-12">
            {/* Background connecting track */}
            <div className="absolute left-[6%] right-[6%] top-[10px] h-[2px] bg-[#8C6D4F]/20" />
            {/* Active gold progress fill */}
            <div
              className="absolute left-[6%] top-[10px] h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#E6C88A] to-[#F7E7C4] transition-all duration-700 ease-out"
              style={{ width: `${(progressRatio * 88).toFixed(2)}%` }}
            />

            {/* Step Nodes */}
            <div className="relative flex justify-between">
              {PROCESS_STEPS.map((s, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <button
                    key={s.no}
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex flex-1 flex-col items-center outline-none cursor-pointer"
                    style={MONS}
                  >
                    <span
                      className={`h-[22px] w-[22px] rotate-45 border-[1.5px] transition-all duration-500 ${
                        isActive
                          ? 'border-[#F7E7C4] bg-gradient-to-b from-[#F7E7C4] to-[#C99E5D] shadow-[0_0_18px_rgba(212,175,55,0.6)] scale-110'
                          : isPast
                          ? 'border-[#D4AF37]/80 bg-[#D4AF37]/20 group-hover:border-[#D4AF37]'
                          : 'border-[#8C6D4F]/40 bg-[#0E0B08] group-hover:border-[#D4AF37]/70'
                      }`}
                    />
                    <span
                      className={`mt-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                        isActive
                          ? 'text-[#F7E7C4]'
                          : 'text-[#C4B5A5]/60 group-hover:text-[#F7E7C4]'
                      }`}
                    >
                      <span className="mr-1 text-[#C99E5D] font-mono">{s.no}</span>
                      {s.short}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid grid-cols-12 border border-[#8C6D4F]/30 bg-[#0D0A08] overflow-hidden"
            >
              {/* Left Photo & Ghost Numeral */}
              <div className="col-span-5 relative min-h-[460px] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.alt}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0A08]" />

                {/* Blueprint watermark */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 right-6 text-[140px] select-none pointer-events-none opacity-20 text-[#D4AF37]"
                  style={BEBAS}
                >
                  {step.no}
                </span>

                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#D4AF37]" />
                  <span
                    className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#F7E7C4]"
                    style={MONS}
                  >
                    Stage {step.no} of 08
                  </span>
                </div>
              </div>

              {/* Right Scope & Deliverables */}
              <div className="col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]"
                      style={MONS}
                    >
                      {step.tagline}
                    </span>
                  </div>
                  <h3
                    className="text-4xl uppercase tracking-tight text-white"
                    style={BEBAS}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-3 text-xs sm:text-[13px] font-light text-[#B9A992] leading-relaxed max-w-lg"
                    style={MONS}
                  >
                    {step.blurb}
                  </p>

                  {/* Features / Actions */}
                  <div className="mt-8">
                    <span
                      className="block text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C6D4F] mb-3"
                      style={MONS}
                    >
                      Key Operations in Stage {step.no}:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-xs text-[#E2D5C6] font-light"
                          style={MONS}
                        >
                          <DiamondDot />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stage Deliverables */}
                  <div className="mt-6 pt-5 border-t border-[#8C6D4F]/20 flex flex-wrap items-center gap-2">
                    <span
                      className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] mr-2"
                      style={MONS}
                    >
                      Deliverables:
                    </span>
                    {step.deliverables.map((d) => (
                      <span
                        key={d}
                        className="px-2.5 py-1 bg-[#16120E] border border-[#8C6D4F]/40 text-[10.5px] text-[#F7E7C4]"
                        style={MONS}
                      >
                        ✓ {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Step controls */}
                <div className="mt-10 pt-6 border-t border-[#8C6D4F]/20 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={active === 0}
                    onClick={() => setActive(active - 1)}
                    className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                      active === 0
                        ? 'opacity-20 cursor-not-allowed'
                        : 'text-[#A8988B] hover:text-[#F7E7C4]'
                    }`}
                    style={MONS}
                  >
                    ← Previous Stage
                  </button>

                  <span
                    className="text-[10px] font-mono text-[#D4AF37] tracking-widest"
                    style={MONS}
                  >
                    {active + 1} / 08
                  </span>

                  <button
                    type="button"
                    disabled={active === PROCESS_STEPS.length - 1}
                    onClick={() => setActive(active + 1)}
                    className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                      active === PROCESS_STEPS.length - 1
                        ? 'opacity-20 cursor-not-allowed'
                        : 'text-[#D4AF37] hover:text-[#FFF5EB]'
                    }`}
                    style={MONS}
                  >
                    Next Stage →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((s, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div
                key={s.no}
                className="border border-[#8C6D4F]/30 bg-[#0D0A08] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-2xl text-[#C99E5D] font-mono"
                      style={BEBAS}
                    >
                      {s.no}
                    </span>
                    <div>
                      <span
                        className="text-xs uppercase tracking-[0.2em] text-[#EFE5DB]"
                        style={MONS}
                      >
                        {s.title}
                      </span>
                      <p
                        className="text-[10px] text-[#A8988B] tracking-wider"
                        style={MONS}
                      >
                        {s.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="text-xl text-[#D4AF37]">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="p-5 pt-0 border-t border-[#8C6D4F]/20"
                    >
                      <div className="h-44 w-full overflow-hidden my-4 border border-[#8C6D4F]/30">
                        <img
                          src={s.image}
                          alt={s.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p
                        className="text-xs text-[#B9A992] leading-relaxed mb-4"
                        style={MONS}
                      >
                        {s.blurb}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {s.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-center gap-2 text-[11px] text-[#E2D5C6]"
                            style={MONS}
                          >
                            <DiamondDot />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#8C6D4F]/20">
                        {s.deliverables.map((d) => (
                          <span
                            key={d}
                            className="px-2 py-0.5 bg-[#16120E] text-[10px] text-[#D4AF37]"
                            style={MONS}
                          >
                            ✓ {d}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   05 / DELIVERABLES SHOWCASE
───────────────────────────────────────────── */
const DeliverablesSection: React.FC = () => {
  const deliverables = [
    {
      title: 'Architectural Blueprint Dossier',
      category: 'Design Phase',
      desc: 'Complete 2D floor plans, working execution drawings, building elevations, and cross-sections formatted for immediate on-site execution.',
    },
    {
      title: 'Photorealistic 3D Renders',
      category: 'Visualization',
      desc: 'Day & night exterior lighting simulations, interior spatial walkthroughs, and material finishes rendered before structural investment.',
    },
    {
      title: 'Structural Calculations & BBS',
      category: 'Engineering',
      desc: 'Vetted foundation schematics, column/beam load distribution schedules, and bar bending details compliant with regional earthquake & wind codes.',
    },
    {
      title: 'Transparent Itemized BOQ',
      category: 'Commercials',
      desc: 'Comprehensive Bill of Quantities with clear material specifications, brand tiers, and scheduled milestone payments for zero budget inflation.',
    },
    {
      title: 'Sanction & Utility Dossier',
      category: 'Approvals',
      desc: 'Building sanction drawing submissions, NOC coordination tracking, and utility liaison documentation for hassle-free connections.',
    },
    {
      title: 'As-Built Documentation & Key Handover',
      category: 'Completion',
      desc: 'Full digital & physical dossier of final electrical/plumbing conduits, warranty documentation, and official key presentation ceremony.',
    },
  ];

  return (
    <section className="relative w-full bg-[#080605] py-24 sm:py-32 text-[#E8DFD8] border-t border-[#8C6D4F]/20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel index="04" title="Client Handover Guarantees" />
          <GoldHeadline light="Tangible Deliverables," gold="Zero Ambiguity." />
          <p
            className="mt-4 text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
            style={MONS}
          >
            Every phase of our partnership yields rigorous, tangible documentation
            giving you total transparency, institutional compliance, and lifetime
            clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="p-7 border border-[#8C6D4F]/30 bg-[#0E0B08] hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <span
                  className="text-[9.5px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]"
                  style={MONS}
                >
                  {item.category}
                </span>
                <h4
                  className="mt-2 text-xl uppercase tracking-tight text-[#EFE5DB]"
                  style={BEBAS}
                >
                  {item.title}
                </h4>
                <p
                  className="mt-3 text-xs font-light text-[#A8988B] leading-relaxed"
                  style={MONS}
                >
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#8C6D4F]/20 flex items-center gap-2">
                <span className="text-[#D4AF37] text-xs">✓</span>
                <span
                  className="text-[10px] uppercase tracking-wider text-[#C4B5A5]"
                  style={MONS}
                >
                  Standard In Every Contract
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   06 / FAQ & SCOPE CLARIFICATIONS
───────────────────────────────────────────── */
const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you provide complete turnkey construction contracts?',
      a: 'Yes. We provide complete turnkey construction where our single studio oversees everything from architectural design, structural engineering, and approval coordination through civil construction, electrical/plumbing, and full interior finishing.',
    },
    {
      q: 'How are government permissions and utility connections handled?',
      a: 'We provide approval assistance and project coordination. Depending on your project requirements and local municipal procedures, we prepare all sanction drawings, liaise with local authorities, and assist with electricity and water connection paperwork.',
    },
    {
      q: 'Can we hire your team for architectural design or interiors only?',
      a: 'While our greatest value is delivered through our end-to-end "Concept to Completion" model, we do undertake standalone architectural design packages, structural consulting, or interior design contracts depending on studio availability.',
    },
    {
      q: 'How do you coordinate structural engineering with architectural drawings?',
      a: 'Our architectural and structural design workflows are deeply integrated. Structural columns, beams, and foundations are engineered in direct harmony with the floor plans, eliminating awkward column projections and ensuring clean, functional spaces.',
    },
    {
      q: 'What is your process for budget tracking and material selection?',
      a: 'Before breaking ground, we prepare an itemized Bill of Quantities (BOQ) specifying all materials, fixture brands, and structural grades. Milestone payments are strictly tied to on-site verification audits.',
    },
  ];

  return (
    <section className="relative w-full bg-black py-24 sm:py-32 text-[#E8DFD8] border-t border-[#8C6D4F]/20">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <SectionLabel index="05" title="Clarity & Scope" />
          <GoldHeadline light="Frequently Asked," gold="Clear Answers." />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="border border-[#8C6D4F]/30 bg-[#0D0A08] transition-colors hover:border-[#8C6D4F]/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer outline-none"
                >
                  <span
                    className="text-sm sm:text-base font-medium tracking-wide text-[#EFE5DB]"
                    style={MONS}
                  >
                    {faq.q}
                  </span>
                  <span className="text-xl text-[#D4AF37] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="px-6 pb-6 text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed border-t border-[#8C6D4F]/20 pt-4"
                      style={MONS}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   07 / STATEMENT BAND
───────────────────────────────────────────── */
const StatementBand: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[65vh] min-h-[460px] w-full overflow-hidden flex items-center justify-center text-center"
    >
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <img
          src={imgConstruction}
          alt="Lines & Designs active construction project in progress"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37] mb-4 block"
            style={MONS}
          >
            The Single Team Commitment
          </span>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.9]"
            style={BEBAS}
          >
            <span className="block text-white">We Coordinate Your Build</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              From First Idea To Completed Space.
            </span>
          </h2>
          <p
            className="mt-6 max-w-lg mx-auto text-xs sm:text-sm font-light text-[#D8C9B9] leading-relaxed"
            style={MONS}
          >
            One contract. One accountable studio. An unbroken chain of custody from
            the day we survey your land to the evening you unlock your front door.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   08 / FINAL CONSULTATION CTA
───────────────────────────────────────────── */
const FinalCtaBand: React.FC = () => (
  <section
    id="contact"
    className="relative w-full bg-black py-24 sm:py-32 text-center border-t border-[#8C6D4F]/20"
  >
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
      <SectionLabel index="06" title="Get Started" />
      <GoldHeadline
        light="Ready to Build?"
        gold="Let’s Discuss Your Plot."
        size="text-5xl sm:text-7xl md:text-8xl"
      />
      <p
        className="mt-6 max-w-xl mx-auto text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed"
        style={MONS}
      >
        Whether you have an empty plot of land, a vision for a private villa, or a
        commercial project requiring complete architecture and execution, our team
        is ready to walk the site with you.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/#contact"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#8C6D4F] bg-[#14100C] hover:border-[#D4AF37] text-[#F3E5D8] hover:text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all cursor-pointer"
          style={MONS}
        >
          <span>Schedule Site Consultation</span>
          <span className="text-xs">↗</span>
        </Link>
        <a
          href="https://wa.me/918041238890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#D8C9B9] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all"
          style={MONS}
        >
          <span>Message on WhatsApp</span>
          <span className="text-xs">→</span>
        </a>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   09 / SERVICE DETAIL SLIDE-OVER MODAL
───────────────────────────────────────────── */
const ServiceDetailModal: React.FC<{
  service: ServiceItem | null;
  onClose: () => void;
}> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Slide-over Container */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: EASE }}
          className="relative z-10 w-full max-w-2xl h-full bg-[#0E0B08] border-l border-[#8C6D4F]/40 shadow-2xl overflow-y-auto flex flex-col justify-between"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full shrink-0">
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B08] via-black/40 to-transparent" />
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 border border-[#8C6D4F]/50 bg-black/60 text-[#F7E7C4] flex items-center justify-center text-lg hover:border-[#D4AF37] transition-colors cursor-pointer"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span
                className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37]"
                style={MONS}
              >
                Service {service.number} · {service.category}
              </span>
              <h2
                className="text-3xl sm:text-4xl uppercase text-white tracking-tight"
                style={BEBAS}
              >
                {service.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 flex-1">
            <p
              className="text-xs uppercase tracking-[0.25em] text-[#C99E5D] font-medium"
              style={MONS}
            >
              {service.tagline}
            </p>
            <p
              className="mt-3 text-xs sm:text-sm font-light text-[#D8C9B9] leading-relaxed"
              style={MONS}
            >
              {service.description}
            </p>

            {/* Scope Breakdown */}
            <div className="mt-8">
              <h4
                className="text-lg uppercase tracking-tight text-white mb-3"
                style={BEBAS}
              >
                Detailed Scope of Services
              </h4>
              <ul className="space-y-2.5">
                {service.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-xs font-light text-[#C4B5A5]"
                    style={MONS}
                  >
                    <span className="mt-1 text-[#D4AF37] text-[9px]">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables to Showcase */}
            <div className="mt-8 pt-6 border-t border-[#8C6D4F]/20">
              <h4
                className="text-lg uppercase tracking-tight text-white mb-3"
                style={BEBAS}
              >
                Tangible Deliverables Provided
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.deliverables.map((del) => (
                  <div
                    key={del}
                    className="p-3 bg-[#14100C] border border-[#8C6D4F]/30 text-xs text-[#EFE5DB] flex items-center gap-2"
                    style={MONS}
                  >
                    <span className="text-[#D4AF37]">✓</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clarification / Note if any */}
            {service.clarification && (
              <div className="mt-6 p-4 bg-[#18130E] border-l-2 border-[#D4AF37] text-[11px] text-[#A8988B] leading-relaxed">
                <span className="text-[#D4AF37] font-medium">Scope Note: </span>
                {service.clarification}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="p-6 sm:p-8 border-t border-[#8C6D4F]/30 bg-[#120F0C] flex items-center justify-between gap-4">
            <Link
              to="/#contact"
              onClick={onClose}
              className="flex-1 py-3 text-center border border-[#8C6D4F] bg-[#1a140f] hover:border-[#D4AF37] text-[#F3E5D8] text-[11px] font-medium tracking-[0.2em] uppercase transition-all"
              style={MONS}
            >
              Inquire About This Service
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-[#8C6D4F]/40 text-[#A8988B] hover:text-white text-[11px] font-medium uppercase tracking-[0.18em] cursor-pointer"
              style={MONS}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────
   Main Page Assembly
───────────────────────────────────────────── */
export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="relative w-full bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black min-h-screen">
      <ScrollProgress />

      {/* Hero Section */}
      <HeroSection />

      {/* 01: End-to-End Process (8 Stages) — Placed right after Hero */}
      <ProcessSection />

      {/* 02: Core Capabilities (7 Services Grid) */}
      <CoreServicesSection onSelectService={setSelectedService} />

      {/* 03: Spaces We Shape (Residential & Commercial Typologies) */}
      <SpacesSection />

      {/* 04: Tangible Deliverables Showcase */}
      <DeliverablesSection />

      {/* 05: Statement Band */}
      <StatementBand />

      {/* 06: Frequently Asked Questions */}
      <FaqSection />

      {/* 07: Final Consultation CTA */}
      <FinalCtaBand />

      {/* Detailed Slide-over Modal for individual services */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Standard Site Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;