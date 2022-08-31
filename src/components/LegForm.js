import React, { useState } from 'react'
import {Grid, TextField, Typography, Stack, Checkbox, FormControlLabel, FormGroup} from '@mui/material'

const LegForm = ({strategy, onFormSubmit}) => {

    const [form, setForm] = useState({
        buy: false,
        sell: false,
        call: false,
        put: false,
        strike_price: "",
        no_contracts: "",
        expirate_date: "",
        strategy_id: strategy.id
      })
    
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:9292/${strategy.id}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(form)
        })
        .then(r => r.json())
        .then(data => {onFormSubmit(data)
            // navigate(`/strategies/${data.id}`)
        })
    }

    const handleChange = (e) => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        setForm({
            ...form,
            [e.target.name] : value
        })
    }

  return (
    <Stack gap={3} textAlign="left">
      <Typography variant="h5">Add a New Leg to this Strategy</Typography>

      <form onSubmit={handleSubmit}>
          <Grid container direction="row">
                <FormControlLabel
                    label="Buy"
                    control={<Checkbox
                        name="buy"
                        checked={form.buy}
                        onChange={handleChange}
                    />}
                />
                <FormControlLabel
                    label="Sell"
                    control={<Checkbox
                        name="sell"
                        checked={form.sell}
                        onChange={handleChange}
                    />}
                />
                <FormControlLabel
                    label="Call"
                    control={<Checkbox
                        name="call"
                        checked={form.call}
                        onChange={handleChange}
                    />}
                />
                <FormControlLabel
                    label="Put"
                    control={<Checkbox
                        name="put"
                        checked={form.put}
                        onChange={handleChange}
                    />}
                />
              <Grid>
                  <TextField
                      variant="standard"
                      label="Strike Price"
                      name="strike_price"
                      value={form.strike_price}
                      onChange={handleChange}
                      sx={{mr: 2}}
                  />
              </Grid>
              <Grid>
                  <TextField
                      variant="standard"
                      label="# of Contracts"
                      name="no_contracts"
                      value={form.no_contracts}
                      onChange={handleChange}
                      sx={{mr: 2}}
                  />
              </Grid>
              <Grid>
                  <TextField
                      variant="standard"
                      label="Expiration Date"
                      name="expirate_date"
                      value={form.expirate_date}
                      onChange={handleChange}
                      sx={{mr: 2}}
                  />
              </Grid>
              <input type="submit" value="Add to Portfolio" />
          </Grid>
          
      </form>

    </Stack>  )
}

export default LegForm