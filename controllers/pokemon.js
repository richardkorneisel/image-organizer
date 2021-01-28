const express = require('express');
const router = express.Router();
const pokemon = require("../Models/pokemonData");

router.get('/', (req, res) => {
    res.render('index.ejs', {
    pokemons: pokemon
    });     
});
// Delete
router.delete('/:index', (req, res) => {
	pokemon.splice(req.params.index, 1); 
	res.redirect('/pokemon');  
});
//New
router.get('/new', (req, res) => {
    res.render('new.ejs'); 
});

//Post
router.post('/', (req, res) => {    
    pokemon.push(req.body);  
    res.redirect('/pokemon');      
});
router.get('/:index/edit', (req, res) => {
    res.render(
    	'edit.ejs', 
    	{ 
            pokemon: pokemon[req.params.index], 
    		index: req.params.index 
     	}
    );
});
   // Update route
router.put('/:index', (req, res) => { 
    pokemon[req.params.index] = req.body;    
    res.redirect('/pokemon'); 
    });

     //show - for one thing
router.get('/:index', (req, res) => {
    // let pokemon = pokemons[req.params.index];
    // res.send(pokemon);
    res.render('show.ejs', {       //shows html from show.ejs file 
        pokemon: pokemon[req.params.index]     //left of colon is variable, fruit is index route, right is 
    })                       
})

module.exports = router;