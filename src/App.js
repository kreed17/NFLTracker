import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'


import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PlayerStats from './pages/PlayerStats';
import Scores from './pages/Scores';
import TeamStats from './pages/TeamStats';


function App() {
  return (
    <Router>
        <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/stats' component={PlayerStats} />
      <Route exact path='/stats/team' component={TeamStats} />
      <Route exact path= '/scores' component ={Scores} />


    </Router>
  );
}

export default App;
