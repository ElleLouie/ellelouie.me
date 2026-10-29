import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeroVisual from './heroVisual';
import Reveal from './reveal';
import projects from '../data/projects';
import { interests } from '../data/about';
import socials, { email } from '../data/socials';

function ProjectCard({ project }) {
  const body = (
    <>
      <div className="card_frame">
        {project.cover ? <img src={project.cover} alt="" loading="lazy" /> : <span className="script">coming soon</span>}
      </div>
      <p className="card_medium">{project.medium}</p>
      <h3>{project.title}</h3>
      <p className="card_note">{project.note}</p>
    </>
  );

  return project.cover
    ? <Link to={`/portfolio/${project.slug}`} className="card">{body}</Link>
    : <div className="card card-soon">{body}</div>;
}

function Home(props) {
  const { hash } = useLocation();

  // scroll to #work, #about or #contact when the nav links here
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero_text">
          <p className="script hero_hi">hi, I&apos;m</p>
          <h1 className="hero_title">Elle <em>Louie</em></h1>
          <p className="hero_lead">I design and build things, on screen, in 3D and by hand.</p>
        </div>
        <div className="hero_frame">
          <HeroVisual />
        </div>
      </section>

      <section id="work" className="section">
        <Reveal as="h2" className="section_title">Projects</Reveal>
        <div className="cards">
          {projects.map((project) => (
            <Reveal key={project.slug}><ProjectCard project={project} /></Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <Reveal className="about_text">
          <h2 className="section_title">About</h2>
          <p className="lead">
            I&apos;m happiest where engineering and studio art overlap. One teaches me how things work, the other <em>how they should feel.</em>
          </p>
          <p className="about_now">Software engineer at Treering. Dartmouth &apos;21, former D1 basketball.</p>
        </Reveal>
        <Reveal className="about_interests">
          <p className="script">things I love</p>
          <ul className="chips">
            {interests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </Reveal>
      </section>

      <section id="contact" className="section contact">
        <Reveal>
          <p className="script">say hello</p>
          <a href={`mailto:${email}`} className="contact_email">{email}</a>
          <div className="contact_links">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default Home;
