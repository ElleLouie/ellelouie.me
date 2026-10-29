import socials from '../data/socials';

function Footer(props) {
  return (
    <footer className="site_footer">
      <p>&copy; {new Date().getFullYear()} Elle Louie</p>
      <div className="footer_links">
        {socials.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
