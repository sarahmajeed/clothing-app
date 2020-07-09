import React from 'react'

import {slide1} from '../images/1A.jpg'
import {slide2} from '../images/2A.jpg'
import {slide3} from '../images/3A.jpg'
import {slide4} from '../images/9.png'
const Slides = () => {
    //Displays slides
    function slideshow()
    {
         // Array for slides
         const images = [
            slide1,
            slide2,
            slide3,
            slide4
        ]
    // Initializing index for array elements
    let i = 0;
    
    document.getElementById("slides").src = images[i]; //Storing link of images in img tag
    if(i < images.length-1) // Checking if index value is less than array length
    {
    i++; // incrementing index value
    } 
    else{
        i = 0; // setting index value to zero if i > array length
    }
    }
    setInterval(slideshow, 3000);
    return (
        <div className = "container">
            <img id = "slides" src = {slide1} alt=""/>
        </div>
    )
}
export default Slides;