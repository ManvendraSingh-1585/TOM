import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
// import Map from './map'
import logo from './../images/logo.png'
export default function Player_Dashboard() {
    var player = localStorage.getItem("player");
  return (
    <div id="container">
      <nav id="navbar">
        <a href="../"><img src={logo} alt="tournhub-logo" title="Tournhub"/></a>
        <input type="checkbox" id="burger-toggle"/>
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to = "/" class="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/player_login/player_dashboard/schedule" class="shortcut">Schedule</Link>
          </li>
          <li>
            <Link to = "/" class="shortcut">Log out</Link>
          </li>
        </ul>
      </nav>
      <section class="spread">
        <h2>Player dashboard for {player}</h2>
        <ul id="rides">
          <li class="ride show">
            <a href="/player_login/player_dashboard/view_tournament"  class="pill">Show Tournaments</a>
          </li>
          <li class="ride show">
          <Link to="/player_login/player_dashboard/view_joined_tournament" class="pill">Show Joined Tournament</Link>
          </li>
        </ul>
         
              
      </section>
    </div>
  )
}