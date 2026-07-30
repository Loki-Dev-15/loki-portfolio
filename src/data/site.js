// Single source of truth for the downloadable resume.
//
// TO UPDATE YOUR RESUME IN THE FUTURE:
//   1. Drop the new PDF into `public/` using this exact filename
//      (overwrite the old file — same name, new content).
//   2. That's it. No code changes, no other files to touch.
//
// If you'd rather use a different filename (e.g. to force browsers to treat
// it as a new file instead of a cached one), just change the string below —
// this is the ONLY place it needs to change.
export const RESUME_FILE_NAME = "Lokeshkumar_D_DotNet_Developer_Resume.pdf";

// Resolved against Vite's base path (see vite.config.js) so it works whether
// the site is deployed at a domain root or a GitHub Pages subpath like
// /loki-portfolio/.
export const RESUME_URL = `${import.meta.env.BASE_URL}${RESUME_FILE_NAME}`;
