// ===========================================
//  The require section
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Defining the port for heroku  and localhost
var PORT = process.env.PORT || 3000;
// Defining express
var app = express();
// ============================================
app.use("/app", express.static("./assets"))
// app.use("/app/assets/img", express.static("./img"))
// ============================================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse appliction/json
app.use(bodyParser.json())

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// ============================================
app.listen(PORT, function () {
  console.log("Server is running on "+ PORT +" port");
});