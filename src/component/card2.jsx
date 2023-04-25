import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
function Card1(tourn_data){
    const navigate  =useNavigate();
  


    return (
    <li class="ride">
        <div>
            <ul>
            <li><strong>Name :</strong>{tourn_data.name}</li>
             <li><strong>start date : </strong>{tourn_data.start_date}</li>
            <li><strong>end date : </strong>{tourn_data.end_date}</li> 
            
            </ul>
        </div>
    </li>
    )
};
export default Card1;
