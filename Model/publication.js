const mongoose = require('mongoose');

const publication = new mongoose.Schema({
    "bookId" :{type:mongoose.Schema.Types.ObjectId , ref:'book'},
    name : {type:String , required:true},
    timestamps : {type:String , required:true}
})

module.exports = mongoose.model('publication',publication);