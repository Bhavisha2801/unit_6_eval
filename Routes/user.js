const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const userController = require('../Controllers/user')
const userModel = require('../Model/user')
const { engine } = require("express-handlebars")
// const passport = require('../Authentication/googleLogin')


app.use(bodyParser.json([]));


app.post('/signUp' , userController.signUp);

app.post('/signIn' , userController.signIn)

app.post('/user', userController.createUser)

app.post('/book' ,userController.creatPost);

app.post('/comments', userController.createComment);


module.exports = app;