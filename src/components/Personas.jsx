import storyboard from "../assets/images/personas/storyboard.jpg";
import microwaveSketch from "../assets/images/personas/microwave-sketch.jpg";
// import microwaveUnannotated from "../assets/images/personas/microwave-not-annotated.jpg";
import busyBathilda from "../assets/images/personas/busy-bathilda.jpg";
import traditionalTommy from "../assets/images/personas/traditional-tommy.jpg";

export default function Personas () {
    return <main id="main">
    <section class="section">
      <div class="container">
        <div class="row mb-3 align-items-center">
          <div class="col-md-10" data-aos="fade-up">
            <h1>Personas and Storyboarding: Microwave</h1>
            <p>An analysis of the microwave in the kitchen on the third floor of the CIT</p>
          </div>
        </div>
      </div>

      <div class="site-section pb-0">
        <div class="container">
          <div class="row align-items-stretch">
            <div class="col-md-7" data-aos="fade-up" data-aos-delay="100" >
              <h2 class="h2">Sketch</h2>
              <img src={microwaveSketch} />
            </div>
            <div class="col-md-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
              <div class="sticky-content">
                <h2 class="h2">Description</h2>
                <div class="mb-3">
                  <p>The problem the microwave is trying to solve is that of heating food or beverages. It has several
                    components, which function as follows.</p>

                  <ul class="list-unstyled list-line mb-3">
                    <li>Microwave door with see-through glass: opens to allow the item to be put inside and is
                      see-through to allow the user to view the item being heated.</li>
                    <li>Time / weight display: displays the current time, time remaining to heat, or weight selected to
                      heat</li>
                    <li>Preset buttons: buttons with built-in functionality, such as a popcorn timer.</li>
                    <li>Time / weight knob: adjust the time / weight</li>
                    <li>Preset buttons: a row of buttons with built-in functionality, such as a Quick Min button</li>
                    <li>Action buttons: buttons to stop or start the microwave</li>
                    <li>Door release button: opens the microwave door</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
                </div>
                </div>
        <br />
        <div class="container">
          <div class="row align-items-stretch">
            <div class="col-md-12 ml-auto" data-aos="fade-up">
              <h2 class="h2">Observations</h2>
              <p class="mb-3">
                <span class="text-muted">
                  Objective observations of the users interacting with the microwave
                </span>
              </p>
              <div class="mb-3">
                <ul class="list-unstyled list-line mb-3">
                  <li>There was often some unfamiliarity with the microwave controls, which took a small amount of time
                    to figure out.</li>
                  <li>Some users tried opening the microwave using a door handle, while this microwave had a button.
                  </li>
                  <li>Multiple users accidentally pressed the knob in.</li>
                  <li>Users overwhelmingly favored using the knob or Quick Min buttons over any of the presets.</li>
                  <li>Users took a little time trying to figure out whether the microwave was on the time or weight
                    setting.</li>
                  <li>Users would usually look up whether something they weren't sure about could go in the microwave,
                    though some would opt to put it in and keep a close eye on it.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-stretch">
            <div class="col-md-6 ml-auto" data-aos="fade-up">
              <h2 class="h2">Questions</h2>
              <p class="mb-3">
                <span class="text-muted">
                  Questions posed to users of the microwave
                </span>
              </p>
              <div class="mb-3">
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
            </div>

            <div class="col-md-6 ml-auto" data-aos="fade-up">
              <h2 class="h2">Responses</h2>
              <div class="mb-3">
                <p class="mb-3">
                  <span class="text-muted">
                    A summary of the responses to the questions asked.
                  </span>
                </p>
                <ul class="list-unstyled list-line mb-3">
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
            </div>
          </div>
        </div>

        <div class="container" data-aos="fade-up">
          <h2 class="h2">Personas</h2>
          <p class="mb-3">
            <span class="text-muted">
              Breaking down the overarching trends in observations and interviews
            </span>
          </p>
          <div class="row align-items-stretch mb-3">
            <div class="col-md-4">
              <div class="inside"></div>
              <h3 class="h3">Busy Bathilda</h3>
                <img src={busyBathilda} class="img-fluid" />
            </div>
            <div class="col-md-4">
              <h3 class="h3">Traditional Tommy</h3>
                <img src={traditionalTommy} alt="Image" class="img-fluid" />
            </div>
            
          </div>
        </div>

        <div class="container">
          <div class="col-md-8 ml-auto" data-aos="fade-up" data-aos-delay="20">
            <h2 class="h2">Storyboard</h2>
            <p class="mb-3">
              <span class="text-muted">A look at Traditional Tommy's experience using the microwave</span>
            </p>
              <img src={storyboard} alt="Image" class="img-fluid" />
          </div>
        </div>
    </section>

  </main>
}