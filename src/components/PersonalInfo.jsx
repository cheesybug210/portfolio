import "./PersonalInfo.css";
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { faFileAlt } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Col, Row } from "react-bootstrap";

export default function PersonalInfo (props) {
  return (
    <div className="personal-info">
    {/* <Row> */}
      <div className="info-left">
        Hi, I'm so-and-so.
        
      </div>
      {/* // <div className="info-left"> */}

      {/* // </div>/// */}
      <div className="info-right">

        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        {/* more description? */}
        {/* <h5>Check out some of my work down below!</h5> */}
        <div className="social-media">
          <a href="https://www.eelslap.com/">
            {/* LinkedIn */}
            <FontAwesomeIcon icon={faLinkedin} size="2xl" color="black" />
          </a>
          <a href="https://github.com/cheesybug210">
            {/* GitHub */}
            <FontAwesomeIcon icon={faGithub} size="2xl" color="black" />

          </a>
          <a href="https://www.docdroid.net/WyjIuyO/fake-resume-pdf">
            {/* Resume */}
            <FontAwesomeIcon icon={faFileAlt} size="2xl" color="black" />
          </a>
        </div>
      </div>

    {/* // </div> */}
  </div>
  );
}