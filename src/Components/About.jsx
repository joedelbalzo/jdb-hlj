import React from "react";
import { FadeComponent } from "./FadeComponent";
import wall from "./assets/wall.jpg";

//page not in use. save for a rainy day.

const About = () => {
  return (
    <FadeComponent>
      <div className="about">
        <div className="about-image-container">
          <img className="about-image" src={wall} />
        </div>
        <div className="about-paragraph">About Hayley</div>
      </div>
    </FadeComponent>
  );
};

export default About;
