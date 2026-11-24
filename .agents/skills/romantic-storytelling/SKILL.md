---
name: romantic-storytelling
description: Structures the Olivia birthday website as a warm, personal, romantic sequence of story scenes. Use when writing scene copy, arranging memories, creating transitions, or shaping the emotional arc.
---

# Romantic Storytelling

## Goal
Create a gentle, sincere birthday journey that feels written for Olivia, not a generic greeting template.

## Narrative arc
1. Invitation: a small mysterious welcome.
2. Discovery: invite Olivia to open a gift or enter the story.
3. Memories: present selected moments with short captions.
4. Letter: deliver the main birthday message.
5. Secret: reveal a hidden note through a small optional interaction.
6. Wish: finish with candles, a wish, and a warm closing.

## Writing principles
- Use natural, specific language; avoid excessive clichés.
- Keep each screen's copy short enough to read comfortably on a phone.
- Do not fabricate dates, memories, promises, relationship status, or personal facts.
- Use placeholders such as `[memory caption]` or `[personal message]` until the owner supplies the real content.
- Make the tone affectionate and respectful, never guilt-inducing or pressuring.
- Give Olivia control to continue, replay, pause, or skip motion where appropriate.

## Content model
Keep story text in a central data file rather than scattering it through JSX.
Suggested fields:
- `intro.title`, `intro.subtitle`
- `memories[]: { id, image, dateLabel?, caption, alt }`
- `letter.greeting`, `letter.paragraphs[]`, `letter.signature`
- `secret.prompt`, `secret.message`
- `final.title`, `final.message`

## Acceptance checklist
- Every scene advances the story.
- Personal details are owner-provided.
- No section feels like filler.
- The ending feels complete and emotionally positive.
