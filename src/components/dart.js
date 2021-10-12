import React from 'react';

function Dart(props) {
  return (
    <div className="Mini">
      <div>
        <iframe title="landing" src="https://giphy.com/embed/Aixd1E04rAgvxdE62P" width="480" height="288" frameBorder="0" className="giphy-embed" allowFullScreen />
        <p><a href="https://giphy.com/gifs/dartterm-Aixd1E04rAgvxdE62P">via GIPHY</a></p>
      </div>
      <div className="description">
        <div className="col">
          <h1 className="header_dt"> dartterm </h1>
          <a href="https://dartterm.netlify.app/" className="link">check it out!</a>
        </div>
        <p>
          This rendition of a typical BuzzFeed quiz includes a navigation bar, animated header image, animated title question, and shaking effects
          when users hover over answers. In addition, after an answer is selected, a blurred filter is applied to the non-selected options. Selected
          answers are changed to a selected state, indicated by either the text color changing or a box showdow being applied. Finally, the quiz
          includes an animated &apos;done&apos; button as well as a zoom in animation for the modal pop up window that shows the results of the quiz.
        </p>
        <div className="col">
          <div>
            <p> check out the repo</p>
            <div>
              <a href="https://github.com/dartmouth-cs52-21S/lab2-ElleLouie/tree/gh-pages" className="link">go to github </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dart;
