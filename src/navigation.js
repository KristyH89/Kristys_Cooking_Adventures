// Mobile menu: opens and closes the main navigation on small screens.
// The markup lives in partials/navbar.hbs, the styling in src/style.css.

export function setupNavigation() {
  const nav = document.querySelector('.site-nav');
  const toggle = nav?.querySelector('.site-nav__toggle');
  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close with the Escape key and return focus to the button.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}
