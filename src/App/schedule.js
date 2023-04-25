import React, { useState, useEffect } from 'react';
 import Axios from 'axios';
// import logo from './../images/logo.png'
 import Card2 from './../component/card2'

function createCard(tourn_data) {
    return (
        <Card2
            key={tourn_data.id}
            name={tourn_data.name}
            start_date={tourn_data.start_date.substr(0,10)}
            end_date={tourn_data.end_date.substr(0,10)}
        />
    );
}





function ShowSchedule() {
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
      <h1>Schedule of Tournaments</h1>
      <ul>
       {tournaments.map(createCard)}
      </ul>
    </div>
  );
}

export default ShowSchedule;