import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./AboutPage.css";
import cheesyBug from "../assets/images/cheesybug.jpg";

export default function AboutPage() {
    return (
        <Container className="about-page">
            <Row>
                <Col className="about-page-image">
                    <Image fluid className="about-page-image" src={cheesyBug} />
                </Col>
                <Col className="about-page-content open-sans">
                    <h1 className="montserrat">About Me</h1>
                    <p>
                        Hi! I'm cheesybug210, a senior studying Computer Science at Brown University. I have always been passionate about technology and have gained a fundamental understanding of computer science through my coursework. I am a collaborative and detail-oriented team member and have had the privilege of interning at ABC and XYZ in the past two summers, where I learnt a tremendous amount.
                    </p>
                    <p>
                        Most of my coursework in college involved learning about computer science and programming without really thinking about how users would interact with the product. Having now taken a UI/UX / design class, I realised that I was missing a crucial piece of the puzzle. I am now interested in learning more about the design process and how to create user-friendly and intuitive applications.
                    </p>
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
                </Col>
            </Row>
        </Container>
    );
}