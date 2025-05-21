const mysql =require('mysql2')

const pool= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"corvit_eve_10_03_2025",
    connectionLimit:25
});

module.exports = pool;