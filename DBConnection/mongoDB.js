const mongoose = require('mongoose');

class mongo {
    constructor(){
        this.createMongoConnection();
    }


    createMongoConnection(){

        mongoose.connect(`mongodb+srv://Bhavisha:Bhavisha123@cluster0.wr091.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)



        mongoose.connection.once('open',() => {
            console.log("mongodb is connected");
        })
        mongoose.connection.on('error',()=>{
            console.log("error occured in mongodb")
        })
    }
}

module.exports = mongo;