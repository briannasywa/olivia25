---
name: pixel-art-direction
description: Defines and implements a consistent pixel-art visual language for the Olivia birthday website, including character art, scene composition, sprites, pixel decorations, and image handling.
---

# Pixel Art Direction

## Goal
Make the site feel like a small romantic pixel-art adventure rather than a collection of unrelated pixel images.

## Art direction
- Use crisp pixel edges and coherent pixel scale.
- Prefer a limited palette: midnight blue, lavender, blush, cream, leaf green, and warm candlelight.
- Keep character proportions, outlines, lighting direction, and palette consistent between assets.
- Use pixel-art elements for the hero scene, gift, memory accents, cake, stars, and secret interaction.
- Do not apply CSS `image-rendering: pixelated` to ordinary photographs. Use it only for actual pixel-art assets.

## Asset rules
- Store visual assets under `public/images/` and `public/illustrations/`.
- Use descriptive, lowercase, kebab-case filenames.
- Preserve original uploads; create optimized derivatives rather than overwriting source files.
- Use descriptive alt text for meaningful images; empty alt text for purely decorative images.
- Prefer WebP/AVIF for photographic memories where supported; preserve crisp PNG for pixel art when appropriate.
- Avoid hotlinking assets from unstable third-party URLs.

## Scene composition
- Hero: a small night-sky or storybook scene with a clear focal character/object.
- Gift scene: one prominent gift box, readable prompt, and a satisfying reveal.
- Memory scene: photos framed like scrapbook/polaroid keepsakes, with restrained pixel decorations.
- Letter scene: readable letter panel, envelope motif, and typewriter reveal.
- Cake scene: cake and candles must remain legible on small screens.

## If an asset is missing
Use a clearly named placeholder and document the required dimensions/style. Do not invent personal photographs or pretend placeholder art is final.

## Acceptance checklist
- Pixel scale and palette remain consistent.
- No blurry or stretched pixel art.
- Important characters and objects are not clipped.
- Mobile composition remains understandable.
