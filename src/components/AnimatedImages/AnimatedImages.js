import React from "react";
import "./AnimatedImages.scss";

import box1 from "../../images/3A.jpg";
import box2 from "../../images/2A.jpg";

const AnimatedImages = () => {
  return (
    <div className="animated-images-component">
      <a href="#">
        <div className="collection-component">
          <div className="imgBox">
            <img src={box1} alt="" />
          </div>
          <div className="details">
            <div className="content" id="collection">
              <h2>COLLECTION</h2>
            </div>
          </div>
        </div>
      </a>
      <a href="/about">
        <div className="collection-component">
          <div className="imgBox">
            <img src={box2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2>ABOUT US</h2>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AnimatedImages;
