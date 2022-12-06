import "./PersonalInfo.css";

// cool personal description div layout



export default function PersonalInfo(props) {
  return (
    <div className="personal-info">
      <h1>Hi, I'm so-and-so.</h1>
          <h2>I'm currently a Computer Science major at Brown University and was an intern at Google in the summer of 2022.</h2>
          {/* more description? */}
          <h3>Check out some of my work down below!</h3>
    </div>
  );
}