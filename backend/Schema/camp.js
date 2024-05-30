const mongoose = require('mongoose');

const campSchema=mongoose.Schema({
    location:String,
    time:String,
    date:String,
    docname:String,
    desc: String
})

const cmpModel=mongoose.model('camp',campSchema);
module.exports=cmpModel;