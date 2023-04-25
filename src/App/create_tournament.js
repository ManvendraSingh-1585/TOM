import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
import logo from './../images/logo.png'

export default function Ctourn() {
  const navigate=useNavigate()
    const [username, setUsername] = useState('')
    const [start_date, setStart_date] = useState('')
    const [end_date, setEnd_date] = useState('')
    const [Ttype, setType] = useState('')
    const [max_teams, setMaxteams] = useState('')

    const signup = (e) =>{
    // console.log(username);
    // console.log(start_date);
    // console.log(end_date);
    // console.log(Ttype);
    // console.log(max_teams);
      e.preventDefault()
    //   console.log("posting");
        Axios.post('http://localhost:8000/organiser_login/organiser_dashboard/create_tournament', {
            
            name: username, start_date: start_date, end_date: end_date , Ttype : Ttype , max_team : max_teams
        }).then((response) => {
            if(response.data.status){
              navigate("/organiser_login/organiser_dashboard")
            }
            else{
              console.log("unsuccesfull")
            }
            console.log(response);
        }).catch((err)=>{console.log(err)});
    };
  return (
    <div id="container">
      <nav id="navbar">
        <Link to="/"><img src={logo} alt="logo" title="TOM | Tournament organizing and managing system" /></Link>
        <input type="checkbox" id="burger-toggle" />
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to="/" class="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/" class="shortcut">Profile</Link>
          </li>
          <li>
            <Link to="/" class="shortcut">Log out</Link>
          </li>
        </ul>
      </nav>
      <section class="spread" style={{position: "fixed"}}>
        <h2>Create tournament</h2>
        <form>
          <input type="text" name="name" placeholder="Tournament Name" onChange={(e) => {
            setUsername(e.target.value);
        }} required/>
          <input type="date" name="start_date" placeholder="Tournament start date" onChange={(e) => {
            setStart_date(e.target.value)
        }} required/>
            <input type="date" name="end_date" placeholder="Tournament End date" onChange={(e) => {
            setEnd_date(e.target.value);
        }} required/>
        <input type="text" name="Ttype" placeholder="Tournament type eg:online/offline" onChange={(e) => {
            setType(e.target.value);
        }} required/>
        <input type="int" name="max_teams" placeholder="Max no of teams" onChange={(e) => {
            setMaxteams(e.target.value);
        }} required/>
          <input type="submit" value="create Tournament" class="pill" onClick={signup}/>
        </form>
      </section>
    </div>
  )
}


