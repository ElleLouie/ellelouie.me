import React from 'react';

function Pavilion(props) {
  return (
    <div className="Pav">
      <div className="row">
        <img src="/src/img/pavilion.jpeg" alt="" />
        <img src="/src/img/pav/rendered1.jpg" alt="" />
        <img src="/src/img/pav/rendered2.jpg" alt="" />
      </div>
      <div className="description">
        <h1> Architecture: Artist Pavilion </h1>
        <h3> Rhino Photoshop Prototyping</h3>
        <p>
          As a tribute to Theodore Geisel, also known as Dr. Seuss, I wanted to recreate an outdoor lookout point located
          as a replacement for the Gile Fire Tower in Norwich, Vermont. I took inspiration from How the Grinch Stole
          Christmas and the iconic shape of Mount Crumpit where the Grinch is notoriously known to reside. The theory behind
          the structure was taken from the Panopticon which is

          “a disciplinary concept brought to life in the form of a central observation tower placed within a circle of prison
          cells. From the tower, a guard can see every cell and inmate but the inmates can&apos;t see into the tower. Prisoners
          will never know whether or not they are being watched.” - https://ethics.org

          Made of granite, to represent the granite state of New Hampshire, the outdoor seating allows people who visit it
          to interact with the beauty of the surrounding area. Within the structure however, there are two levels of indoor
          space. Inside the levels, the slats of the structure become slightly thinner which allows those inside the space
          to see out, with those outside the structure not necessarily aware that they are being watched. The dichotomy of
          this structure is built upon the idea that although it is intended to be seen from a considerable distance, there
          is also space to see from. Each of the thirteen layers is around 3 feet, resulting in a standing structure of
          around 3 stories high. Intended to be built upon a hill , the structure is not quite the same grandeur as the
          Mayan Temples , however still intended to be seen from miles away.
        </p>
      </div>
      <img src="/src/img/pav/overview.jpg" alt="" />
      <div className="row">
        <img src="/src/img/pav/final.png" alt="" />
        <img src="/src/img/pav/exploded.png" alt="" />
        <img src="/src/img/pav/plan.png" alt="" />
      </div>
    </div>
  );
}

export default Pavilion;
