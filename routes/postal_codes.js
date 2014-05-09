var express = require('express');
var router  = express.Router();
var countries = require('../lib/country');

router.get('/postal_codes/:country_code/:postal_code', function(req, res) {

  try {
    var country_code = req.params.country_code;
    var postal_code  = req.params.postal_code;
    var lat_lng      = countries[country_code][postal_code];

    res.send({lat: lat_lng.lat, lng: lat_lng.lng});

  } catch(err){
    res.send({error: err.message});
  }

});

module.exports = router;