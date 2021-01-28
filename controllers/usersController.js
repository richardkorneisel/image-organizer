const express = require("express");     //still using express
const router = express.Router();        //need express router

const users = require("../models/users");   //location of model(data)

//Index (Home)page
router.get('/', (req, res) => {                 
    res.render('users/index.ejs')     
});
// Used new.ejs for template
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});
// Use to show login page
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});
router.post("/login", (req, res) => {
    let thisUser = users.findIndex((user)=>   // Search for which user is logging in
    user.username === req.body.username && user.password === req.body.password
    )
    res.redirect('/users/profile/' + thisUser)   
  });  
// Post to profile file, need to create 
router.post("/profile", (req, res) => {
    users.push(req.body);
    console.log(req.body); //to check
    console.log(users);    //to check
    let userIndex = users.length - 1  //target end of users array
    res.redirect(`profile/${userIndex}`);
  });  
// Used '/:index/edit', from fruits to it was closest
router.get('/profile/:index', (req, res) =>{   //need to have index, referenced below    
    res.render('users/profile.ejs', { 
		userInfo: users[req.params.index], 
		index: req.params.index
	});
});
// Used above for template
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});
router.put('/profile/:index', (req, res) => { 
    users[req.params.index] = req.body;
    let index = req.params.index
    console.log(users) 
	res.redirect('/users/profile/' + index); 
});
router.delete('/:index', (req, res) => {
    users.splice(req.params.index, 1); 
    console.log(users)
    res.redirect('/users');  
});

module.exports = router; //required, put on bottom