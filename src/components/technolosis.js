import React from 'react';

import img1 from '../img/tech/1_.png';
import img2 from '../img/tech/2_.png';
import img3 from '../img/tech/3_.png';
import img4 from '../img/tech/4_.png';
import img5 from '../img/tech/5_.png';
import img6 from '../img/tech/6_.png';
import img7 from '../img/tech/technolosis.png';

function Technolosis(props) {
  return (
    <div className="Tech">
      <div className="col col1">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="col col2">
        <img src={img4} alt="" />
        <div className="Tech description">
          <h1> Scuplture: technolosis </h1>
          <p>
            As a continuation of a series around human features ability to portray individuality, my piece aims to explore whether aura
            and originality is depleted by mass production and technology.

            I created 22 plaster molds of an iPhone charger cube that are stacked and glued to a wire mesh spine support. There are three
            distinct groups to resemble the three groups of the vertebral column; the cervical, thoracic and lumbar vertebraes. The bottom
            five cubes are distinct representations of a charging cube with the cord outlet exposed, intended to look like exact replicas
            of each other that have been shaved down to appear white. The next 12 cubes become less distinctly recognizable as chargers
            as you move towards the top of the spine. At the bottom, the prongs of the charger are evident, and the overall appearance
            is white. However, this finish begins to fade as the viewers gaze moves up the stacked column. With each charger, there is
            less and less evidence of human correction until the viewer reaches the top of the sculpture where only unique and untouched
            plaster forms exist. The top five multiples are untouched and ambiguous as charging cube forms with texture similar to bone.
            The piece is suspended in the air which allows for the piece to be viewed in all directions. The mesh spine exposes the
            innerworkings and connections between the elements to create a vulnerable and transparent nature.

            This work aims to question whether humanness and individuality indeed begins to fade as we rely more and more on technology.
            To achieve the exact sameness in form and produce a recognizable product, all the individuality had to be erased by the shaving
            and scraping down of the mold. All the flaws and imperfections of the untouched molds proved to take on a more imperfect quality
            that inherently became more humanlike. In contrast, to achieve a product that is mass produced such as the iPhone charging cube,
            each piece required removal of all distinctive qualities.
          </p>
        </div>
        <div className="row">
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Technolosis;
