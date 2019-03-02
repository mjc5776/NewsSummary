const express = require("express");
var logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

// import express-handlebars
const exphbs = require('express-handlebars');

var PORT = 3000;

const app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const models = require('./models');

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/newsSumary", { useNewUrlParser: true });
//var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
//mongoose.connect(MONGODB_URI);

//Routes
//pp.get('/', function(req, res){
  //res.render('home');
//})

app.get('/', (req,res) => {
  db.Article
    .find({})
    .then(articles =>{
      console.log('log:'+ articles);
      
      res.render('home', {articles})
    }) 
    .catch(err=> res.json(err));
});
require('./routes/scrape')(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

module.exports = app; 



      
     
