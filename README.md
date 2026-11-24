# Olivia Birthday — Antigravity Starter Kit

Paket ini berisi blueprint dan Agent Skills untuk membangun website ulang tahun Olivia dengan pixel-art romantic storytelling.

## Isi paket
- `AGENTS.md` — aturan utama agent untuk project.
- `docs/ARCHITECTURE.md` — blueprint produk, struktur komponen, state, aset, motion, audio, dan deployment.
- `docs/IMPLEMENTATION-PROMPTS.md` — prompt bertahap untuk vibecoding.
- `.agents/skills/*/SKILL.md` — delapan skill project-level.
- `docs/ASSET-CHECKLIST.md` — daftar aset dan konten yang perlu disiapkan.

## Cara menggunakan
1. Extract ZIP.
2. Buka folder hasil extract sebagai workspace di Google Antigravity.
3. Pastikan `AGENTS.md` berada di root project.
4. Pastikan folder `.agents/skills/` ikut berada di root.
5. Buka `docs/ARCHITECTURE.md`.
6. Kirim `Prompt 1 — Inspect and plan` dari `docs/IMPLEMENTATION-PROMPTS.md` ke agent.
7. Lanjutkan prompt satu per satu setelah meninjau hasil setiap fase.

## Lokasi skill
Antigravity menggunakan `.agents/skills/<skill-name>/SKILL.md` untuk skill khusus workspace. Skill dapat dipilih otomatis oleh agent atau dipanggil dengan slash command bila tersedia di antarmuka.

## Penting
Paket ini adalah starter kit/blueprint, bukan website final yang sudah dibangun atau di-deploy. Foto, surat, caption, secret message, dan file musik masih perlu kamu masukkan sendiri. Jangan masukkan foto atau informasi pribadi yang tidak ingin dipublikasikan karena deployment Vercel standar dapat diakses melalui URL publik.
