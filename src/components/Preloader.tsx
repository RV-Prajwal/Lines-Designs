import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────
   Inline SVG monogram (mirrors Logo.tsx Mark)
───────────────────────────────────────────── */
const Monogram: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
  >
    {/* corner brackets */}
    <g stroke="#8C6D4F" strokeWidth="1" opacity="0.55">
      <path d="M4 14V4h10" />
      <path d="M60 14V4H50" />
      <path d="M4 50v10h10" />
      <path d="M60 50v10H50" />
    </g>
    {/* L + divider + D */}
    <g transform="translate(-8 0)">
      <path d="M20 16v32h12" stroke="#D4AF37" strokeWidth="2.4" strokeLinecap="square" />
      <line x1="34" y1="18" x2="34" y2="46" stroke="#C99E5D" strokeWidth="1" opacity="0.6" />
      <path
        d="M38 16h6a16 16 0 0 1 0 32h-6V16z"
        stroke="#F7E7C4"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

/* ─────────────────────────────────────────────
   Counter — counts from 0 to 100
───────────────────────────────────────────── */
const Counter: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [count, setCount] = useState(0);
  // Keep a ref so the effect closure always sees the latest callback
  // without needing it in the dependency array (which would restart the animation).
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  useEffect(() => {
    const total = 2200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(() => onDoneRef.current(), 300);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []); // empty — run exactly once on mount

  return (
    <span className="tabular-nums text-[#D4AF37]">
      {String(count).padStart(3, '0')}
    </span>
  );
};

/* ─────────────────────────────────────────────
   Exit curtain — two panels slide up/down
───────────────────────────────────────────── */
const CurtainPanel: React.FC<{ direction: 'up' | 'down'; delay: number }> = ({
  direction,
  delay,
}) => (
  <motion.div
    className="absolute inset-x-0 bg-black"
    style={
      direction === 'up'
        ? { top: 0, height: '50%' }
        : { bottom: 0, height: '50%' }
    }
    initial={{ y: 0 }}
    animate={{
      y: direction === 'up' ? '-100%' : '100%',
      transition: { duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] },
    }}
  />
);

/* ─────────────────────────────────────────────
   Main Preloader
───────────────────────────────────────────── */
interface PreloaderProps {
  onFinished?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinished }) => {
  const [phase, setPhase] = useState<'loading' | 'exiting' | 'done'>('loading');

  const handleCountDone = useCallback(() => {
    setPhase('exiting');
    setTimeout(() => {
      setPhase('done');
      onFinished?.();
    }, 1200);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#060402' }}
    >
      {/* ── Noise grain ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)',
        }}
      />

      {/* ── Corner brackets ── */}
      {(
        [
          { id: 'tl', top: 28, left: 28, d: 'M0 10V0h10' },
          { id: 'tr', top: 28, right: 28, d: 'M24 10V0H14' },
          { id: 'bl', bottom: 28, left: 28, d: 'M0 14v10h10' },
          { id: 'br', bottom: 28, right: 28, d: 'M24 14v10H14' },
        ] as const
      ).map(({ id, d, ...pos }) => (
        <motion.div
          key={id}
          className="absolute w-6 h-6"
          style={pos}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#8C6D4F" strokeWidth="1">
            <path d={d} />
          </svg>
        </motion.div>
      ))}

      {/* ── Horizontal architectural lines (top) ── */}
      <div className="absolute left-0 right-0 top-[38%] flex flex-col items-center gap-3 pointer-events-none">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.18 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: '50%', width: 420 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.10 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: '50%', width: 280 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />
      </div>

      {/* ── Horizontal architectural lines (bottom) ── */}
      <div className="absolute left-0 right-0 bottom-[38%] flex flex-col items-center gap-3 pointer-events-none">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.10 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: '50%', width: 280 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.18 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: '50%', width: 420 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />
      </div>

      {/* ── Central content ── */}
      <div className="relative flex flex-col items-center gap-8 select-none">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: -18,
              background:
                'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
            }}
          />
          <Monogram size={88} />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-1"
        >
          <span
            className="text-[1.65rem] tracking-[0.45em] uppercase text-[#EAD8C7] leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Lines
          </span>
          <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          <span
            className="text-[1.65rem] tracking-[0.45em] uppercase text-[#D4AF37] leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            &amp; Designs
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1.1, delay: 0.65 }}
          className="text-[9px] tracking-[0.4em] uppercase text-[#C4B29E]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Interior Design Studio · Bengaluru
        </motion.p>

        {/* Progress bar + counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-3 mt-2"
        >
          {/* Bar track */}
          <div className="relative w-56 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8C6D4F] via-[#D4AF37] to-[#F7E7C4]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* shimmer */}
            <motion.div
              className="absolute inset-y-0 w-8 bg-white/30 blur-sm"
              initial={{ x: -32 }}
              animate={{ x: 224 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div
            className="flex items-baseline gap-1 text-[11px] tracking-[0.25em] text-[#6B5640]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Counter onDone={handleCountDone} />
            <span>%</span>
          </div>
        </motion.div>
      </div>

      {/* ── Exit curtains ── */}
      {phase === 'exiting' && (
        <>
          <CurtainPanel direction="up" delay={0} />
          <CurtainPanel direction="down" delay={0.08} />
        </>
      )}
    </div>
  );
};

export default Preloader;
