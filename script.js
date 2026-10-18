// Share button (footer of every page): uses the phone's share menu, or copies the link.
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'share-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

async function shareContent() {
  const data = { title: document.title, url: location.href };
  if (navigator.share) {
    try { await navigator.share(data); } catch { /* closed the share sheet */ }
    return;
  }
  try {
    await navigator.clipboard.writeText(location.href);
    toast('link copied ✦');
  } catch {
    prompt('copy this link:', location.href);
  }
}

document.querySelectorAll('.share-btn').forEach((btn) => {
  btn.setAttribute('aria-label', 'Share this page');
  btn.addEventListener('click', shareContent);
});


// Simple auto-sliding photo carousel (thunee.html)
document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const total = track ? track.children.length : 0;
  if (total < 2) return;
  let index = 0;
  setInterval(() => {
    index = (index + 1) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 3000);
});

function initArrowCarousel(root) {
  const images = JSON.parse(root.dataset.images || "[]");
  const track = root.querySelector('.ac-track');
  const counter = root.querySelector('.ac-counter');
  const dotsEl = root.querySelector('.ac-dots');
  const prevBtn = root.querySelector('.ac-prev');
  const nextBtn = root.querySelector('.ac-next');
  let index = 0;

  images.forEach((img) => {
    const slide = document.createElement('div');
    slide.className = 'ac-slide';
    slide.innerHTML = `<img src="${img.src}" alt="${img.caption || ''}"><div class="ac-caption">${img.caption || ''}</div>`;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'ac-dot';
    dot.setAttribute('aria-label', 'Go to image');
    dotsEl.appendChild(dot);
  });

  const dots = Array.from(dotsEl.children);

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
    counter.textContent = `${index + 1} / ${images.length}`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + images.length) % images.length;
    render();
  }

  nextBtn.addEventListener('click', () => goTo(index + 1));
  prevBtn.addEventListener('click', () => goTo(index - 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  render();
}

document.querySelectorAll('.ac-carousel').forEach(initArrowCarousel);

// Scroll reveal for homepage sections
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}


// Writing page category filter
const filterBar = document.getElementById('filters');
const feed = document.getElementById('feed');
if (filterBar && feed) {
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    const f = btn.dataset.f;
    filterBar.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === btn));
    feed.classList.toggle('filtered', f !== 'all');
    feed.querySelectorAll('.article-card').forEach((card) => {
      card.classList.toggle('gone', f !== 'all' && card.dataset.cat !== f);
      card.classList.add('in');
    });
  });
}

const autoVideos = document.querySelectorAll('video[data-autoplay]');
if (autoVideos.length && 'IntersectionObserver' in window) {
  const vo = new IntersectionObserver((entries) => {
    entries.forEach((e) => { e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause(); });
  }, { threshold: 0.4 });
  autoVideos.forEach((v) => vo.observe(v));
}
