import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <a href="mailto:tshen815@live.com" className="footer__link">
          tshen815@live.com
        </a>
        <ul className="social-list">
            <li className="social-list__item">
                <a href="https://linkedin.com" className="social-list__link"></a>
            </li>
            <li className="social-list__item">
                <a href="https://github.com" className="social-list__link"></a>
            </li>
            <li className="social-list__item">
                <a href="https://instagram.com"className="social-list__link"></a>
            </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
