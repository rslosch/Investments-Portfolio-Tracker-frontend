import React from 'react'
import { Typography } from '@mui/material'

function Home() {
  return (
    <>
      <Typography 
        variant="h2" 
        textAlign="center" 
        marginTop={10}>
        Keep Track of Your Options Strategies
      </Typography>

      <Typography 
        variant="body1" 
        textAlign="center"
        margin={4}> 
        View your list of current strategies and the seperate legs they are made of.
      </Typography>
    </>
  )
  
}

export default Home
