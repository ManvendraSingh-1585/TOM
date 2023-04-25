import React, { useState, useEffect } from 'react';
 import Axios from 'axios';
// import logo from './../images/logo.png'
 import Card from './../component/card'

function createCard(tourn_data) {
    return (
        <Card
            key={tourn_data.id}
            name={tourn_data.name}
            start_date={tourn_data.start_date}
            end_date={tourn_data.end_date}
            tourn_type = {tourn_data.tourn_type}
            max_team={tourn_data.max_team}
        />
    );
}





function ShowTournamentp() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchtourn = async()=>{
        const res = await Axios.get('http://localhost:8000/organiser_login/organiser_dashboard/view_tournament');
        console.log(res);
        setTournaments(res.data);
    };
        fetchtourn();
} ,[]);

  console.log(tournaments);
  return (
    <div>
      <h1>List of Tournaments</h1>
      <ul>
       {tournaments.map(createCard)}
      </ul>
    </div>
  );
}

export default ShowTournamentp;