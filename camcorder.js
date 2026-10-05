// Camcorder video player for keri's cam.
// 1) Put the .mp4 files in public/videos/ and thumbnails (.jpg) in public/images/.
// 2) Edit the list below: caption, date, and orientation ('portrait' for vertical clips, 'landscape' for wide ones).
//    The camcorder also checks each video once it loads and turns itself to match.
// Use <div id="keris-cam"></div> for the full version, or <div id="keris-cam" data-compact></div> for the homepage.

const clips = [
  { src: 'videos/keris-cam-01.mp4', poster: './images/1.jpg',  caption: 'first-year Witsies share theire expectations vs reality after theier first block', date: '08/04/26', orientation: 'landscape'},
  { src: 'videos/keris-cam-02.mp4', poster: './images/2.jpg', caption: 'Witsies describe the first block in one word', date: '08/04/26', orientation: 'portrait' },
  { src: 'videos/keris-cam-03.mp4', poster: './images/3.jpg', caption: 'What does queerness mean to you?', date: '05/05/26', orientation: 'landscape' },
  { src: 'videos/keris-cam-04.mp4', poster: './images/4.jpg',  caption: 'What does GALA mean to you?', date: '05/05/26', orientation: 'landscape' },
  { src: 'videos/keris-cam-05.mp4', poster: './images/5.jpg', caption: 'Mothers Day', date: '10/05/26', orientation: 'portrait' },
  { src: 'videos/keris-cam-06.mp4', poster: './images/6.jpg', caption: 'Melville reactivates its creative roots', date: '11/05/26', orientation: 'landscape' },
  { src: 'videos/keris-cam-07.mp4', poster: './images/7.jpg',  caption: 'Thunee is more than a game, its culture of connection', date: '13/05/26', orientation: 'landscape' },
  { src: 'videos/keris-cam-08.mp4', poster: './images/8.jpg', caption: 'Thunee in one word', date: '14/05/26', orientation: 'portrait' },
  { src: 'videos/keris-cam-09.mp4', poster: './images/9.jpg', caption: 'Womens Day: How do you take up space?', date: '09/08/26', orientation: 'portrait' },
  { src: 'videos/keris-cam-10.mp4', poster: './images/10.jpg', caption: 'Fave Spider-Man & Peter Parker?', date: '11/08/26', orientation: 'portrait' },
  { src: 'videos/keris-cam-11.mp4', poster: './images/11.jpg', caption: 'The death of the clean girl', date: '07/09/26', orientation: 'landscape' },

];

const pad = (n) => String(n).padStart(2, '0');
const fmt = (t) => `${pad(Math.floor(t / 3600))}:${pad(Math.floor((t % 3600) / 60))}:${pad(Math.floor(t % 60))}`;

function mountCamcorder() {
  const mount = document.getElementById('keris-cam');
  if (!mount) return;
  const compact = mount.hasAttribute('data-compact');
  const n = clips.length;

  mount.innerHTML = `
  <div class="cam${compact ? ' compact' : ''}" data-orient="landscape">
    <div class="cam-rig">
      <div class="cam-viewfinder"></div>
      <div class="cam-body">
        <div class="cam-screen">
          <video playsinline preload="metadata"></video>
          <div class="cam-hud top"><span><i class="rec"></i>REC</span><span class="cam-tc">00:00:00</span></div>
          <button class="cam-play" aria-label="Play or pause clip"><i class="fa-solid fa-play"></i></button>
          <div class="cam-hud bottom"><span class="cam-lbl"></span><span>▮▮▮</span></div>
          <div class="cam-err">this clip is still being loaded onto the tape</div>
        </div>
        <div class="cam-side">
          <div class="cam-lens"><i></i></div>
          <div class="cam-ctrl">
            <button class="cam-prev" aria-label="Previous clip">‹</button>
            <span class="cam-num"></span>
            <button class="cam-next" aria-label="Next clip">›</button>
          </div>
        </div>
        <div class="cam-brand">keri's cam</div>
      </div>
    </div>
    <div class="cam-info"><p class="cam-cap"></p><span class="cam-date"></span></div>
    <div class="cam-tapes">${clips.map((c, i) => `<button aria-label="Clip ${i + 1}"><img src="${c.poster}" alt="" loading="lazy" onerror="this.style.display='none'"><b>${pad(i + 1)}</b></button>`).join('')}</div>
  </div>`;

  const cam = mount.querySelector('.cam');
  const video = mount.querySelector('video');
  const err = mount.querySelector('.cam-err');
  const tc = mount.querySelector('.cam-tc');
  const icon = mount.querySelector('.cam-play i');
  const tapes = [...mount.querySelectorAll('.cam-tapes button')];
  let cur = 0;
  let tried = false;

  function setOrient(o) {
    if (cam.dataset.orient === o) return;
    cam.dataset.orient = o;
    const rig = mount.querySelector('.cam-rig');
    rig.classList.remove('turn');
    void rig.offsetWidth; // restart the "camera turns" animation
    rig.classList.add('turn');
  }

  function select(i) {
    cur = (i + n) % n;
    const c = clips[cur];
    video.pause();
    tried = false;
    err.classList.remove('show');
    video.poster = c.poster;
    video.src = c.src;
    setOrient(c.orientation || 'landscape');
    tc.textContent = fmt(0);
    mount.querySelector('.cam-lbl').textContent = `clip ${pad(cur + 1)} / ${pad(n)}`;
    mount.querySelector('.cam-num').textContent = `${pad(cur + 1)} / ${pad(n)}`;
    mount.querySelector('.cam-cap').textContent = c.caption;
    mount.querySelector('.cam-date').textContent = c.date;
    tapes.forEach((t, k) => t.classList.toggle('active', k === cur));
    if (compact) tapes[cur].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }

  function toggle() {
    if (video.paused) {
      tried = true;
      video.play().catch(() => err.classList.add('show'));
    } else {
      video.pause();
    }
  }

  mount.querySelector('.cam-play').addEventListener('click', toggle);
  mount.querySelector('.cam-screen').addEventListener('click', (e) => { if (!e.target.closest('.cam-play')) toggle(); });
  mount.querySelector('.cam-prev').addEventListener('click', () => select(cur - 1));
  mount.querySelector('.cam-next').addEventListener('click', () => select(cur + 1));
  tapes.forEach((t, k) => t.addEventListener('click', () => select(k)));

  video.addEventListener('loadedmetadata', () => {
    if (video.videoWidth && video.videoHeight) setOrient(video.videoWidth >= video.videoHeight ? 'landscape' : 'portrait');
  });
  video.addEventListener('play', () => { cam.classList.add('on'); icon.className = 'fa-solid fa-pause'; });
  video.addEventListener('pause', () => { cam.classList.remove('on'); icon.className = 'fa-solid fa-play'; });
  video.addEventListener('ended', () => { cam.classList.remove('on'); icon.className = 'fa-solid fa-play'; });
  video.addEventListener('timeupdate', () => { tc.textContent = fmt(video.currentTime); });
  video.addEventListener('error', () => { if (tried) err.classList.add('show'); });

  select(0);
}

mountCamcorder();
