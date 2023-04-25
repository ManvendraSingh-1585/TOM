import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
import logo from './../images/logo.png';

export default function OLogin() {
    const navigate=useNavigate()
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [selectedOption, setSelectedOption] = useState("");

    const login = (e) =>{
      e.preventDefault()
      Axios.post('http://localhost:8000/organiser_login', {
          username: usernameReg, password: passwordReg
      }).then((response) => {
        if(response.data.status){
          localStorage.setItem('organiser', usernameReg)
            navigate("/organiser_login/organiser_dashboard");
        }
        else{
            alert("Incorrect username or password.");
        }
        console.log(response);
      });
  };
  return (
    <div id="container">
      <nav id="navbar">
        <Link to="/"><img src={logo} alt="logo" title="Tourhub"/></Link>
        <input type="checkbox" id="burger-toggle"/>
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to="/" class="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/organiser_signup" class="shortcut">Sign Up</Link>
          </li>
          <li>
            <Link class="shortcut">HOLA AMINGO</Link>
          </li>
        </ul>
      </nav>
      <section class="spread" style={{position: "fixed"}}>
        <h2>Organizer log In</h2>
        <form>
          <input type="text" name="username" placeholder="Username" onChange={(e) => {
            setUsernameReg(e.target.value);
        }} required/>
          <input type="password" name="pin" placeholder="Password" minlength="8" onChange={(e) => {
            setPasswordReg(e.target.value);
        }} required/>
          <button type="submit" value="Login" className="pill butt" id="btn" onClick={login}>Login</button>
        </form>
        <p>Not yet registered, <Link to="/organiser_signup" class="shortcut">SignUp</Link> here!</p>
      </section>
    </div>
  )
}
