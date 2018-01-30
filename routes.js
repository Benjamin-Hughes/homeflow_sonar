var express = require('express');
var request = require('request');
var router = express.Router();

router.get("/", function(req, res) {
  res.render('index');
});

router.post("/", function(req, res) {
  
  request(process.env.REQUEST, function(error, response, body) {
  var filteredResults = [];
  var results = JSON.parse(body);
  var propertyList = Array.from(results.result.properties.elements);

    propertyList.forEach(function(property) {

      if (property.bedrooms >= req.body.beds && property.price_value <= req.body.pricemax) {
        filteredResults.push(property);
      }
    })

    res.render('index', {results: filteredResults});
  })
})
module.exports = router;
