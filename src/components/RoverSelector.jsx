import { useNavigate } from "react-router-dom";
import "../index.css";
import '../styles/RoverSelector.css'
import Header from "./Header.jsx";

const rovers = ["Curiosity", "Perseverance"];

const RoverSelector = () => {
  const navigate = useNavigate();

  return (
<>
  <Header />
  <div className="section-divider-selector"></div>
  <div className="rover-selector">
    <h1 className="rover-title">Select a Rover to Explore</h1>
    <p className="rover-subtitle">
      Choose one of NASA's legendary Mars rovers and dive into their incredible missions.
    </p>
    <ul className="rover-list">
      {rovers.map((rover, index) => (
        <div
          onClick={() => navigate(`/rover/${rover}`)}
          className={`rover-item ${rover.toLowerCase()}`}
          key={index}
        >
          <li className="rover-name">{rover.toUpperCase()}</li>
        </div>
      ))}
    </ul>
  </div>
</>

  );
};

export default RoverSelector;
