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
// },
//
// Leave out `cover` to show the card as "coming soon".
// More ideas we plan to build are in docs/project-ideas.md.

// Empty for now: the site shows "coming soon" until a project is added.
// First up is the Blender mini apartment (see docs/project-ideas.md).
const projects = [];

export default projects;
