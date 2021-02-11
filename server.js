require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');


//Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));//Need because Delete not available, converts method to Delete
app.use('/pokemon', require('./controllers/pokemon.js'));
app.use("/users", require("./controllers/usersController.js"));     
 
//Get route 
app.get('/pokemon/:index', (req, res) => {
    res.send(pokemon[req.params.index]);
});

app.listen(process.env.PORT, ()=>{
    console.log("I am listening");
});
    