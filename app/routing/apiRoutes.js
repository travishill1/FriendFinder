// Dependencies
// var express = require("express");
var path = require("path");
var friends = require('../data/friends.js');

// Sets up the Express App
// var app = express();
// var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


module.exports = function(app) {

  // Displays all reservations
  app.get("/api/reservations", function (req, res) {
      return res.json(reservations);
  });

  app.get("/api/waitlist", function (req, res) {
      return res.json(waitlist);
  });


  // Create New reservations - takes in JSON input
  app.post("/api/reservations", function (req, res) {
      var newreservation = req.body;
      res.send(newreservation)
      console.log(newreservation);
      if (reservations.length < 5) {
          reservations.push(newreservation);
      } else {
          waitlist.push(newreservation)
      }
  });

};