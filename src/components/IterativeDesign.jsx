import ProjectTop from "./ProjectTop";
import { Col, Container, Row, Image, Carousel, Ratio } from "react-bootstrap";
import "./Project.css";

import a1 from '../assets/images/iterative-design/1.1.png';
import a2 from '../assets/images/iterative-design/1.2.png';
import a3 from '../assets/images/iterative-design/1.3.png';
import a4 from '../assets/images/iterative-design/1.4.png';
import b1 from '../assets/images/iterative-design/2.1.png';
import b2 from '../assets/images/iterative-design/2.2.png';
import b3 from '../assets/images/iterative-design/2.3.png';
import b4 from '../assets/images/iterative-design/2.4.png';
import c1 from '../assets/images/iterative-design/3.1.png';
import c2 from '../assets/images/iterative-design/3.2.png';
import c3 from '../assets/images/iterative-design/3.3.png';
import c4 from '../assets/images/iterative-design/3.4.png';
import d1 from '../assets/images/iterative-design/4.1.png';
import d2 from '../assets/images/iterative-design/4.2.png';
import d3 from '../assets/images/iterative-design/4.3.png';
import d4 from '../assets/images/iterative-design/4.4.png';

export default function IterativeDesign (props) {
    return <Container className="project-main">

        <ProjectTop
            path={props.path}
            title="Iterative Design: Designing a Website for the Pantore"
            subtitle="Designing a website and conducting user testing for a Y-Combinator backed startup."
            team="sleepyflyingfox108, feralferret224, cheesybug210"
            role="UI/UX Designer"
            tools="Figma, UserTesting"
            timeline="2 weeks"
        />

        <Row className="section">
            <h2 className="montserrat">Overview</h2>
            <div className="open-sans">Our goal was to prototype a website, from the ground up, for Pantore, a Brazilian food supply startup backed by Y-Combinator. This process involved initial sketching and wireframing, followed by development of a full-fledged interactive prototype. This prototype was critiqued by peers, modified based on feedback, and sent for user testing. Throughout the process, we kept in mind the users affected by the interface - a list likely to contain people looking to buy food in bulk (such as restaurant managers) and wholesalers looking to sell items in bulk.</div>
        </Row>

        <hr />

        <Row className="section">
            <h2 className="montserrat">Initial Sketches</h2>
            <h4 className="open-sans text-muted">Four sets of sketches generated to explore different design ideas.</h4>
            <div className="open-sans">We began by sketching out a few ideas for the website. We wanted to make sure that the website was easy to navigate, and that it was clear what the user could do on the website. We also wanted to make sure that the website was visually appealing, and that it was easy to find the information that the user was looking for.</div>
            <Col>
                <h4 className="montserrat">Sketch One</h4>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={a1} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={a2} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={a3} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={a4} className="w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <h4 className="montserrat">Sketch Two</h4>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={b1} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={b2} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={b3} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={b4} className="w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <Row className="section">
            <Col>
                <h4 className="montserrat">Sketch Three</h4>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={c1} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={c2} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={c3} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={c4} className="w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <h4 className="montserrat">Sketch Four</h4>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={d1} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={d2} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={d3} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={d4} className="w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <Row className="section">
            <h2 className="montserrat">Wireframing and Lofi Prototype</h2>
            <Col sm={5}>
                <h4 className="montserrat text-muted">Overview and design choices</h4>
                <div className="open-sans">This is our lo-fi prototype! Ultimately we decided to go with a site on which users can open a generic account, and can open stores or make orders for their store from this account. This way users have flexibility as to whether they want to be a buyer or seller (or both). Also, sellers can become familiar with the interface through which buyers are going to peruse their products.

                    The rest of the site operates like many current buying-selling websites, with a marketplace landing page and an ability to go to specific stores, see more info about iterms, see your order history, and maintain a cart.
                </div>
            </Col>
            <Col>
                <h4 className="montserrat">Lofi Prototype</h4>
                <Ratio aspectRatio="16x9">
                    <iframe className="figma-embed" title="lofi" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMwJpph9p2yKWwtClrHJqlM%2FIterative-Design%253A-Shared%3Fnode-id%3D3%253A4" allowfullscreen></iframe>
                </Ratio>
            </Col>
        </Row>
        <Row className="section">
            <h2 className="montserrat">Hifi Prototype</h2>
            <Col sm={5}>
                <h4 className="montserrat text-muted">Overview and design choices</h4>
                <div className="open-sans">This is our hi-fi prototype! There are a few design choices worth noting here which weren't represented in the lo-fi prototype.
                    <ul>
                        <li>
                            We chose to use orange as our accent color, with slightly different shades to delineate different sections or group things together.
                        </li>
                        <li>
                            We used with sans serif fonts to improve readability. We used the font Alata for headers and Inter for everything else to make it clear what was navigational info and what was item or store info.
                        </li>
                        <li>
                            We used a green icon to represent adding things to the cart, since both green and a plus sign are things users traditionally represent with that action.
                        </li>
                    </ul>
                </div>
            </Col>
            <Col>
                <h4 className="montserrat">Lofi Prototype</h4>
                <Ratio aspectRatio="16x9">
                    <iframe className="figma-embed" title="hifi" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMwJpph9p2yKWwtClrHJqlM%2FIterative-Design%253A-Shared%3Fpage-id%3D3%253A6%26node-id%3D29%253A582%26viewport%3D25%252C270%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D29%253A582" allowfullscreen></iframe>
                </Ratio>
            </Col>
        </Row>
        {/* split into two? */}
        <Row className="section">
            <h2 className="montserrat">Critique Feedback</h2>
            <div className="open-sans">
                We presented our hi-fi prototype to a group of peers, whose feedback was instrumental in helping us improve our prototype. These are the most important points.

                <ol className="list">
                    <li><b>The notch at the top of the laptop in the prototype would cover a portion of the header.</b> To address this, we increased the padding at the top of the navbar.</li>
                    <li><b>The order boxes in the Past Orders page had a plus icon on it, which users were confused about.</b> We removed the plus icon.</li>
                    <li><b>In the Checkout page, people were unsure about whether the prices displayed for an product were per item or overall.</b> We added this column to our cart page to make this clearer.</li>
                    <li><b>In the Checkout page, the frequency of the order being placed was difficult to find.</b> We created a separate section for frequency and cart name and moved it to a more prominent location.</li>
                    <li><b>The pages for the buyer and the vendor were too similar and would confuse the user.</b> We added a notice at the top of the vendor page indicating that they were viewing their own store.</li>
                    <li><b>Users were unsure how to add products, vendors, or orders to their favorites.</b> We added an explicit "Save Cart" option to the checkout page. We also created an unsaved and saved state for the star icon.</li>
                </ol>
            </div>
        </Row>

        <Row className="section">
            <h2 className="montserrat">User Testing Videos</h2>
            {/* <h4 className="montserrat text-muted">Videos of user interaction with the prototype</h4> */}
            <Col sm={5}>
                <div className="open-sans">
                    We conducted user testing with 3 users, each of whom had never previously seen the prototype. We asked them to perform a series of tasks, and then asked them to give us feedback on the website. We also asked them to think aloud as they performed the tasks, so that we could see how they were thinking about the website.
                </div>
                <h4 className="montserrat mt-5">Analysis</h4>
                <h5 className="montserrat text-muted mt-3">Task Summary</h5>
                <div className="open-sans">
                    Our goal was to have testers emulate the checkout process, and we defined our subtasks to comprehensively guide them through the process without leading them in a way that would interfere with their intuition.

                    We asked that testers first familiarize themselves with the website and visit useful pages, such as the My Favorites and Order History pages. Then, we asked that they put specific quantities of items from a single vendor in their cart. Next, we asked them to add an item to the cart from a separate vendor, which, due to the flow of our prototype, required them to follow a slightly different process. Lastly, we asked the testers to save the cart with a specific name and frequency and to then check out.
                </div>

                <h5 className="montserrat text-muted mt-3">Frequent Errors</h5>
                <div className="open-sans">
                    <ul>
                        <li>
                            The most frequent issue we faced was confusion about using a prototype. Though we included a disclaimer in our instructions, some testers were confused that not all buttons were clickable.
                        </li>
                        <li>
                            There was also difficulty due to buttons not being responsive, making it difficult for testers to tell if they had successfully completed the task.
                        </li>
                        <li>
                            Some testers noted that they were having time locating the specific vendor we asked them to. They noted that this issue could have been resolved with a working search bar, which would be implemented in a full website.

                        </li>
                    </ul>
                </div>

                <h5 className="montserrat text-muted mt-3">General Conclusions</h5>
                <div className="open-sans">
                    In general, testers were able to accurately navigate through the steps using their intuition. Due to the nature of the prototype, testers were not always able to tell if they had successfully completed a click. Despite this, each tester accurately followed the checkout process, and they all successfully completed the subtasks. This result was generally in line with our expectations given that the flow of the page mimics common food ordering pages.
                </div>

            </Col>
            <Col>
                <h4>User One</h4>
                <Ratio aspectRatio="16x9">
                    <iframe className="video-embed mb-3" title="user one video" src="https://drive.google.com/file/d/1UgUSeOk2O_nyTf_D7RNnzAAx1wtDB8BV/preview" allow="autoplay" allowFullScreen></iframe>
                </Ratio>
                <h4 className="mt-5">User Two</h4>
                <Ratio aspectRatio="16x9">
                    <iframe className="video-embed" title="user two video" src="https://drive.google.com/file/d/1hpDLAQZhaFAMbaW_-RPzw5GSXkuKpb2v/preview" allow="autoplay" allowFullScreen></iframe>
                </Ratio>
                <h4 className="mt-5">User Three</h4>
                <Ratio aspectRatio="16x9">
                    <iframe className="video-embed" title="user three video" src="https://drive.google.com/file/d/1Xj0Fgm-vtesCgDmopJEuDUB0ZVi_DZ3Q/preview" allow="autoplay" allowFullScreen></iframe>
                </Ratio>
            </Col>
        </Row>
        <Row className="section">
            <h2 className="montserrat">Potential Changes</h2>
            <h4 className="montserrat text-muted">The final design of the website</h4>
            <div className="open-sans">
                Following feedback from the testers, we would implement the following changes to the website (i.e. the hi-fi prototype embedded above)
                <ul>
                    <li>
                        Include a “past vendors” carousel on the landing page to highlight vendors the user has purchased from before. Testers recommended this in order to make it easier to find vendors they had made previous purchases from.
                    </li>
                    <li>
                        Move the favorites, order history, and profile settings to the profile menu. Testers leveraged the order history page, and this would consolidate the navigation bar and raise the order history page within the overall page hierarchy.
                    </li>
                    <li>
                        Provide more distinction between the vendor and buyer functions of the website by creating two separate website layouts depending on the type of user. Some testers noted a possible conflation between vendor and buyer capabilities.
                    </li>
                </ul>
            </div>
        </Row>
    </Container>;
}