 
var faker = require('faker');

var database = { carousel: []};
for (var i = 1; i<= 3; i++) {
  database.carousel.push({
    id: i,
    name: carousel0+[i],
    imageUrl: "assets/img/car[i].png",
  });
}

console.log(JSON.stringify(database));