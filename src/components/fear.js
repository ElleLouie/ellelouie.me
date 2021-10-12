import React from 'react';

function FearNot(props) {
  return (
    <div className="Mini">
      <div>
        <iframe title="landing" src="https://giphy.com/embed/y3N3nrj1d1aIqoxrLH" width="480" height="288" frameBorder="0" className="giphy-embed" allowFullScreen />
        <p><a href="https://giphy.com/gifs/fearnot-y3N3nrj1d1aIqoxrLH">via GIPHY</a></p>
      </div>
      <div className="description">
        <div className="col">
          <h1 className="header_fn"> fear not </h1>
          <div><a href="https://fearnot.netlify.app/" className="link">check it out!</a></div>
        </div>
        <p>
          Fear not is a HTML/CSS only static landing page for a sportswear company designed especially for women by women. The page includes featured
          products, newest drops, recent news of female athletes around the world and a letter of acknowledgment to social and racial injustice.
          Finally, the page includes featured sports the company proudly specializes in and a footer section with the company&apos;s values and other helpful resources.
        </p>
        <div className="col">
          <div>
            <p> check out the repo</p>
            <div>
              <a href="https://github.com/dartmouth-cs52-21S/lab1-landingpage-ElleLouie/tree/gh-pages" className="link">go to github </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FearNot;
