const userModel = require('../Model/user')
const { default : mongoose } = require('mongoose');
const bookModel = require('../Model/book');
const comment = require('../Model/comment');
const JWTService = require('../CommonLib/JWTtoken');



async function signUp(req,res,next){
    let userDetail = req.body;
    const response = await userModel.insertMany([userDetail]);
    res.json(response);
}

async function signIn(req,res,next){
    console.log(req.body);
    //validate email and password

    const userData = await userModel.findOne({email : req.body.email});
    console.log(userData)
    const isValidPassword = (req.body.password , userData.password)

    if(isValidPassword){
        let userDetail = {
            "email" : req.body.email,
            "firstName" : userData.firstName,
            "lastName": userData.lastName,
            "roleName" : "ADMIN"
        }
    
        //generate jwt token and send back to frontend
    
        let JWTtoken = JWTService.generateToken(userDetail)
        res.json({
            status:'success',
            token:JWTtoken
        })
    }
    else{
        res.json({message : "password is not valid"})
    }
    
}

async function creatPost(req,res,next){
    let response = await book.find({ authorId:req.params.authorId }).populate('authorId')
    res.json(response)
}

async function createUser(req,res,next){
    try {
        let userDetail = req.body;
        let response = await userModel.insertMany([userDetail])
        let boooksInfo = {
            authorId : response[0]._id,
            likeCount : req.body.book.likeCount,
            coverImage : req.body.book.coverImage,
            content : req.body.book.content,
        }
        console.log(boooksInfo)
        await bookModel.insertMany([boooksInfo]);

        res.json(response);
    } catch (error) {
        res.json(error)
    }
}

async function createComment(req,res,next){
    let response = await comment.find({ authorId:req.params.authorId , bookId:req.params.bookId })
    res.json(response)
}


module.exports = {
    signUp,
    signIn,
    creatPost,
    createUser,
    createComment
}