// site.config.js
//
// Central settings for the whole site. Change the address here when the
// site moves to a new domain: sitemap.xml, robots.txt and the social
// media preview tags (Open Graph / Twitter) all read SITE_URL from here.

export const SITE_URL = 'https://kristys-cooking-adventures.vercel.app';

// Main navigation, used by the navbar and the footer (partials/).
// "key" is matched against the active="..." value a page passes to the
// navbar partial, to highlight the current page.
export const NAV_ITEMS = [
  { key: 'home', label: 'Home', path: 'index.html' },
  { key: 'food', label: 'Food', path: 'food.html' },
  { key: 'digital', label: 'Digital', path: 'digital.html' },
  { key: 'about', label: 'About', path: 'about.html' },
  { key: 'contact', label: 'Contact', path: 'contact.html' },
];

// Sub-navigation shown on the Digital Adventures pages
// (partials/digital-subnav.hbs). Same "key" idea as NAV_ITEMS.
export const DIGITAL_NAV_ITEMS = [
  { key: 'overview', label: 'Overview', path: 'digital.html' },
  { key: 'examples', label: 'Examples', path: 'digital/examples.html' },
  { key: 'what-i-do', label: 'What I do', path: 'digital/what-i-do.html' },
];
