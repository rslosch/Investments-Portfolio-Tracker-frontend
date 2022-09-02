import React, { useEffect, useState } from 'react'
import Leg from './Leg'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import LegForm from './LegForm'


const Strategy = ({strategies, setStrategies}) => {
    const params = useParams()
    const id = params.id
    const strategy = strategies.find(strat => strat.id == id)

    let displayArr = "<p> loading... </p>"

    if (strategy) {
        displayArr = strategy.legs.map(leg => <Leg key={leg.id} leg={leg} handleLegDelete={handleLegDelete} />)
    }

    function addLegForm(newLeg){
        const updatedStrategy = strategy.legs.push(newLeg)
        const updatedStrategies = strategies.map(strat => strat.id === updatedStrategy.id ? updatedStrategy : strat)
        setStrategies(updatedStrategies)
    }

    function handleLegDelete(legID, strategyID) {
        fetch(`http://localhost:9292/legs/${legID}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const updatedLegs = strategy.legs.filter(leg => leg.id != legID)
        strategy.legs = updatedLegs
        const updatedStrategies = strategies.map(strat => strat.id === strategyID ? strategy : strat)
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

            : "loading"
            }
            <br />
            {displayArr}
            <br />
                <LegForm onLegFormSubmit={addLegForm} />
        </div>
    )
}

export default Strategy
