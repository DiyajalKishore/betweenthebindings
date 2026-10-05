document.addEventListener('DOMContentLoaded', function () {
  const addButtons = document.querySelectorAll('.add-btn');
  addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      console.log('Product slot ' + (index + 1) + ' clicked');
    });
  });
});

function shareContent() {
  if (navigator.share) {
    navigator.share({
      title: 'Between the Bindings',
      text: 'Check out this video/article!',
      url: window.location.href
    }).catch(err => console.log('Share failed:', err));
  } else {
    alert('Sharing not supported on this browser');
  }
}




let index = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const total = slides.length;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 400}px)`;
}

function autoScroll() {
  index = (index + 1) % total;
  showSlide(index);
}

// change slide every 3 seconds
if (track) setInterval(autoScroll, 3000);

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
