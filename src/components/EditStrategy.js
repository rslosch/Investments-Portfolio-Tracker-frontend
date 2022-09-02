import React, { useState } from 'react'
import {Grid, TextField, Typography, Stack} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

const EditStrategy = ({onFormSubmit, strategies}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  const strategy = strategies.find(strat => strat.id == id)

  const [form, setForm] = useState({
    id: "",
    ticker: strategy.ticker,
    name: strategy.name,
    no_legs: strategy.no_legs,
    legs: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:9292/strategies/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
         body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(data => {
        navigate(`/strategies/${data.id}`)
        onFormSubmit(data)
    })
}

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
}

if (!strategy) return <p>Loading...</p>

  return (
    <Stack gap={3} textAlign="center">
      <Typography variant="h2">Update {strategy.ticker} Option Strategy</Typography>

      <form onSubmit={handleSubmit}>
          <Grid container direction="column">
              <Grid>
                  <TextField
                      variant="outlined"
                      label="Ticker"
                      name="ticker"
                      value={form.ticker}
                      onChange={handleChange}
                  />
              </Grid>
              <Grid>
                  <TextField
                      variant="outlined"
                      label="Name of Strategy"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                  />
              </Grid>
              <Grid>
                  <TextField
                      variant="outlined"
                      label="# of Legs"
                      name="no_legs"
                      value={form.no_legs}
                      onChange={handleChange}
                  />
              </Grid>
          </Grid>
          <input type="submit" value="Update" />
      </form>

    </Stack>
  )
}

export default EditStrategy