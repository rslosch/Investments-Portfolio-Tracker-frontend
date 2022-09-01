import React, { useEffect, useState } from 'react'
import Leg from './Leg'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import LegForm from './LegForm'


const Strategy = ({strategies, setStrategies, onFormSubmit}) => {
    const params = useParams()
    const [strategyID, setStrategyID] = useState(params.id)
    const [display, setDisplay] = useState([])
    const strategy = strategies.find(strat => strat.id == strategyID)

    useEffect(() => {
        setStrategyID(params.id)
        const displayArr = strategies.length > 0 && strategy ? strategy.legs.map(leg => <Leg key={leg.id} leg={leg} />) : <p>Nothing found</p> 
        setDisplay(displayArr)
        // console.log("display array:", displayArr)
    },[strategies])

    //Legform post is not adding new element to strategies array... only posting to array legs within that element... therefore state not "changing"/ no rerender?

    function addLegForm(newLeg){
        // console.log("strategy before push:", strategy)
        console.log("strategy legs before push:", strategy.legs)
        const updatedStrategy = strategy.legs.push(newLeg)
        console.log("strategy legs after push", strategy.legs)
        console.log("strategy after push", strategy)

        const updatedStrategies = strategies.map(strat => {
            if (strat.id == updatedStrategy.id) {
                return updatedStrategy
            }
            return strat
        })
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
                {display}
                <br />
                 <LegForm onLegFormSubmit={addLegForm}/*onFormSubmit={onFormSubmit}*/ />
            </div>
        )
}

export default Strategy
