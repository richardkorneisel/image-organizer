const express = require('express');
const router = express.Router();
const Picture = require('../Models').Picture;

router.get("/", (req, res) => {
    Picture.findAll().then((pictures) => {
      res.render("index.ejs", {
        pictures: pictures,
      });
    });
  });
//Delete
  router.delete("/:id", (req, res) => {
    Picture.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/picture");
    });
  });
//New
router.get('/new', (req, res) => {
    res.render('new.ejs'); 
});

//Post / create
router.post("/", (req, res) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
  
    Picture.create(req.body).then((newpicture) => {
      console.log(newpicture)
      res.redirect("/picture");
    });
  });
//Edit
router.get("/:id/edit", function (req, res) {
    Picture.findByPk(req.params.id).then((picture) => {
      res.render("edit.ejs", {
        picture: picture,
      });
    });
  });
// Update route
router.put("/:id", (req, res) => {
    Picture.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((picture) => {
      res.redirect("/picture");
    });
  });

router.get("/:id", (req, res) => {
    Picture.findByPk(req.params.id).then((picture) => {
      res.render("show.ejs", {
        picture: picture,
      });
    });
  });

module.exports = router;