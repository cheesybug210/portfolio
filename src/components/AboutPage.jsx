import {
    Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <Container className="about-page">
            <Row>
                <Col className="about-page-image">
                    <Image className="about-page-image" src="../../public/images/apple-pie.jpg" roundedCircle />
                </Col>
                <Col className="about-page-content">
                    <h1>About Me</h1>
                    <p>
                        I am a software developer with a background in mechanical engineering. I have experience in web development, mobile development, and desktop development. I have worked with a variety of technologies including C#, Java, JavaScript, React, React Native, and Electron.
                    </p>
                    <p>
                        I enjoy learning about new technologies and applying them to solve problems. I am passionate about creating user-friendly and intuitive applications.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}