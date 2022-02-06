const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    //part2 #point
    var newuser = {
        "uid":req.query.uid,
        "pwd":req.query.pwd

    };
    console.log(newuser);
    user.push='newuser';
    console.log(user);
    res.redirect("/home");
})

module.exports = signupRouter;