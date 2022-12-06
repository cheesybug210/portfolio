import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import PersonalInfo from "./components/PersonalInfo";
import PortfolioGallery from "./components/PortfolioGallery";
import AboutPage from './components/AboutPage';

function App () {
  const Home = () => {
    return <div>
    <PersonalInfo />
    <PortfolioGallery />
    </div>;
  }

  return (
    <div className="App">
      <NavBar />

      {/* <Home /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/messages" element={Messages} /> */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
