// Lookbook carousel: centre figure in focus, neighbours faded at the sides.
// Put your PNGs (transparent background works best) in public/images/looks/
// and list them below. Add or remove lines freely.

const looks = [
  { src: './images/looks/look1.png', alt: 'look 1' },
  { src: './images/looks/look2.png', alt: 'look 2' },
  { src: './images/looks/look3.png', alt: 'look 3' },
  { src: './images/looks/look4.png', alt: 'look 4' },
  { src: './images/looks/look5.png', alt: 'look 5' },
  { src: './images/looks/look6.png', alt: 'look 6' },
  { src: './images/looks/look7.png', alt: 'look 7' },
  { src: './images/looks/look8.png', alt: 'look 8' },
  { src: './images/looks/look9.png', alt: 'look 9' },
];

function mountLookbook() {
  const mount = document.getElementById('lookbook');
  if (!mount) return;

  if (!looks.length) {
    mount.innerHTML = '<div class="look"><p class="look-empty">your images are on their way ✦</p></div>';
    return;
  }

  mount.innerHTML = `
  <div class="look" tabindex="0" aria-roledescription="carousel" aria-label="Lookbook">
    <div class="look-stage">
      ${looks.map((l, i) => `<figure class="look-item" data-i="${i}"><img src="${l.src}" alt="${l.alt || ''}" loading="lazy" decoding="async" draggable="false"></figure>`).join('')}
    </div>
    <button class="look-btn prev" aria-label="Previous look">←</button>
    <button class="look-btn next" aria-label="Next look">→</button>
    <div class="look-dots">${looks.map((_, i) => `<button aria-label="Look ${i + 1}"></button>`).join('')}</div>
  </div>`;

  const root = mount.querySelector('.look');
  const items = [...root.querySelectorAll('.look-item')];
  const dots = [...root.querySelectorAll('.look-dots button')];
  const n = looks.length;
  let cur = 0;

  function render() {
    items.forEach((el, i) => {
      let o = (((i - cur) % n) + n) % n;
      if (o > n / 2) o -= n;
      const a = Math.abs(o);
      el.style.setProperty('--o', o);
      el.style.setProperty('--s', a === 0 ? 1 : 0.78);
      el.style.opacity = a === 0 ? 1 : a === 1 ? 0.35 : 0;
      el.style.zIndex = 3 - a;
      el.classList.toggle('side', a === 1);
      el.style.pointerEvents = a === 1 ? 'auto' : 'none';
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  const go = (i) => { cur = (i + n) % n; render(); };
  root.querySelector('.prev').addEventListener('click', () => go(cur - 1));
  root.querySelector('.next').addEventListener('click', () => go(cur + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
  items.forEach((el, i) => el.addEventListener('click', () => go(i)));
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(cur - 1);
    if (e.key === 'ArrowRight') go(cur + 1);
  });

  let startX = null;
  root.addEventListener('pointerdown', (e) => { startX = e.clientX; });
  root.addEventListener('pointerup', (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
    startX = null;
  });

  render();
}

mountLookbook();
