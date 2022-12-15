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
        Hi, I'm cheesybug210.
        
      </div>
      {/* // <div className="info-left"> */}

      {/* // </div>/// */}
      <div className="info-right">

        <h3>I'm a senior at Brown University. Sometimes I write code.</h3>
        {/* more description? */}
        {/* <h5>Check out some of my work down below!</h5> */}
        <div className="social-media">
          <a href="https://www.eelslap.com/">
            <FontAwesomeIcon icon={faLinkedin} size="xl" color="black" />
          </a>
          <a href="https://github.com/cheesybug210">
            <FontAwesomeIcon icon={faGithub} size="xl" color="black" />

          </a>
          <a href="https://www.docdroid.net/WyjIuyO/fake-resume-pdf">
            <FontAwesomeIcon icon={faFileAlt} size="xl" color="black" />
          </a>
        </div>
      </div>

    {/* // </div> */}
  </div>
  );
}