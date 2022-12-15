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

        <h3 className="mb-3">I'm a senior at Brown University and an aspiring software engineer interested in the intersection of programming and design.</h3>
        <div className="open-sans mb-3">
          Most of my coursework in college involved learning about computer science and programming without really thinking about how users would interact with the product. Having now taken a UI/UX / design class, I realised that I was missing a crucial piece of the puzzle. I am now interested in learning more about the design process and how to create user-friendly and intuitive applications. This portfolio documents my journey in this process!
          </div>
        {/* more description? */}
        <div className="sm-container">
        <h5 className="me-5 mb-3">Get in touch →</h5>
        <div className="social-media">
          <a href="https://www.eelslap.com/">
            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#2258a4" />
          </a>
          <a href="https://github.com/cheesybug210">
            <FontAwesomeIcon icon={faGithub} size="xl" color="#2258a4" />

          </a>
          <a href="https://www.docdroid.net/WyjIuyO/fake-resume-pdf">
            <FontAwesomeIcon icon={faFileAlt} size="xl" color="#2258a4" />
          </a>
        </div>

        </div>
      </div>

    {/* // </div> */}
  </div>
  );
}