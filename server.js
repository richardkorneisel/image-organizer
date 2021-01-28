const express = require('express');
const app = express();
const methodOverride = require('method-override');

//Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//// End Middleware
const pokemon = [
    {
      name: "Bulbasaur",
      img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
      name: "Ivysaur",
      img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      name: "Venusaur",
      img: "http://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
      name: "Charmander",
      img: "http://img.pokemondb.net/artwork/charmander.jpg"
    },
    {
      name: "Charizard",
      img: "http://img.pokemondb.net/artwork/charizard.jpg"
    },
    {
      name: "Squirtle",
      img: "http://img.pokemondb.net/artwork/squirtle.jpg"
    },
    {
      name: "Wartortle",
      img: "http://img.pokemondb.net/artwork/wartortle.jpg"
    }
  ];


// app.get('/pokemon', (req, res) => {
//     res.send(pokemon);
// });
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
    pokemons: pokemon
    });     
});
// Delete
app.delete('/pokemon/:index', (req, res) => {
	pokemon.splice(req.params.index, 1); 
	res.redirect('/pokemon');  
});
//New
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs'); 
});

//Post
app.post('/pokemon', (req, res) => {    
    pokemon.push(req.body);  
    res.redirect('/pokemon');      
});
app.get('/pokemon/:index/edit', (req, res) => {
    res.render(
    	'edit.ejs', 
    	{ 
            pokemon: pokemon[req.params.index], 
    		index: req.params.index 
     	}
    );
});
   // Update route
app.put('/pokemon/:index', (req, res) => { 
    pokemon[req.params.index] = req.body;    
    res.redirect('/pokemon'); 
    });

     //show - for one thing
app.get('/pokemon/:index', (req, res) => {
    // let pokemon = pokemons[req.params.index];
    // res.send(pokemon);
    res.render('show.ejs', {       //shows html from show.ejs file 
        pokemon: pokemon[req.params.index]     //left of colon is variable, fruit is index route, right is 
    })                       
})

//Get route 
app.get('/pokemon/:index', (req, res) => {
    res.send(pokemon[req.params.index]);
});

app.listen(3000, ()=>{
    console.log("I am listening");
});
    