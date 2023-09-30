import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Components/Home';
import Lunch from './Components/Lunch';
import Dinner from './Components/Dinner';
import Access from './Components/Access';
import Introduction from './Components/Introduction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Lunch" element={<Lunch />}></Route>
        <Route path="/Dinner" element={<Dinner />}></Route>
        <Route path="/Introduction" element={<Introduction />}></Route>
        <Route path="/Access" element={<Access />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
