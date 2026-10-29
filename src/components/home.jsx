import { NavLink } from 'react-router-dom';
import HeroVisual from './heroVisual';

const sections = [
  { to: '/about', number: '01', title: 'About', detail: 'Experience, skills, and how I like to work.' },
  { to: '/portfolio', number: '02', title: 'Work', detail: 'Selected projects in 3D, AI-enhanced tooling and ecommerce.' },
  { to: '/contact', number: '03', title: 'Contact', detail: 'Say hello. I\'m always up for a good conversation.' },
];

function Home(props) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero_text">
          <p className="eyebrow">Software Engineer</p>
          <h1 className="hero_title">
            Elle <em>Louie</em>
          </h1>
        </div>
        <HeroVisual />
        <div className="hero_bottom">
          <p className="hero_lead">
            Full-stack engineer with a front-end focus. I build products people can see and touch,
            from real-time 3D previews to <em>AI-assisted</em> design tools.
          </p>
          <p className="hero_now">
            <span className="eyebrow">Currently</span>
            Software Engineer at Treering
          </p>
        </div>
      </section>
      <section className="index">
        <div className="index_inner">
          <p className="eyebrow">Index</p>
          <ul className="index_list">
            {sections.map(({ to, number, title, detail }) => (
              <li key={to}>
                <NavLink to={to} className="index_row">
                  <span className="index_number">{number}</span>
                  <span className="index_title">{title}</span>
                  <span className="index_detail">{detail}</span>
                  <span className="index_arrow" aria-hidden="true">&rarr;</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
