var friends = require("../data/friends.js");

module.exports = function(app){
  //api table list 
  app.get("/api/tables", function (req, res) {
    res.json(friends);
  })

  app.post("/api/tables", function(req, res) {
     if (friends.length) {
      friends.push(req.body);
      res.json();
    }
    
    
  });

}