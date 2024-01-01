const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const { addDetails, homeDetails, detailModel,model, addExp} = require('./db')
//import { checkLogin } from './db';
const app = express()
const port = 80;

const mySecretkey = 'myTripbudgetPlanner';
//mongoose.connect("mongodb://localhost:27017/tripPlanner",{useNewUrlParser:true});

//const mydb = new ManageDb()


// const loginSchema = new mongoose.Schema({
//   user : {
//     type: String,
//   },
//   password : {
//     type: String
//   },
// })

// const detailSchema = new mongoose.Schema({
//   user:String,
// trip:[
// {
// tripname:String,
// budget:Number,
// date:Date,
// days:Number,
// location:String,
// expense:[{price:Number,purpsose:String}]
// }]
// })

// const Login = mongoose.model('login',loginSchema);
// const detailModel = mongoose.model('detail',detailSchema);


async function checkLogin(user,password) {
  console.log(user,password)
  const res = await Login.findOne({user:user,password:password})
  console.log("Response",res)
  if(res){
      console.log("we are here")
      return true
  }
  else{
      console.log("here")
      return false
  }
  }
  



app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.json());
let userCheck
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin if needed
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/checksession',(req,res)=>{
  if (req.session && req.session.isLoggedIn) {
    res.send(true)
  }
  else{
    res.send(false)
  }
})

app.post('/login',(req,res)=>{
    const {username , password} = req.body;
    console.log(username,password)
      model.findOne({user:username,password:password}).then((data)=>{
      console.log(data)
      if (data !== null) {
        const token = jwt.sign({userId:data.user},mySecretkey,{expiresIn: '1h'});
        res.json({message:"Data Found"})
      }
      else{
        res.json({message: "Data not found"})  
      }
          }).catch((err) => {
      console.log("Error",err);
      res.json({message: "Data not found"})
    })
    
})

app.post('/home',async(req,res)=>{
  const userId = req.body.username;
  console.log(userId)
  await detailModel.findOne({user:userId},{_id:0,trip:1}).then((resData)=>{
    if(resData){
    console.log(resData.trip.reverse())
    // let resData = res
      res.json(resData)
    }
})
  // homeDetails(userId).then((res)=>{
  //   console.log(res)
  //   //res.json(res)
  // })
  
})

app.post('/addtrip',(req,res)=>{
  const details = req.body;
  console.log(details);
  if(addDetails(details)){
    console.log("Details Added Succesfully")
    res.status(201).json({message:"details added succesfully"})
  }
  
})

app.post('/addexp',(req,res)=>{
  const data = req.body;
  console.log(data);
  if(addExp(data)){
    res.json({message:'done'})
  }
  else{
    res.json({message:'incomplete'})
  }

})

app.post('/seeExp',(req,res)=>{
  const data = req.body;
  console.log(data);
})

app.listen(port,()=>{
    console.log(`web page served at ${port}`);
})