import React from 'react';
import './About.scss';

function scrollUp() {
  return window.scrollTo(0, 0);
}

function scrollDown() {
  let pageHeight = window.innerHeight;
  console.log('working button');
  window.scrollBy(0, pageHeight);
}

const About = () => {
  return (
    <div className="about">
      <section className="mission">
        <button onClick={scrollDown} className="box">
          <i class="fas fa-angle-double-down fa-2x"></i>

        </button>
        <h1>Our mission</h1>
        <p>We are on a mission to lead, to enhance and to provide best-value products and services to global customers.To make a difference through our branding to stay ahead of fashion trends, market changes and the latest technology.</p>
      </section>


      <section className="promise">
        <button onClick={scrollDown} className="box1">
          <i class="fas fa-angle-double-down fa-2x"></i>
        </button>
        <h1>Our promise</h1>
        <p>We promise to inspire generations with the quality of our brand. And to cultivate more fashion choices that are good for people, the planet and your wallet.</p>


      </section>

      <section className="essence">

        <h1>Our essence</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora illum ipsum incidunt possimus corporis odit voluptate ut sit ea, officia aliquam aliquid perspiciatis labore eaque nemo nostrum. Quos, vel.</p>


      </section>

      <button className="arrow" onClick={scrollUp}>
        <i class="fas fa-angle-double-up fa-2x" ></i>
      </button>

    </div >
  )
}

export default About;
