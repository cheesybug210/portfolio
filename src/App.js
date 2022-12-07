import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import PersonalInfo from "./components/PersonalInfo";
import PortfolioGallery from "./components/PortfolioGallery";
import AboutPage from './components/AboutPage';
import { Container } from 'react-bootstrap';
import portfolioData from "./assets/portfolio-data.json";
import Personas from './components/Personas';
import IterativeDesign from './components/IterativeDesign';
import ResponsiveRedesign from './components/ResponsiveRedesign';
import Development from './components/Development';

function App () {
  const Home = () => {
    return <Container className="home-container" fluid="sm">
      <PersonalInfo />
      <PortfolioGallery portfolioData={portfolioData} />
    </Container>;
    // <div className="home-container container">
    // <PersonalInfo />
    // <PortfolioGallery />
    // </div>;
  }

  const pageMap = {
    "personas": <Personas />,
    "iterative-design": <IterativeDesign />,
    "responsive-redesign": <ResponsiveRedesign />,
    "development": <Development />,
  }

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Home />} />
          {/* <Route path="about" element={<AboutPage />} /> */}
          {portfolioData.map(project => <Route path={`/portfolio/${project.path}`} element={pageMap[project.path]} />)}
        {/* </Route> */}
        <Route path="/portfolio/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
