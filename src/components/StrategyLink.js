import React from 'react'
import { Link } from 'react-router-dom'

const StrategyLink = ({strategy, handleClick}) => {

  return (
    <div>
        <Link to={`/strategies/${strategy.id}`}>
            <h1>{strategy.ticker} Strategy</h1>
        </Link>
        <h3>{strategy.no_legs} Legs</h3>
        <Link to={`/strategies/${strategy.id}/edit`}>
          <button> Edit Strategy </button>
        </Link>
        <button value={strategy.id} onClick={(e) => handleClick(e.target.value)}> Delete </button>
    </div>
  )
}

export default StrategyLink
