# Lines & Designs — Image Generation Prompts

Generate these 7 images, then drop them into `public/images/` using the **exact
filenames** shown. The site loads them automatically on refresh. Until a file
exists, that slot shows an on-brand gradient fallback, so nothing looks broken.

## Consistency is everything
These images sit inside a dark, cinematic, gold-accented site. To make them feel
like one coherent brand, **append this style suffix to every prompt**:

> *Cinematic editorial interior photography, warm and moody, soft natural light
> with deep shadows, rich warm-neutral palette with subtle gold/amber accents,
> film-like color grade, fine grain, shallow depth of field, architectural-digest
> quality, ultra-detailed, no people, no text, no watermark.*

Export as **JPG, sRGB, quality ~80**. Keep each file roughly under ~500 KB so the
site stays fast.

---

## 1 — Hero background → `hero.jpg`  (16:9 landscape, ~2400×1350)

> A breathtaking modern living room at golden hour, floor-to-ceiling windows,
> warm oak paneling and travertine surfaces, a low linen sofa, a sculptural floor
> lamp casting warm glow, a tall indoor plant, layered soft shadows and pools of
> amber light, muted earthy palette with gold accents. Wide cinematic establishing
> shot with calm negative space on the **left third** for headline text.

*[+ style suffix]*  — This is the full-screen first impression; make it the most
dramatic and atmospheric of the set.

---

## 2 — The Studio → `studio.jpg`  (4:5 **portrait**, ~1200×1500)

> Inside a boutique interior-design studio: a designer's material moodboard with
> fabric swatches, stone and timber samples and brass hardware, rolled drawings on
> a large drafting desk, a wall of curated references, warm task lighting, tactile
> and intimate. Vertical composition.

*[+ style suffix]*  — Portrait orientation is important (it sits in a tall 3D card).

---

## 3 — The Terrace House → `project-1-terrace-house.jpg`  (3:2 landscape)

Residential villa, warm & light-filled.

> A sunlit open-plan villa living-and-dining space opening onto a lush garden
> through full-height glazing, warm oak floors and travertine walls, a muted
> natural palette, sheer curtains diffusing golden light, indoor greenery, calm
> and grounded.

*[+ style suffix]*

---

## 4 — Nordic Light Apartment → `project-2-nordic-apartment.jpg`  (3:2 landscape)

Compact Scandinavian home, airy & pale.

> A serene compact Scandinavian apartment interior, pale ash timber, soft linen
> upholstery, minimalist built-in storage, a single arc lamp, a light neutral
> palette warmed by low sun, airy and uncluttered.

*[+ style suffix — keep this one a touch brighter/lighter than the others.]*

---

## 5 — Atelier Coffee & Co. → `project-3-atelier-cafe.jpg`  (3:2 landscape)

Hospitality — café / roastery, warm & moody.

> A moody neighbourhood coffee roastery interior, board-formed concrete walls,
> warm brass fixtures, a long communal oak table, pendant lights glowing amber,
> an espresso bar and shelves of beans, intimate and inviting.

*[+ style suffix]*

---

## 6 — Meridian Workspace → `project-4-meridian-workspace.jpg`  (3:2 landscape)

Commercial — design-led office HQ.

> A sophisticated design-led office headquarters interior, warm wood with dark
> accents, acoustic felt zones, abundant plants and biophilia, soft architectural
> lighting, a collaborative lounge with designer furniture, refined and
> brand-forward.

*[+ style suffix]*

---

## 7 — The Monochrome Penthouse → `project-5-monochrome-penthouse.jpg`  (3:2 landscape)

Residential penthouse — tonal & luxurious.

> A dramatic top-floor penthouse living space composed in tone and texture:
> charcoal stone, smoked glass, dark timber, a sculptural statement light fixture,
> a city view through floor-to-ceiling windows at dusk, restrained and luxurious.

*[+ style suffix — darkest, most tonal image of the set.]*

---

## After you add the images
```bash
cd lines-and-designs
npm install      # first time only
npm run dev      # then open the printed localhost URL
```
Swap any image later by replacing the file in `public/images/` (same name) — no
code changes needed. To rename or add slots, edit `src/images.ts`.
