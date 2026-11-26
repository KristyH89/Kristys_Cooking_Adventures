# Changelog

All notable changes to this website are listed here, newest first.

## Unreleased (branch `redesign/creative-adventures`)

The first phase of the redesign: fixes and clean-up. The site looks the same, except for the home page changes listed below. All recipe and category URLs are unchanged.

### Fixed
- `sitemap.xml` is now published on the live site (it returned a 404) and lists the Vercel address instead of the old GitHub Pages address.
- Link previews (Open Graph / Twitter tags) now use the Vercel address.
- A photo in the home page slider was broken because of a typo in the file name.

### Added
- `robots.txt`, pointing search engines to the sitemap.
- Meta description and Open Graph tags on category pages.
- `site.config.js`: one place for the site address.
- README sections on running the site, the project structure and adding a recipe.

### Changed
- Adding a recipe no longer requires editing `vite.config.js`; pages are read from `recipes.json` and `categories.json`.
- `npm run dev` now also generates the recipe pages first.
- Generated pages (`recipe/`, `categories/`, sitemap, robots) are no longer stored in Git.
- `vercel.json` sets the build command and output folder explicitly.

### Removed
- Learning Goals table and the full-stack developer intro on the home page.
- The `docs/` folder and GitHub Pages configuration (the site is only hosted on Vercel).
- Debug logging and unused files from the Vite starter template.

## Before the redesign

The state of the site before the redesign is tagged `v1-cooking-adventures`.
