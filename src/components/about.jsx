const facts = [
  { label: 'Based in', value: 'California' },
  { label: 'Education', value: 'Dartmouth College' },
  { label: 'Study', value: 'Engineering modified with studio art, CS minor' },
];

const skills = [
  { label: 'Code', value: ['Java', 'Python', 'JavaScript', 'React', 'HTML/CSS'] },
  { label: 'Design', value: ['Figma', 'Photoshop', 'Illustrator'] },
  { label: 'CAD', value: ['Rhino', 'SolidWorks'] },
];

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
