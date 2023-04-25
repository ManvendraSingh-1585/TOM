import React from 'react';
import './App.css';
// import Map from './App/maps';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PLogin from './App/player_login';
import OLogin from './App/organiser_login';
import OSignup from './App/organiser_signup';
import PSignup from './App/player_signup';
import Ctourn from './App/create_tournament';
import CustomerPage from './App/CustomerPage';
import Player_Dashboard from './App/player_dashboard';
import Organiser_Dashboard from './App/organiser_dashboard';
import ShowTournament from './App/view_tournament';
import  ShowTournamentp from './App/view_tournamentp';
import ShowTournamentJ from './App/view_joined_tournament'
import Home from './App/Home';
import Schedule from './App/schedule';
function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/player_login' element={<PLogin/>}/>
        <Route exact path='/organiser_login' element={<OLogin/>}/>
        <Route exact path='/organiser_signup' element={<OSignup/>}/>
        <Route exact path='/player_signup' element={<PSignup/>}/>
        <Route exact path='/player_login/player_dashboard' element={<Player_Dashboard/>}/>
        <Route exact path='/organiser_login/organiser_dashboard' element={<Organiser_Dashboard/>}/> 
        <Route exact path='/organiser_login/organiser_dashboard/create_tournament' element={<Ctourn/>}/>
        <Route exact path='/organiser_login/organiser_dashboard/view_tournament' element={<ShowTournament/>}/>
        <Route exact path='/player_login/player_dashboard/view_tournament' element={<ShowTournamentp/>}/>
        <Route exact path='/player_login/player_dashboard/view_joined_tournament' element={<ShowTournamentJ/>}/>
        <Route exact path='/player_login/player_dashboard/schedule' element={<Schedule/>}/>

        {/* <Route exact path='/login/driverpage/map' element={<RideSharingApp/>}/> */}
      </Routes>
    </div>
    </Router>
  );
}
export default App;