const axios = require('axios');
const cheerio = require('cheerio')

module.exports = function (app) {

// Require all models
var db = require("../models");

// app.get("/scrape", function (req, res) {
//     axios.get('https://www.denverpost.com/sports/denver-broncos/').then(function (response) {
//       const $ = cheerio.load(response.data);
  
//       $("h4.entry-title").each((i, element) => {
  
  
//         const result = {};
//         result.title = $(element)
//           .text()
//           .trim()
//           .replace(/(\r\n|\n|\r)/gm, " ");
  
//         result.link = $(element)
//           .children()
//           .attr("href")
//           .trim()
//           .replace(/(\r\n|\n|\r)/gm, " ");
  
        
//           // Insert the data in the newsSummary db
//           db.Article.create(result)
//             .then(function(dbArticle){
//               console.log(dbArticle);
              
//             })
//             .catch(function(err) {
//               // If an error occurred, log it
//               console.log(err);
//             });
//         });
//       });
//     }); 
  };