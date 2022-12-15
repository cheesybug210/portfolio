import {
    Link
} from "react-router-dom";
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
                        I enjoy learning about new technologies and applying them to solve problems. I am passionate about creating user-friendly and intuitive applications.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}