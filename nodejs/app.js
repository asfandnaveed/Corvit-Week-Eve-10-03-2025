const express = require('express');
const app = express();
const port = 3001;

const database = require('./db');
//Middleware
app.use(express.json());


app.get('/users',(req,res)=>{
    database.query('SELECT * FROM users', (error , result)=>{
        
        if(error){
            console.log('ERROR',error);
        }

        res.json(result);
    });
});

app.post('/users/login',(req,res)=>{

    const {email , pass} = req.body;

    if(email && pass){

        const query = "SELECT * FROM users WHERE email = ? AND password=?";

        database.query(query,[email,pass], (error, result)=>{
            
            if(error){
                console.log("ERROR",error);
            }

            if(result.length > 0 ){
                res.json(result);
            }else{
                res.json({
                    message:"Inavild Credentials !!"
                });
            }

        });

    }else{

        res.json({
            message:"Email and Password are required !!"
        });
    }
});



app.listen(port,()=>{
    console.log("Server up and Running !!");
});