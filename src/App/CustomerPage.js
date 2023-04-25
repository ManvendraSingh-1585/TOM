import React from 'react';
import {Link} from 'react-router-dom';
import logo from './../images/logo.png'
export default function customerPage() {
  return (
    <div id="container">
      <nav id="navbar">
        <Link to="/"><img src={logo} alt="logo" title="DecentRIDE | Cool with CarPool" /></Link>
        <input type="checkbox" id="burger-toggle" />
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to="/" class="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/login" class="shortcut">Profile</Link>
            {/* <Map/> */}
          </li>
        </ul>
      </nav>
      <section class="spread">
        <h2>Join Tournament</h2>
        <form action="#" method="POST">
          <input type="text" name="firstname" placeholder="Team-Name" required />
          <input type="text" name="mail" placeholder="Leader-details" required />
          <input type="submit" value="Enter" class="pill" />
        </form>
      </section>
    </div>
  )
}