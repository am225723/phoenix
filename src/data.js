export const brand = {
  name: 'Fixed Star Comics',
  logo: '/fsclogo.png',
  background: '/background.png',
  tagline: 'Mythic stories, symbolic tools, and transformative art.',
  subtagline: 'Explore tarot, comics, and collectible creations designed to awaken truth, rebirth, and personal power.'
};

export const navItems = [
  { path: '/', label: 'Home' },
  { path: '/shop', label: 'Shop' },
  { path: '/collections', label: 'Collections' },
  { path: '/universe', label: 'Universe' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export const products = [
  {
    id: 'phoenix-tarot-major-arcana',
    title: 'Phoenix Rebirth Tarot — Major Arcana Founders Collection',
    shortTitle: 'Phoenix Rebirth Tarot',
    category: 'Tarot',
    collection: 'Founders Collection',
    format: 'Digital Download',
    price: 33,
    badge: 'Featured',
    featured: true,
    description: 'A premium digital tarot collection for rebirth, transformation, and spiritual insight.',
    longDescription: 'A symbolic Major Arcana release designed as a mirror for awakening, renewal, and personal power. This digital collection anchors the first official Fixed Star Comics drop and opens the doorway into the Phoenix Rebirth universe.',
    includes: ['22 Major Arcana digital cards', 'High-resolution artwork', 'Founders Collection digital guide', 'Instant download after checkout']
  },
  {
    id: 'phoenix-rebirth-issue-001',
    title: 'Phoenix Rebirth: Issue 001',
    shortTitle: 'Phoenix Rebirth #001',
    category: 'Comics',
    collection: 'Founders Collection',
    format: 'Digital Comic',
    price: 9,
    badge: 'New',
    description: 'The opening chapter of a symbolic universe built from fire, shadow, awakening, and renewal.',
    longDescription: 'Begin the mythic story at the first spark. Phoenix Rebirth #001 introduces the world, symbols, and initiatory arc behind the Fixed Star Comics universe.',
    includes: ['Digital comic PDF', 'Mobile-friendly edition', 'Behind-the-symbol notes']
  },
  {
    id: 'founders-sigil-art-print',
    title: 'Founders Sigil Art Print',
    shortTitle: 'Founders Sigil Art Print',
    category: 'Collectible Art',
    collection: 'Founders Collection',
    format: 'Digital Print',
    price: 18,
    badge: 'Collector',
    description: 'A high-resolution symbolic art piece designed for collectors, altars, studios, and sacred spaces.',
    longDescription: 'A luminous Fixed Star sigil artwork for personal spaces, creative studios, ritual rooms, and collectors of symbolic art.',
    includes: ['High-resolution print file', 'Desktop wallpaper', 'Phone wallpaper']
  },
  {
    id: 'phoenix-founder-bundle',
    title: 'Phoenix Rebirth Founder Bundle',
    shortTitle: 'Founder Bundle',
    category: 'Collections',
    collection: 'Founders Collection',
    format: 'Digital Bundle',
    price: 55,
    badge: 'Best Value',
    description: 'Tarot, comic, and collectible artwork gathered into the first official Fixed Star Comics release.',
    longDescription: 'The complete opening release: tarot, comic, art, and symbolic companion materials for collectors entering the Phoenix Rebirth universe at the beginning.',
    includes: ['Major Arcana digital tarot', 'Phoenix Rebirth #001', 'Founders Sigil Art Print', 'Digital collector certificate']
  },
  {
    id: 'shadow-fire-journal-pages',
    title: 'Shadow & Fire Reflection Pages',
    shortTitle: 'Shadow & Fire Pages',
    category: 'Symbolic Tools',
    collection: 'Phoenix Rebirth Universe',
    format: 'Printable PDF',
    price: 12,
    badge: 'Printable',
    description: 'Guided reflection pages for transformation, truth-telling, release, and renewal.',
    longDescription: 'A printable companion tool for seekers working with archetypes, personal power, and the symbolic journey of becoming.',
    includes: ['Printable reflection workbook', 'Prompts for each phase', 'Digital PDF download']
  },
  {
    id: 'cosmic-threshold-wallpaper-pack',
    title: 'Cosmic Threshold Wallpaper Pack',
    shortTitle: 'Wallpaper Pack',
    category: 'Digital Collections',
    collection: 'Phoenix Rebirth Universe',
    format: 'Digital Pack',
    price: 7,
    badge: 'Digital',
    description: 'Atmospheric wallpapers inspired by fixed stars, phoenix fire, sacred geometry, and mythic thresholds.',
    longDescription: 'A visual atmosphere pack for phones, tablets, and desktops, created to carry the Fixed Star Comics mythos into everyday digital space.',
    includes: ['Desktop wallpapers', 'Phone wallpapers', 'Tablet wallpapers']
  }
];

export const collections = [
  {
    id: 'founders',
    title: 'Founders Collection',
    eyebrow: 'First official release',
    description: 'The first official release from the Phoenix Rebirth universe — tarot, comics, symbolic tools, and collectible digital art.'
  },
  {
    id: 'phoenix-rebirth',
    title: 'Phoenix Rebirth Universe',
    eyebrow: 'Mythos archive',
    description: 'A symbolic world of transformation, awakening, shadow, fire, and renewal told through comics, tarot, and collectible creations.'
  },
  {
    id: 'symbolic-tools',
    title: 'Symbolic Tools',
    eyebrow: 'Practice and reflection',
    description: 'Digital artifacts, guided pages, and visual tools designed to invite reflection, truth, and personal power.'
  }
];

export function money(value) {
  return `$${value}`;
}
