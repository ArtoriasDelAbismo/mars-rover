import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import RoverDetails from "./pages/RoverDetails"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rover/:roverName" element={<RoverDetails />} />
      </Routes>
    </Router>
  )
}

export default App
