import ProjectTop from "./ProjectTop";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./Project.css";

import d1 from "../assets/images/development/d1.jpg";
import d2 from "../assets/images/development/d2.jpg";

export default function Development (props) {
    return <Container className="project-main">

        <ProjectTop
            path={props.path}
            title="Development: Creating a Bakery Website Using React"
            subtitle="Creating a website with filter and sort capabilities for a fictional bakery."
            team="Solo Project"
            role="Web Developer"
            tools="React, JavaScript, CSS"
            timeline="3 weeks"
        />

        <Row className="section">
            <h2 className="montserrat">Overview</h2>
            <div className="open-sans">
                The application is the online ordering page for a bakery. It allows the user to sort and filter by different criteria, add items to a cart, and see the total price for the items. This demonstrates my ability to create a dynamic website using React, JavaScript, and CSS.
            </div>
        </Row>
        <hr />

        <Row className="section">
            <h2 className="montserrat">Website</h2>
            <Col sm={5}>
            <div className="open-sans mb-3">
                <h6 className="montserrat text-muted mt-3 mb-0">Link</h6>
                <a href="https://cheesybug210.github.io/development/">https://cheesybug210.github.io/development/</a>
            </div>
                <h4 className="montserrat">Usability Principles</h4>
                <div className="open-sans">
                    The website is designed to be easy to use and intuitive, following principles established by other shopping websites, such as food checkout websites or shopping websites like Amazon.
                    <ul>
                        <li>The filter box is placed on the left of the items, similar to other shopping websites. This ensures that users are already familiar with the website structure.</li>
                        <li>The items are placed centrally, next to the filter box, also similar to other shopping websites.</li>
                        <li>The cart is at the bottom. This is so that the user can just scroll down and see the items they have in their cart, along with their quantities and total price. This would usually be on a separate page, but for simplicity, it is on the same page. </li>
                    </ul>
                </div>
            </Col>
            <Col>
                <Image fluid src={d1} />
                <Image className="mt-5" fluid src={d2} />
            </Col>
        </Row>
        <hr />
        <Row className="section">
            <h2 className="montserrat">Conclusion</h2>
            <h5 className="montserrat">Project conclusions</h5>
            <div className="open-sans mb-3">
                I was able to make the reactive bakery website successfully, which demonstrates my ability to create a dynamic website using React, JavaScript, and CSS while utilising principles of usability learnt in school and from other websites.
            </div>
            <h5 className="montserrat">Personal takeaways</h5>
            <div className="open-sans">
                I was already familiar with React, but having not touched it in a while, this project was excellent practice. I also gained experience using JavaScript and external frameworks like Material UI.
            </div>
        </Row>
    </Container>;
}