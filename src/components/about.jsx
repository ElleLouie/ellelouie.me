const facts = [
  { label: 'Currently', value: 'Software Engineer at Treering' },
  { label: 'Based in', value: 'California' },
  { label: 'Education', value: 'Dartmouth College, B.A. Engineering modified with Studio Art, minor in Computer Science, 2021' },
];

const experience = [
  {
    role: 'Software Engineer',
    org: 'Treering, San Mateo',
    dates: 'Mar 2024 – Present',
    points: [
      'Primary engineer on multiple Marketplace initiatives, including the launch of a new ecommerce product line.',
      'Built interactive 3D product renderings with Three.js for real-time customization and preview.',
      'Developed full-stack infrastructure for a white-label storefront platform using Angular, PHP and AWS.',
      'Contributed core features to AIBB (AI Book Builder), using AWS Lambda, SQS and OpenSearch for smart cropping and layout suggestions.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Treering, San Mateo',
    dates: 'Sep 2023 – Mar 2024',
    points: [
      'Reduced global CSS and SCSS bloat by 16% through modularization and palette standardization.',
      'Worked across a LAMP stack (MySQL, PHP) and front-end development with Angular and TypeScript.',
    ],
  },
];

const skills = [
  { label: 'Languages', value: ['JavaScript', 'TypeScript', 'Java', 'Python', 'PHP', 'C', 'HTML/CSS'] },
  { label: 'Frameworks', value: ['Angular', 'React', 'Three.js'] },
  { label: 'Cloud', value: ['AWS EC2', 'SQS', 'Auto Scaling Groups', 'Launch Templates', 'MySQL'] },
  { label: 'AI & Imaging', value: ['Smart layout generation', 'AWS Rekognition', 'OpenSearch'] },
  { label: 'Design', value: ['Figma', 'Adobe Suite', 'SolidWorks', 'Rhino'] },
  { label: 'Process', value: ['Agile/Scrum', 'Cross-functional collaboration', 'Git'] },
];

const leadership = [
  {
    role: 'Board Member, Young Alumni',
    org: 'Dartmouth Club of Los Angeles',
    dates: '2023 – Present',
    points: ['Organize alumni events and community service outreach in Los Angeles.'],
  },
  {
    role: 'Division 1 Women\'s Basketball',
    org: 'Dartmouth Athletics',
    dates: '2017 – 2021',
    points: ['Balanced 20+ hours a week of athletics with a full academic workload.'],
  },
];

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map(({ role, org, dates, points }) => (
        <li key={role} className="timeline_item">
          <div className="timeline_head">
            <h3>{role}</h3>
            <span className="timeline_dates">{dates}</span>
          </div>
          <p className="timeline_org">{org}</p>
          <ul>
            {points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function About(props) {
  return (
    <div className="page about">
      <header className="page_header">
        <p className="eyebrow">01 &mdash; About</p>
        <h1 className="page_title">A little <em>about me</em></h1>
      </header>

      <section className="split">
        <p className="split_label eyebrow">Bio</p>
        <div className="about_bio">
          <p className="lead">
            Hi, I&apos;m Elle Louie! During my time at Dartmouth, I&apos;ve fallen in love with the design process, especially the collaborative part,
            where ideas get better because other people are in the room.
          </p>
          <p>
            I&apos;m happiest where engineering and studio art overlap. One teaches me
            how things work, the other how they should feel, and I&apos;ve learned I need both.
          </p>
          <p>
            Playing on the Dartmouth basketball team taught me a lot about leading, mostly that it means being honest when you don&apos;t have
            everything figured out. It&apos;s also made me a much better communicator.
          </p>
          <p>
            I&apos;m curious about a lot of things, and I want to put that energy into making work that actually matters to the people around me.
          </p>
        </div>
      </section>

      <section className="split">
        <p className="split_label eyebrow">At a glance</p>
        <dl className="table">
          {facts.map(({ label, value }) => (
            <div key={label} className="table_row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="split">
        <p className="split_label eyebrow">Experience</p>
        <Timeline items={experience} />
      </section>

      <section className="split">
        <p className="split_label eyebrow">Skills</p>
        <dl className="table">
          {skills.map(({ label, value }) => (
            <div key={label} className="table_row">
              <dt>{label}</dt>
              <dd className="tags">{value.map((skill) => <span key={skill} className="tag">{skill}</span>)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="split">
        <p className="split_label eyebrow">Leadership</p>
        <Timeline items={leadership} />
      </section>

      <section className="split">
        <p className="split_label eyebrow">Off the clock</p>
        <p className="about_interest">
          I find learning new sports such as surfing, golf and tennis, trying new foods, and meeting new people
          the best way to spend my free time.
        </p>
      </section>
    </div>
  );
}

export default About;
