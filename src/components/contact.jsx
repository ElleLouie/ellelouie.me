import socials, { email } from '../data/socials';

function Contact(props) {
  return (
    <div className="page contact">
      <header className="page_header">
        <p className="eyebrow">03 &mdash; Contact</p>
        <h1 className="page_title">Let&apos;s <em>get in touch</em></h1>
      </header>
      <section className="split">
        <p className="split_label eyebrow">Email</p>
        <a href={`mailto:${email}`} className="contact_email">{email}</a>
      </section>
      <section className="split">
        <p className="split_label eyebrow">Elsewhere</p>
        <ul className="index_list">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="index_row index_row-compact" target="_blank" rel="noreferrer">
                <span className="index_title">{label}</span>
                <span className="index_arrow" aria-hidden="true">&#8599;</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Contact;
