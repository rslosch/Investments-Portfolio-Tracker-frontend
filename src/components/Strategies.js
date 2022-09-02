import React from 'react'
import {Link} from 'react-router-dom'
import StrategyLink from "./StrategyLink"
import { Button } from '@mui/material'

const Strategies = ({strategies, handleDelete}) => {


    const strategiesList = strategies.map(strat => <StrategyLink key={strat.id} strategy={strat} handleClick={handleDelete}/>)

    return (
        <div>
            <ul>
                {strategiesList}
            </ul>
            <Link to="/strategies/new">
                <Button variant="outlined" >Add New Option Strategy</Button>
            </Link>
        </div>
    )

}

export default Strategies;