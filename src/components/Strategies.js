import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StrategyLink from "./StrategyLink"

const Strategies = () => {
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

    return (
        <div>
            <ul>
                {strategiesList}
            </ul>
        </div>

    )
}

export default Strategies;