// Multi-slide posts: swipe or scroll sideways, with arrows, dots and a counter.
// (Videos playing only while on screen is handled in script.js.)

document.querySelectorAll('.post-multi').forEach((post) => {
  const track = post.querySelector('.post-track');
  const count = post.querySelector('.post-count');
  const prev = post.querySelector('.post-arrow.prev');
  const next = post.querySelector('.post-arrow.next');
  const dotsWrap = post.querySelector('.post-dots');
  const n = track.children.length;
  dotsWrap.innerHTML = '<i></i>'.repeat(n);
  const dots = dotsWrap.querySelectorAll('i');

  const update = () => {
    const i = Math.round(track.scrollLeft / track.clientWidth);
    dots.forEach((d, k) => d.classList.toggle('on', k === i));
    count.textContent = `${i + 1}/${n}`;
    prev.disabled = i === 0;
    next.disabled = i === n - 1;
  };

  prev.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: track.clientWidth, behavior: 'smooth' }));
  track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  update();
});
