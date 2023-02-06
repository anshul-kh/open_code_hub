import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "../Styles/Footer.css"

export default function SocialFlow() {
  return (
    <div className="social-div">
      <h1 >Follow The Developer</h1>
      <p className="social-container">
        <a
          href="https://github.com/anshul-kh"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/anshul-khurana-a53983258/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/itz._.devil._.04/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
      <h1>Copyright &copy; @Open_Code_Hub</h1>
    </div>
  );
}
