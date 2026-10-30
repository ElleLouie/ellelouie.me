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
// },
//
// More ideas we plan to build are in docs/project-ideas.md.

import roomImg from '../img/mini-apartment/room.webp';
import deskImg from '../img/mini-apartment/desk.webp';
import cornerImg from '../img/mini-apartment/corner.webp';

const projects = [
  {
    slug: 'mini-apartment',
    title: 'Mini Apartment',
    medium: 'Blender',
    note: 'A tiny room of things I love, modeled, lit and baked in Blender.',
    cover: roomImg,
    images: [deskImg, cornerImg],
    model: '/models/apartment.glb',
  },
];

export default projects;
