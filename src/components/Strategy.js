import React, { useState } from 'react'
import Leg from './Leg'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import LegForm from './LegForm'


const Strategy = ({strategies, setStrategies}) => {
    const params = useParams()
    const [strategyLegs, setStrategyLegs] = useState(strategies.filter(strat => strat.id == params.id).map(s => s.legs))

    console.log(strategyLegs)

    // useEffect(() => {
    //     fetch(`http://localhost:9292/strategies/${params.id}`)
    //     .then(r => r.json())
    //     .then(data => {
    //         setStrategy(data)
    //     })
    // },[])

    // const currentStratLegs = strategies.filter(strat => strat.id == params.id).map(s => s.legs)

    const currentStratObj = strategies.filter(strat => strat.id == params.id).pop()

    const displayLegs = strategyLegs[0].map(leg => <Leg key={leg.id} leg={leg} />)
    debugger

    function addLeg(newLeg){
        const updatedLegs = [...strategyLegs, newLeg]
        setStrategies(updatedLegs)
    }

        return (
            <div>
                <br />
                <h1> {currentStratObj.ticker} || {currentStratObj.name}</h1>
                <h4> Number of legs: {currentStratObj.no_legs} </h4>
                <br />
                {displayLegs}
                <br />
                {/* <LegForm /> */}
                <Button> Add a New Leg</Button>
            </div>
        )
}

export default Strategy
