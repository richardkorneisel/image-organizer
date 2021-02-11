const express = require('express');
const router = express.Router();
const Pokemon = require('../models').Pokemon;

router.get("/", (req, res) => {
    Pokemon.findAll().then((pokemons) => {
      res.render("index.ejs", {
        pokemons: pokemons,
      });
    });
  });
//Delete
  router.delete("/:id", (req, res) => {
    Pokemon.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/pokemon");
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
  
    Pokemon.create(req.body).then((newPokemon) => {
      res.redirect("/pokemon");
    });
  });
//Edit
router.get("/:id/edit", function (req, res) {
    Pokemon.findByPk(req.params.id).then((pokemon) => {
      res.render("edit.ejs", {
        pokemon: pokemon,
      });
    });
  });
// Update route
router.put("/:id", (req, res) => {
    Pokemon.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((pokemon) => {
      res.redirect("/pokemon");
    });
  });

router.get("/:id", (req, res) => {
    Pokemon.findByPk(req.params.id).then((pokemon) => {
      res.render("show.ejs", {
        pokemon: pokemon,
      });
    });
  });

module.exports = router;