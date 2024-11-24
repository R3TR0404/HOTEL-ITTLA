const {createPool} = require('mysql');

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"hotel ittla",
    connectionLimit:10
})
pool.query(`SELECT * FROM clientes`,(err, result)=> {
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

pool.query(`SELECT * FROM reservaciones`,(err, result, fields)=> {
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

pool.query(`SELECT * FROM cuartos`,(err, result)=> {
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

