const mongoose = require('mongoose')

const Userschema= mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String,
    age:Number,
    location:String,
    blood: String,
    phone:BigInt
})

const Usermodel=mongoose.model('user',Userschema);

module.exports=Usermodel