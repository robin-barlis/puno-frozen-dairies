var express = require("express");
var router = express.Router();

router.get("/", function(req,res) {

    console.log("Hello. starting")
    res.render("index");
});

module.exports = router;