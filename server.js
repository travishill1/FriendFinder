// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require ("./app/routing/htmlRoutes.js")(app);
require ("./app/routing/apiRoutes.js")(app);

// You should save your application's data inside of app/data/friends.js as an array of objects.

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
//   });
  
//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
//   });
  
  // Displays all characters
//   app.get("/api/characters", function(req, res) {
//     return res.json(characters);
//   });
  
  // Displays a single character, or returns false
//   app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;
  
//     console.log(chosen);
  
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });



// port listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });