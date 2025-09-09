const express = require("express")
const cors= require("cors")
const bodyPerser=require("body-parser")


const mysql =require("mysql2")
  require("dotenv").config()

  const app=express()

  app.use(cors())
  app.use(bodyPerser.json())




// db.query('SHOW TABLES',(Err,results) =>{
//   if(Err) throw  Err;
//   console.log("Tables in ecommerce_db" ,results);
  
// })


//import routes
const productRoutes= require('../Backend/routes/productRoutes')
  

//routes

app.get('/',(req,res)=>{
res.send("backend  is running");
})

app.use('/api/products',productRoutes)

  // app.get('/',(req,res) =>{
  //   res.send("backend is running");

  // })
const Port= 5000
app.listen(Port,()=>{
console.log(`Server is running at http://localhost:${Port}`)

})  