require('dotenv').config();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;

const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');


const UserModel = require('./models/User')
mongoose.connect(MONGO_URI)
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log("MongoDB Error : ",err));


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
                    const token = jwt.sign({email:user.email},JWT_SECRET)
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


app.listen(PORT,()=>{
    console.log("Server is running")
})