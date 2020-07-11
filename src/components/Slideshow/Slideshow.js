import React, { Component } from "react";
import "./Slideshow.scss";

import slide1 from "../../images/sarah.jpg";
import slide2 from "../../images/pic1.png";
import slide3 from "../../images/sarah.jpg";
import slide4 from "../../images/pic1.png";

class Slideshow extends Component {
  //Displays slides
  slides() {
    // Array for slides
    const images = [slide1, slide2, slide3, slide4];
    // Initializing index for array elements
    let i = 0;

    document.getElementById("slides").src = images[i]; //Storing link of images in img tag
    if (i < images.length - 1) {
      // Checking if index value is less than array length
      i++; // incrementing index value
    } else {
      i = 0; // setting index value to zero if i > array length
    }
  }
  //setInterval(slideshow, 3000);
  render() {
    return (
      <div className="container">
        {/* <img id="slides" src='../../images/1A.jpg' alt="Error" /> */}
        <img id="slides" src={slide1} alt="error" />
        {setInterval(this.slides, 3000)}
      </div>
    );
  }
}
export default Slideshow;
