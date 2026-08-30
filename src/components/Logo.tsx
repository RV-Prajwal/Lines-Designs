import React from 'react';

/**
 * Lines & Designs — primary logo (Concept A).
 *
 * A bracket "L" and a curved "D" monogram (pure SVG paths, razor-sharp at any
 * size) paired with the wordmark set in the site's Bebas Neue. Two layouts:
 *   - variant="inline"  → mark + single-line wordmark (navbar)
 *   - variant="stacked" → mark + two-line wordmark    (footer / hero)
 */
interface LogoProps {
  variant?: 'inline' | 'stacked';
  className?: string;
  /** height of the monogram mark in px */
  markSize?: number;
}

const Mark: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    {/* faint corner brackets */}
    <g stroke="#8C6D4F" strokeWidth="1" opacity="0.55">
      <path d="M4 14V4h10" />
      <path d="M60 14V4H50" />
      <path d="M4 50v10h10" />
      <path d="M60 50v10H50" />
    </g>
    {/* L + divider + D, shifted so the combined mark is centered in the frame */}
    <g transform="translate(-8 0)">
      {/* L bracket */}
      <path
        d="M20 16v32h12"
        stroke="#D4AF37"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
      {/* central hairline divider */}
      <line x1="34" y1="18" x2="34" y2="46" stroke="#C99E5D" strokeWidth="1" opacity="0.6" />
      {/* D curve */}
      <path
        d="M38 16h6a16 16 0 0 1 0 32h-6V16z"
        stroke="#F7E7C4"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  variant = 'inline',
  className = '',
  markSize = 34,
}) => {
  if (variant === 'stacked') {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <Mark size={markSize} />
        <span
          className="flex flex-col leading-[0.82] uppercase"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="text-[#EAD8C7] tracking-[0.14em] text-[1.55em]">Lines</span>
          <span className="text-[#D4AF37] tracking-[0.10em] text-[1.55em]">
            &amp; Designs
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={markSize} />
      <span
        className="font-semibold tracking-[0.30em] uppercase text-[#EAD8C7] whitespace-nowrap"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        LINES <span className="text-[#D4AF37]">&amp;</span> DESIGNS
      </span>
    </span>
  );
};

export default Logo;
