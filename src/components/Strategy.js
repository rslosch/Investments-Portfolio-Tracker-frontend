import React, { useEffect, useState } from 'react'
import Leg from './Leg'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import LegForm from './LegForm'


const Strategy = ({strategies, onFormSubmit}) => {
    const params = useParams()
    const [strategy, setStrategy] = useState(strategies.find(strat => strat.id == params.id))
 
    const displayLegs = strategies.length > 0 && strategy ? strategy.legs.map(leg => <Leg key={leg.id} leg={leg} />) : <p>Nothing found</p> 

    useEffect(() => {
        setStrategy(strategies.find(strat => strat.id == params.id))
    },[strategies])


        return (
            <div>
                <br />
                {strategy
                ? <>
                    <h1> {strategy.ticker} || {strategy.name}</h1> 
                    <h4> Number of legs: {strategy.no_legs} </h4>               
                </>

                : null
                }
                <br />
                {displayLegs}
                <br />
                 <LegForm onFormSubmit={onFormSubmit}/>
                <Button> Add a New Leg</Button>
            </div>
        )
}

export default Strategy
