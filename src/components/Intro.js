import React from "react";

const Intro = () => {
  return (
    <>
      {/* intro section */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Tony Shen</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          front-end dev
        </p>
        <img src="images/headshot.png" alt="headshot of tony shen" />
      </section>

      {/* services section */}
      <section className="services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
          <div className="service">
            <h3>Frontend Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="service">
            <h3>Fullstack Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="service">
            <h3>UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <a href="#work" className="btn">
          My Work
        </a>
      </section>
    </>
  );
};

export default Intro;
