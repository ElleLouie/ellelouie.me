import rIcon from '../img/icon/r.png';
import swIcon from '../img/icon/sw.png';
import psIcon from '../img/icon/ps.png';
import aiIcon from '../img/icon/ai.png';

function About(props) {
  return (
    <div className="about">
      <div className="name about_name">
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span> </span>
        <span>l</span>
        <span>o</span>
        <span>u</span>
        <span>i</span>
        <span>e</span>
      </div>
      <div className="about_items">
        <div className="about_facts">
          <h1>who am i?</h1>
          <div className="facts">
            <i className="fa-solid fa-globe" /> <p className="facts_detail">california</p>
          </div>
          <div className="facts">
            <i className="fa-solid fa-building-columns" /> <p className="facts_detail">dartmouth college</p>
          </div>
          <div className="facts">
            <i className="fa-solid fa-book" /> <p className="facts_detail">engineering modified with studio art, CS minor</p>
          </div>
        </div>
        <div className="about_bio">
          <h1>about me</h1>
          <p>
            Hi, I&apos;m Elle Louie! During my time at Dartmouth, I&apos;ve fallen in love with the design process, especially the collaborative part,
            where ideas get better because other people are in the room. I&apos;m happiest where engineering and studio art overlap. One teaches me
            how things work, the other how they should feel, and I&apos;ve learned I need both.
          </p>
          <p>
            Playing on the Dartmouth basketball team taught me a lot about leading, mostly that it means being honest when you don&apos;t have
            everything figured out. It&apos;s also made me a much better communicator.
          </p>
          <p>
            I&apos;m curious about a lot of things, and I want to put that energy into making work that actually matters to the people around me.
          </p>
        </div>
      </div>
      <h1>skills</h1>
      <div className="icons">
        <div className="icons_item">
          <i className="fa-brands fa-java fa-border fa-3x" />
          <h4>Java</h4>
        </div>
        <div className="icons_item">
          <i className="fa-brands fa-python fa-border fa-3x" />
          <h4>Python</h4>
        </div>
        <div className="icons_item">
          <i className="fa-brands fa-react fa-border fa-3x" />
          <h4>React</h4>
        </div>
        <div className="icons_item">
          <i className="fa-brands fa-html5 fa-border fa-3x" />
          <h4>HTML/CSS</h4>
        </div>
        <div className="icons_item">
          <i className="fa-brands fa-js fa-border fa-3x" />
          <h4>JavaScript</h4>
        </div>
        <div className="icons_item">
          <i className="fa-brands fa-figma fa-border fa-3x" />
          <h4>Figma</h4>
        </div>
      </div>
      <div className="icons">
        <div className="icons_item">
          <img src={rIcon} alt="" />
          <h4>Rhino</h4>
        </div>
        <div className="icons_item">
          <img src={swIcon} alt="" />
          <h4>SolidWorks</h4>
        </div>
        <div className="icons_item">
          <img src={psIcon} alt="" />
          <h4>Photoshop</h4>
        </div>
        <div className="icons_item">
          <img src={aiIcon} alt="" />
          <h4>Illustrator</h4>
        </div>
      </div>
      <h1>other interests</h1>
      <p className="about_interest"> I find learning new sports such as surfing, golf and tennis, trying new foods, and meeting new people
        the best way to spend my free time.
      </p>
    </div>
  );
}

export default About;
