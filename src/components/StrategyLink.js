import React from 'react'
import { Link } from 'react-router-dom'

const StrategyLink = ({strategy, handleClick}) => {

  return (
    <div>
        <Link to={`/strategies/${strategy.id}`}>
            <h1>{`${strategy.ticker} Strategy`}</h1>
        </Link>
        <button value={strategy.id} onClick={(e) => handleClick(e.target.value)}> Delete </button>
    </div>
  )
}

export default StrategyLink
