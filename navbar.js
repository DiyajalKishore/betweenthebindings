// Central navbar: edit links here once and every page updates.
// Each page just needs <div id="site-nav"></div> and <script type="module" src="navbar.js"></script>.
// For article pages, add data-active="writing.html" on the div to highlight a parent link.
// On phones the links fold into a ☰ menu button.

const links = [
  { href: 'writing.html', label: 'writing' },
  { href: 'otherwriting.html', label: 'from the heart' },
  { href: 'keriscam.html', label: 'multimedia' },
  { href: 'socialmedia.html', label: 'social media' },
  { href: 'about.html', label: 'about' },
];

const instagramUrl = 'https://www.instagram.com/btwnthebindings_';
const substackUrl = 'https://substack.com/@betweenthebindings';

function renderNavbar() {
  const mount = document.getElementById('site-nav');
  if (!mount) return;

  const current = mount.dataset.active || location.pathname.split('/').pop() || 'index.html';

  const linkHtml = links
    .map((l) => `<a href="${l.href}"${l.href === current ? ' class="active" aria-current="page"' : ''}>${l.label}</a>`)
    .join('\n      ');

  mount.outerHTML = `
  <header class="navbar">
    <a href="index.html" class="brand">betweenthebindings</a>
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-links"><span></span><span></span><span></span></button>
    <nav class="nav-links" id="nav-links">
      ${linkHtml}
      <span class="nav-socials">
        <a href="${instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram">
          <svg class="instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="${substackUrl}" target="_blank" rel="noopener" aria-label="Substack">
          <img src="./images/substack-logo.svg" alt="" class="substack-icon">
        </a>
      </span>
    </nav>
  </header>`;

  const header = document.querySelector('.navbar');
  const toggle = header.querySelector('.nav-toggle');
  const setOpen = (open) => {
    header.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setOpen(!header.classList.contains('open')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

renderNavbar();
