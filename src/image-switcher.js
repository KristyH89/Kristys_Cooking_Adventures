// Image switcher (Digital Adventures → Examples).
//
// A list of buttons next to a stack of images. Hovering, focusing or
// clicking/tapping a button shows the matching image (data-target on the
// button = data-panel on the image). The fade, the grey-to-colour and the
// small zoom are done in CSS (.switcher in src/style.css).
//
// When the mouse leaves the list, the image of the last clicked item comes
// back, so a click "sticks" and a hover is just a preview.

export function setupImageSwitchers() {
  document.querySelectorAll('[data-switcher]').forEach((switcher) => {
    const items = [...switcher.querySelectorAll('[data-target]')];
    const images = [...switcher.querySelectorAll('[data-panel]')];
    let chosen = items.find((item) => item.getAttribute('aria-selected') === 'true') || items[0];

    const show = (item) => {
      items.forEach((other) => other.setAttribute('aria-selected', String(other === item)));
      images.forEach((image) => image.classList.toggle('is-active', image.dataset.panel === item.dataset.target));
    };

    items.forEach((item) => {
      item.addEventListener('mouseenter', () => show(item));
      item.addEventListener('focus', () => show(item));
      item.addEventListener('click', () => { chosen = item; show(item); });
    });

    switcher.querySelector('[role="tablist"]').addEventListener('mouseleave', () => show(chosen));
  });
}
