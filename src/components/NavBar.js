import React from 'react'
import {AppBar, Box, Toolbar, Typography, Stack, IconButton} from '@mui/material';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Options Strategy Tracker
            </Typography>
            <Stack direction='row' spacing={2}>
              <Link to="/">Home</Link>
              <Link to="/strategies">Display Strategies</Link>
              <Link to="/strategies/new">Add Strategy</Link>
            </Stack>
        </Toolbar>
    </AppBar>
</Box>
  )
}

export default NavBar