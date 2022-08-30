import React from 'react'
import { Link } from 'react-router-dom'

const StrategyLink = ({strategy}) => {
  return (
    <div>
        <Link to={`/strategies/${strategy.id}`}>
            <h1>{`${strategy.ticker} Strategy`}</h1>
        </Link>
    </div>
  )
}

export default StrategyLink
