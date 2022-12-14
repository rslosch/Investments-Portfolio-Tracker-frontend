import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useEffect, useState, useRef} from 'react'
import NavBar from "./NavBar";
import Home from "./Home";
import Strategies from './Strategies';
import StrategyForm from './StrategyForm';
import Strategy from './Strategy';
import EditStrategy from './EditStrategy';
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


 function updateStrategies(updatedStrategy){
  // debugger
  // console.log(updatedStrategy)
  const updatedStrategies = strategies.map(strat => strat.id === updatedStrategy.id ? updatedStrategy : strat)
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
    })
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/strategies" element={<Strategies strategies={strategies} handleDelete={handleDelete} />} />
        <Route exact path="/strategies/new" element={<StrategyForm strategies={strategies} onFormSubmit={addForm} />} />
        <Route exact path="/strategies/:id/edit" element={<EditStrategy strategies={strategies} onFormSubmit={updateStrategies} />} />
        <Route path="/strategies/:id" element={<Strategy strategies={strategies} onFormSubmit={addForm} setStrategies={setStrategies} handleDelete={handleDelete}/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
