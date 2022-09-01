import React, { useEffect, useState } from 'react'
import Leg from './Leg'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import LegForm from './LegForm'


const Strategy = ({strategies, setStrategies}) => {
    const params = useParams()
    // const [strategyID, setStrategyID] = useState(params.id)
    const id = params.id
    const strategy = strategies.find(strat => strat.id == id)

    let displayArr = "<p> loading... </p>"

    if (strategy) {
        displayArr = strategy.legs.map(leg => <Leg key={leg.id} leg={leg} />)
    }

    function addLegForm(newLeg){
        const updatedStrategy = strategy.legs.push(newLeg)
        const updatedStrategies = strategies.map(strat => strat.id === updatedStrategy.id ? updatedStrategy : strat)
        setStrategies(updatedStrategies)
    }

    return (
        <div>
            <br />
            {strategy
            ? 
            <>
                <h1> {strategy.ticker} || {strategy.name}</h1> 
                <h4> Number of legs: {strategy.no_legs} </h4>               
            </>

            : "error"
            }
            <br />
            {displayArr}
            <br />
                <LegForm onLegFormSubmit={addLegForm}/*onFormSubmit={onFormSubmit}*/ />
        </div>
    )
}

export default Strategy
