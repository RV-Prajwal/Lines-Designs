import React from 'react';
import { motion } from 'framer-motion';

/**
 * WhatsApp glyph (official brand path) used inside the floating button.
 */
const WhatsAppIcon: React.FC<{ size?: number }> = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#fff"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/**
 * A floating WhatsApp bubble pinned to the bottom-right corner.
 * Opens a chat with the Lines & Designs studio (Kapil Thomas) with a
 * pre-filled enquiry about interior design services.
 */
export const WhatsAppButton: React.FC = () => {
  const waNumber = '918041238890'; // +91 80 4123 8890
  const prefilled = encodeURIComponent(
    "Hi Kapil, I'd love to discuss an interior design project with Lines & Designs."
  );

  return (
    <motion.div
      className="fixed z-[90] bottom-5 right-5 sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Subtle breathing glow ring, echoes the site's gold accents */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: '0 0 0 0 rgba(212,175,55,0.35)' }}
        animate={{ boxShadow: ['0 0 0 0 rgba(212,175,55,0.35)', '0 0 0 14px rgba(212,175,55,0)'] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
      />

      <motion.a
        href={`https://wa.me/${waNumber}?text=${prefilled}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kapil Thomas on WhatsApp about interior design services"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="relative flex items-center justify-center w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
        style={{ backgroundColor: '#25D366' }}
      >
        <WhatsAppIcon />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;