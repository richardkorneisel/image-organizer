const express = require('express');
const app = express();
const methodOverride = require('method-override');
const pokemon = require('./controllers/pokemon.js');

//Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/pokemon', pokemon)
app.use("/users", require("./controllers/usersController.js"));     
//***************
//// End Middleware

// app.get('/pokemon', (req, res) => {
//     res.send(pokemon);
// });
// app.get('/pokemon', (req, res) => {
//     res.render('index.ejs', {
//     pokemons: pokemon
//     });     
// });
// // Delete
// app.delete('/pokemon/:index', (req, res) => {
// 	pokemon.splice(req.params.index, 1); 
// 	res.redirect('/pokemon');  
// });
// //New
// app.get('/pokemon/new', (req, res) => {
//     res.render('new.ejs'); 
// });

// //Post
// app.post('/pokemon', (req, res) => {    
//     pokemon.push(req.body);  
//     res.redirect('/pokemon');      
// });
// app.get('/pokemon/:index/edit', (req, res) => {
//     res.render(
//     	'edit.ejs', 
//     	{ 
//             pokemon: pokemon[req.params.index], 
//     		index: req.params.index 
//      	}
//     );
// });
//    // Update route
// app.put('/pokemon/:index', (req, res) => { 
//     pokemon[req.params.index] = req.body;    
//     res.redirect('/pokemon'); 
//     });

     //show - for one thing
// app.get('/pokemon/:index', (req, res) => {
//     // let pokemon = pokemons[req.params.index];
//     // res.send(pokemon);
//     res.render('show.ejs', {       //shows html from show.ejs file 
//         pokemon: pokemon[req.params.index]     //left of colon is variable, fruit is index route, right is 
//     })                       
// })

//Get route 
app.get('/pokemon/:index', (req, res) => {
    res.send(pokemon[req.params.index]);
});

app.listen(3000, ()=>{
    console.log("I am listening");
});
    