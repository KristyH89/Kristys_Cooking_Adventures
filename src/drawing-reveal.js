// Drawing-to-photo demo (Digital Adventures → Examples).
//
// On a computer the effect is pure CSS (:hover). On touch screens the CSS
// uses a scroll-driven animation; this script only does something in
// browsers that don't support that yet: it sets --reveal (0% → 100%) from
// the position of the portrait on the screen, so the drawing still wipes
// away while scrolling down and comes back when scrolling up.

export function setupDrawingReveal() {
  const frames = document.querySelectorAll('.reveal__frame');
  const touch = window.matchMedia('(hover: none)').matches;
  const supported = CSS.supports('animation-timeline: view()');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!frames.length || !touch || supported || reducedMotion) return;

  const update = () => {
    frames.forEach((frame) => {
      const box = frame.getBoundingClientRect();
      // Same range as the CSS: from 30% to 48% of the way through the screen.
      const travelled = (window.innerHeight - box.top) / (window.innerHeight + box.height);
      const progress = Math.min(1, Math.max(0, (travelled - 0.3) / 0.18));
      frame.style.setProperty('--reveal', `${(progress * 100).toFixed(1)}%`);
    });
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}
