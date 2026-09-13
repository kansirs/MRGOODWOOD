// public/js/gallery.js
// Renders the full photo gallery on gallery.html from GALLERY_PHOTOS
// (public/js/gallery-data.js), then wires up the category filters and
// the lightbox. This runs separately from main.js because the grid here
// is built dynamically, after main.js's own filter/lightbox setup would
// already have found an empty grid and done nothing.

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('galleryGrid');
  if (!grid || typeof GALLERY_PHOTOS === 'undefined') return;

  // A handful of "wide"/"tall" cards keeps the grid from feeling too
  // uniform, matching the treatment used on the homepage preview.
  function shapeFor(index) {
    if (index % 7 === 3) return 'wide';
    if (index % 5 === 2) return 'tall';
    return '';
  }

  const frag = document.createDocumentFragment();
  GALLERY_PHOTOS.forEach((photo, index) => {
    const a = document.createElement('a');
    a.href = '#';
    const shape = shapeFor(index);
    a.className = 'gallery-item' + (shape ? ' ' + shape : '');
    a.setAttribute('data-reveal', '');
    a.dataset.category = photo.category;
    a.dataset.caption = photo.caption;

    const img = document.createElement('img');
    img.src = 'images/' + photo.file;
    img.alt = photo.alt || photo.caption;
    img.loading = 'lazy';

    a.appendChild(img);
    frag.appendChild(a);
  });
  grid.appendChild(frag);

  // ---- Reveal-on-scroll (same pattern as main.js, applied to the
  // freshly-created items since main.js ran before they existed) ----
  const revealTargets = grid.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // ---- Filters ----
  const filterButtons = document.querySelectorAll('#galleryFilters button');
  const galleryItems = grid.querySelectorAll('.gallery-item');
  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryItems.forEach((item) => {
          const match = filter === 'all' || item.dataset.category === filter;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // ---- Lightbox (mirrors main.js's behavior/class names) ----
  const lightbox = document.getElementById('lightbox');
  if (galleryItems.length && lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };
    galleryItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = item.dataset.caption || img.alt || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    lightbox.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
});
