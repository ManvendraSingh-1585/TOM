import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
function Card1(tourn_data){
    const navigate  =useNavigate();
    function handleClick(event) {
        var player = localStorage.getItem("player");
        const cardId = event.target.id;
        console.log(`Clicked card with ID ${cardId}`);
        Axios.post('http://localhost:8000/player_login/player_dashboard/join_tournament', {
            tournament_name: cardId, player_name : player
        }).then((response) => {
          if(response.data.status){
            // localStorage.setItem('organiser', usernameReg)
          //   console.log('users', user) // undefined
              navigate("/player_login/player_dashboard/view_tournament");
          }
          else{
  
          }
          console.log(response);
        });
      }
    


    return (
    <li class="ride">
        <div>
            <ul>
            <li><strong>Name :</strong>{tourn_data.name}</li>
            {/* <li><strong>start:</strong>{tourn_data.start_date}</li>
            <li><strong>end:</strong>{tourn_data.end_date}</li> */}
            <li><strong>type : </strong>{tourn_data.tourn_type}</li>
            <li><strong>max teams : </strong>{tourn_data.max_team}</li>
            </ul>
        </div>
    </li>
    )
};
export default Card1;
