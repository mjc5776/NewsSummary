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


// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/newsSumary", { useNewUrlParser: true });
//var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
//mongoose.connect(MONGODB_URI);

//Routes

app.get('/', (req,res) => {
  db.Article
    .find({})
    .then(articles =>{
      console.log('log:'+ articles);
      
      res.render('home', {articles})
    }) 
    .catch(err=> res.json(err));
});

//Display Saved Articles
app.get('/saved', (req,res) => {
  db.Article
    .find({"saved": "true"})
    .then(articles =>{
      console.log('log:'+ articles);
      //res.json
      res.render('savedArticles', {articles})
    }) 
    .catch(err=> res.json(err));
});
require('./routes/scrape')(app);

// Delete an article
app.post("/articles/delete/:id", function(req, res) {
  // Use the article id to find and update its saved boolean
  db.Article.findOneAndUpdate({ "_id": req.params.id }, {"saved": false})
  // Execute the above query
  .exec(function(err, doc) {
    // Log any errors
    if (err) {
      console.log(err);
    }
    else {
      // Or send the document to the browser
      res.send(doc);
    }
  });
});

//Save a article
// Mark a article as saved
app.post("/articles/save/:id", function(req, res) {
  // Use the article id to find and update its saved boolean
  db.Article.findOneAndUpdate({ "_id": req.params.id }, {"saved": true})
  // Execute the above query
  .exec(function(err, doc) {
    // Log any errors
    if (err) {
      console.log(err);
    }
    else {
      // Or send the document to the browser
      res.send(doc);
    }
  });
});


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

module.exports = app; 



      
     
