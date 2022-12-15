import {
    Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBar.css";

export default function NavBar () {
    return (
        <Navbar className="navbar-custom" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/portfolio">cheesybug210</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/portfolio">Home</Nav.Link>
                        <Nav.Link as={Link} to="/portfolio/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}