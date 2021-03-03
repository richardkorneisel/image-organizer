const express = require("express");     
const router = express.Router();        


const User = require('../Models').User;

const Picture = require('../Models').Picture;
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
  User.findByPk(req.params.id, {
    include: [{ model: Picture }],
  }).then((singleUser) => {
    console.log(singleUser);
    res.render("users/profile.ejs", {
      user: singleUser,
    });
  });
});

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


module.exports = router; 