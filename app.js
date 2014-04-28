var csv = require('csv');
var fs = require('fs');
var mongoose = require('mongoose');
var House = require('./houseModel');

var dbpath =
             "mongodb://localhost:27017/testgefest";
             // "process.env.MONGOHQ_URL";

csv()
.from('./dataset.csv')
.to.array( function(importData){
  console.log("Количество импортируемых адресов: " + (importData.length - 1));

  mongoose.connect(dbpath, function (err) {
    if (err) throw err;

    for (var i = 1; i < importData.length; i++) {
      var house = new House({
        country: importData[i][0],
        zip: importData[i][1],
        region: importData[i][2],
        region_district: importData[i][3],
        city: importData[i][4],
        city_district: importData[i][5],
        street: importData[i][6],
        num_house: importData[i][7],
        year_built: importData[i][8],
        area: importData[i][9],
        sections: importData[i][10],
        max_floor:importData[i][11],
        flats:importData[i][12]
      });

      // TODO: Checking exists houses

      house.save();
      console.log("Импортировано " + i + " адресов");
    }

  });  
});