import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Lunch from './Components/Lunch';
import Dinner from './Components/Dinner';
import Introduction from './Components/Introduction';
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Lunch" element={<Lunch />}></Route>
        <Route path="/Dinner" element={<Dinner />}></Route>
        <Route path="/Introduction" element={<Introduction />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
