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

function checkCompatibility(scores1, scores2){
    let sumDif = 0;
    for (let i=0; i < scores1.length; i++){
        sumDif += Math.pow(scores1[i] - scores2[i], 2)
    }
    return sumDif
};

function findFriend(newFriend, oldUsers){
    let currentBestFriend = null;
    let currentBestScore = 50;
    oldUsers.forEach(oldUser=>{
        let friendScore = checkCompatibility(newFriend.scores, oldUser.scores);
        if (friendScore < currentBestScore){
            currentBestFriend = oldUser;
            currentBestScore = friendScore;
        }
    });
    return currentBestFriend;
}

module.exports = function(app) {

  // Displays all friends
  app.get("/api/friends", function (req, res) {
      return res.json(friends);
  });

  // Create New reservations - takes in JSON input
  app.post("/api/friends", function (req, res) {
      const newFriend = req.body;
      let bestFriend = findFriend(newFriend, friends);
      console.log("Best Friend:", bestFriend);
      return res.send(bestFriend);
      
    //   friends.push(newFriend);
  });
};