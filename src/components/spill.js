import React from 'react';

function Spill(props) {
  return (
    <div className="Mini">
      <div>
        <iframe title="landing" src="https://giphy.com/embed/Yp337umiFzW0ddGh4g" width="480" height="290" frameBorder="0" className="giphy-embed" allowFullScreen />
        <p><a href="https://giphy.com/gifs/blog-Yp337umiFzW0ddGh4g">via GIPHY</a></p>
      </div>
      <div className="description">
        <div className="col">
          <h1 className="header_sb"> spill the beans </h1>
          <a href="https://spill-the-beans.netlify.app/" className="link">check it out!</a>
        </div>
        <p>
          Spill the Beans is a coffee inspired blog where fellow coffee connoisseurs and lovers can come together and share their favorite drinks. This
          CRUD style content app has core functionality including creating an item with title and content, displaying posts, editing fields, and
          deleting. It also supports authentication and users. Users are able to see the author of each post when viewing the post in full view.
        </p>
        <div className="code">
          <div className="row">
            <div className="col">
              <p> check out the client repo</p>
              <div>
                <a href="https://github.com/dartmouth-cs52-21S/platform-client-ElleLouie" className="link">go to github </a>
              </div>
            </div>
            <div className="col">
              <p> check out the api repo</p>
              <div>
                <a href="https://github.com/dartmouth-cs52-21S/platform-api-ElleLouie" className="link">go to github </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spill;
