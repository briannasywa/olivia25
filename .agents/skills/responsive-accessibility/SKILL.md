---
name: responsive-accessibility
description: Ensures the birthday website is mobile-first, responsive, keyboard accessible, readable, and usable with reduced-motion preferences.
---

# Responsive Design & Accessibility

## Goal
Make the entire story comfortable to use on phones first, while remaining polished on tablet and desktop.

## Responsive rules
- Start with the narrowest supported viewport and scale upward.
- Use fluid widths, `min()`, `max()`, `clamp()`, and responsive grid/flex layouts where useful.
- Avoid fixed heights for text-heavy sections.
- Ensure touch targets are comfortably large (aim for about 44 by 44 CSS pixels).
- Prevent horizontal scrolling.
- Test portrait and landscape layouts.

## Accessibility rules
- Use semantic landmarks and a logical heading hierarchy.
- Provide visible keyboard focus.
- All actions must be keyboard operable.
- Use meaningful alt text for personal photos and meaningful illustrations.
- Do not communicate state through color alone.
- Maintain readable contrast.
- Add labels to audio controls and icon-only buttons.
- Respect `prefers-reduced-motion`.
- Ensure typewriter text can be revealed instantly.

## Testing checklist
- 320px, 375px, 390px, 430px, tablet, and desktop widths.
- Keyboard-only navigation.
- Reduced-motion enabled.
- Screen-reader labels for interactive controls.
- No clipped text, overlapping buttons, or tiny controls.
