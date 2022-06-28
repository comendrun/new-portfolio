import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* <!-- replace with your own email address --> */}
      <a href="mailto:hello@jane.dev" className="footer__link">
        hello@jane.dev
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://codepen.io">
            <i className="fab fa-codepen"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="http://dribbble.com">
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <div className="logo">
        {/* <img src={topLogoDark} alt="" /> */}
        <i className="fa-solid fa-terminal"></i>comendrun -m "Kamran"
      </div>
    </footer>
  );
}
