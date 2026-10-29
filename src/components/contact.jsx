function Contact(props) {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <h2> Email </h2>
      <p> elle_louie@comcast.net </p>
      <div className="social_container">
        <h2> Social Media </h2>
        <div className="social">
          <a href="https://www.linkedin.com/in/elle-louie-7920a5193/" aria-label="LinkedIn"> <i className="fa-brands fa-linkedin" /></a>
          <a href="https://www.facebook.com/elle.louie" aria-label="Facebook"> <i className="fa-brands fa-facebook" /></a>
          <a href="https://github.com/ElleLouie" aria-label="GitHub"> <i className="fa-brands fa-github" /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
