// Each project gets a card on the home page and, once it has images, its own page at /portfolio/<slug>.
// To add one, drop its images in src/img/<slug>/, import them here, and add an entry:
//
// import coverImg from '../img/my-project/cover.jpg';
// import detail1 from '../img/my-project/1.jpg';
//
// {
//   slug: 'my-project',
//   title: 'My Project',
//   medium: 'Blender',
//   note: 'one short line',
//   cover: coverImg,
//   images: [detail1],
//   link: { href: 'https://example.com', label: 'see it live' },
//   model: '/models/my-project.glb', // optional: a baked .glb shown as an interactive 3D view
//   feature: 'journal',               // optional: show an interactive piece instead of a gallery
// },
//
// More ideas we plan to build are in docs/project-ideas.md.
// The food journal (components/foodJournal.jsx, data/journal.js) is built but not listed yet;
// add an entry with feature: 'journal' to show it.

import roomImg from '../img/mini-apartment/room.webp';
import deskImg from '../img/mini-apartment/desk.webp';
import cornerImg from '../img/mini-apartment/corner.webp';
import miseImg from '../img/mise/cover.webp';
import miseTimelineImg from '../img/mise/timeline.webp';
import miseTableImg from '../img/mise/table.webp';
import dimeImg from '../img/dime/cover.webp';
import dimeDecideImg from '../img/dime/decide.webp';
import dimeEndImg from '../img/dime/end.webp';

const projects = [
  {
    slug: 'mini-apartment',
    title: 'Mini Apartment',
    medium: 'Blender',
    note: 'A cozy little room I modeled in Blender.',
    cover: roomImg,
    images: [deskImg, cornerImg],
    model: '/models/apartment.glb',
  },
  {
    slug: 'mise',
    title: 'mise',
    medium: 'React, IndexedDB, three.js',
    note: 'A dinner party planner for menus, shopping lists and cooking timelines.',
    cover: miseImg,
    images: [miseTimelineImg, miseTableImg],
    link: { href: 'https://github.com/ElleLouie/mise', label: 'View the code' },
  },
  {
    slug: 'dime',
    title: 'Dime',
    medium: 'three.js, Python, NBA tracking data',
    note: 'A basketball game made from real Warriors plays. Find the open pass.',
    cover: dimeImg,
    images: [dimeDecideImg, dimeEndImg],
    link: { href: 'https://github.com/ElleLouie/dime', label: 'View the code' },
  },
];

export default projects;
