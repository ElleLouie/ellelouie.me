import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import projects from '../data/projects';
import { facts } from '../data/about';
import socials, { email } from '../data/socials';

function Home(props) {
  const { hash } = useLocation();

  // scroll to #work, #about or #contact when the nav links here
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div className="home">
      <section className="hero" data-enter>
        <div className="hero_text">
          <h1 className="wordmark">elle <em>louie</em></h1>
          <p className="hero_role">Hi! I&apos;m a software engineer with an art background and <span className="mark">a soft spot for design</span>.</p>
          <div className="hero_actions">
            <a href="#work" className="button">See my stuff</a>
            <a href={`mailto:${email}`} className="text_link">Email me</a>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <h2 className="section_title">Things I&apos;ve made</h2>
        <ul className="cards">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link to={`/portfolio/${project.slug}`} className="card">
                <div className="card_frame"><img src={project.cover} alt="" loading="lazy" /></div>
                <div className="card_text">
                  <h3 className="card_title">{project.title}</h3>
                  <p className="card_tools">{project.medium}</p>
                  <p className="card_note">{project.note}</p>
                  <span className="text_link">Take a look</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="section about">
        <h2 className="section_title">About</h2>
        <div className="about_body">
          <p className="lead">
            I&apos;m happiest where engineering and studio art overlap. One teaches me how things work, the other <em>how they should feel.</em>
          </p>
          <dl className="cv">
            {facts.map(({ label, value }) => (
              <div key={label} className="cv_row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact_inner">
          <h2 className="contact_title">Say hi!</h2>
          <a href={`mailto:${email}`} className="contact_email">{email}</a>
          <div className="contact_links">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
