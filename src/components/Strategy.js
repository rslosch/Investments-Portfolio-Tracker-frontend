import React, {useState, useEffect} from 'react'
import Leg from './Leg'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import LegForm from './LegForm'


const Strategy = () => {
    const [strategy, setStrategy] = useState({
        legs: []
    })
    const [legFormFlag, setLegFormFlag] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/strategies/${params.id}`)
        .then(r => r.json())
        .then(data => {
            setStrategy(data)
        })
    },[])

    const legs = strategy.legs.map((leg) => <Leg key={leg.id} leg={leg} />)

    function addLeg(newLeg){
        const updatedLegs = [...legs, newLeg]
        setStrategy = setStrategy(updatedLegs)
    }

    // if(!legFormFlag){
        return (
            <div>
                <br />
                <h1>{strategy.ticker} || {strategy.name}</h1>
                <h4> Number of legs: {strategy.no_legs}</h4>
                <br />
                {legs}
                <br />
                <LegForm strategy={strategy} onFormSubmit={addLeg} />
                <Button> Add a New Leg</Button>
            </div>
        )
    // }else{
    //     return(

    //     )
    // }
}

export default Strategy
