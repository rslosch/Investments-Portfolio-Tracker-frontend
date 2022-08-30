import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, } from 'react-router-dom'
import StrategyLink from "./StrategyLink"
import { Button } from '@mui/material'
import StrategyForm from './StrategyForm'

const Strategies = () => {
    const navigate = useNavigate()

    const [strategies, setStrategies] = useState([])
    const [strategyFormFlag, setStrategyFormFlag] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/strategies")
        .then(r => r.json())
        .then(data => {
            setStrategies(data)
        })
    },[])

    const strategiesList = strategies.map(strat => <StrategyLink key={strat.id} strategy={strat} />)

    function addForm(newStrat){
       const updatedStrategies = [...strategies, newStrat]
       setStrategies(updatedStrategies)
    }

    function handleClick(e){
        setStrategyFormFlag(!e.target.value)
    }

    if(!strategyFormFlag){
        return (
            <div>
                <ul>
                    {strategiesList}
                </ul>
                {/* <Link to="/strategies/new"> */}
                    <Button onClick={(e) => handleClick(e)}>Add New Option Strategy</Button>
                {/* </Link> */}
            </div>
        )
    } else{
        return(
                <StrategyForm onFormSubmit={addForm} />
        )
    }
}

export default Strategies;