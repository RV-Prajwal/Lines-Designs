import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectTypes = ['Residential', 'Commercial', 'Hospitality', 'Other'];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section
        id="contact"
        className="relative w-full bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black pt-20 pb-16 px-6 sm:px-10 lg:px-14 overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/3 w-[34rem] h-[34rem] bg-[#D4AF37]/[0.045] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-4 mb-5"
                >
                  <span
                    className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    06 / Contact
                  </span>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h2
                    className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                      Let's Design
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                      Something Lasting.
                    </span>
                  </h2>
                </motion.div>

                <p
                  className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-10"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Tell us about your space and how you'd like it to feel. We'll be in
                  touch within two working days to set up an initial consultation —
                  in studio, on site, or over a call.
                </p>

                {/* Contact details */}
                <div className="space-y-5">
                  {[
                    { label: 'Email', value: 'studio@linesanddesigns.in' },
                    { label: 'Phone', value: '+91 80 4123 8890' },
                    { label: 'Studio', value: 'Indiranagar, Bengaluru 560038' },
                    { label: 'Hours', value: 'Mon – Sat · 10:00 – 18:00' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-baseline gap-4">
                      <span className="w-14 shrink-0 text-[9px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F]">
                        {row.label}
                      </span>
                      <span
                        className="text-[13px] text-[#D5CBC0]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Gold edge */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

              {/* Corner crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

              {sent ? (
                <div className="py-16 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#D4AF37] text-[#D4AF37]">
                    ✓
                  </div>
                  <h3
                    className="text-3xl text-white font-normal uppercase"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Enquiry Received
                  </h3>
                  <p
                    className="text-xs text-[#A8988B] font-light max-w-sm mx-auto"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Thank you — we've noted your project and will reach out within two
                    working days to arrange your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                        // Your Name
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>

                    <div>
                      <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                        // Email
                      </span>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // Project Type
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {projectTypes.map((type) => {
                        const active = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-4 py-2 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border transition-all duration-300 ${
                              active
                                ? 'border-[#D4AF37] bg-[#1F1914] text-[#F7E7C4] shadow-[0_0_16px_rgba(212,175,55,0.18)]'
                                : 'border-[#8C6D4F]/35 bg-[#171310] text-[#C4B5A5] hover:border-[#D4AF37]/50 hover:text-white'
                            }`}
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // Tell Us About The Space
                    </span>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Location, size, timeline, and how you'd like it to feel…"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Request Consultation ↗
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
