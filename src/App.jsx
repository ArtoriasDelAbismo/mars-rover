import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RoverDetails from "./components/RoverDetails";
import RoverSelector from "./components/RoverSelector";
import ApodPage from "./components/ApodPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rovers" element={<RoverSelector />} />
        <Route path="/apod" element={<ApodPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/rover/:roverName" element={<RoverDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

