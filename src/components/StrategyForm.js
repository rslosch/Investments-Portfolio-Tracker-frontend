import React, { useState } from 'react'
import {Grid, TextField, Typography, Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const StrategyForm = ({onFormSubmit}) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    id: "",
    ticker: "",
    name: "",
    no_legs: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:9292/strategies",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
         body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(data => {onFormSubmit(data)
        navigate(`/strategies/${data.id}`)
    })
}

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
}

  return (
    <Stack gap={3} textAlign="center">
      <Typography variant="h2">Add a New Option Strategy</Typography>

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
          <input type="submit" value="Add to Portfolio" />
      </form>

    </Stack>
  )
}

export default StrategyForm