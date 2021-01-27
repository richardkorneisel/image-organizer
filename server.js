const express = require('express');
const app = express();

// //Middleware
// app.use((req, res, next) => {
//     console.log('I run for all routes');
//     next();
// });

// app.use(express.urlencoded({ extended: true }));

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
    pokemons: pokemon
    });     
});

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


app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

// app.get('/pokemon/:index', (req, res) => {
//     res.send(pokemon[req.params.index]);
// });

app.listen(3000, ()=>{
    console.log("I am listening");
});
    