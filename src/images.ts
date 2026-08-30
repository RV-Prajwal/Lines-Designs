// -----------------------------------------------------------------------------
// Central image module for Lines & Designs.
//
// Drop your generated images into  public/images/  using the EXACT filenames
// below, then refresh — they'll appear automatically (Vite serves /public at "/").
//
// Any image that isn't there yet falls back to an on-brand gradient panel
// (see SmartImage), so the layout never looks broken while you're generating.
//
// Recommended export: JPG, sRGB, quality ~80, long edge ~2000px (hero ~2400px,
// studio portrait ~1500px tall). See IMAGE-PROMPTS.md for prompts + aspect ratios.
// -----------------------------------------------------------------------------

const img = (name: string) => `/images/${name}`;

export const IMAGES = {
  hero: img('hero.jpg'),
  heroMobile: img('hero-mobile.jpg'),
  studio: img('studio.jpg'),
  projects: {
    one: img('project-1-terrace-house.jpg'),
    two: img('project-2-nordic-apartment.jpg'),
    three: img('project-3-atelier-cafe.jpg'),
    four: img('project-4-meridian-workspace.jpg'),
    five: img('project-5-monochrome-penthouse.jpg'),
  },
};

export default IMAGES;
