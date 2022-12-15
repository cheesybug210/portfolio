import ProjectTop from "./ProjectTop";
import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import "./Project.css";

import w1 from '../assets/images/responsive-redesign/Website - 1.png';
import w2 from '../assets/images/responsive-redesign/Website - 2.png';
import w3 from '../assets/images/responsive-redesign/Website - 3.png';
import w4 from '../assets/images/responsive-redesign/Website - 4.png';
import w5 from '../assets/images/responsive-redesign/Website - 5.png';
import w6 from '../assets/images/responsive-redesign/Website - 6.png';
// import bkg from '../assets/images/responsive-redesign/background.png';
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
            <div className="open-sans">The Pawtucket government website is a good example of website that, while responsive, has several usability, learnability, memorability, and accessibility issues. Since it is a government website and people just want to get information quickly, it wasn't able to serve its purpose effectively. Here, I analyse the problems with the website and put forward a potential redesign with a live demo.</div>
        
            <hr />
        </Row>


        <Row className="section">
            <Col>
                <h2 className="montserrat">Current Website</h2>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={w1} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={w2} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={w3} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={w4} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={w5} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={w6} className="w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
                <div className="open-sans">
                <h6 className="montserrat text-muted mt-3 mb-0">Website</h6>
                <a href="https://pawtucketri.com/">https://pawtucketri.com/</a>

                </div>
            </Col>
        </Row>
        <hr />
        <Row className="section">
            <h2 className="montserrat">Problems</h2>
            <h6 className="montserrat text-muted">Problems observed with the website, broken down into different categories</h6>
            <Col>
                <h4 className="montserrat">Usability</h4>
                <div className="open-sans">
                    <ul className="list">
                        <li>The "Follow us on ..." social media banner has no links to any social media, which are also not
                            present anywhere else on the page.</li>
                        <li>The carousel has no signs to indicate that it is a carousel (like arrows or the selector at the
                            bottom). It initally just appears as an image and then fades in and out, requiring to be swiped to
                            change what's displayed (an action also not indicated).</li>
                        <li>Different fonts are used throughout the website with no consistent design language for links and
                            other key elements.</li>
                        <li>The "Connect With Us" logo is not clearly indicated as something that must be pressed, and
                            without any caption or obviously identifiable symbol, the user is required to make a greater
                            effort to read the text and understand what it is for.</li>
                        <li>The link to view more news is located a long way above the actual news section, which is
                            confusing.</li>
                        <li>There are no headings used anywhere, which inhibits the effort to produce a clear visual
                            hierarchy.</li>
                        <li>Font sizes do not adjust on resizing, making it difficult to read on smaller screens.</li>
                        <li>Efficiency is a problem:
                            <ul className="list-unstyled list-line mb-3">
                                <li>Something simple and commonly used like "Report a problem" requires scrolling all the way to
                                    the bottom of the page to do.</li>
                                <li>Other frequent actions (like "Email Log In") are also present at the bottom, increasing the
                                    time required to do these actions.</li>
                                <li>Important information seems to be displayed on the carousel, which we've seen is confusing
                                    to figure out how to use.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col>
                <h4 className="montserrat">Accessibility</h4>
                <div className="open-sans">
                    <ul className="list">
                        <li>The most common accessibility issue is contrast: WebAIM WAVE detected 46 "Very low contrast
                            errors". This is because the website often pairs light font colours (like a light orangish-red)
                            with light background colours (like light grey), making it difficult to read parts of the page.
                        </li>
                        <li>There are also issues with empty headers or empty links. While there are invisible and may not
                            impact an able user, this might be confusing for a user who requires a screen reader to navigate
                            websites.</li>
                        <li>Some of the empty links reduce usability for everyone: empty links like Twitter and Facebook
                            should be visible</li>
                        <li>There are many redundant link alerts where adjacent links go to the same URL. This may cause
                            some minor confusion for able users and may be much worse for users requiring screen readers,
                            which will repeat the same link many times.</li>
                    </ul>
                </div>
            </Col>
            </Row>
        <Row className="section">
            <Col>
                <h4 className="montserrat">Memorability</h4>
                <div className="open-sans">
                    <ul className="list">
                        <li>Some things (though inefficient) are easy to remember: e.g. it would be easy to remember to
                            scroll to the bottom each time you needed to report a problem..</li>
                        <li>Other things are harder to remember: e.g. a user may not remember that they need to scroll
                            through the carousel to find Covid (or other) information</li>
                        <li>Some things may be memorable but may move around on the page: e.g. the new City Hall business
                            hours are on the carousel for now, but may not always be.</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <h4 className="montserrat">Learnability</h4>
                <div className="open-sans">
                    <ul className="list">
                        <li>Some items may take a little time to get used to, like the carousel at the beginning</li>
                        <li>Some commonly used items (like "Report a Problem") may not be in a location people expect due to
                            their popularity, but for specific tasks, it should be easy to remember where they are.</li>
                        <li>Finding related tasks may be tricky - due to the lack of clear hierarchy, there may be some
                            issues with navigation or figuring out where things are.</li>
                    </ul>
                </div>
            </Col>
        </Row>
        <hr />
        <Row className="section">
            <h2 className="montserrat">Redesign</h2>
            <h6 className="montserrat text-muted">Revisiting the different stages of redesigning the website</h6>
            <div className="open-sans mb-3">
                The first stage of redesigning the website was drafting low-fidelity protoypes for mobile, tablet and desktop. Once I had the lo-fi prototypes ready, I used them to create a visual design style guide to ensure consistency in design and execution. This was used to create he high-fidelity prototypes, which were subsequently used to make the website.
                </div>
            <h4 className="montserrat">Lo-fi Prototypes</h4>
            <Col>
                <h5 className="montserrat">Mobile</h5>
                <Image className="zoom-hover" fluid src={lfm} />
            </Col>
            <Col>
                <h5 className="montserrat">Tablet</h5>
                <Image className="zoom-hover" fluid src={lft} />
            </Col>
            <Col>
                <h5 className="montserrat">Desktop</h5>
                <Image className="zoom-hover" fluid src={lfd} />
            </Col>
        </Row>
        <Row className="section">
            <Col>
            <h4 className="montserrat">Visual design style guide</h4>
            <Image fluid src={vd} />
            </Col>
            <Col>
                <h4 className="montserrat">Explanation</h4>
                <div className="open-sans">
                    The main factor considered was clarity and simplicity. Since this is a government website, a user would want to be able to find information quickly and easily, without having to wonder what different components on a page are for. The design is meant to be simple and easy to understand, with a clear visual hierarchy and a consistent design language.
                </div>
                <br />
                <div className="open-sans">
                    The main colours used are black and white. Buttons and links both use blue, which is common design language for websites. Additionally, the shade of blue used is the same as the colour in the Pawtucket logo for consistency. There are different designs for components that need to be responsive (such as the news box).
                </div>
            </Col>
        </Row>
        <Row className="section">
            <h4 className="montserrat">Hifi Prototypes</h4>
            <Col>
                <h5 className="montserrat">Mobile</h5>
                <Image className="zoom-hover" fluid src={hfm} />
            </Col>
            <Col>
                <h5 className="montserrat">Tablet</h5>
                <Image className="zoom-hover" fluid src={hft} />
            </Col>
            <Col>
                <h5 className="montserrat">Desktop</h5>
                <Image className="zoom-hover" fluid src={hfd} />
            </Col>
        </Row>
        <hr />
        <Row className="section">
            <Col>
                <h2 className="montserrat">Redesigned Website</h2>
                <div className="open-sans">
                    <h6 className="montserrat text-muted mt-3 mb-0">Link</h6>
                    <a href="https://cheesybug210.github.io/responsive-redesign-website">https://cheesybug210.github.io/responsive-redesign-website</a>

                </div>
                <div className="open-sans mt-3 mb-3">
                    Here is the redesigned website! It was made using HTML and Bootstrap. The website is responsive, and the design is consistent across all devices. The issues outlined earlier in the Problems section have been addressed, and the website is now easier to use and more accessible. 
                    </div>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={n1} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={n2} className="w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={n3} className="w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        <hr />
        <Row className="section">
            <h2 className="montserrat">Conclusion</h2>
            <h5 className="montserrat">Project conclusions</h5>
            <div className="open-sans mb-3">
                Analysing the website revealed several issues that could be addressed. The redesign was made with these issues in mind, and the website was made responsive and more accessible. The website is now easier to use, and the design is consistent across all devices.
                
            </div>
            <h5 className="montserrat">Personal takeaways</h5>
            <div className="open-sans">
            I learned a lot about responsive design and how to make a website more accessible. I also learned how to use Figma and Bootstrap, tools for prototyping and designing, and creating websites. I also have a greater understanding of how to analyse a website and identify issues that need to be addressed and how to go through the various stages of the design process, including prototyping and creating a visual design style guide.
            </div>
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