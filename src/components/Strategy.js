import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

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
            console.log(data)
            setStrategy(data)
        })
    },[])


  return (
    <div>
        <br />
        <h1>{strategy.ticker} || {strategy.name}</h1>
        <h4> Number of legs: {strategy.no_legs}</h4>
    </div>
  )
}

export default Strategy
