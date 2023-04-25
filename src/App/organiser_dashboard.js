import React, { useState } from 'react'
// import Map from './map'
import logo from './../images/logo.png'
import {Link,useNavigate} from 'react-router-dom'
export default function Organiser_Dashboard() {
    
   var norganiser = localStorage.getItem("organiser");
   var organiser = "";
   let words = norganiser.split(" ");
   for (let i = 0; i < words.length; i++) {
    let word = words[i];
    organiser += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }
  return (
    <div id="container">
      <nav id="navbar">
        <a href="../"><img src={logo} alt="rider-logo" title="Tournhub"/></a>
        <input type="checkbox" id="burger-toggle"/>
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <a href="../" class="shortcut">Home</a>
          </li>
          <li>
          <Link to="/player_login/player_dashboard/schedule" class="shortcut">Schedule</Link>
            </li>
            <li>
            <a href="../" class="shortcut">Log out</a>
          </li>
        </ul>
      </nav>
      <section class="spread">
        <h2>Organiser dashboard for  {organiser}
        </h2>
        <ul id="rides">
          <li class="ride show">
            <a href="/organiser_login/organiser_dashboard/view_tournament"  class="pill">Show Tournaments</a>

          </li>
          <li class="ride create">
            <a href="/organiser_login/organiser_dashboard/create_tournament"  class="pill">ADD Tournaments</a>
          </li>
        </ul>
      </section>
    </div>
  )
}