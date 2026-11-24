---
name: audio-experience
description: Implements a gentle, optional background music experience and sound effects for the Olivia birthday website, with accessible controls and browser-safe playback.
---

# Audio Experience

## Goal
Add atmosphere without taking control away from the visitor.

## Rules
- Never autoplay music on initial page load.
- Start playback only after an explicit click/tap on a clearly labelled control.
- Provide play/pause and a visible current state.
- Keep volume moderate and offer mute/stop.
- Do not make sound necessary to understand any story scene.
- Handle missing, unsupported, or failed audio gracefully.
- Avoid repeated sound effects that become annoying.
- Use only music and sound effects the site owner has permission to use.
- Store audio under `public/music/` with descriptive filenames.

## Suggested behavior
- A small persistent music toggle appears after the intro.
- The visitor can pause at any time.
- Scene changes should not restart the track.
- If the browser blocks playback, show a non-disruptive hint to tap play.

## Acceptance checklist
- No sound before user interaction.
- Controls work on mobile and desktop.
- Playback failure does not break the site.
- Audio is optional and does not block navigation.
