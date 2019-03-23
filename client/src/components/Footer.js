import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Footer.css";

const Footer = () => (
  <div className="footer">
    <span className="footer__slogan">
      Simple e-commerce for the simple shopper.
    </span>
    <div className="footer__info">
      <a
        href="https://www.github.com/matthewoctober/simple-shopping"
        className="footer__github-link"
      >
        View on{" "}
        <FontAwesomeIcon
          className="footer__github-icon"
          icon={["fab", "github"]}
        />
      </a>
      <span className="footer__divider">|</span>
      <span>
        Made with{" "}
        <FontAwesomeIcon className="footer__made-with-love" icon="heart" />
      </span>
    </div>
  </div>
);

export default Footer;
