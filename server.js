var express = require("express");
var path = require("path");
var app = express();

var routes = require("./routes");

app.set("port", process.env.port || 8000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(routes);
app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});