![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Responsive-Design](https://img.shields.io/badge/Responsive-Design-green)

# 🌐 Workshop2_HTML_CSS

For this workshop project, I chose to combine two things I truly enjoy: building websites and cooking (and of course, enjoying the food as well).
With this website, I want to showcase some of my cooking skills while practicing and demonstrating my HTML and CSS knowledge. This project allows me to be creative both in the kitchen and in front of the computer.

The original workshop instructions are included below this report. I used them as a guideline and followed each step carefully while developing the project.

Go to https://kristys-cooking-adventures.vercel.app/ to view the result. I will keep adding recipies to the website. 

---

## 📚 My Learning Process

This document contains the different steps, improvements, and lessons learned while building this website.

👉 [Read the full development process](website-development-steps.md) 


---

## 📘 Workshop Instructions

👉 [View workshop instructions](HTML-CSS_Workshop.md) 

---


## ✨ Features 

- Responsive layout for desktop and mobile devices
- Reusable header and footer across all pages
- Recipe cards with clickable navigation
- Contact form with custom styling
- Styled recipe pages with responsive images
- Custom favicon and SVG icons
- Flexbox-based layouts
- Hover effects and interactive navigation

--- 

## 🛠️ Technologies Used 

- HTML5
- CSS3 and Tailwind CSS 4
- Vite 8 (build tool)
- Handlebars (shared navbar/footer and page templates)
- Flexbox
- Media Queries
- SVG Icons
- Git & GitHub
- Vercel (hosting)

---

## 🚀 Running the site locally

```bash
npm install
npm run dev       # generates the recipe pages and starts a local server
npm run build     # generates the recipe pages and builds the site into dist/
npm run preview   # serves the built site from dist/
```

---

## 🗂️ Project structure

| Path | What it is |
|---|---|
| `index.html`, `food.html`, `digital.html`, `about.html`, `contact.html` | Hand-written pages |
| `partials/` | Navbar, footer, Digital sub-menu and font link, shared by the pages |
| `recipes.json` | All recipes (the content of every recipe page) |
| `digital-examples.json` | Examples shown on Digital → Examples |
| `digital/` | Digital Adventures sub-pages (Examples, What I do) |
| `categories.json` | All recipe categories |
| `templates/` | Templates for a recipe page and a category page |
| `scripts/generate-recipes.js` | Builds `recipe/*.html`, `categories/*.html`, `public/sitemap.xml` and `public/robots.txt` from the JSON files |
| `site.config.js` | The site address (sitemap, link previews) and the menu items |
| `public/images/` | Photos and site images, copied as-is |
| `src/` | JavaScript and CSS |

`recipe/`, `categories/`, `public/sitemap.xml` and `public/robots.txt` are generated on every build and are not stored in Git. Don't edit them by hand.

---

## 🎨 Colours and themes

The site has three parts, each with its own colour:

| Theme | Used on | Accent | Soft background | Text shade |
|---|---|---|---|---|
| `food` | Food, categories, recipes | `#36976F` | `#E9F7F1` | `#2A7757` |
| `digital` | Digital Adventures | `#E57A9C` | `#F9E9ED` | `#A84E6A` |
| `general` | Home, About, Contact | `#E88742` | `#FFF0E3` | `#B5571A` |

Plus a cream base (`#FFFBF5`) and ink for text (`#2B2A28`).

- The colours are defined once in `src/style.css` (`@theme`). Tailwind turns them into classes such as `bg-food-soft`, `text-digital-strong` or `border-general`.
- Every page sets its theme on the body: `<body data-theme="food">`. The navbar, footer and other shared parts read the matching `--theme-*` variables, so they change colour automatically.
- Use the "strong" shade for headings and links: orange and pink are too light for small text.
- Small labels use the pixel font Pixelify Sans (class `pixel-label`), a nod to the logo. It is loaded from Google Fonts in the head of the pages that use it.

## 🧭 Navigation

- Menu items are listed in `NAV_ITEMS` in `site.config.js`; the navbar and footer both use that list.
- A page marks its own menu item with `{{> navbar active="food"}}` (the `key` from `NAV_ITEMS`).
- On small screens the menu collapses behind a Menu button (`src/navigation.js`).

---

## 💻 Adding a digital example

Examples (short clips of effects, details or website projects) appear on `/digital/examples.html`.

1. Put the media file in `public/images/digital/`. A short **MP4 or WebM** is best for effects: it is much smaller than a GIF and plays muted on a loop, just like a GIF. GIF, PNG and JPG also work.
2. Add an entry to `digital-examples.json`:

```json
{
  "title": "Coloured line under the header that follows scrolling",
  "type": "Effect",
  "description": "Two sentences about what it does and why.",
  "media": "scroll-line.mp4",
  "mediaAlt": "A coloured line under a website header grows while scrolling down",
  "tags": ["CSS", "JavaScript"],
  "public": true
}
```

- `type`: a short label, for example `Effect`, `Project` or `Experiment`.
- `public`: only `true` entries are shown. Use `false` to prepare an example while you wait for permission from a company or client.
- Leave out company names and anything that makes a client recognisable until you have permission.

## ✍️ Writing the Digital texts

Text that still has to be written is marked on the page with a dashed box (`class="placeholder-text"`) and in the code with a `TODO (Kristy)` comment. Search for `TODO (Kristy)` to find them all. When a page is finished, remove its `<meta name="robots" content="noindex" />` and add it to `staticPages` in `scripts/generate-recipes.js`, so it appears in the sitemap.

## 🍳 Adding a recipe

1. Put the photo in `public/images/recipe-photos/`.
2. Add an entry to `recipes.json`. The `slug` becomes the address: `"slug": "pancakes"` gives `/recipe/pancakes.html`. Use one or more category slugs from `categories.json` in `"category"`.
3. Run `npm run dev` to check it, then commit and push. Vercel builds and publishes it automatically.

A recipe can either have `ingredients` + `steps`, or a `sections` list (for example dough, filling, topping), each with its own `ingredients` and `steps`. Optional fields: `optional`, `storage`, `tip`, `output`. Look at an existing recipe in `recipes.json` for an example of each.

Add new recipes at the end of `recipes.json`: the home page shows the last three entries as "Latest recipes".

Never change the `slug` of an existing recipe: that changes its address and breaks existing links.

---
  
## 📱 Responsive Design 
The website was tested on different screen sizes and includes responsive CSS using media queries to improve usability on mobile devices and tablets. 



