import React, { useState, useEffect,Link } from 'react';
 import Axios from 'axios';
import logo from './../images/logo.png'
 import Card1 from './../component/card1'

function createCard(tourn_data) {
    return (
        <Card1
            key={tourn_data.id}
            name={tourn_data.name}
            start_date={tourn_data.start_date}
            end_date={tourn_data.end_date}
            tourn_type = {tourn_data.tourn_type}
            max_team={tourn_data.max_team}
        />
    );
}





function ShowTournamentJ() {
  const [tournaments, setTournaments] = useState([]);
  const player_name = localStorage.getItem('player');
  useEffect(() => {
    const fetchtourn = async()=>{
        const res = await Axios.get(`http://localhost:8000/player_login/player_dashboard/view_joined_tournament/${player_name}`);
        console.log(res);
        setTournaments(res.data);
    };
        fetchtourn();
} ,[]);

  console.log(tournaments);
  return (
    <div>
      <h1>List of Joined Tournaments</h1>
      <ul>
       {tournaments.map(createCard)}
      </ul>
    </div>
  );
}

export default ShowTournamentJ;