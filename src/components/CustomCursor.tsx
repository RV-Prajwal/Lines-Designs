import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Minimal cinematic cursor: a solid dot with a following gold ring that grows
 * over interactive elements. Only activates on fine-pointer (mouse) devices,
 * so touch users keep native behaviour.
 */
export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add('cursor-none');

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      setHovered(
        !!(target && target.closest('a, button, input, textarea, [data-cursor="hover"]'))
      );
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.classList.remove('cursor-none');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Following ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border border-[#D4AF37]/50"
        animate={{
          x: pos.x - (hovered ? 22 : 16),
          y: pos.y - (hovered ? 22 : 16),
          width: hovered ? 44 : 32,
          height: hovered ? 44 : 32,
          borderColor: hovered ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.35)',
          backgroundColor: hovered ? 'rgba(212,175,55,0.06)' : 'rgba(212,175,55,0)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 320, mass: 0.5 }}
      />
      {/* Solid dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full bg-[#EBD7C3]"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: hovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 500, mass: 0.3 }}
        style={{ width: 6, height: 6 }}
      />
    </>
  );
};

export default CustomCursor;
