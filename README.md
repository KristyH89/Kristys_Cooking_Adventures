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
| `index.html`, `food.html`, `contact.html` | Hand-written pages |
| `partials/` | Navbar and footer, shared by every page |
| `recipes.json` | All recipes (the content of every recipe page) |
| `categories.json` | All recipe categories |
| `templates/` | Templates for a recipe page and a category page |
| `scripts/generate-recipes.js` | Builds `recipe/*.html`, `categories/*.html`, `public/sitemap.xml` and `public/robots.txt` from the JSON files |
| `site.config.js` | The site address (used for the sitemap and link previews) |
| `public/images/` | Photos and site images, copied as-is |
| `src/` | JavaScript and CSS |

`recipe/`, `categories/`, `public/sitemap.xml` and `public/robots.txt` are generated on every build and are not stored in Git. Don't edit them by hand.

---

## 🍳 Adding a recipe

1. Put the photo in `public/images/recipe-photos/`.
2. Add an entry to `recipes.json`. The `slug` becomes the address: `"slug": "pancakes"` gives `/recipe/pancakes.html`. Use one or more category slugs from `categories.json` in `"category"`.
3. Run `npm run dev` to check it, then commit and push. Vercel builds and publishes it automatically.

A recipe can either have `ingredients` + `steps`, or a `sections` list (for example dough, filling, topping), each with its own `ingredients` and `steps`. Optional fields: `optional`, `storage`, `tip`, `output`. Look at an existing recipe in `recipes.json` for an example of each.

Never change the `slug` of an existing recipe: that changes its address and breaks existing links.

---
  
## 📱 Responsive Design 
The website was tested on different screen sizes and includes responsive CSS using media queries to improve usability on mobile devices and tablets. 



