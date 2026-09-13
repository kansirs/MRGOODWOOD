// public/js/gallery-data.js
//
// Full photo gallery for Mr. Goodwood (585).
//
// HOW TO ADD MORE PHOTOS:
//   1. Drop the new image file into public/images/ (any filename works,
//      but keep it descriptive and web-friendly, e.g. "kitchen-new-island.jpg").
//   2. Add one entry below with that same filename plus a caption, alt text,
//      and a category. That's it — the gallery page picks it up automatically,
//      no other file needs to change.
//
// CATEGORY OPTIONS (must match one of the filter buttons in gallery.html):
//   "kitchen"   -> Kitchens
//   "builtin"   -> Built-Ins, Closets & Storage
//   "vanity"    -> Vanities
//   "signature" -> Signature / Live-Edge & Epoxy Pieces
//
// Order here is the order photos appear on the page (newest/best first is
// a good rule of thumb).

const GALLERY_PHOTOS = [
  {
    file: "kitchen-wine-bar.jpg",
    caption: "White kitchen cabinetry with built-in wine fridge",
    alt: "White kitchen cabinetry with a built-in wine fridge and wood shelves",
    category: "kitchen",
  },
  {
    file: "kitchen-dark-luxury-herringbone.jpg",
    caption: "Dark luxury kitchen with herringbone tile backsplash",
    alt: "Dark custom kitchen cabinetry with herringbone tile backsplash",
    category: "kitchen",
  },
  {
    file: "feature-vaulted-beam-ceiling.jpg",
    caption: "Vaulted ceiling with exposed wood beams",
    alt: "Vaulted living room ceiling with exposed custom wood beams",
    category: "signature",
  },
  {
    file: "builtin-hallway-cabinetry.jpg",
    caption: "Hallway built-in cabinetry with wood countertop",
    alt: "White built-in hallway cabinetry with a wood countertop",
    category: "builtin",
  },
  {
    file: "feature-slat-wall-media-console.jpg",
    caption: "Wood slat accent wall with floating media console",
    alt: "Wood slat accent wall with a floating wood media console",
    category: "signature",
  },
  {
    file: "builtin-mudroom-lockers.jpg",
    caption: "Mudroom lockers and bench built-in",
    alt: "Mudroom built-in with lockers, bench, and coat hooks",
    category: "builtin",
  },
  {
    file: "builtin-media-wall-shiplap.jpg",
    caption: "Media wall built-in with shiplap detail",
    alt: "Media wall built-in with shiplap and floating shelves",
    category: "builtin",
  },
  {
    file: "feature-floating-cabinet-slat-wall.jpg",
    caption: "Floating cabinetry with slat wall accent",
    alt: "Floating wood cabinetry mounted on a slat wall accent",
    category: "signature",
  },
  {
    file: "vanity-dark-double-sink.jpg",
    caption: "Dark bathroom vanity, double sink",
    alt: "Dark wood double-sink bathroom vanity",
    category: "vanity",
  },
  {
    file: "builtin-murphy-bed-bench.jpg",
    caption: "Murphy bed with built-in bench and shelving",
    alt: "Built-in Murphy bed with flanking shelving and bench",
    category: "builtin",
  },
  {
    file: "vanity-dark-checkerboard-tile.jpg",
    caption: "Dark vanity with checkerboard tile floor",
    alt: "Dark wood bathroom vanity with checkerboard tile floor",
    category: "vanity",
  },
  {
    file: "closet-builtin-white-wardrobe.jpg",
    caption: "Built-in white wardrobe and closet system",
    alt: "Built-in white wardrobe and closet system in a bedroom",
    category: "builtin",
  },
  {
    file: "vanity-dark-patterned-tile-luxury.jpg",
    caption: "Luxury double vanity with patterned tile",
    alt: "Dark double-sink vanity with patterned tile floor",
    category: "vanity",
  },
  {
    file: "specialty-river-table-blue-epoxy.jpg",
    caption: "Live-edge river table with blue epoxy inlay",
    alt: "Live-edge wood river table with blue epoxy inlay",
    category: "signature",
  },
  {
    file: "specialty-live-edge-epoxy-detail.jpg",
    caption: "Live-edge slab with epoxy detail",
    alt: "Close-up of a live-edge wood slab with epoxy detail",
    category: "signature",
  },
  {
    file: "builtin-bookshelf-bench-nook.jpg",
    caption: "Built-in bookshelf and window bench nook",
    alt: "Built-in bookshelf and bench nook by a window",
    category: "builtin",
  },
  {
    file: "detail-inlay-bowtie-craftsmanship.jpg",
    caption: "Hand-cut bowtie inlay craftsmanship detail",
    alt: "Close-up of a hand-cut wood bowtie inlay joint",
    category: "signature",
  },
];
