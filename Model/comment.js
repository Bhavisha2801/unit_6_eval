const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    "authorId":{type:mongoose.Schema.Types.ObjectId , ref:'user'},
    "bookId":{type:mongoose.Schema.Types.ObjectId , ref:'book'},
    body : {type:String , required:true},
    timestamps : {type:String , required:true}
})

module.exports = mongoose.model('comment',comment);