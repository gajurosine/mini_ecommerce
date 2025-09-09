const mysql =require('mysql2');

  const db=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"2002",
    database:'ecommerce_db'

  })

  db.connect(Err =>{
    if(Err) throw Err
  console.log("mysql database connected successful");
  });

  module.exports =db;