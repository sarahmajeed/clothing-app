import React from "react";
import "./About.scss";

function scrollUp() {
  return window.scrollTo(0, 0);
}

function scrollDownPromise() {
  document.getElementById("our-promise").classList.add("final-animation-h1");
  document
    .getElementById("our-promise-para")
    .classList.add("final-animation-para");

  let pageHeight = window.innerHeight;
  console.log("working button");
  window.scrollBy(0, pageHeight);
}

function scrollDownEssence() {
  document.getElementById("our-essence").classList.add("final-animation-h1");
  document
    .getElementById("our-essence-para")
    .classList.add("final-animation-para");

  let pageHeight = window.innerHeight;
  console.log("working button");
  window.scrollBy(0, pageHeight);
}

const About = () => {
  return (
    <div className="about">
      <section className="mission">
        <button onClick={scrollDownPromise} className="box">
          <i class="fas fa-angle-double-down fa-2x"></i>
        </button>
        <h1 className="our-mission">Our mission</h1>
        <p className="our-mission-para">
          We are on a mission to lead, to enhance and to provide best-value
          products and services to global customers.To make a difference through
          our branding to stay ahead of fashion trends, market changes and the
          latest technology.
        </p>
      </section>

      <section className="promise">
        <button onClick={scrollDownEssence} className="box1">
          <i class="fas fa-angle-double-down fa-2x"></i>
        </button>
        <h1 id="our-promise">Our promise</h1>
        <p id="our-promise-para">
          We promise to inspire generations with the quality of our brand. And
          to cultivate more fashion choices that are good for people, the planet
          and your wallet.
        </p>
      </section>

      <section className="essence">
        <h1 id="our-essence">Our essence</h1>

        <p id="our-essence-para">
          It's essence is deeply rooted with minimal design and subtle patterns.
        </p>
      </section>

      <button className="arrow" onClick={scrollUp}>
        <i class="fas fa-angle-double-up fa-2x" className="temp"></i>
      </button>
    </div>
  );
};

export default About;
