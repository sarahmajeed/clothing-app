import React from "react";
import "./Navbar.scss";

const navSlide = function navSlide() {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //togle bar
  bar.addEventListener("click", function () {
    nav.classList.toggle("navactive");
    //slide menu
    navLinks.forEach(function (link, index) {
      console.log(index / 0.7);
      if (link.style.animation) {
        link.style.animation = "";
      } else link.style.animation = `navLinkFade 3s ease forwards ${index / 5}s`;
    });

    //bar cross
    bar.classList.toggle("cross");
  });
};

const Navbar = () => {
  return (
    <nav>
      <div onClick={navSlide} className="bar">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="logo">
        <h4>
          <span className="e">Ǝ</span>
          <span>-COMPANY</span>
        </h4>
      </div>

      <ul className="nav-links">
        <div className="dropdown">
          <li>
            <a className="navitem droptag" href="#">
              WOMEN
            </a>
            <i className="fa fa-caret-down"></i>
          </li>

          <div className="dropdown-content">
            <a href="#">Kurtis</a>
            <a href="#">Trousers</a>
          </div>
        </div>

        <div className="dropdown">
          <li>
            <a className="navitem droptag" href="#">
              MEN
            </a>
            <i className="fa fa-caret-down"></i>
          </li>
          <div className="dropdown-content">
            <a href="#">Kurta</a>
            <a href="#">Shirts</a>
            <a href="#">Pants</a>
          </div>
        </div>

        <li>
          <a className="navitem" href="#">
            ACCESSORIES
          </a>
        </li>
        <li>
          <a className="navitem" href="/about">
            ABOUT US
          </a>
        </li>
        <li>
          <a classNames="navitem" href="/contact">
            CONTACT US
          </a>
        </li>
      </ul>

      <ul className="icons">
        <li>
          <a href="#">
            <i class="fa fa-heart"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-cart-arrow-down"></i>
          </a>
        </li>
        <li>
          <a href="/signin">
            <i className="fa fa-user-circle"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
