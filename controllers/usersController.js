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

// router.post("/login", (req, res) => {
//     let thisUser = users.findIndex((user)=>   // Search for which user is logging in
//     user.username === req.body.username && user.password === req.body.password
//     )
//     res.redirect('/users/profile/' + thisUser)   
//   });  
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
    });

});  
// Post to profile file, need to create 
// router.post("/profile", (req, res) => {
//     users.push(req.body);
//     console.log(req.body); //to check
//     console.log(users);    //to check
//     let userIndex = users.length - 1  //target end of users array
//     res.redirect(`profile/${userIndex}`);
//   });  
router.post('/profile', (req, res)=>{
  console.log(req.body);  
  User.create(req.body).then((newUser) => {
      res.redirect("profile/" + newUser.id);
    
    });
  });

  // Used '/:index/edit', from fruits to it was closest
// router.get('/profile/:index', (req, res) =>{   //need to have index, referenced below    
//     res.render('users/profile.ejs', { 
// 		userInfo: users[req.params.index], 
// 		index: req.params.index
// 	});
// });
// SerializedUsed '/:index/edit', from fruits to it was closest
// router.get("/profile/:id", (req, res) => {
//     User.findByPk(req.params.id).then((thisUser) => {
//         Team.findAll().then((allTeams) => {
//             console.log("list of teams" + allTeams);
//             res.render("users/profile.ejs", {
//                 userInfo: thisUser,
//                 index: req.params.id,
//                 teams: allTeams,
//             })
//         })
//     });
// })
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
// router.put('/profile/:id', (req, res) => { 
//     users[req.params.index] = req.body;
//     let index = req.params.index
//     console.log(users) 
// 	res.redirect('/users/profile/' + index); 
// });
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
// router.put('/profile/:index', (req, res) => {
//   // console.log('hello!', req.body, req.params.index);
//   // users[req.params.index] = req.body;
//   // let index = req.params.index;
//   // res.redirect('/users/profile/'+index);    users.update(req.body, {
//   where: { id: req.params.index },
//   // returnin: true
// }).then((thisUser) => {
//   res.redirect('/users/profile/' + req.params.index);
// });
// });

// router.delete('/:id', (req, res) => {
//     users.splice(req.params.index, 1); 
//     console.log(users)
//     res.redirect('/users');  
// });
router.delete('/:id', (req, res) =>{
    User.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/users");
    });
  }); 


module.exports = router; //required, put on bottom