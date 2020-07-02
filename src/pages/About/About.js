import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <section className="mission">
        <div className="box">
          <span></span>
          <span></span>
          <span></span>

        </div>
        <h1>Our mission</h1>
        <p>We are on a mission to lead, to enhance and to provide best-value products and services to global customers.To make a difference through our branding to stay ahead of fashion trends, market changes and the latest technology.</p>
      </section>


      <section className="promise">
        <div className="box1">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Our promise</h1>
        <p>We promise to inspire generations with the quality of our brand. And to cultivate more fashion choices that are good for people, the planet and your wallet.</p>


      </section>

      <section className="essence">

        <h1>Our essence</h1>

        <p>Our print is our essence</p>


      </section>

      <a className="arrow" href="#">
        <i class="fas fa-angle-up" ></i>
      </a>

    </div>
  )
}

export default About;
