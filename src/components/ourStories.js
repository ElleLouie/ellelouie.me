import React from 'react';
import storiesImg from '../img/OurStories.png';

function OurStories(props) {
  return (
    <div className="OurStories">
      <div className="row">
        <div className="gif_item">
          <img src={storiesImg} alt="v1" />
          {/* <iframe title="landing" src="https://giphy.com/embed/4KjNtxrEr8cW7x0NZa" width="480" height="288" frameBorder="0" className="giphy-embed" allowFullScreen />
          <p><a href="https://giphy.com/gifs/landing-4KjNtxrEr8cW7x0NZa">via GIPHY</a></p> */}
        </div>
        <div className="description">
          <h1> Our Stories </h1>
          <h3>Figma React</h3>
          <p>
            Our Stories is a community education platform that makes it easier for people to share and learn about perspectives on history and society that are
            often left out of mainstream educational curricula and media. Our mission is to create an environment of knowledge-sharing that encourages
            critical thought about these perspectives and to stand in the shoes of people different from ourselves.
          </p>
          <a href="https://cs52-ourstories.netlify.app/" className="cta">check it out!</a>
        </div>
      </div>
      <div>
        <div className="header">
          <h2>FEATURES</h2>
          <div className="line" />
        </div>
        <div className="row">
          <div className="item">
            <h1>01.</h1><h3> Upload your own content</h3>
            <iframe title="upload" src="https://giphy.com/embed/W7nbcS7ET1BUyiFWEy" width="480" height="288" frameBorder="0" allowFullScreen />
            <p><a href="https://giphy.com/gifs/createpage-W7nbcS7ET1BUyiFWEy">via GIPHY</a></p>
          </div>
          <div className="item">
            <h1>02.</h1><h3> Comment on content</h3>
            <iframe title="comment" src="https://giphy.com/embed/EnWPUaL0u52xQgbmKB" width="480" height="288" frameBorder="0" allowFullScreen />
            <p><a href="https://giphy.com/gifs/react-EnWPUaL0u52xQgbmKB">via GIPHY</a></p>
          </div>
          <div className="item">
            <h1>03.</h1><h3> Save to your own personal notebook</h3>
            <iframe title="save" src="https://giphy.com/embed/YFlRI8BJnAQSIxgA5r" width="480" height="288" frameBorder="0" allowFullScreen />
            <p><a href="https://giphy.com/gifs/notes-YFlRI8BJnAQSIxgA5r">via GIPHY</a></p>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info_item">
          <h1> View the process </h1>
          <div className="line" />
          <p> check out the mockups</p>
          <div>
            <a href="https://www.figma.com/file/inMotqZ0GgwF9XpSV6Wn7E/Website!?node-id=0%3A1" className="cta">go to figma</a>
          </div>
        </div>
        <div className="info_item">
          <h1>Look at the code</h1>
          <div className="line" />
          <p> check out the client repo</p>
          <div>
            <a href="https://github.com/dartmouth-cs52-21S/project-our-stories" className="cta">go to github </a>
          </div>
          <p> check out the api repo</p>
          <div>
            <a href="https://github.com/dartmouth-cs52-21S/project-api-our-stories" className="cta">go to github </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStories;
