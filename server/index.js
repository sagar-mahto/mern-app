const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://127.0.0.1:27017/loginpractice');

app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.post('/',(req,res)=>{
    const {name,email,password} = req.body
    
    UserModel.findOne({email})
    .then(exist=>{
        if(!exist){
            bcrypt.hash(password,10)
            .then(hash => {
                UserModel.create({name,email,password:hash})
                .then(users => res.json(users))
                .catch(err => res.json(err))
            }).catch(err=>console.log(err.message))
        }
        else{
            console.log("Email already registered")
        }
    })
})

app.post('/login',(req,res)=>{
    const {email,password} = req.body
    UserModel.findOne({email})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,(err,response)=>{
                if(err){
                    res.json("The password is incorrect")
                }
                if(response){
                    const token = jwt.sign({email:user.email},"sagar")
                    res.cookie("token",token);
                    res.json("Success")
                }
            })
        }
        else{
            res.json("No record existed")
        }
    })
})


app.listen(3000,()=>{
    console.log("Server is running")
})