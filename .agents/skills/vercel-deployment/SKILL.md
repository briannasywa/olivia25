---
name: vercel-deployment
description: Prepares, validates, and deploys the Olivia birthday Next.js project to Vercel through GitHub, including build checks, asset paths, and production smoke tests.
---

# Vercel Deployment

## Goal
Deploy a stable Next.js project with a repeatable Git-based workflow.

## Before deployment
- Confirm the project uses a supported Next.js setup.
- Run the production build locally.
- Confirm `package.json` scripts are correct.
- Confirm all public assets use root-relative paths such as `/images/example.webp`.
- Do not commit `.env` files, credentials, or private tokens.
- Check that personal photos are intentionally included in the public website.
- Check music licensing/permission.

## Deployment workflow
1. Initialize Git and commit the working project.
2. Push to a GitHub repository.
3. Import the repository into Vercel.
4. Confirm framework detection and build settings.
5. Deploy a preview.
6. Test the preview on phone and desktop.
7. Promote/merge the approved version to production.
8. Re-test the production URL.

## Privacy note
A public Vercel URL is accessible to anyone who has the link and may be shared. Do not include sensitive private information. If the site should remain private, discuss access control before deployment.

## Acceptance checklist
- Build completes successfully.
- Production URL loads over HTTPS.
- Images and audio load.
- All interactions work on mobile.
- No secrets are exposed in source or browser bundles.
