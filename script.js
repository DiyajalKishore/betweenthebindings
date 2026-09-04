document.addEventListener('DOMContentLoaded', function () {
  const addButtons = document.querySelectorAll('.add-btn');
  addButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      console.log('Product slot ' + (index + 1) + ' clicked');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('doodleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const penBtn = document.getElementById('penBtn');
  const starBtn = document.getElementById('starBtn');
  const heartBtn = document.getElementById('heartBtn');
  const clearBtn = document.getElementById('clearBtn');

  let mode = 'pen'; 
  let isDrawing = false;

  // Set internal resolution matching display size
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  
  // Initial size setup
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Button Mode Toggles
  penBtn.addEventListener('click', () => {
    mode = 'pen';
    [penBtn, starBtn, heartBtn].forEach(b => b.classList.remove('active'));
    penBtn.classList.add('active');
  });

  starBtn.addEventListener('click', () => {
    mode = 'star';
    [penBtn, starBtn, heartBtn].forEach(b => b.classList.remove('active'));
    starBtn.classList.add('active');
  });

  heartBtn.addEventListener('click', () => {
    mode = 'heart';
    [penBtn, starBtn, heartBtn].forEach(b => b.classList.remove('active'));
    heartBtn.classList.add('active');
  });

  clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Calculate accurate mouse position inside canvas
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function startDrawing(e) {
    isDrawing = true;
    const pos = getPos(e);

    if (mode === 'pen') {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      // Draw immediate dot on click
      ctx.fillStyle = '#ffffff';
      ctx.arc(pos.x, pos.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    } else {
      drawStamp(pos.x, pos.y);
    }
  }

  function draw(e) {
    if (!isDrawing) return;
    if (e.type === 'touchmove') e.preventDefault(); // Prevent scrolling while doodling

    const pos = getPos(e);

    if (mode === 'pen') {
      ctx.lineTo(pos.x, pos.y);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.shadowBlur = 6;
      ctx.stroke();
    }
  }

  function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
  }

  function drawStamp(x, y) {
    ctx.font = '24px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
    ctx.shadowBlur = 8;

    if (mode === 'star') ctx.fillText('✦', x, y);
    if (mode === 'heart') ctx.fillText('♥', x, y);
  }

  // Mouse Listeners
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);

  // Touch Listeners (Mobile / Tablet)
  canvas.addEventListener('touchstart', startDrawing, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', stopDrawing);
});

document.addEventListener('DOMContentLoaded', () => {
  const petChar = document.getElementById('petChar');
  const petFace = petChar?.querySelector('.pet-face');
  const petAcc = document.getElementById('petAcc');
  const petBubble = document.getElementById('petBubble');
  const petParticles = document.getElementById('petParticles');

  const feedBtn = document.getElementById('feedPetBtn');
  const styleBtn = document.getElementById('stylePetBtn');
  const patBtn = document.getElementById('patPetBtn');

  if (!petChar || !feedBtn) return;

  let hasShades = false;

  // Trigger floating particle effect
  function spawnParticle(symbol, xPercent) {
    const p = document.createElement('span');
    p.className = 'pet-particle';
    p.textContent = symbol;
    p.style.left = `${xPercent}%`;
    p.style.bottom = '20px';
    petParticles.appendChild(p);

    setTimeout(() => p.remove(), 800);
  }

  // 1. Feed Action
  feedBtn.addEventListener('click', () => {
    petFace.textContent = '( ˆ o ˆ )';
    petBubble.textContent = '✦ yum! ';
    petChar.classList.add('bounce');
    
    spawnParticle('✨', 30);
    spawnParticle('✦', 70);

    setTimeout(() => {
      petFace.textContent = '( • ‿ • )';
      petChar.classList.remove('bounce');
      petBubble.textContent = '✦ i want to destroy the earth';
    }, 1200);
  });

  // 2. Style/Fit Action
  styleBtn.addEventListener('click', () => {
    hasShades = !hasShades;
    if (hasShades) {
      petAcc.textContent = '🧢';
      petFace.textContent = '(  • ‿ • )';
      petBubble.textContent = '✦ fit check';
    } else {
      petAcc.textContent = '';
      petBubble.textContent = '✦ back to casual';
    }
  });

  // 3. Pat Action
  patBtn.addEventListener('click', () => {
    petFace.textContent = '( ✦ ‿ ✦ )';
    petBubble.textContent = '✦ happy pet!';
    petChar.classList.add('bounce');

    spawnParticle('♥', 45);

    setTimeout(() => {
      petFace.textContent = '( • ‿ • )';
      petChar.classList.remove('bounce');
    }, 1000);
  });
});