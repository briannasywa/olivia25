# Architecture Blueprint — A Little Universe for Olivia

## 1. Product overview
A mobile-first, sequential birthday story. The visitor moves through six scenes: welcome, gift reveal, memories, letter, secret message, and birthday cake finale. The emotional center is the owner's real photos and personal writing; pixel art supplies the visual world around them.

## 2. Recommended stack
- Next.js App Router + React + TypeScript
- Tailwind CSS for responsive styling
- Motion for React for scene transitions and interaction choreography
- Lucide React for a small number of utility icons
- Vercel for hosting; GitHub for source control

Keep version numbers current at project initialization rather than hardcoding old versions into this blueprint. No database or API is needed for the first iteration.

## 3. Information architecture
`/` is the complete story experience. Use a scene controller to move between scenes without forcing full page navigation.

Scene order:
1. Welcome — atmospheric intro, “begin” action.
2. Gift — openable gift box and reveal.
3. Memories — responsive scrapbook/polaroid gallery.
4. Letter — letter/envelope with typewriter reveal and skip.
5. Secret — optional hidden note, revealed through accessible interaction.
6. Cake — candles can be extinguished; show wish and final celebration.

Provide a compact progress indicator and previous/continue controls where they do not interrupt the emotional flow.

## 4. Component architecture
- `src/app/layout.tsx`: document shell, metadata, font setup.
- `src/app/page.tsx`: page entry; composes the story experience.
- `src/app/globals.css`: design tokens, base styles, reduced-motion rules.
- `src/components/StoryExperience.tsx`: scene state and navigation.
- `src/components/SceneFrame.tsx`: shared scene layout, progress, transitions.
- `src/components/MusicToggle.tsx`: explicit-start audio control.
- `src/components/PixelDecor.tsx`: lightweight decorative stars/hearts.
- `src/sections/WelcomeScene.tsx`
- `src/sections/GiftScene.tsx`
- `src/sections/MemoriesScene.tsx`
- `src/sections/LetterScene.tsx`
- `src/sections/SecretScene.tsx`
- `src/sections/CakeScene.tsx`
- `src/components/MemoryCard.tsx`: photo, caption, accessible image semantics.
- `src/components/TypewriterText.tsx`: typewriter with skip.
- `src/components/Confetti.tsx`: restrained final celebration.
- `src/data/birthday-content.ts`: typed content and asset references.
- `src/hooks/useReducedMotion.ts`: motion preference helper if needed.
- `src/hooks/useAudio.ts`: audio lifecycle and playback state if needed.

## 5. State model
Use a small finite-state model:
`welcome | gift | memories | letter | secret | cake`

State owner: `StoryExperience`.
Local state belongs inside a scene when it does not affect navigation:
- gift: `isOpen`
- letter: `isRevealed` / `isTyping`
- secret: `isUnlocked`
- cake: `candlesOut`

Audio state is owned by `MusicToggle` or a dedicated hook and is not reset during scene changes.

Persisting progress is optional. Do not store personal content in local storage unless there is a clear reason.

## 6. Content schema
Suggested TypeScript shape:
```ts
export type Memory = {
  id: string;
  image: string;
  alt: string;
  caption: string;
  dateLabel?: string;
};

export type BirthdayContent = {
  recipient: string;
  intro: { title: string; subtitle: string; cta: string };
  memories: Memory[];
  letter: { greeting: string; paragraphs: string[]; signature: string };
  secret: { prompt: string; message: string };
  finale: { title: string; message: string };
  audio?: { src: string; label: string };
};
```

All personal text and memory captions live in one data file. Use placeholders until the owner supplies real content.

## 7. Asset conventions
- `public/images/memories/` — personal photographs.
- `public/illustrations/` — pixel-art scenes, gift, cake, characters.
- `public/music/` — licensed/owned music file.
- `public/fonts/` — self-hosted fonts only when licensing permits.
Use descriptive kebab-case filenames. Preserve originals and optimize copies. Use crisp PNG for pixel art; use WebP/AVIF for photos when suitable. Never hotlink unstable assets.

## 8. Visual system
Palette direction:
- Midnight: `#17172F`
- Deep blue: `#25264A`
- Lavender: `#A99BEA`
- Blush: `#F4B9CC`
- Cream: `#FFF4E8`
- Rose: `#D97898`
- Candle gold: `#F6C96B`

Use a pixel font sparingly for short headings and labels; use a readable sans-serif for paragraphs. Keep text contrast strong. Pixel artwork should have a consistent pixel scale and palette.

## 9. Motion specification
- Scene transition: short opacity + small vertical movement.
- Stars: low-count, slow ambient twinkle.
- Gift: lid/open reveal with a short anticipation beat.
- Memories: subtle staggered reveal; no long delays.
- Letter: typewriter effect with “show all” action.
- Secret: small reveal animation.
- Cake: candle state transition then a restrained confetti burst.
Respect reduced-motion preferences; content must remain available without animation.

## 10. Audio behavior
No autoplay. Show a clearly labelled “Play music” action. After user activation, keep audio state across scene transitions. Provide pause/mute. Handle unsupported playback and missing file gracefully. Music must be owned or licensed for use.

## 11. Privacy and hosting
A standard Vercel deployment is public to anyone with the URL. Do not include sensitive details. Obtain approval for all photos and personal messages. If private access is required, define that requirement before deployment; an obscure URL is not access control.

## 12. Implementation milestones
A. Foundation: create Next.js app, dependencies, tokens, content schema.
B. Story shell: scene controller, progress, navigation.
C. Core scenes: welcome, gift, memories, letter, secret, cake.
D. Motion and audio: transitions, micro-interactions, music toggle.
E. Content integration: real photos, captions, letter, secret message, audio.
F. QA: responsive, keyboard, reduced motion, broken assets, production build.
G. Deploy: GitHub → Vercel preview → production.

## 13. Definition of done
- All six scenes are navigable and complete.
- Memory images and personal copy are owner-provided.
- Every visible control works.
- Audio starts only after user gesture.
- Reduced-motion and keyboard navigation work.
- No horizontal overflow at phone widths.
- Production build succeeds and Vercel deployment is verified.
