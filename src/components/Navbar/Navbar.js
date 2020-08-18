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
          <a href="/">
            <span className="e">Ǝ</span>
            <span>CLOTHING</span>
          </a>
        </h4>
      </div>

      <ul className="nav-links">
        <li className="dropdown">
          <a className="navitem droptag" href="#">
            WOMEN
          </a>
          <i className="fa fa-caret-down"></i>
          <div className="dropdown-content">
            <a href="/women/kurtis">Kurtis</a>
            <a href="/women/trousers">Trousers</a>
          </div>
        </li>

        <div className="dropdown">
          <li>
            <a className="navitem droptag" href="#">
              MEN
            </a>
            <i className="fa fa-caret-down"></i>
            <div className="dropdown-content">
              <a href="/men/kurta">Kurta</a>
              <a href="/men/shirts">Shirts</a>
              <a href="/men/pants">Pants</a>
            </div>
          </li>
        </div>

        <li>
          <a className="navitem" href="/accessories">
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
          <a href="/cart">
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
