import React from "react";

const Work = () => {
  return (
    <>
      <section className="my-work" id="work">
        <h2 className="section__title">My Work</h2>
        <p className="section__subtitle"></p>

        <div className="portfolio">
          {/* Portfolio item 1 */}
          <a href="#" className="portfolio__item">
            <img src="images/example.png" alt="weil solution chart" />
          </a>
          {/* Portfolio item 2 */}

          <a href="#" className="portfolio__item">
            <img src="images/example.png" alt="weil solution chart" />
          </a>
          {/* Portfolio item 3 */}

          <a href="#" className="portfolio__item">
            <img src="images/example.png" alt="weil solution chart" />
          </a>
          {/* Portfolio item 4 */}
          <a href="#" className="portfolio__item">
            <img src="images/example.png" alt="weil solution chart" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Work;
