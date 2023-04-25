const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "tournhub"
});
db.connect((err)=>{
    if (err) {
        console.error(err);
    }
    else{
        console.log("Connected to database");
    }
});
app.post("/player_signup",(req,res) =>{
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    db.query("Insert into player (username, password, email) values (?,?,?)",[username,password,email],(err,result) => {
        if(result){
            res.send({status:true,...result});
        }
        else{
            res.send({status:false,message: "Enter Correct details!!"})
        }
    })
});
app.post("/player_login",(req,res) =>{
    var username = req.body.username;
    var password = req.body.password;

    db.query("select * from player where username=? and password = ?",[username,password],function(err,result,fields){
        if(err)
        {
            res.send({status:false,message: "Enter Correct details!!"});
        }
        else{
            if(result.length>0){
                console.log("Login successful")
                res.send({status:true,...result});
            }
            else{
                res.send({status:false,message: "Enter Correct details!!"})
            }
        }
    })
});

app.post("/organiser_signup",(req,res) =>{
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    db.query("Insert into organizer (username, password, email) values (?,?,?)",[username,password,email],(err,result) => {
        if(result){
            res.send({status:true,...result});
        }
        else{
            res.send({status:false,message: "Enter Correct details!!"})
        }
    })
});
app.post("/organiser_login",(req,res) =>{
    var username = req.body.username;
    var password = req.body.password;

    db.query("select * from organizer where username=? and password = ?",[username,password],function(err,result,fields){
        if(err)
        {
            res.send({status:false,message: "Enter Correct details!!"});
        }
        else{
            if(result.length>0){
                console.log("Login successful")
                res.send({status:true,...result});
            }
            else{
                res.send({status:false,message: "Enter Correct details!!"})
            }
        }
    })
});

app.post("/organiser_login/organiser_dashboard/create_tournament",(req,res) =>{
    var name = req.body.name;
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var tourn_type = req.body.Ttype;
    var max_team = req.body.max_team;
    db.query("Insert into tournament (name, start_date, end_date , tourn_type , max_team) values (?,?,?,?,?)",[name, start_date, end_date , tourn_type , max_team],(err,result) => {
        if(result){
            res.send({status:true,...result});
        }
        else{
            res.send({status:false,message: "Enter Valid details!!"})
        }
    })
});

app.get("/organiser_login/organiser_dashboard/view_tournament",(req,res) =>{
    db.query("select * from tournament",function(err,result){
        if(err)
        {
            res.send({status:false,message: "Enter Correct details!!"});
        }
        else
        {
            //console.log(result);
            res.send(result);
        }
    })
});



//app.post("/player_login/player_dashboard/join_tournament",(req,res) =>{
//     console.log("reached add player to tournament");
//     tourn_name = req.body.tournament_name;
//     player_name = req.body.player_name;
   
//     async function get_info()
//     {
//         var players_id;
//         var tournaments_id;
//         const p_id    = await db.execute("select id from player WHERE username = 'paras'");
//         const t_id = await db.execute("select id from tournament WHERE name = ?",[tourn_name] );
//         console.log(p_id);
//         console.log(t_id);
//     //     db.query("Insert into tournament_player (tournament_id , player_id) values (?,?)",[myObj.p_id, myObj.t_id],(err,result) => {
//     //         if(err){
//     //             console.log("fail")
//     //             console.log(err)
//     //             return err;
                
//     //         }
//     //         else{
//     //            console.log("saxx")
               
//     //         }
//     //  })
   
//     }
//     get_info();
    
   
    
// });




app.post("/player_login/player_dashboard/join_tournament",(req,res) =>{
   // First search query to get tournament_id
       console.log("reached add player to tournament");
    tournament_name = req.body.tournament_name;
    player_name = req.body.player_name;
const tournamentQuery = "SELECT id FROM tournament WHERE name = ?";
const tournamentPromise = new Promise((resolve, reject) => {
  db.query(tournamentQuery, [tournament_name], (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

// Second search query to get player_id
const playerQuery = "SELECT id FROM player WHERE username = ?";
const playerPromise = new Promise((resolve, reject) => {
  db.query(playerQuery, [player_name], (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

// Promise.all to execute both search queries in parallel
Promise.all([tournamentPromise, playerPromise])
  .then(([tournamentResult, playerResult]) => {
    const tournament_id = tournamentResult[0].id;
    const player_id = playerResult[0].id;
    const insertQuery = "INSERT INTO tournament_player (tournament_id, player_id) VALUES (?, ?)";
    db.query(insertQuery, [tournament_id, player_id], (error, result) => {
      if (error) {
        console.log(error);
        console.log("Failed to insert into tournament_player table.");
      } else {
        console.log("Successfully inserted into tournament_player table.");
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
})




app.get('/player_login/player_dashboard/view_joined_tournament/:player_name',(req,res) =>{
    console.log("reached:");
    
    const playerName = req.params.player_name;
    console.log(playerName);
    db.query(`SELECT tournament.*
              FROM tournament
              JOIN tournament_player ON tournament.id = tournament_player.tournament_id
              JOIN player ON tournament_player.player_id = player.id
              WHERE player.username = ?`, [playerName], (error, results, fields) => {
      if (error) {
        console.log("error");
        res.status(500).json({ message: 'Error retrieving tournaments for player' });
      } else {
        console.log(results);
        res.send  (results );
      }
    });
  
});





app.listen(8000, () => {
    console.log("running server");
});