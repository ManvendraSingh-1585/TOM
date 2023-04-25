import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
import logo from './../images/logo.png'

export default function PSignup() {
  const navigate=useNavigate()
    const [usernameReg, setUsernameReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const signup = (e) =>{
      e.preventDefault()
        Axios.post('http://localhost:8000/player_signup', {
            username: usernameReg, email: emailReg, password: passwordReg
        }).then((response) => {
            if(response.data.status){
              alert("Account Created")
              navigate("/player_login/player_dashboard")
            }
            else{
               alert("Invalid details")
            }
            console.log(response);
        });
    };
  return (
    <div id="container">
      <nav id="navbar">
        <Link to="/"><img src={logo} alt="logo" title="Tournhub" /></Link>
        <input type="checkbox" id="burger-toggle" />
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to="/" class="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/player_login" class="shortcut">Log In</Link>
          </li>
        </ul>
      </nav>
      <section class="spread" style={{position: "fixed"}}>
        <h2>player Sign Up</h2>
        <form>
          <input type="text" name="name" placeholder="Name" onChange={(e) => {
            setUsernameReg(e.target.value);
        }} required/>
          <input type="email" name="mail" placeholder="Email address" onChange={(e) => {
            setEmailReg(e.target.value)
        }} required/>
          <input type="password" name="pin" placeholder="Password" minlength="8" onChange={(e) => {
            setPasswordReg(e.target.value)
        }} required/>
          <input type="submit" value="Sign up" class="pill" onClick={signup}/>
        </form>
        <p class= "spread">Already registered, <Link to="/player_login" class="shortcut">LogIn</Link> here!</p>
      </section>
    </div>
  )
}


