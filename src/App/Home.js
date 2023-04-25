import React from 'react'
import {Link} from 'react-router-dom'
import logo from './../images/logo.png';
export default function Home() {
  return (
    <div class="container">
        <nav id="navbar">
            <Link to='/'><img src={logo} alt="logo"/></Link>
            <input type="checkbox" id="burger-toggle"/>
            <label id="burger" for="burger-toggle">
            <div></div>
            </label>
            <ul>
            <li>
                <Link to="/" class="shortcut">Home</Link>
            </li>
            <li>
                <a href='#description-two' class="shortcut">About</a>
            </li>
            <li>
                <Link to="/player_login" class="shortcut">Player</Link>
            </li>
            <li>
                <Link to="/organiser_login" class="shortcut">Organizer</Link>
            </li>
            </ul>
        </nav>
        <section id="wrap">
            <main>
              <h1>TOM</h1>
              <p>Tournament organizing and managing shouldn't be that hard, right?</p>
            </main>
        </section>
        <section class="more">
            <h2>Why Tournament app?</h2>
            <div class="description" id="description-one">
              <div class="image-box"></div>
                <div class="word-box">
                     
                </div>
            </div>
        </section>
        <section class="more">
            <h2>About Us</h2>
            <div class="description" id="description-two">
            </div>
            <div id="btn-wrap">
              <Link to="/player_login" class="pill">Login(player)</Link>
              <Link to="/organiser_login" class="pill">Login(organiser)</Link>      
            </div>
        </section>
    </div>
  )
}
