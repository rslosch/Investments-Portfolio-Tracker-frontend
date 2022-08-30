import React from 'react'

const Leg = ({leg}) => {
  return (
    <div>
        <h1>{leg.buy}, {leg.sell}, {leg.call}, {leg.put}, {leg.strike_price}, {leg.expirate_date}</h1>
    </div>
  )
}

export default Leg
