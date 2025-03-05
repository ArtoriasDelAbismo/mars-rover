import { useNavigate } from "react-router-dom";
import '../index.css';

const rovers = ["Curiosity", "Perseverance"];

const RoverSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="rover-selector">
      <h1>Select a Rover</h1>
        <ul className="rover-list">
            {rovers.map((rover, index) => {
                return (
                    <div 
                    onClick={()=> navigate(`/rover/${rover}`)}
                    className={`rover-item ${rover.toLowerCase()}`} key={index}>
                        <li>{rover.toUpperCase()}</li>
                    </div>
                )
            })}
        </ul>
    </div>
  );
};

export default RoverSelector;
                        

                    


