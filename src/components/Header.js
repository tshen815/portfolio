import React from "react";
import About from "./About";
import Footer from "./Footer";
import Intro from "./Intro";
import Work from "./Work";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="images/headshot.png" alt="headshot" />
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                My Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About Me
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Intro />
      <About />
      <Work />
      <Footer />
    </div>
  );
};

export default Header;
