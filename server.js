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
app.use(methodOverride('_method'));
app.use('/picture', require('./controllers/pictureController.js'));
app.use("/users", require("./controllers/usersController.js"));     
 
app.get("/", (req, res) => {
    res.render("users/index.ejs");
  });

app.listen(process.env.PORT, ()=>{
    console.log("I am listening", process.env.PORT);
});
    