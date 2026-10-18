# betweenthebindings

*i want auroras & sad prose*

A personal writing and multimedia site for **keri lae**: journalism, prose
and poetry, street-interview videos and photography, wrapped in a dreamy
aurora-and-stars design.

## What's on the site

- **Writing:** features, news, reviews and slice-of-life pieces, such as
  *The Death Of The Clean Girl*, *The baddest b\*tches ain't in LA* and a
  review of the new Spider-Man.
- **From the heart:** personal prose and poetry, such as *grief gathers and
  grows* and *buried between the bindings*.
- **keri's cam:** a retro camcorder-style video player for vox-pop clips
  (Witsies on their first block, Thunee, Women's Day, Melville's art mile
  and more). It shows a REC light and timecode, and turns to fit portrait or
  landscape clips.
- **Social media:** Instagram-style post cards with swipeable photo and
  video carousels.
- **Lookbook:** a carousel that keeps the centre look in focus and fades the
  ones beside it.
- **Little touches:** star sparkles that follow the cursor, sections that
  fade in as you scroll, and a share button that uses the device's own
  share menu.
- Links to [Instagram](https://www.instagram.com/btwnthebindings_) and
  [Substack](https://substack.com/@betweenthebindings) in the navbar.

## Built with

- Plain **HTML, CSS and JavaScript** (no framework)
- **[Vite](https://vite.dev/)** for the dev server and production build
- Google Fonts (*Averia Serif Libre*, *Bitter*, *Caveat*) and Font Awesome icons

## Running it locally

You'll need [Node.js](https://nodejs.org/) installed.

```bash
npm install      # first time only
npm run dev      # start the dev server, then open the link it prints
npm run build    # build the site into dist/
npm run preview  # preview the built site
```

`vite.config.js` picks up every `.html` file in the project folder, so a new
page is included in the build as soon as you create it.

## Project layout

```
├── index.html            homepage
├── writing.html          journal index (articles link from here)
├── otherwriting*.html    "from the heart" prose and poetry
├── keriscam.html         multimedia / camcorder page
├── socialmedia.html      social media page
├── about.html            about page
├── *.html                individual articles
├── style.css             all the site's styles
├── stories.js            list of every story (feeds, homepage, next links)
├── navbar.js             shared navbar (edit links here once)
├── camcorder.js          keri's cam player and clip list
├── lookbook.js           lookbook carousel and image list
├── posts.js              swipeable social media posts
├── sparkles.js           cursor star sparkles
├── script.js             share button and small helpers
├── templates/            story-template.html: copy this to start a new piece
└── public/
    ├── images/           photos, article images, lookbook PNGs (images/looks/)
    └── videos/           camcorder and social media clips
```

## Adding content

- **New story:** copy `templates/story-template.html` into the main folder,
  rename it and write the piece (the comment at the top explains each step).
  Then add one entry for it in `stories.js`. The writing / from the heart
  page, the homepage and the "next story" links all update by themselves.
- **New navbar link:** edit the `links` list at the top of `navbar.js`.
  Every page updates.
- **New camcorder clip:** put the `.mp4` in `public/videos/` and a thumbnail
  `.jpg` in `public/images/`, then add a line to the `clips` list in
  `camcorder.js` with a caption, date and `'portrait'` or `'landscape'`.
- **New lookbook look:** add a PNG (a transparent background works best) to
  `public/images/looks/` and list it in `lookbook.js`.

---

with love, keri lae ✦
