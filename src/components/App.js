import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useEffect, useState, useRef} from 'react'
import NavBar from "./NavBar";
import Home from "./Home";
import Strategies from './Strategies';
import StrategyForm from './StrategyForm';
import Strategy from './Strategy';
// Look into hook makeStyles for custom styling


function App() {

  const [strategies, setStrategies] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/strategies")
    .then(r => r.json())
    .then(data => {
        setStrategies(data)
    })
  },[])

  function addForm(newStrat){
    const updatedStrategies = [...strategies, newStrat]
    setStrategies(updatedStrategies)
 }

  function addLegForm(newLeg){

 }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/strategies" element={<Strategies strategies={strategies} />} />
        <Route exact path="/strategies/new" element={<StrategyForm strategies={strategies} onFormSubmit={addForm} />} />
        <Route path="/strategies/:id" element={<Strategy strategies={strategies} onFormSubmit={addForm} setStrategies={setStrategies}/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
