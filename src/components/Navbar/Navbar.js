import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <span className="e">Ǝ</span>
            <span>CLOTHING</span>
          </Link>
        </h4>
      </div>

      <ul className="nav-links">
        <li className="dropdown">
          <a className="navitem droptag" href="#">
            WOMEN
          </a>
          <i className="fa fa-caret-down"></i>
          <div className="dropdown-content">
            <Link to="/women/kurtis">Kurtis</Link>
            <Link to="/women/trousers">Trousers</Link>
          </div>
        </li>

        <div className="dropdown">
          <li>
            <a className="navitem droptag" href="#">
              MEN
            </a>
            <i className="fa fa-caret-down"></i>
            <div className="dropdown-content">
              <Link to="/men/kurta">Kurta</Link>
              <Link to="/men/shirts">Shirts</Link>
              <Link to="/men/pants">Pants</Link>
            </div>
          </li>
        </div>

        <li>
          <Link className="navitem" to="/accessories">
            ACCESSORIES
          </Link>
        </li>
        <li>
          <Link className="navitem" to="/about">
            ABOUT US
          </Link>
        </li>
      </ul>

      <ul className="icons">
        <li>
          <Link to="/signin">
            <i className="fa fa-user-circle"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
