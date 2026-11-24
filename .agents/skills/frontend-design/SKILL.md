---
name: frontend-design
description: Designs and implements polished, distinctive frontend interfaces for the Olivia birthday experience. Use when creating layouts, components, typography, visual hierarchy, responsive page composition, or refining the overall UI.
---

# Frontend Design

## Goal
Create a handcrafted, emotionally warm birthday experience. The result must not resemble a generic SaaS dashboard or a boilerplate AI landing page.

## Visual direction
- Core style: romantic pixel-art storybook.
- Palette: midnight navy, soft lavender, blush pink, warm cream, muted rose, and restrained gold highlights.
- Use pixel-art illustrations as focal points, not as noisy decoration everywhere.
- Pair pixel-inspired headings or accents with a highly readable body font.
- Use consistent spacing, a small radius scale, and deliberate visual hierarchy.
- Keep backgrounds atmospheric but preserve readable contrast.

## Layout rules
- Design mobile-first; the primary experience is likely to be opened on a phone.
- Keep each story scene focused on one emotional beat and one primary action.
- Use generous breathing room; do not cram all content into one viewport.
- Keep navigation minimal. Prefer a clear “continue” action and a subtle progress indicator.
- Use responsive image sizing and intentional cropping.

## Component rules
- Build reusable components with clear props and semantic HTML.
- Separate content from presentation.
- Use real button elements for actions and links for navigation.
- Every visible control must have a meaningful behavior.
- Avoid unnecessary gradients, glassmorphism, excessive rounded cards, and random decorative icons.

## Workflow
1. Read `AGENTS.md` and the architecture document.
2. Inspect existing components before creating new ones.
3. Establish tokens for colors, spacing, typography, shadows, and motion.
4. Build one scene at a time.
5. Check desktop and narrow mobile layouts after each scene.

## Acceptance checklist
- The design feels personal, romantic, and cohesive.
- Text is readable at phone width.
- No horizontal overflow.
- Focus states are visible.
- Components are reusable and content is not hardcoded across many files.
