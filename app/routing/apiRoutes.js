var friends = require("../data/friends.js");

module.exports = function(app){
  //api table list 
  app.get("/api/tables", function (req, res) {
    res.json(friends);
  })
}