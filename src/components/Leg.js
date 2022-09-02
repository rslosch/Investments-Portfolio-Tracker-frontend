import React from 'react'

const Leg = ({leg, handleLegDelete}) => {
    const isBuy = leg.buy
    const isSell = leg.sell
    const isCall = leg.call
    const isPut = leg.put

    if(isBuy && isCall){
        return <BuyCall handleLegDelete={handleLegDelete}leg={leg}/>
    } else if(isBuy && isPut){
        return <BuyPut handleLegDelete={handleLegDelete} leg={leg}/>
    } else if(isSell && isCall){
        return <SellCall handleLegDelete={handleLegDelete}leg={leg}/>
    }else if (isSell && isPut){
        return <SellPut handleLegDelete={handleLegDelete}leg={leg}/>
    }else{
    }
}

const BuyCall = ({leg, handleLegDelete}) => {
    return(
        <>
            <h1> ${leg.strike_price} Call</h1>
            <h4>{leg.no_contracts} Buys || {leg.expirate_date} Exp</h4>
            <button value={leg.id} onClick={(e) => handleLegDelete(e.target.value, leg.strategy_id)}> Delete Leg </button>
            <br></br>
        </>
    )
}

const BuyPut = ({leg, handleLegDelete}) => {
    return(
        <>
            <h1> ${leg.strike_price} Put</h1>
            <h4>{leg.no_contracts} Buys || {leg.expirate_date} Exp</h4>
            <button value={leg.id} onClick={(e) => handleLegDelete(e.target.value, leg.strategy_id)}> Delete Leg </button>
            <br></br>
        </>
    )
}

const SellCall = ({leg, handleLegDelete}) => {
    return(
        <>
            <h1> ${leg.strike_price} Call</h1>
            <h4>{leg.no_contracts} Sells || {leg.expirate_date} Exp</h4> 
            <button value={leg.id} onClick={(e) => handleLegDelete(e.target.value, leg.strategy_id)}> Delete Leg </button>
            <br></br>
        </>
    )
}

const SellPut = ({leg, handleLegDelete}) => {
    return(
        <>
            <h1> ${leg.strike_price} Put</h1>
            <h4>{leg.no_contracts} Sells || {leg.expirate_date} Exp</h4>
            <button value={leg.id} onClick={(e) => handleLegDelete(e.target.value, leg.strategy_id)}> Delete Leg </button>
            <br></br>
        </>
    )
}

export default Leg
