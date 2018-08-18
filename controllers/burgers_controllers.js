var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(req.body.burger_name);
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  burger.updateOne(id, function(result){
      res.status(200).end();
  })
});

module.exports = router;