const mongoose = require('mongoose');

const book = new mongoose.Schema({
    "authorId":{type:mongoose.Schema.Types.ObjectId , ref:'user'},
    likeCount : {
        type : Number,
        default : 0
    },
    coverImage : {type:String , required:true , limit:1},
    content : {type:String , required:true},
    timestamps : {type:String , required:true}
})

module.exports = mongoose.model('book',book);