var express = require("express");

var React = require("react");

var app = express();

app.use(express.static("src"));
app.set("views", __dirname + "/src");
app.set("view engine", "js");
app.engine("js", require("express-react-views").createEngine());
app.use("/", function(req, res) {
  console.log("assd");
  res.render("app", { name: "aakau" });
});
var Server = app.listen(3000, function(err, res) {
  console.log("Server is started on port 3000");
});
console.log("Success");
