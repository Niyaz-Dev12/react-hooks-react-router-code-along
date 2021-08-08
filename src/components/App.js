import React from 'react'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import About from './About';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
  <Navbar />
  <Switch>
  <Route exact path="/"><Home /></Route>
  <Route path="/about"><About /></Route>
  <Route path="/login"><Login /></Route>
  </Switch>
  
  
  </Router>
   
  );
}

export default App
