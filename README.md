# Workshop2_HTML_CSS

For this workshop project, I chose to combine two things I truly enjoy: building websites and cooking (and of course, enjoying the food as well).
With this website, I want to showcase some of my cooking skills while practicing and demonstrating my HTML and CSS knowledge. This project allows me to be creative both in the kitchen and in front of the computer.

The original workshop instructions are included below this report. I used them as a guideline and followed each step carefully while developing the project.

Go to https://kristyh89.github.io/Workshop2_HTML_CSS/ to view the result. I will keep adding recipies to the website. 

---

### Step 1 – Create the header

I added a `<header>` to my homepage to welcome visitors and provide structure.

- The header now does not contain text directly, but instead displays a background image with the bottom part visible, showing my "Coocking Adventures with Kristy" banner. I wanted to write some text there first, but it didn't look right with the background-image. 
- I used CSS background-image to set the header image, background-size: cover to fill the header, and background-position: bottom center to ensure the important part of the image (the bottom) remains visible even on larger screens. 
- A `<nav>` element is placed at the bottom of the header, styled with position: absolut; bottom: 0; left:0; widht: 100% to span the full widht. The links are centred using Flexbox. 

**Note on debugging the navbar:**
Initially, the navbar appeared only on the right side of the header. I tried several approaches, including adjusting widhts and flex settings, but the issue persisted. Eventually, I realized that adding left: 0; to the CSS positioning fixed it and ensured the navbar spanned the full widht as intended. This taught me a lot about absolute positioning and how it interacts with parent elements and flex layouts.  

- Using CSS instead of `<img>` for the header background allows more flexibility for positioning and ensures the header scales well on diffrent screen sizes. 


---

## Step 2 – Create the main content

I added a `<main>` section below the header to display the primary content of the page:

- `<h1>` contains: "Welcome to my website!"  
- `<p>` contains a short description: "Discover my favorite recipes and cooking adventures while at the same time following my journey as I learn and grow in HTML and CSS on my path to becoming a full-stack developer."
- The main content is centered and uses padding and text styling for readability.

---

## Step 3 – Footer

I added a `<footer>` at the bottom of the page:

- Contains a simple copyright line: "© 2026 KristyH89"
- Styled with a background color and centered text. I will change this later. This is just a start. 

---

## Step 4 – CSS Styling

- **Header:** background image, `cover` size, `bottom center` position, height set to 400px, and `position: relative` for navbar positioning.  
- **Navbar:** absolute position at the bottom of the header, full width, semi-transparent background (`rgba`), links centered using Flexbox.  
- **Main content:** centered text, readable font size, padding applied.  
- **Footer:** full-width, centered text, contrasting background for clarity.

---

## Step 5 – Footer Improvements & Main Content Testing

After initially adding a simple footer, I made several improvements to ensure it looked better and behaved correctly on the page:

- I changed the footer to a **pink background (`#ea4199`)** with **white, centered text** for better visual contrast.  
- Using **flexbox on the body**, I ensured that the footer **always stays at the bottom of the viewport**, even if the main content is short. This removed the unwanted white space that previously appeared below the footer.  
- I added **padding to the footer** (`15px 0`) to give the text some breathing room and improve readability.  
- I added temporary **lorem ipsum text** in the main content to test the layout and spacing of paragraphs.  
- To create consistent spacing between paragraphs, I **removed `<br>` tags** and applied CSS `margin-bottom` to `<p>` elements, which improved readability and ensured a neat, professional look.  

> **Reflection:** Fixing the footer and testing the main content helped me practice **layout control**, **flexbox**, and **page structure**. I also learned the importance of proper semantic HTML (`<p>` tags instead of `<br>` for spacing) and how CSS can be used to manage spacing consistently across the page. These adjustments improved both the **visual design** and **responsiveness** of the webpage.


## Step 6 – Contact Form

I added a **contact form** to the website on `contact.html`:

- The form includes fields for **Name**, **Email Address**, and **Message**.  
- A **submit button** allows users to send their message.  
- The form uses semantic HTML elements (`<form>`, `<label>`, `<input>`, `<textarea>`).  
- Styled with CSS (`.contact-form` class) to match the website’s design: centered, responsive, with padding, background color, and a hover effect on the submit button.  
- This form layout was adapted from a previous assignment for consistency.

## Step 7 – Header and Navbar on All Pages  

After I changed the background of the header I also changed the color of the navbar to match the backgrund. 
I ensured that the **header and navbar are consistent across all pages** (`index.html`, `food.html`, and `contact.html`):

- The `<header>` contains a background image that is always 400px high.  
- A navbar with links to **Home**, **Food**, and **Contact** is positioned at the bottom of the header using `position: absolute; bottom: 0; left: 0; width: 100%;`.  
- Flexbox (`display: flex; flex-direction: column; justify-content: flex-end;`) ensures the navbar stays at the bottom even when the header content is empty.  
- The background image uses `background-size: cover;` and `background-position: bottom center;` so the important part of the image remains visible on all screen sizes.  
- This approach allows the header and navbar to be reused on multiple pages for a consistent layout.

---

## Step 8 – Food Table  

On the `food.html` page, I added a **table layout** to showcase recipes and descriptions:

- Each row contains an image of the dish and a short description beside it.  
- The table uses CSS to remove default borders and keep a clean look (`border-collapse: collapse; border: none;`).  
- Images are styled with a fixed width (150px), rounded corners, and proper spacing.  
- This layout allows users to scan dishes visually while still including descriptive text.  
- The table structure can easily be expanded with additional dishes or adjusted for styling improvements.

** note **
I'm not really happy yet with the style, so I will change this part soon. 

---

## Step 9 – Footer  

The `<footer>` is consistent across all pages:

- Full-width layout with a pink background (`#ea4199`) and centered white text.  
- Positioned at the bottom of the page using Flexbox:  
  - `body { display: flex; flex-direction: column; }`  
  - `main { flex-grow: 1; }`  
- This ensures the footer stays at the bottom even when the page content is short.

---

## Step 10 – General CSS Styling  

General styling improvements were applied across the entire website:

- A CSS reset was added to remove default browser spacing:  
  `* { margin: 0; padding: 0; box-sizing: border-box; }`  
- Consistent fonts, colors, spacing, and layout applied to all pages.  
- Navbar links include hover effects for improved interactivity.  
- The contact form and food table are styled for readability, responsiveness, and visual consistency.


---

## Step 11 - Contact Page Background & Styling

On the `contact.html` page, I wanted to create a different atmosphere compared to the other pages.  
To achieve this, I added a background image directly to the `<body>` element using a specific class.

In the HTML, I added a class to the body:

```html
<body class="contact-page"> 
```


  ## Debugging Lesson – Live View vs GitHub View

During this project, I also learned the importance of checking whether I was viewing the **Live Server** or just the **repository preview on GitHub**.

At one point, I thought my CSS changes were not working. After troubleshooting for a while, I realized I was looking at the GitHub repository page instead of the Live Server.

This experience taught me:

- Always verify that I am testing the correct (live) version of the website.
- Small details can make a big difference during debugging.
- When something seems broken, first check the environment before changing the code.

This was a valuable lesson in attention to detail and debugging workflow.

---

## Step 12 – Food Page Layout Improvements

After creating the initial table layout for the Food page, I decided to improve the design to make it more modern, structured, and visually appealing.

### From Table to Card Layout

Although I initially used a `<table>` to display the recipes (to meet the assignment requirement), I was not fully satisfied with the visual result. The layout felt too rigid and not very modern.

To improve this, I redesigned the recipe section using a **card-based layout**:

- I created a `<div class="recipe-container">` to wrap all recipes.
- Each dish is placed inside a `<div class="recipe-card">`.
- Each recipe card contains:
  - A `<h3>` title
  - An `<img>` element
  - A `<p>` description

This structure provides more flexibility and better control over layout and spacing.

---

### Using Flexbox for Layout

To align and organize the recipe cards, I used **Flexbox**:

```css
.recipe-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
```

## Step 13 – Further development of index.html

In this step I continued improving the structure and layout of my `index.html` page.

### Layout and Structure

- I structured the page using semantic HTML elements such as:
  - `<header>` for the navigation
  - `<main>` for the main content
  - `<footer>` for the copyright section
- I added extra text to make the homepage more personal and to explain the purpose of the website.
- I made sure the content is logically structured and easy to read.

### Table Implementation

- I added a table to the homepage to meet the project requirements.
- The table is used to present structured information in a clear way.
- I made sure the table is placed inside the `<main>` section.
- I styled the table using CSS selectors to improve readability and layout.

### Paragraph Spacing

- I added spacing between paragraphs using CSS:

```css
p {
  margin-bottom: 20px;
}
```

This improves readability and gives the page a cleaner layout.

---

## Image Section – Step-by-Step Concept

Below the table, I added three images showing the step-by-step process of making homemade ice cream.

The steps represent:

- Making the waffles  
- Preparing the ice cream  
- Combining everything into the final result  

I used a flexbox layout to align the images neatly next to each other.

The images were resized using CSS to maintain consistency and visual balance.


---

## Step 14 – Header adjustments, text updates, and favicon

### Header Adjustments

- I explored different ways to make the header background more responsive, so it looks good on both desktop and mobile screens.
- I experimented with various CSS properties (`height`, `min-height`, `max-height`, `background-size`, `background-position`) to try to keep the important part of the header image visible.
- After testing, I decided to keep the header as it is now, since it balances visual appearance and readability.

### Text Updates

- I updated the text on `index.html` to make the homepage more descriptive and personal.
- Minor improvements were made to paragraph structure and spacing for better readability.
- Ensured the paragraphs are spaced consistently using CSS (`p { margin-bottom: 20px; }`).

### Favicon Implementation

- I added a favicon (`fork-knife.svg`) to the website by including it in the `<head>` section:
```html
<link rel="icon" type="image/svg+xml" href="images/fork-knife.svg"> but did didn't work, so I converted it to png and changed it to:
<link rel="icon" type="image/png" href="images/fork-knife.png">
```

---

## Step 15 – Enhancements on Contact Page

### Contact Form Button

- I improved the **submit button** on the contact form by adding an **icon** to make it more visually appealing.  
- I used the official **Bootstrap fork-knife SVG icon**, placed **left of the text** inside the button.  
- Adjusted the **CSS** for the button to use `inline-flex`, align items vertically, and add a small gap between the icon and the text.  
- Added a **hover effect** to change the button color when hovered over.  
- This small addition makes the contact form look more professional and engaging, while keeping the button fully functional.

```css
.contact-form .submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* ruimte tussen icoon en tekst */
  background-color: rgb(54, 151, 111);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.contact-form .submit-btn:hover {
  background-color: rgb(51, 97, 79);
}
The SVG icon is included directly in the HTML inside the button:

<button type="submit" class="submit-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fork-knife" viewBox="0 0 16 16">
  <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z"/>
</svg>
  Send message
</button>
```

And I found out I did not had the favicon on all the html pages, so I added it to the contact and foodpage. 


---

## Step 16 – Index Page Styling Updates

In this step I made further visual improvements to the `index.html` page to enhance readability and aesthetics.

### Body Background Color

- I added a light background color to the homepage to make the content stand out more.
- This was achieved by targeting the `body.home-page` selector in CSS:

```css
body.home-page {
  background-color: #cacaca; 
}

- The background color improves contrast and makes the text easier to read.


Table Row Colors

- I updated the table on the homepage to improve visual clarity.
- Previously only the even rows had a background color, which made the table look uneven.
- Now all rows in the table have alternating background colors for better readability:

.goals-table tbody tr:nth-child(odd) {
    background-color: #bce2d9;
}

.goals-table tr:nth-child(even) {
    background-color: #f2f2f2;
}
```

- The header row (th) remains distinct with a strong green background (rgb(54, 151, 111)) and white text.
- This creates a clear separation between header and data rows, improving the overall layout and making the table easier to scan.

---

## Step 17 - Added a background text container to the homepage

After I changed the background color of the index.html, I needed a text container for the text to be more readable. 

```body.home-page main {
  background-color: rgba(255, 255, 255, 0.9); /* licht transparant wit */
  max-width: 900px;
  margin: 40px auto; /* midden horizontaal */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
```

---

## Step 18 - Added a navbar in the footer

```<footer>
  <nav class="footer-nav">
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="food.html">Food</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>

  <p>&copy; 2026 KristyH89</p>
</footer>

After I added the navbar on the footer, I also had to change the hover.

footer .nav-links a:hover {
  color: #bce2d9;   
}
```

---

## 19 - Changed color of the heading in index.html
 
 I added 
 
 ```body.home-page h1 {
  color: rgb(54, 151, 111);
}  
```

Because for now I only need to changed the header on the index. 

I also reorganised my CSS page. I was doubting if I needed more CSS files to keep things cleaner. But because the webpage is not that big yet, I just reorganised it by adding notes between the code. 

---

## Step 20 - Added Fork-Knife Icon to Footer

In this step, I enhanced the footer by adding a small fork-knife SVG icon next to the copyright symbo.

- The icon is placed between the copyright symbol (©) and my name to make the footer more visually appealing.
- I updated the HTML structure so the order reads: © [Fork-Knife icon] KristyH89.
- The icon is aligned with the text using inline-flex styling, ensuring it stays in line with the footer text.
- This improves the design while keeping the footer clean and functional.


---

## Step 21 - Added an extra page (not visable yet) and fixed the mobile view.

I added an extra page that is not yet visible, because I eventually want to display several recipes online in an algorithmic style. This will also give me the opportunity to practice some algorithm exercises.

Additionally, I added some CSS settings to make the website more mobile-friendly. I achieved this by using a `@media` query to adjust layouts and image sizes for smaller screens.

---

### Step 22 – Make one recipe card clickable

I updated one recipe card on `food.html` so that one (Gevulde speculaas) card is now fully clickable.

- Wrapped the `.recipe-card` content in an `<a>` tag linking to the corresponding recipe page (`gevulde-speculaas.html`).
- Added CSS to make the link block-level, remove underlines, and keep the text color.
- Added a subtle hover zoom effect for better user interaction.

This makes it easy for users to click anywhere on a card to view the full recipe.

---

### Step 23 – Restructured recipe pages into a separate folder

I reorganized my project structure by creating a separate `recipe/` folder for all individual recipe pages. This keeps the project cleaner and more scalable as the number of recipes grows.

- Moved individual recipe pages (`gevulde-speculaas.html`) into the `recipe/` folder.
- Updated internal links to ensure navigation works correctly from subfolders.
- Used absolute paths (e.g., `/My-learning-process/food.html`) in the navigation to prevent routing issues.
- Adjusted the CSS link in recipe pages using `../style.css` to maintain consistent styling.

This improved the overall structure, maintainability, and navigation stability of the website

---

### Step 24 – Updating Recipe Styling & Adding Images

In this step, I improved the layout and styling of my recipe pages.

First, I updated the recipe content structure by wrapping the ingredients and instructions inside `<pre><code>` tags. This ensures better formatting and preserves spacing, making the recipes easier to read and more structured.

Example:

```html
<pre><code>
Ingredients:
- 200g biscuits
- 100g butter
- 300ml cream
</code></pre>
```

This gives the recipes a cleaner and more organized appearance.

Additionally, I added an image at the bottom of each recipe page.
To prevent the image from becoming too large, I placed it inside a styled container (a fixed image box) using CSS:

`object-fit: contain;`

This ensures:

- The full image remains visible
- The image scales proportionally
- No parts of the image are cropped
- This update improves the visual presentation of the recipes and creates a more professional and consistent design across the website.

I shall add more recipes to the site. Only when I make real changes to lay-out/style, I will write this to the README. 

---

### Step 25 – Make recipe pages responsive on mobile

I updated the recipe pages so that the content box fits properly on mobile screens.

- Wrapped the entire recipe content in a `.recipe` container with a max-width, padding, background color, and border-radius for a neat card-like look.
- Made images inside recipes responsive by setting `width: 100%` and `height: auto`.
- Adjusted `<pre>` and `<code>` blocks so that long lines wrap on smaller screens and horizontal scrolling is avoided.
- Added a mobile media query (`max-width: 768px`) to reduce padding and ensure the box and images scale nicely.

This ensures that both the text and images of the recipes are fully visible and well-contained on phones and tablets.


---

### Step 26 – Make recipe content responsive with styled box

I updated the recipe pages to ensure that the text and images fit nicely inside a box on both desktop and mobile.

- Wrapped the recipe content in a `<div class="recipe">` container so that CSS styling can be applied consistently.
- Added a subtle green background with some transparency to make the recipe box stand out:

```css
.recipe {
  max-width: 800px;       /* maximum width on desktop */
  margin: 0 auto;         /* center the box */
  padding: 20px;
  background-color: rgba(54, 151, 111, 0.274); /* greenish transparent background */
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow-wrap: break-word; /* prevents text from overflowing */
  box-sizing: border-box;
}

.recipe img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

pre, code {
  overflow-x: auto;       /* horizontal scroll for long lines */
  white-space: pre-wrap;  /* wrap text */
  word-wrap: break-word;
}
```

- This ensures that all recipe text and images are readable, properly contained in the box, and responsive on mobile devices.


---

------------------------------------------------------------------------------------------------------------------
![Lexicon Logo](https://lexicongruppen.se/media/wi5hphtd/lexicon-logo.svg)

# Workshop: HTML & CSS

The task is to create a **single webpage** using **HTML** and **CSS**. The page must include:

- A **header**
- A **main** content section
- A **footer**
- At least **one table**
- At least **one form**
- Use **semantic HTML elements** for structure
- Use **CSS selectors** for styling
- **Advanced layout (e.g., Flexbox or Grid) is optional**

Use **semantic HTML elements** to organize the content and **CSS selectors** to style the page in a clear and consistent way.

---

## Project Ideas (choose one)

- A profile page to introduce yourself  
- A café information page presenting menu highlights, hours, and contact  
- A product shipping information page with product details and an order form  
- An event announcement page with schedule and sign-up form  
- A club or group introduction page with a table of members and a contact form  

---

## Project Setup

1. **Create a new GitHub repository**  
   Name it **`html-css-workshop`** or choose a name related to your idea.

2. **Add your project files**
   - Create a file named **`index.html`**
   - Create a file named **`styles.css`**
   - Create a file named **`README.md`**
   - Create a file named **`.gitignore`**

3. **Build your webpage**
   - Write your HTML structure in `index.html`
   - Write your CSS styling in `styles.css`
   - Commit your work to the repository as you progress

4. **Deploy the project to GitHub Server (GitHub Pages)**
5. **Share the link to your public repository** with your instructor in a **direct message** when your project is complete.
---

## Deliverables (check before submitting)
- [ ] Make multiple commits with descriptive messages that explain what and why, not just how.
- [ ] The repository is **public** on GitHub  
- [ ] The repository contains `index.html` and `styles.css`  
- [ ] The webpage includes a **header**, **main**, and **footer**  
- [ ] The webpage includes **at least one table**  
- [ ] The webpage includes **at least one form**  
- [ ] The page is styled using **CSS selectors**  
- [ ] The webpage is **deployed** using GitHub Pages  
- [ ] **Write a report** in **`README.md`** describing what steps you completed to build the project, including how you structured the HTML and how you applied CSS.

---


