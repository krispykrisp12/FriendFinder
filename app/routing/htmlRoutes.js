var path = require("path");

module.exports = function(app) {
  // Survey Page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  })

  // app.get("*", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/assets/img/Friends.jpg"));
  // });


  // Home Page
app.use(function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  })
  
  app.get("../public/assets/img/Friends/jpg", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/img/Friends.jpg"));
});
}
