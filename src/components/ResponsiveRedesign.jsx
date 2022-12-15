import ProjectTop from "./ProjectTop";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./Project.css";

import w1 from '../assets/images/responsive-redesign/Website - 1.png';
import w2 from '../assets/images/responsive-redesign/Website - 2.png';
import w3 from '../assets/images/responsive-redesign/Website - 3.png';
import w4 from '../assets/images/responsive-redesign/Website - 4.png';
import w5 from '../assets/images/responsive-redesign/Website - 5.png';
import w6 from '../assets/images/responsive-redesign/Website - 6.png';
import bkg from '../assets/images/responsive-redesign/background.png';
import hfd from '../assets/images/responsive-redesign/hf-d.jpg';
import hfm from '../assets/images/responsive-redesign/hf-m.jpg';
import hft from '../assets/images/responsive-redesign/hf-t.jpg';
import lfd from '../assets/images/responsive-redesign/lf-d.jpg';
import lfm from '../assets/images/responsive-redesign/lf-m.jpg';
import lft from '../assets/images/responsive-redesign/lf-t.jpg';
import n1 from '../assets/images/responsive-redesign/new-1.jpg';
import n2 from '../assets/images/responsive-redesign/new-2.jpg';
import n3 from '../assets/images/responsive-redesign/new-3.jpg';
import vd from '../assets/images/responsive-redesign/vd.jpg';


export default function ResponsiveRedesign (props) {
    return <Container className="project-main">

        <ProjectTop
            path={props.path}
            title="Responsive Redesign: Pawtucket Government Website"
            subtitle="An analysis of the Pawtucket government website and a proposed responsive redesign addressing issues found."
            team="Solo Project"
            role="UI/UX Analyst and Designer, Web Developer"
            tools="Balsamiq, Figma, HTML, CSS, JavaScript, Bootstrap"
            timeline="2 weeks"
        />

        <Row className="section">
            <h2 className="montserrat">Overview</h2>
            <div className="open-sans">Wah</div>
        </Row>

        <Row className="section">
            <Col>
                <h2 className="montserrat">Sketch</h2>
                <Image fluid="true" src={w1} />
            </Col>
            <Col>
                <h2 className="montserrat">Description</h2>
                <div className="open-sans">

                    The problem the microwave is trying to solve is that of heating food or beverages. It has several components, which function as follows.

                    <ul>
                        <li>Microwave door with see-through glass: opens to allow the item to be put inside and is see-through to allow the user to view the item being heated.</li>
                        <li>Time / weight display: displays the current time, time remaining to heat, or weight selected to heat.</li>
                        <li>Preset buttons: buttons with built-in functionality, such as a popcorn timer.</li>
                        <li>Time / weight knob: adjust the time / weight</li>
                        <li>Preset buttons: a row of buttons with built-in functionality, such as a Quick Min button</li>
                        <li>Action buttons: buttons to stop or start the microwave</li>
                        <li>Door release button: opens the microwave door</li>
                    </ul>
                </div>
            </Col>
        </Row>
        <Row className="section">
            <h2 className="montserrat">Observations</h2>
        </Row>
        <Row className="section">
            <Col>
                <h2 className="montserrat">Questions</h2>
                <div className="open-sans">
                    Wah
                </div>
            </Col>
            <Col>
                <h2 className="montserrat">Responses</h2>
                <div className="open-sans">
                    Wah
                </div>
            </Col>
        </Row>
        <Row className="section">
            <h2 className="montserrat">Personas</h2>
            <div className="open-sans">Wah</div>
        </Row>
        <Row className="section">
            <h2 className="montserrat">Storyboard</h2>
            <div className="open-sans">Wah</div>
        </Row>
    </Container>;

}

// export default function ResponsiveRedesign () {
//     return <main id="main">
//         <section className="section">
//             <div className="container">
//                 <div className="row mb-3 align-items-center">
//                     <div className="col-md-10" data-aos="fade-up">
//                         <h1>Responsive Redesign: Pawtucket Government Website</h1>
//                         <p>An analysis of the Pawtucket government website and a proposed responsive redesign addressing issues
//                             found.</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="site-section pb-0">
//                 <div className="container">
//                     <div className="row align-items-stretch">
//                         <div className="col" data-aos="fade-up" data-aos-delay="100">
//                             <h2 className="h2">Current Website</h2>
//                             <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
//                                 <div className="carousel-inner">
//                                     <div className="carousel-item active">
//                                         <img src={w1} className="w-100" alt="..." />
//                                     </div>
//                                     <div className="carousel-item">

//                                         <div className="col">
//                                             <img src={w2} className="w-100" alt="..." />
//                                         </div>
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src={w3} className="w-100" alt="..." />
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src={w4} className="w-100" alt="..." />
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src={w5} className="w-100" alt="..." />
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src={w6} className="w-100" alt="..." />
//                                     </div>
//                                 </div>
//                                 <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
//                                     <i className="fa-solid fa-angle-left fa-lg left-angle"></i>
//                                     <span className="visually-hidden">Previous</span>
//                                 </button>
//                                 <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
//                                     <i className="fa-solid fa-angle-right fa-lg right-angle"></i>
//                                     <span className="visually-hidden">Next</span>
//                                 </button>

//                                 <div className="carousel-indicators">
//                                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
//                                         aria-current="true" aria-label="Slide 1"></button>
//                                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
//                                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
//                                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
//                                 </div>
//                             </div>
//                             <div className="website-link">
//                                 <a href="https://pawtucketri.com/">https://pawtucketri.com/</a>
//                             </div>
//                             The Pawtucket government website is a good example of website that, while responsive, has several
//                             usability, learnability, memorability, and accessibility issues. Since it is a government website and
//                             people just want to get information quickly, it wasn't able to serve its purpose effectively.
//                         </div>

//                     </div>

//                     <br />

//                     <div className="col ml-auto" data-aos="fade-up" data-aos-delay="100">
//                         <div className="sticky-content">
//                             <div className="col ml-auto" data-aos="fade-up" data-aos-delay="100">
//                                 <h2 className="h2">Problems</h2>
//                                 <h3 className="h3">Usability</h3>
//                                 <div className="mb-3">
//                                     <ul className="list-unstyled list-line mb-3">
//                                         <li>The "Follow us on ..." social media banner has no links to any social media, which are also not
//                                             present anywhere else on the page.</li>
//                                         <li>The carousel has no signs to indicate that it is a carousel (like arrows or the selector at the
//                                             bottom). It initally just appears as an image and then fades in and out, requiring to be swiped to
//                                             change what's displayed (an action also not indicated).</li>
//                                         <li>Different fonts are used throughout the website with no consistent design language for links and
//                                             other key elements.</li>
//                                         <li>The "Connect With Us" logo is not clearly indicated as something that must be pressed, and
//                                             without any caption or obviously identifiable symbol, the user is required to make a greater
//                                             effort to read the text and understand what it is for.</li>
//                                         <li>The link to view more news is located a long way above the actual news section, which is
//                                             confusing.</li>
//                                         <li>There are no headings used anywhere, which inhibits the effort to produce a clear visual
//                                             hierarchy.</li>
//                                         <li>Font sizes do not adjust on resizing, making it difficult to read on smaller screens.</li>
//                                         <li>Efficiency is a problem:
//                                             <ul className="list-unstyled list-line mb-3">
//                                                 <li>Something simple and commonly used like "Report a problem" requires scrolling all the way to
//                                                     the bottom of the page to do.</li>
//                                                 <li>Other frequent actions (like "Email Log In") are also present at the bottom, increasing the
//                                                     time required to do these actions.</li>
//                                                 <li>Important information seems to be displayed on the carousel, which we've seen is confusing
//                                                     to figure out how to use.</li>
//                                             </ul>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col ml-auto" data-aos="fade-up" data-aos-delay="100">
//                                 <h3 className="h3">Learnability</h3>
//                                 <div className="mb-3">
//                                     <ul className="list-unstyled list-line mb-3">
//                                         <li>Some items may take a little time to get used to, like the carousel at the beginning</li>
//                                         <li>Some commonly used items (like "Report a Problem") may not be in a location people expect due to
//                                             their popularity, but for specific tasks, it should be easy to remember where they are.</li>
//                                         <li>Finding related tasks may be tricky - due to the lack of clear hierarchy, there may be some
//                                             issues with navigation or figuring out where things are.</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col ml-auto" data-aos="fade-up" data-aos-delay="100">
//                                 <h3 className="h3">Memorability</h3>
//                                 <div className="mb-3">
//                                     <ul className="list-unstyled list-line mb-3">
//                                         <li>Some things (though inefficient) are easy to remember: e.g. it would be easy to remember to
//                                             scroll to the bottom each time you needed to report a problem..</li>
//                                         <li>Other things are harder to remember: e.g. a user may not remember that they need to scroll
//                                             through the carousel to find Covid (or other) information</li>
//                                         <li>Some things may be memorable but may move around on the page: e.g. the new City Hall business
//                                             hours are on the carousel for now, but may not always be.</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col ml-auto" data-aos="fade-up" data-aos-delay="100">
//                                 <h3 className="h3">Accessibility</h3>
//                                 <div className="mb-3">
//                                     <ul className="list-unstyled list-line mb-3">
//                                         <li>The most common accessibility issue is contrast: WebAIM WAVE detected 46 "Very low contrast
//                                             errors". This is because the website often pairs light font colours (like a light orangish-red)
//                                             with light background colours (like light grey), making it difficult to read parts of the page.
//                                         </li>
//                                         <li>There are also issues with empty headers or empty links. While there are invisible and may not
//                                             impact an able user, this might be confusing for a user who requires a screen reader to navigate
//                                             websites.</li>
//                                         <li>Some of the empty links reduce usability for everyone: empty links like Twitter and Facebook
//                                             should be visible</li>
//                                         <li>There are many redundant link alerts where adjacent links go to the same URL. This may cause
//                                             some minor confusion for able users and may be much worse for users requiring screen readers,
//                                             which will repeat the same link many times.</li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="col ml-auto" data-aos="fade-up" data-aos-delay="100">
//                                 <h2 className="h2">Redesign</h2>
//                                 <h3 className="h3">Visual design style guide</h3>
//                                 <div className="mb-3">
//                                     <img src={vd} className="w-100" alt="..." />
//                                 </div>

//                                 <h3 className="h3">Lofi prototype</h3>
//                                 <div className="mb-3">
//                                     <h4 className="h4">Desktop</h4>
//                                     <img src={lfd} className="mw-100" alt="..." />
//                                 </div>
//                                 <div className="mb-3">
//                                     <h4 className="h4">Tablet</h4>
//                                     <img src={lft} className="mw-100" alt="..." />
//                                 </div>
//                                 <div className="mb-3">
//                                     <h4 className="h4">Mobile</h4>
//                                     <img src={lfm} className="mw-100" alt="..." />
//                                 </div>
//                                 <h3 className="h3">Hifi prototype</h3>
//                                 <div className="mb-3">
//                                     <h4 className="h4">Desktop</h4>
//                                     <img src={hfd} className="mw-100" alt="..." />
//                                 </div>
//                                 <div className="mb-3">
//                                     <h4 className="h4">Tablet</h4>
//                                     <img src={hft} className="mw-100" alt="..." />
//                                 </div>
//                                 <div className="mb-3">
//                                     <h4 className="h4">Mobile</h4>
//                                     <img src={hfm} className="mw-100" alt="..." />
//                                 </div>
//                                 <h3 className="h3">Redesigned website</h3>
//                                 <div className="mb-3">
//                                     <div id="myCarousel2" className="carousel slide" data-bs-ride="carousel">
//                                         <div className="carousel-inner">
//                                             <div className="carousel-item active">
//                                                 <img src={n1} className="w-100" alt="..." />
//                                             </div>
//                                             <div className="carousel-item">
//                                                 <img src={n2} className="w-100" alt="..." />
//                                             </div>
//                                             <div className="carousel-item">
//                                                 <img src={n3} className="w-100" alt="..." />
//                                             </div>
//                                         </div>
//                                         <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
//                                             <i className="fa-solid fa-angle-left fa-lg left-angle"></i>
//                                             <span className="visually-hidden">Previous</span>
//                                         </button>
//                                         <button className="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
//                                             <i className="fa-solid fa-angle-right fa-lg right-angle"></i>
//                                             <span className="visually-hidden">Next</span>
//                                         </button>

//                                         <div className="carousel-indicators">
//                                             <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" className="active" aria-current="true"
//                                                 aria-label="Slide 1"></button>
//                                             <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                                             <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                                         </div>
//                                     </div>
//                                     <div className="website-link">
//                                         <a href="https://cheesybug210.github.io/responsive-redesign-website">https://cheesybug210.github.io/responsive-redesign-website/</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//             </div>
//         </section>

//     </main>;
// }