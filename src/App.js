import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import PersonalInfo from "./components/PersonalInfo";
import PortfolioGallery from "./components/PortfolioGallery";
import AboutPage from './components/AboutPage';
import { Col, Container, Row } from 'react-bootstrap';
import portfolioData from "./assets/portfolio-data.json";
import Personas from './components/Personas';
import IterativeDesign from './components/IterativeDesign';
import ResponsiveRedesign from './components/ResponsiveRedesign';
import Development from './components/Development';
import PortfolioItem from './components/PortfolioItem';

function App () {
  const Home = () => {
    const { personas, redesign, iterative, development } = portfolioData;
    return <Container className="home-container" fluid="sm">
      <Row>
        <PersonalInfo />
      </Row>
      <Row>
        {/* <PortfolioGallery portfolioData={portfolioData} />
         */}
        <Col>
          <PortfolioItem
            image={personas.image}
            caption={personas.caption}
            description={personas.description}
            path={personas.path}
          />
          <PortfolioItem
            image={iterative.image}
            caption={iterative.caption}
            description={iterative.description}
            path={iterative.path}
          />
        </Col>
        <Col>
          <PortfolioItem
            image={redesign.image}
            caption={redesign.caption}
            description={redesign.description}
            path={redesign.path}
          />
          <PortfolioItem
            image={development.image}
            caption={development.caption}
            description={development.description}
            path={development.path}
          />
        </Col>


      </Row>
    </Container>;
    // <div className="home-container container">
    // <PersonalInfo />
    // <PortfolioGallery />
    // </div>;
  };

  const getComponent = (path, image) => {
    switch (path) {
      case "personas":
        return <Personas path={image} />;
      case "iterative-design":
        return <IterativeDesign path={image} />;
      case "responsive-redesign":
        return <ResponsiveRedesign path={image} />;
      case "development":
        return <Development path={image} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio/" element={<Home />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
        {Object.values(portfolioData).map(project => <Route path={`/portfolio/${project.path}`} element={getComponent(project.path, project.image)} />)}
        {/* </Route> */}
        <Route path="/portfolio/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
