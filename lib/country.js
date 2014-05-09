var csv = require('csv');
var fs  = require('fs');

dataStructure = {};

console.log("loading postal codes...");

csv().from.path('./resources/allCountries.txt', {delimiter: "\t"}).on("record", function(row,index){

  var country = row[0];
  var code    = row[1];
  var lat     = row[9];
  var lng     = row[10];

  if (dataStructure[country] == undefined) {
    dataStructure[country] = {};
  }

  dataStructure[country][code] = {lat: lat, lng: lng}

}).on("error", function(error){
  console.log(error.message);
}).on("end", function(){
  console.log("Done loading postal codes...");
})

module.exports = dataStructure;