import React from 'react';

function Contact(props) {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <h2> Email </h2>
      <p> ellelouie13@gmail.com </p>
      <div className="social_container">
        <h2> Social Media </h2>
        <div className="social">
          <a href="https://www.linkedin.com/in/elle-louie-7920a5193/"> <i className="fa fa-linkedin" /></a>
          <a href="https://www.facebook.com/elle.louie"> <i className="fa fa-facebook" /></a>
          <a href="https://github.com/ElleLouie"> <i className="fa fa-github" /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
