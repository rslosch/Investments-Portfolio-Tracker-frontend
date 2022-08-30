import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import Strategies from './Strategies';
import StrategyForm from './StrategyForm';
import Strategy from './Strategy';
// Look into hook makeStyles for custom styling


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategies" element={<Strategies/>} />
        <Route path="/strategies/:id" element={<Strategy/>} /> 
        <Route path="/strategies/:new" element={<StrategyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
