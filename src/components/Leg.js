import React from 'react'

const Leg = ({leg}) => {
    const isBuy = leg.buy
    const isSell = leg.sell
    const isCall = leg.call
    const isPut = leg.put

    if(isBuy && isCall){
        return <BuyCall leg={leg}/>
    } else if(isBuy && isPut){
        return <BuyPut leg={leg}/>
    } else if(isSell && isCall){
        return <SellCall leg={leg}/>
    }else if (isSell && isPut){
        return <SellPut leg={leg}/>
    }else{
    }
}

const BuyCall = ({leg}) => {
    return(
        <>
            <h1> ${leg.strike_price} Call</h1>
            <h4>{leg.no_contracts} Buys || {leg.expirate_date} Exp</h4>
        </>
    )
}

const BuyPut = ({leg}) => {
    return(
        <>
            <h1> ${leg.strike_price} Put</h1>
            <h4>{leg.no_contracts} Buys || {leg.expirate_date} Exp</h4>
        </>
    )
}

const SellCall = ({leg}) => {
    return(
        <>
            <h1> ${leg.strike_price} Call</h1>
            <h4>{leg.no_contracts} Sells || {leg.expirate_date} Exp</h4>
        </>
    )
}

const SellPut = ({leg}) => {
    return(
        <>
            <h1> ${leg.strike_price} Put</h1>
            <h4>{leg.no_contracts} Sells || {leg.expirate_date} Exp</h4>
        </>
    )
}

export default Leg
