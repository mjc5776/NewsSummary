const express = require('express'),
      router = express.Router(),
      db = require("../models");

//get route to root, populating index.handlebars with articles
router.get('/', (req,res) => {
  db.Article
    .find({})
    .then(articles =>{
      console.log('log:'+ articles);
      
      res.render('home', {articles}))
    } 
    .catch(err=> res.json(err));
});

module.exports = router;