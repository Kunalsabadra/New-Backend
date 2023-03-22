const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('./config');
const User = require('./DB/users');

app.use(express.json());
app.use(cors());

app.post("/login" , async(req,res)=>{
    console.log(req.body);
   if(req.body.password && req.body.email){
     let user =await User.findOne(req.body).select("-password");
         if(user){
             res.send(user);
         }else{
           res.send({result: "No User fOUND"})
         }
   }else{
     res.send({result: "No user Found"})
   } 
});

app.post("/register" , async(req , res)=> {
  // res.send("Page Found");
     const user = new User(req.body);
     let result  = await user.save();
     result  = result.toObject();
     delete result.password;
     res.send(result);
});

app.listen(5000);


