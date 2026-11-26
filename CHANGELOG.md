# Changelog

All notable changes to this website are listed here, newest first.

## Unreleased (branch `redesign/about`)

The About page, with self-made travel maps.

### Added
- `about.html` with Kristy's text: intro, kitchen and creative cards (green and pink), travels, professional background and a closing with a link to Contact.
- World map with a dot for every place in `places.json`, and a road trip map of the US West with the route, overnight stops and sights.
- `scripts/generate-maps.js`, which draws both maps as inline SVG at build time (d3-geo, Natural Earth data via world-atlas). No map code runs in the browser.
- A list of all places under the map, for small screens and screen readers.

### Changed
- `npm run generate` (and so `dev` and `build`) now also draws the maps.

## Unreleased (branch `redesign/digital`)

Phase 5 of the redesign: the structure of Digital Adventures. The texts and examples are still to come.

### Added
- Pink sub-menu on the Digital pages: Overview, Examples, What I do.
- `digital/examples.html`, filled from `digital-examples.json` (GIF, image or video per example, with a `public` switch).
- `digital/what-i-do.html` with five topics and marked placeholders for the text.
- `partials/fonts.hbs` for the Google Fonts link.

### Changed
- `digital.html` is now an overview page linking to the two sub-pages.

## Unreleased (branch `redesign/home`)

Phase 3 of the redesign: the new home page and the contact page.

### Added
- Two equal entry cards on the home page: Cooking Adventures (green, with the photo slider) and Digital Adventures (pink).
- "Latest recipes" section, filled automatically from the end of `recipes.json`.
- Pixel accent font (Pixelify Sans) for small labels.

### Changed
- Home page restyled in the orange (general) theme, with a cream base. The full-stack text is gone; "From Ingredients to Happiness" stays.
- Contact page restyled in the orange theme with a two-column layout. The form itself is unchanged.

## Unreleased (branch `redesign/theme-and-navigation`)

Phase 2 of the redesign: colour themes and the new menu. Recipe pages and the Food section keep their green look.

### Added
- Colour palette and three page themes (`food`, `digital`, `general`) in `src/style.css`.
- New menu: Home, Food, Digital, About, Contact, with the current page underlined.
- Mobile menu behind a Menu button on screens below 768px.
- Placeholder pages `digital.html` (pink) and `about.html` (orange), hidden from search engines until they have content.

### Changed
- Navbar and footer follow the page theme: home and contact are orange, food pages stay green.
- The logo links to the home page.
- Menu items are defined once in `site.config.js`.

## Phase 1 – merged 26 November 2026 (pull request #2)

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
