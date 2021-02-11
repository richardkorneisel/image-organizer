const express = require("express");     //still using express
const router = express.Router();        //need express router

// const users = require("../users");   //location of model(data)
const User = require('../models').User;
const Team = require('../models').Team;
const Pokemon = require('../models').Pokemon;
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

// Serialized login 
router.post("/login", (req, res) => {
  console.log(req.body);  
  User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then((thisUser) => {
        console.log(thisUser);
        res.redirect('/users/profile/' + thisUser.id);
        console.log("hello", thisUser.id)
    });

});  
 
router.post('/profile', (req, res)=>{
  console.log(req.body);  
  User.create(req.body).then((newUser) => {
      res.redirect("profile/" + newUser.id);
    
    });
  });

router.get("/profile/:id", (req, res) => {
    User.findByPk(req.params.id, {  // was player
      include: [{ model: Team }, { model: Pokemon }],
    }).then((singlePlayer) => {
      Team.findAll().then((allTeams) => {
        console.log(singlePlayer);
        res.render("users/profile.ejs", {
      player: singlePlayer, //was player
      teams: allTeams,
        });
      });
    });
  });
// Used above for template
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

//Current PUT not adding ID
router.put("/profile/:id", (req, res) => {
    console.log ("Hello", req.body, req.params.id)
    User.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((user) => {
      res.redirect("/users/profile/" + req.params.id);
    });
  });

router.delete('/:id', (req, res) =>{
    User.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/users");
    });
  }); 


module.exports = router; //required, put on bottom