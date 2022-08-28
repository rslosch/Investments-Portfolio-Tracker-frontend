import { Button } from '@mui/material'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
// Look into hook makeStyles for custom styling


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route to="/" element={<Home />} />
      </Routes>
      <Button>Hello World</Button>
    </Router>
  );
}

export default App;
