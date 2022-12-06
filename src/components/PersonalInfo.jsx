import "./PersonalInfo.css";
import "@fontsource/montserrat";
// import "@fontsource/open-sans";

export default function PersonalInfo(props) {
  return (
    <div className="personal-info">
      <h1>Hi, I'm so-and-so.</h1>
          <h3>Some more description.</h3>
          {/* more description? */}
          <h5>Check out some of my work down below!</h5>
    </div>
  );
}