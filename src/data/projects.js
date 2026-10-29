// Each project gets a card on /portfolio and its own page at /portfolio/<slug>.
// To add one, drop its images in src/img/<slug>/, import them here, and add an entry:
//
// import coverImg from '../img/my-project/cover.png';
// import detail1 from '../img/my-project/1.png';
//
// {
//   slug: 'my-project',
//   title: 'My Project',
//   context: 'Personal project, 2026',
//   tools: ['figma', 'react'],
//   cover: coverImg,   // optional: a generated cover is shown without one
//   images: [detail1], // optional
//   description: [
//     'First paragraph about the project.',
//     'Second paragraph.',
//   ],
//   link: { href: 'https://example.com', label: 'see it live' },
// },

const projects = [
  {
    slug: '3d-product-renderings',
    title: 'Interactive 3D Product Renderings',
    context: 'Treering, 2024 – Present',
    tools: ['Three.js', '3D'],
    description: [
      'Built interactive 3D product renderings using Three.js, enabling real-time customization and preview of physical products.',
    ],
  },
  {
    slug: 'ai-book-builder',
    title: 'AI Book Builder',
    context: 'Treering, 2024 – Present',
    tools: ['AWS Lambda', 'SQS', 'OpenSearch'],
    description: [
      'Contributed core features to AIBB (AI Book Builder), which auto-generates photo book pages using layout and content detection.',
      'Integrated with AWS Lambda, SQS and OpenSearch to power smart cropping and layout suggestions.',
    ],
  },
  {
    slug: 'marketplace',
    title: 'Marketplace Product Launch',
    context: 'Treering, 2024 – Present',
    tools: ['Ecommerce', 'Agile'],
    description: [
      'Primary engineer on multiple Marketplace initiatives, including the launch of a new ecommerce product line that expanded company revenue streams.',
      'Collaborated closely with product, design and QA teams in an Agile workflow to define requirements and deliver new features on tight timelines.',
    ],
  },
  {
    slug: 'white-label-storefront',
    title: 'White-Label Storefront Platform',
    context: 'Treering, 2024 – Present',
    tools: ['Angular', 'PHP', 'AWS EC2'],
    description: [
      'Developed and maintained full-stack infrastructure for a white-label storefront platform using Angular and PHP.',
      'Runs on AWS using EC2, Launch Templates and Auto Scaling Groups.',
    ],
  },
];

export default projects;
