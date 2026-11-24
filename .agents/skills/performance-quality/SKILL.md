---
name: performance-quality
description: Reviews and improves loading speed, runtime performance, image delivery, code quality, and production readiness for the Olivia birthday experience.
---

# Performance & Quality

## Goal
Deliver a smooth, reliable experience on ordinary mobile connections and devices.

## Performance rules
- Keep dependencies minimal.
- Use Next.js image handling for photographic assets where appropriate.
- Size and compress uploaded photos before production.
- Avoid shipping large videos or uncompressed audio without a clear need.
- Lazy-load below-the-fold media.
- Keep decorative animation lightweight.
- Avoid unnecessary client components; use client components only for interactivity.
- Prevent layout shift by reserving image dimensions/aspect ratios.

## Quality workflow
1. Inspect console and terminal errors.
2. Run lint/type checks available in the project.
3. Run the production build.
4. Test every button and interaction.
5. Check image and audio paths.
6. Test mobile and desktop.
7. Verify refresh and direct URL loading.

## Acceptance checklist
- Production build succeeds.
- No broken assets or dead controls.
- No avoidable console errors.
- Page remains usable if music or an optional asset fails.
- Large images do not dominate initial loading.
