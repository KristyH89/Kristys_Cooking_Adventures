// Name labels for the dots on the travel maps (About page).
//
// Hovering, clicking, tapping or tabbing to a dot shows its name in a small
// label above it. Clicking elsewhere or pressing Escape hides it again.
// The dots are drawn by scripts/generate-maps.js with a data-label.

export function setupMapLabels() {
  const cards = document.querySelectorAll('.map-card');

  cards.forEach((card) => {
    const label = document.createElement('div');
    label.className = 'map-label';
    label.setAttribute('aria-hidden', 'true'); // the dot itself has an aria-label
    label.hidden = true;
    card.appendChild(label);

    let pinned = null; // dot that was clicked or tapped

    const show = (pin) => {
      const pinBox = pin.getBoundingClientRect();
      const cardBox = card.getBoundingClientRect();
      label.textContent = pin.dataset.label;
      label.hidden = false;
      // Keep the label inside the card, also for dots close to the edge.
      const half = label.offsetWidth / 2 + 6;
      const x = pinBox.left + pinBox.width / 2 - cardBox.left;
      label.style.left = `${Math.min(Math.max(x, half), cardBox.width - half)}px`;
      label.style.top = `${pinBox.top - cardBox.top}px`;
      card.querySelectorAll('.map__pin.is-active').forEach((other) => other.classList.remove('is-active'));
      pin.classList.add('is-active');
    };

    const hide = () => {
      label.hidden = true;
      pinned = null;
      card.querySelectorAll('.map__pin.is-active').forEach((pin) => pin.classList.remove('is-active'));
    };

    card.querySelectorAll('.map__pin').forEach((pin) => {
      pin.addEventListener('mouseenter', () => show(pin));
      pin.addEventListener('mouseleave', () => (pinned ? show(pinned) : hide()));
      pin.addEventListener('focus', () => show(pin));
      pin.addEventListener('blur', () => { if (!pinned) hide(); });
      pin.addEventListener('click', (event) => {
        event.stopPropagation();
        pinned = pin;
        show(pin);
      });
      pin.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          pinned = pin;
          show(pin);
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!card.contains(event.target) || !event.target.closest('.map__pin')) hide();
    });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') hide(); });
    window.addEventListener('resize', hide);
  });
}
