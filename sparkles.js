document.addEventListener('DOMContentLoaded', () => {
  const stars = ['★', '✦', '✧', '⋆'];
  const colors = ['#ffffff', '#e0e8f0', 'rgba(255, 255, 255, 0.85)'];
  let last = 0, active = 0;

  document.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - last < 70 || active >= 10) return;
    last = now;
    active++;

    const sparkle = document.createElement('span');
    sparkle.className = 'star-sparkle';
    sparkle.textContent = stars[Math.floor(Math.random() * stars.length)];
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.fontSize = `${Math.random() * 8 + 10}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => { sparkle.remove(); active--; }, 700);
  });
});
