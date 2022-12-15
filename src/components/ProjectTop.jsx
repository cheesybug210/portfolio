import { Container, Row, Col } from "react-bootstrap";
import "./ProjectTop.css";

export default function ProjectTop (props) {
    return (
        <div>
            <div className="header-image" style={{ "backgroundImage": `url(${props.path})`, "backgroundPosition":`${props.bgPosition?.vertical ?? 50}% ${props.bgPosition?.horizontal ?? 50}%` }} />
            <Container className="top-container">
                <Row className="title-row montserrat">
                    <h1 className="project-title">
                        {props.title}
                    </h1>

                    <h3 className="project-subtitle text-muted">
                        {props.subtitle}
                    </h3>

                </Row>

                <Row className="project-info-row">
                    {props.team &&
                        <Col className="project-info-col">
                            <h3 className="montserrat">Team</h3>
                            <div className="open-sans">{props.team}</div>
                        </Col>
                    }
                    {props.role &&
                        <Col className="project-info-col">
                            <h3 className="montserrat">Role</h3>
                            <div className="open-sans">{props.role}</div>
                        </Col>
                    }
                    {props.tools &&
                        <Col className="project-info-col">
                            <h3 className="montserrat">Tools</h3>
                            <div className="open-sans">{props.tools}</div>
                        </Col>
                    }
                    {props.timeline &&
                        <Col className="project-info-col">
                            <h3 className="montserrat">Timeline</h3>
                            <div className="open-sans">{props.timeline}</div>
                        </Col>
                    }
                </Row>
                
            </Container>
        </div>
    );
}