import React, { useState, useEffect } from 'react';
 import Axios from 'axios';
// import logo from './../images/logo.png'
 import Card1 from './../component/card1'

function createCard(tourn_data) {
  console.log("type:")
  console.log(tourn_data.tourn_type);
    return (
        <Card1
            key={tourn_data.id}
            name={tourn_data.name}
            tourn_type = {tourn_data.tourn_type}
            max_team={tourn_data.max_team}
        />
    );
}









function ShowTournament() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchtourn = async()=>{
        const res = await Axios.get('http://localhost:8000/organiser_login/organiser_dashboard/view_tournament');
        console.log(res);
        setTournaments(res.data);
    };
        fetchtourn();
} ,[]);
//     console.log("hii")
//     fetch('http://localhost:8000/organiser_login/organiser_dashboard/view_tournament')
//       .then(response => {setTournaments(response.data)
//         console.log(response);
//     })
//       .catch(error => console.error(error));
//         // console.log(data);
//   }, []);
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

export default ShowTournament;