import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeroVisual from './heroVisual';
import Reveal from './reveal';
import projects from '../data/projects';
import { facts } from '../data/about';
import socials, { email } from '../data/socials';

// knot, blob, flower, pearls or pebbles
const HERO_SHAPE = 'knot';

function heroShape() {
  // while developing, try other shapes with ?shape=blob
  if (import.meta.env.DEV) return new URLSearchParams(window.location.search).get('shape') || HERO_SHAPE;
  return HERO_SHAPE;
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
        <p className="vertical_label label">Portfolio &mdash; {new Date().getFullYear()}</p>
        <h1 className="wordmark">elle <em>louie</em></h1>
        <div className="hero_collage">
          <div className="hero_card">
            <h2 className="italic_heading">Hi, I&apos;m Elle</h2>
            <p>I design and build things, on screen, in 3D and by hand.</p>
            <p className="label">Engineering &middot; Studio art &middot; 3D</p>
          </div>
          <div className="hero_tile">
            <HeroVisual shape={heroShape()} />
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <Reveal className="section_head">
          <span className="label">01</span>
          <h2 className="italic_heading">Projects</h2>
        </Reveal>
        {projects.length === 0 ? (
          <Reveal className="mosaic">
            <div className="mosaic_tile mosaic_tile-pink" />
            <div className="mosaic_tile mosaic_tile-cream">
              <p className="italic_heading">Coming soon</p>
              <p className="label">New work in progress</p>
            </div>
            <div className="mosaic_tile mosaic_tile-mauve" />
          </Reveal>
        ) : (
          <div className="cards">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <Link to={`/portfolio/${project.slug}`} className="card">
                  <div className="card_frame"><img src={project.cover} alt="" loading="lazy" /></div>
                  <p className="label">{project.medium}</p>
                  <h3 className="italic_heading">{project.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section id="about" className="section about">
        <Reveal className="section_head">
          <span className="label">02</span>
          <h2 className="italic_heading">About</h2>
        </Reveal>
        <div className="about_body">
          <Reveal as="p" className="lead">
            I&apos;m happiest where engineering and studio art overlap. One teaches me how things work, the other <em>how they should feel.</em>
          </Reveal>
          <Reveal as="dl" className="cv">
            {facts.map(({ label, value }) => (
              <div key={label} className="cv_row">
                <dt className="label">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contact" className="contact">
        <Reveal className="contact_inner">
          <span className="label">03 &mdash; Say hello</span>
          <a href={`mailto:${email}`} className="contact_email">{email}</a>
          <div className="contact_links">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} className="label" target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default Home;
