var csv = require('csv');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

csv()
.from('./dataset.csv')
.to.array( function(data){
  
  console.log("Количество импортируемых адресов: " + (data.length - 1));

});