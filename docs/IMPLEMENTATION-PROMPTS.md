# Implementation Plan & Agent Prompts

Use these prompts one at a time in Antigravity. Do not ask the agent to build the entire experience in one pass.

## Prompt 1 — Inspect and plan
Read `AGENTS.md`, `docs/ARCHITECTURE.md`, and the relevant skills in `.agents/skills/`. Inspect the workspace. Do not overwrite existing files. Report the current state, proposed file tree, dependency choices, and phased plan. Wait for approval before large changes.

## Prompt 2 — Foundation
Create the Next.js App Router project using TypeScript and Tailwind CSS. Add Motion for React and Lucide React only if needed. Set up the directory structure in the architecture document, global design tokens, base typography, metadata, and a responsive page shell. Do not invent personal content. Run the development server and production build.

## Prompt 3 — Story controller
Implement `StoryExperience` with the six scene states: welcome, gift, memories, letter, secret, cake. Add a compact progress indicator and accessible previous/continue controls. Use Motion for restrained scene transitions. Verify keyboard and touch interaction.

## Prompt 4 — Scene components
Implement each scene as a separate component. Use clearly labelled placeholders for photos, captions, letter text, secret message, and music. Gift opens on click/tap. Memories display responsive photo keepsakes. Letter supports typewriter and show-all. Secret uses an accessible reveal control. Cake supports candle interaction and a final celebration.

## Prompt 5 — Visual polish
Apply the pixel-art direction consistently. Add a limited number of pixel stars/hearts and subtle atmospheric motion. Use supplied pixel artwork as a focal asset. Do not use pixelated rendering on normal photographs. Check small-screen composition.

## Prompt 6 — Audio
Add optional background music with explicit user-initiated playback. Keep playback state across scene changes. Add pause/mute and graceful failure handling. Do not autoplay.

## Prompt 7 — Content integration
Replace placeholders only with content supplied by the owner. Check image paths, alt text, captions, letter punctuation, secret message, and audio permission. Do not make up memories or personal facts.

## Prompt 8 — QA and deployment
Run lint/type checks and production build. Test widths 320, 375, 390, 430, tablet, and desktop. Test keyboard navigation, reduced-motion, every button, audio, image loading, refresh, and direct URL. Fix issues. Prepare GitHub and Vercel deployment steps; do not claim deployment until it has actually succeeded.

## Final report format
- Summary of implemented scenes
- Files created/changed
- Skills applied
- Tests/build commands and actual results
- Remaining placeholders/assets
- Deployment status and production URL only if verified
