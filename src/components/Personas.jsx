import storyboard from "../assets/images/personas/storyboard.jpg";
import microwaveSketch from "../assets/images/personas/microwave-sketch.jpg";
// import microwaveUnannotated from "../assets/images/personas/microwave-not-annotated.jpg";
import busyBathilda from "../assets/images/personas/busy-bathilda.jpg";
import traditionalTommy from "../assets/images/personas/traditional-tommy.jpg";
import ProjectTop from "./ProjectTop";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./Project.css";

export default function Personas (props) {
  return <Container className="project-main">

    <ProjectTop
      path={props.path}
      title="Personas and Storyboarding: Microwave"
      subtitle="An analysis of a public microwave in the Computer Science building at Brown University"
      team="Solo Project"
      role="UI/UX Analyst"
      tools="Balsamiq"
      timeline="2 weeks"
      bgPosition={{"vertical":50, "horizontal":50}}
    />
    
    <Row className="section">
      <h2 className="montserrat">Overview</h2>
      <div className="open-sans">
        This was an analysis of a public microwave in the Computer Science building at Brown University. The goal was to observe users interacting with the microwave and ask them questions designed to understand their overall experience and pain points. This resulted in the development of user personas representing the typical user and a storyboard representing a persona's interaction with the microwave.
      </div>
    </Row>

    <hr />
    
    <Row className="section">
      <Col>
        <h2 className="montserrat">Sketch</h2>
        <Image fluid="true" src={microwaveSketch} />
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
    <hr />
    <Row className="section">
      <h2 className="montserrat">Observations</h2>
      <h6 className="montserrat text-muted">Objective observations of users interacting with the microwave</h6>
      <div className="open-sans">
        <ul className="list">
          <li>There was often some unfamiliarity with the microwave controls, which took a small amount of time to figure out.</li>
           <li>Some users tried opening the microwave using a door handle, while this microwave had a button.
           </li>
           <li>Multiple users accidentally pressed the knob in.</li>
           <li>Users overwhelmingly favored using the knob or Quick Min buttons over any of the presets.</li>
           <li>Users took a little time trying to figure out whether the microwave was on the time or weight setting.</li>
           <li>Users would usually look up whether something they weren't sure about could go in the microwave, though some would opt to put it in and keep a close eye on it.</li>
        </ul>
        </div>
    </Row>
    <hr />
    <Row className="section">
      <Col>
        <h2 className="montserrat">Questions</h2>
        <h6 className="montserrat text-muted">Questions asked to microwave users</h6>
        <div className="open-sans">
                           <ol>
                   <li>How often do you use a microwave?
                     <ol type="a">
                       <li>
                         Rarely ({"<="} 1 time a week) </li>
                       <li>
                         Occasionally (2 - 4 times a week)
                       </li>
                       <li>
                         Often (5 - 7 times a week)
                       </li>
                       <li>
                         Very often (8+ times a week)
                       </li>
                     </ol>
                   </li>

                   <li>What do you typically use a microwave for?
                     <ol type="a">
                       <li>
                         Reheating food / drink </li>
                       <li>
                         Cooking frozen food (e.g. Trader Joe's)
                       </li>
                       <li>
                         Cooking microwave foods (ex. popcorn, cup noodles)
                       </li>
                       <li>
                         Clock / timer
                       </li>
                       <li>
                         Other (please specify)
                       </li>
                     </ol>
                   </li>

                   <li>Are there any buttons on the microwave which you don't know what they do? If so, please give an
                     example of one.
                     <ol type="a">
                       <li>
                         Yes, many </li>
                       <li>
                         Yes, some
                       </li>
                       <li>
                         No, I know what they all do
                       </li>
                     </ol>
                   </li>

                   <li>Which of these do you consider most important in the microwave usage experience?
                     <ol type="a">
                       <li>
                         Variety of preset options
                       </li>
                       <li>
                         Ease of setting a time to heat
                       </li>
                       <li>
                         Accurate clock / timer
                       </li>
                       <li>
                         Other (please specify)
                       </li>
                     </ol>
                   </li>

                   <li>How would you prefer to know that the microwave has finished heating the food?
                     <ol type="a">
                       <li>
                         Just watching the microwave
                       </li>
                       <li>
                         Microwave beeping
                       </li>
                       <li>
                         Other (please specify)
                       </li>
                     </ol>
                   </li>

                   <li>Which of these do you find most frustrating about using the microwave? Select all that apply.
                     <ol type="a">
                       <li>
                         Confusing preset options
                       </li>
                       <li>
                         Many more buttons than required
                       </li>
                       <li>
                         Difficult to set a simple time for heating
                       </li>
                       <li>
                         Nothing is frustrating
                       </li>
                       <li>
                         Other (please specify)
                       </li>
                     </ol>
                   </li>

                   <li>Since there are no guidelines on the microwave, what would you do if you needed to heat something
                     which you weren't sure could be microwaved?
                     <ol type="a">
                       <li>
                         I would heat it anyway
                       </li>
                       <li>
                         I wouldn't heat it
                       </li>
                       <li>
                         I would look it up first
                       </li>
                     </ol>
                   </li>

                   <li>Would having guidelines for what can be heated on the microwave help?
                     <ol type="a">
                       <li>
                         Yes
                       </li>
                       <li>
                         No
                       </li>
                     </ol>
                   </li>
                 </ol>
        </div>
      </Col>
      <Col>
        <h2 className="montserrat">Responses</h2>
        <h6 className="montserrat text-muted">Summary of responses from microwave users</h6>
        <div className="open-sans">
          <ul className="list">
                   <li>While the frequency of usage varies between users, the most common reason that people use the
                     microwave is to reheat food or beverage, and sometimes to heat up frozen food.</li>
                   <li>There are several buttons on the microwave which users don't know what they do, such as
                     <i>Inverter Turbo Defrost</i> or <i>More/Less</i>. The preset options don't usually work for a
                     user's requirements.</li>
                   <li>The most important component of the user's microwave usage experience is the ability to easily and
                     quickly set a time and run the microwave. The sheer number of buttons and the confusing preset
                     options are the most frustrating components of the microwave.</li>
                   <li>When trying to heat something they didn't know could go in a microwave, users would usually look
                     up whether it could be heated or not. In some cases, if it was being heated for a short amount of
                     time, they would heat it and watch the microwave carefully. Having concise guidelines on the
                     microwave would help reduce the time required for this step.</li>
                 </ul>
        </div>
      </Col>
    </Row>
    <hr />
    <Row className="section">
      <h2 className="montserrat">Personas</h2>
      <h6 className="montserrat text-muted">User personas developed by breaking down the trends in observations and interview answers</h6>
      {/* <div className="open-sans">Wah</div> */}
      <Col className="open-sans">
        <h5 className="montserrat">Busy Bathilda</h5>
        <Image src={busyBathilda} />
      </Col>
      <Col className="open-sans">
        <h5 className="montserrat">Traditional Tommy</h5>
        <Image fluid={true} src={traditionalTommy} />
      </Col>
    </Row>
    <hr />
    <Row className="section">
      <h2 className="montserrat">Storyboard</h2>
      <h6 className="montserrat text-muted">A look at Traditional Tommy's experience using the microwave</h6>
      <Image fluid={true} src={storyboard} />
    </Row>
    <hr />
    <Row className="section">
      <h2 className="montserrat">Conclusion</h2>
      <h5 className="montserrat">Project conclusions</h5>
      <div className="open-sans mb-3">
        After researching and conducting interviews, I found that essentially everyone was able to use the microwave to achieve what they were aiming for - usually reheating food or beverage. However, the process of doing so was not always straightforward, and there were several components of the microwave which were frustrating to use. The most common reason for this was the sheer number of buttons and the confusing preset options. The microwave was also not always intuitive to use, and users would sometimes have to look up whether something could be heated in the microwave or not. Having concise guidelines on the microwave would help reduce the time required for this step.
      </div>
      <h5 className="montserrat">Personal takeaways</h5>
      <div className="open-sans">
        This was a project that allowed me to learn more about the design process, and I was able to gain a better understanding of how to conduct user research and interviews. I also learned more about the importance of user personas and storyboards, and how they can be used to guide the design process.
      </div>
    </Row>
  </Container>

}