---
name: motion-interactions
description: Builds polished, purposeful animations and interactions for the Olivia birthday story using Motion for React and CSS. Use for scene transitions, typewriter text, photo reveals, gift opening, confetti, and cake interactions.
---

# Motion & Interactions

## Goal
Animations should communicate state, create delight, and support the story. They must not make the site tiring or slow.

## Preferred tools
- Use Motion for React for coordinated React transitions and presence.
- Use CSS for simple looping ambience such as twinkling stars or gentle floating particles.
- Avoid adding multiple animation libraries unless a concrete requirement justifies it.

## Interaction patterns
- Scene transitions: short fade/slide with reduced-motion fallback.
- Gift: button activation triggers lid/open state, then reveals content.
- Memory gallery: reveal cards as they enter the viewport; avoid long stagger delays.
- Letter: typewriter effect must have a “show all” or skip control.
- Secret: use a clear accessible trigger; do not rely on hover-only discovery.
- Cake: candles toggle to extinguished state; then show a celebratory response and confetti.
- Music: start only after an explicit user gesture. Never autoplay audio on page load.

## Performance rules
- Animate transform and opacity where possible.
- Avoid expensive layout animations on large elements.
- Limit particle counts, especially on mobile.
- Clean up event listeners and animation controls.
- Pause or reduce decorative animation when the tab is hidden if practical.

## Accessibility
- Respect `prefers-reduced-motion`.
- Ensure animations do not block access to content.
- Buttons must expose state via accessible labels or `aria-pressed` where appropriate.
- Provide keyboard-operable interactions.

## Acceptance checklist
- Every animation has a purpose.
- Interactions work with touch, mouse, and keyboard.
- No autoplay audio.
- Reduced-motion mode remains usable.
- No animation causes layout shift or horizontal overflow.
