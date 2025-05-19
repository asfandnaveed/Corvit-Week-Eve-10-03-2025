const express = require('express');
const app = express();
const port = 3001;

const db = require('./db');

//Middelware
app.use(express.json());

app.get('/users',(req,res)=>{
    db.query('SELECT * FROM users',(error,result)=>{
        if(error){
            console.log('Something Went Wrong',error);
        }
        // res.status(200).send('Test route working');
        res.json(result);
    });
});


app.listen(port,()=>{
    console.log("Server up and Running !!");
});