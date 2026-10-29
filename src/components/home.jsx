import { NavLink } from 'react-router-dom';

const sections = [
  { to: '/about', number: '01', title: 'About', detail: 'Who I am, how I work, and what I bring to a team.' },
  { to: '/portfolio', number: '02', title: 'Work', detail: 'Selected projects across product design, engineering and studio art.' },
  { to: '/contact', number: '03', title: 'Contact', detail: 'Say hello. I\'m always up for a good conversation.' },
];

function Home(props) {
  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">Designer &amp; Engineer</p>
        <h1 className="hero_title">
          Elle <em>Louie</em>
        </h1>
        <div className="hero_bottom">
          <p className="hero_lead">
            I work where engineering and studio art overlap, designing things that work well <em>and</em> feel good to use.
          </p>
          <div className="flower" aria-hidden="true" />
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
