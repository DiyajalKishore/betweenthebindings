// Every story on the site, in one list. Add a new piece here and it shows up on:
//   • writing.html or otherwriting.html (by `section`)
//   • the homepage (newest writing up top, next three in "from the journal",
//     and the hand-picked `homeHeart` pieces in "from the heart")
//   • the "next story ›" link at the bottom of the story pages
//
// Order doesn't matter: everything is sorted newest first by `date` (YYYY-MM-DD).
// `section`: 'writing' or 'heart'.  `tag`: feature, slice, review, news (writing) or poetry, prose (heart).
// `image` lives in public/images/.

// The "from the heart" pieces shown on the homepage, in this order (use the `page` names).
export const homeHeart = ['heartburiedbackyard.html', 'greatlesbiandebate.html', 'dearjohn.html'];

export const stories = [
  // ---------- writing ----------
  {
    page: 'cleangirl.html', section: 'writing', tag: 'feature', date: '2026-09-07', read: 2,
    title: 'The Death Of The Clean Girl',
    excerpt: 'The clean girl aesthetic whispers, but creative makeup is yelling: “I’m back, bitches!”',
    image: 'cleangirl.jpg', alt: 'death of the clean girl img',
  },
  {
    page: 'ai.html', section: 'writing', tag: 'news', date: '2026-08-11', read: 2,
    title: 'Wits student wins Gauteng Falling Walls Lab, Heads to Berlin with AI Innovation',
    excerpt: 'Young researchers gather at Wits to present solutions to rising global issues.',
    image: 'ai.jpg', alt: 'AI Innovation img',
  },
  {
    page: 'baddest.html', section: 'writing', tag: 'slice', date: '2026-08-10', read: 2,
    title: 'The baddest b*tches ain’t in LA',
    excerpt: 'Music has transcended borders and languages: why haven’t the Grammys?',
    image: 'baddest.jpg', alt: 'baddest img',
  },
  {
    page: 'spiderman.html', section: 'writing', tag: 'review', date: '2026-08-10', read: 2,
    title: 'Our favourite friendly neighbourhood Spider-Man is back!',
    excerpt: 'After five years of waiting, Spider-Man swings back onto our screens, and straight into his identity crisis.',
    image: 'spiderman.jpg', alt: 'spiderman img',
  },
  {
    page: 'womancandoanything.html', section: 'writing', tag: 'slice', date: '2026-08-05', read: 2,
    title: 'Women can do anything men can do, but maybe we shouldn’t',
    excerpt: 'There is something distinctly inherited about misogyny.',
    image: 'pat.jpg', alt: 'pat img',
  },
  {
    page: 'art.html', section: 'writing', tag: 'slice', date: '2026-05-18', read: 2,
    title: 'Who gets to dictate what art should be?',
    excerpt: 'Everyone has a different opinion on what art is, but who decides which art is acceptable?',
    image: 'arttitle.jpg', alt: 'art img',
  },
  {
    page: 'melvilleartmile.html', section: 'writing', tag: 'feature', date: '2026-05-15', read: 3,
    title: 'Melville Art Mile – where art belongs to everyone',
    excerpt: 'The Melville Art Mile reactivates the creative heritage of the suburb.',
    image: 'mam1.jpg', alt: 'mam img',
  },
  {
    page: 'thunee.html', section: 'writing', tag: 'feature', date: '2026-05-13', read: 2,
    title: 'Thunee is more than just a game, it’s culture of connection',
    excerpt: 'As the cold begins to settle and the due dates creep closer, the Wits Hindu Students Society creates a home away from home by hosting a Thunee tournament on campus.',
    image: 'thunee.jpg', alt: 'thunee img',
  },
  {
    page: 'creatingcommunity.html', section: 'writing', tag: 'feature', date: '2026-05-06', read: 2,
    title: 'creating community — how queer spaces save lives',
    excerpt: 'GALA Queer Archive creates welcoming communities for queer youth, a third space for them to exist as themselves, unashamedly, creating a semblance of home.',
    image: 'comm.jpeg', alt: 'creating community img',
  },

  // ---------- from the heart ----------
  {
    page: 'withering.html', section: 'heart', tag: 'poetry', date: '2026-07-30', read: 1,
    title: 'withering, waiting, wishing',
    excerpt: 'darling, is it too late for you and i?',
    image: 'withering.jpg', alt: 'two figures holding each other, painted in blues',
  },
  {
    page: 'heartburiedbackyard.html', section: 'heart', tag: 'poetry', date: '2026-08-12', read: 1,
    title: 'my heart is buried in your backyard',
    excerpt: 'pushing it down and praying that one day she is unearthed once more, no longer in your possession, but held firmly, warmly, wholly in my own hands.',
    image: 'backyard.jpg', alt: 'a figure pulling open their ribcage to show a heart',
  },
  {
    page: 'mycursescrumble.html', section: 'heart', tag: 'poetry', date: '2026-07-14', read: 1,
    title: 'my curses crumble between cries',
    excerpt: 'i’ll ruin it all over, like i always do.',
    image: 'curses.jpg', alt: 'a girl sitting alone hugging her knees',
  },
  {
    page: 'dearjohn.html', section: 'heart', tag: 'prose', date: '2026-06-18', read: 3,
    title: 'dear john, i see it all now that it’s gone',
    excerpt: 'there are moments that i wish i hated you. but there are memories that remind me why i am grateful that i do not.',
    image: 'dearjohn.jpg', alt: 'two heads touching, their brains swirling together',
  },
  {
    page: 'greatlesbiandebate.html', section: 'heart', tag: 'prose', date: '2026-06-01', read: 1,
    title: 'the great lesbian debate',
    excerpt: 'to dyke or not to dyke? #fagitout',
    image: 'lesbiandebate.jpg', alt: 'two women embracing by a waterfall',
  },
  {
    page: 'otherwriting1.html', section: 'heart', tag: 'poetry', date: '2026-08-31', read: 1,
    title: 'tossing pennies',
    excerpt: 'we used to kiss all night but now there’s just no fuse',
    image: 'pennies.jpg', alt: 'tossing pennies img',
  },
  {
    page: 'griefgathersandgrows.html', section: 'heart', tag: 'poetry', date: '2026-04-20', read: 1,
    title: 'grief gathers and grows',
    excerpt: 'do you think i have forgotten?',
    image: 'grief.jpg', alt: 'grief gathers and grows img',
  },
  {
    page: 'buriedbetweenthebindings.html', section: 'heart', tag: 'poetry', date: '2026-03-03', read: 2,
    title: 'buried between the bindings',
    excerpt: 'when is my heart full and no longer starving?',
    image: 'melodrama.jpg.webp', alt: 'Melodrama by Lorde',
  },
];


// ---------------- rendering (no need to edit below) ----------------

const newestFirst = (list) => [...list].sort((a, b) => b.date.localeCompare(a.date));
const inSection = (section) => newestFirst(stories.filter((s) => s.section === section));
// No `image`? It gets the aurora cover (public/images/aurora.svg).
const img = (s) => `<img loading="lazy" decoding="async" src="./images/${s.image || 'aurora.svg'}" alt="${s.alt || s.title}" />`;
const shortDate = (iso) => { const [y, m, d] = iso.split('-'); return `${d}/${m}/${y.slice(2)}`; };

const articleCard = (s) => `
    <article class="article-card reveal" data-cat="${s.tag}">
      <div class="article-image-wrapper"><span class="tag">${s.tag}</span>${img(s)}</div>
      <div class="article-content">
        <span class="article-date">${shortDate(s.date)}<span class="dot">•</span>${s.read} min read</span>
        <h2 class="article-title">${s.title}</h2>
        <p class="article-excerpt">${s.excerpt}</p>
        <a href="${s.page}" class="read-more-link">read →</a>
      </div>
    </article>`;

// writing.html / otherwriting.html: <main class="articles-feed" data-stories="writing|heart">
document.querySelectorAll('[data-stories]').forEach((feed) => {
  feed.innerHTML = inSection(feed.dataset.stories).map(articleCard).join('');
});

// Homepage
const latest = document.querySelector('[data-latest-writing]');
if (latest) {
  const [top, ...rest] = inSection('writing');
  latest.innerHTML = `
      <a href="${top.page}" class="cover"><span class="tape"></span>${img(top)}</a>
      <div class="writing-details">
        <span class="tag">${top.tag}</span>
        <h3 class="writing-heading">${top.title}</h3>
        <p class="writing-subtext">${top.excerpt}</p>
        <a href="${top.page}" class="pill-btn primary-btn">Read story</a>
      </div>`;
  const journal = document.querySelector('[data-journal]');
  if (journal) {
    journal.innerHTML = rest.slice(0, 3)
      .map((s, i) => `<a href="${s.page}" class="card${i === 0 ? ' big' : ''}">${img(s)}<span class="tag">${s.tag}</span><p>${s.title}</p></a>`)
      .join('');
  }
}
const scrap = document.querySelector('[data-heart-preview]');
if (scrap) {
  scrap.innerHTML = homeHeart.map((page) => stories.find((s) => s.page === page)).filter(Boolean)
    .map((s) => `<a href="${s.page}" class="paper">${img(s)}<span>${s.title}</span></a>`)
    .join('');
}

// Story pages: fill in "next story ›" (the next older piece in the same section, wrapping round)
const here = location.pathname.split('/').pop();
const current = stories.find((s) => s.page === here);
const nextNav = document.querySelector('.next-article-nav');
if (current && nextNav) {
  const list = inSection(current.section);
  if (list.length > 1) {
    const next = list[(list.indexOf(current) + 1) % list.length];
    nextNav.innerHTML = `<a href="${next.page}" class="next-article-link"><span class="next-title">${next.title}</span><span class="arrow">›</span></a>`;
  } else {
    nextNav.remove();
  }
}
