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
  const [deleteToggle, setDeleteToggle] = useState(true)

  useEffect(() => {
    fetch("http://localhost:9292/strategies")
    .then(r => r.json())
    .then(data => {
        setStrategies(data)
    })
  },[deleteToggle])

  function addForm(newStrat){
    const updatedStrategies = [...strategies, newStrat]
    setStrategies(updatedStrategies)
 }

  function handleDelete(stratId){
    fetch(`http://localhost:9292/strategies/${stratId}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(()=> {
      const updatedStrategies = strategies.filter(strat => strat.id != stratId)
      setStrategies(updatedStrategies)
      setDeleteToggle(false)
    })
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/strategies" element={<Strategies strategies={strategies} handleDelete={handleDelete} />} />
        <Route exact path="/strategies/new" element={<StrategyForm strategies={strategies} onFormSubmit={addForm} />} />
        <Route path="/strategies/:id" element={<Strategy strategies={strategies} onFormSubmit={addForm} setStrategies={setStrategies} handleDelete={handleDelete}/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
