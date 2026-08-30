import React, { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  /** classes for the outer wrapper (control sizing / aspect ratio here) */
  className?: string;
  /** classes applied to the <img> itself (object-fit, filters, hover, etc.) */
  imgClassName?: string;
  /** short label shown on the graceful fallback panel */
  label?: string;
  eager?: boolean;
}

/**
 * An image that never renders "broken". A warm dark gradient sits behind every
 * image; if the source fails to load, we keep the gradient plus a subtle,
 * on-brand label and corner marks so the layout still reads as intentional.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  label = 'LINES & DESIGNS',
  eager = false,
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#1c1610] via-[#0c0a08] to-[#231a11] ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* faint architectural line motif */}
          <div className="absolute inset-0 opacity-[0.15] bg-[repeating-linear-gradient(135deg,transparent,transparent_22px,#8C6D4F_23px,transparent_24px)]" />
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]/40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]/40" />
          <span
            className="relative text-[9.5px] font-medium tracking-[0.35em] uppercase text-[#8C6D4F]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export default SmartImage;
