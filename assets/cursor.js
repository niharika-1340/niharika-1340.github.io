// Custom cursor: a purple ring that follows the pointer, and morphs into
// a pill that fully covers whatever link it's hovering, using
// mix-blend-mode: difference so the link text inverts and stays legible.

(function () {
  var isCoarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isCoarse || reduceMotion) return;

  var ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);

  var mouseX = 0, mouseY = 0;
  var ringX = 0, ringY = 0;
  var hovered = null;

  window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function setRingToPoint(x, y) {
    ring.style.width = '22px';
    ring.style.height = '22px';
    ring.style.borderRadius = '50%';
    ring.style.left = x + 'px';
    ring.style.top = y + 'px';
  }

  function setRingToRect(rect) {
    var padX = 10, padY = 6;
    ring.style.width = rect.width + padX * 2 + 'px';
    ring.style.height = rect.height + padY * 2 + 'px';
    ring.style.left = rect.left + rect.width / 2 + 'px';
    ring.style.top = rect.top + rect.height / 2 + 'px';
  }

  function frame() {
    if (hovered) {
      // lock to the hovered element while it's still under the pointer
      setRingToRect(hovered.getBoundingClientRect());
    } else {
      ringX += (mouseX - ringX) * 0.35;
      ringY += (mouseY - ringY) * 0.35;
      setRingToPoint(ringX, ringY);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  var links = document.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      hovered = link;
      ring.classList.add('pill');
      link.classList.add('cursor-target');
    });
    link.addEventListener('mouseleave', function () {
      hovered = null;
      ring.classList.remove('pill');
      link.classList.remove('cursor-target');
    });
  });
})();
