const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/tripPlanner",{useNewUrlParser:true});

const loginSchema = new mongoose.Schema({
    user : String,
    password : String,
})

const detailSchema = new mongoose.Schema({
    user:String,
trip:[
{
tripname:String,
budget:Number,
date:Date,
days:Number,
location:String,
expense:[{price:Number,purpsose:String,note:String}],
total_expense:Number
}]
})

const model = mongoose.model('login',loginSchema);
const detailModel = mongoose.model('details',detailSchema);


async function checkLogin(userid,pass) {
    console.log(userid,pass)
    await model.findOne({user:userid,password:pass}).then((res)=>{
        console.log("check is :",res)
    if(res){
        console.log("we are here")
        return true
    }
    else{
        console.log("here")
        return false
    }
    })
    
}

async function addDetails(data){
    console.log(data)
    await detailModel.updateOne({user:data.user},{$push:{trip:{
        tripname:data.tripName,
        budget:data.budget,
        date:data.date,
        days:data.days,
        location:data.location,
        expense:[],
        total_expense:0
        }}}).then((res)=>{
            console.log(res)
            return true
        }).catch(()=>{
            return false
        })        
}

async function homeDetails(userId){
    await detailModel.findOne({user:userId},{_id:0,trip:1}).then((res)=>{
        if(res){
        //console.log(res)
        //let resData = res
        return res
        }
    })
}

async function addExp(data){
    await detailModel.updateOne(
        {
            user: data.user,
            "trip.tripname": data.tripname
          },
          {
            $push: {
              "trip.$.expense": {
                price: data.amount,
                purpose: data.purpose
              }
            },
            $inc: {
              "trip.$.total_expense": data.amount
            }
          }
    ).then((res)=>{
        console.log(res);
        return true;
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}
module.exports = {checkLogin , addDetails , homeDetails , detailModel,model ,addExp}
