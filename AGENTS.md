# AGENTS.md — A Little Universe for Olivia

## Project mission
Build a personal, romantic, pixel-art birthday story for Olivia. It should feel like a small digital gift: warm, playful, intentional, and easy to use on a phone.

## Locked creative decisions
- Visual direction: pixel art.
- Mood: romantic.
- Experience: sequential storytelling.
- Required features: memory gallery, birthday letter, secret message, interactive cake.
- Audio: optional background music with explicit user-initiated playback.
- Deployment target: Vercel, source hosted on GitHub.

## Product principles
1. Story before spectacle: each scene has one emotional purpose.
2. Personal, not generic: never invent memories, dates, names, or promises.
3. Mobile first: optimize the experience for a phone screen.
4. Accessible by default: keyboard, touch, contrast, focus, and reduced motion.
5. Graceful degradation: missing audio or decorative assets must not block the story.
6. Every control works: no dead buttons or decorative controls pretending to be interactive.

## Preferred stack
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide React only where icons are needed
- GitHub + Vercel

Do not add a database or backend unless a later requirement genuinely needs one. Keep the first version frontend-only.

## Story sequence
1. `welcome`: atmospheric opening and invitation.
2. `gift`: interactive gift reveal.
3. `memories`: photo keepsakes with captions.
4. `letter`: personal birthday letter with typewriter reveal and skip.
5. `secret`: optional hidden message interaction.
6. `cake`: candles, wish moment, and celebratory ending.

## Architecture rules
- Keep page composition in `src/app`.
- Put reusable UI in `src/components`.
- Put story scenes in `src/sections`.
- Put typed content in `src/data`.
- Put reusable hooks in `src/hooks`.
- Put shared tokens and global styles in `src/styles` or `src/app/globals.css`.
- Put static media in `public/images`, `public/illustrations`, `public/music`, and `public/fonts`.
- Keep content separate from JSX.
- Use TypeScript types for story data and interaction state.
- Prefer small components with clear responsibilities.
- Use client components only where state, browser APIs, or interaction requires them.

## Interaction rules
- Audio must not autoplay. Start only after a user gesture.
- Provide a persistent play/pause or mute control after activation.
- Typewriter text must have a skip/show-full-text option.
- Secret content must have an accessible click/tap trigger; never rely on hover alone.
- Cake/candle interactions must work with keyboard and touch.
- Respect `prefers-reduced-motion`.
- Keep scene navigation understandable and provide a way to revisit earlier scenes.

## Content placeholders
Use clearly marked placeholders until the owner supplies final content:
- `[Olivia's birthday date]`
- `[memory photo 1]`, `[memory caption 1]`
- `[personal birthday letter]`
- `[secret message]`
- `[music file with usage permission]`

Never fabricate these details.

## Design system guidance
- Palette direction: midnight navy, lavender, blush pink, warm cream, muted rose, restrained candle gold.
- Use pixel-art assets with crisp edges and a consistent palette.
- Keep body text highly readable; pixel fonts are accents, not long-form body fonts.
- Avoid generic SaaS layouts, excessive glassmorphism, excessive gradients, and random decoration.
- Use motion with purpose and restrained duration.

## Quality gates
Before declaring a phase complete:
- Test at 320px, 375px, 390px, 430px, tablet, and desktop widths.
- Test keyboard navigation and visible focus.
- Test reduced-motion mode.
- Test every visible button and interaction.
- Check missing assets and browser console errors.
- Run lint/type checks and production build.
- Confirm no horizontal overflow.

## Deployment
- Use GitHub as the source repository.
- Deploy through Vercel's Next.js integration.
- Do not commit secrets or private credentials.
- Treat the deployed site as public unless access control is deliberately configured.
- Confirm photos and personal content are approved for public hosting before deployment.

## Skill usage
Read and apply the relevant skill in `.agents/skills/` before doing substantial work:
- frontend-design
- pixel-art-direction
- romantic-storytelling
- motion-interactions
- responsive-accessibility
- audio-experience
- performance-quality
- vercel-deployment

## Agent workflow
1. Inspect current files before editing.
2. Explain the implementation plan before large changes.
3. Work in small, testable phases.
4. Do not replace existing assets or user content without asking.
5. Report changed files, tests run, and any remaining placeholders at the end.
