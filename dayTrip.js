"use strict";

var destinations = ["Dallas", "Phoenix", "Miami", "Colorado"];
var randomDestination = [Math.floor(Math.random() * destinations.length)];
var randomPlace=destinations[randomDestination];
console.log("You will be traveling to:","" +randomPlace);


var restaurant = ["Steak and Shake", "In and Out", "Subway", "Hard Eights BBQ"];
var randomRestaurant = [Math.floor(Math.random() * restaurant.length)];
var randomFood=restaurant[randomRestaurant];
console.log("and eating at:","" +randomFood);


var transportation = ["Jet Pack", "Car", "Roller Blades", "Plane"];

var randomTransportation = [Math.floor(Math.random() * transportation.length)];
var randomTransport=transportation[randomTransportation];
console.log("traveling by:","" +randomTransport);

var entertainment= ["Snowboarding", "Hiking", "Sight Seeing", "Shopping"];
let randomEntainment = [Math.floor(Math.random() * entertainment.length)];
var randomEntertain=entertainment[randomEntainment];
console.log("while youre there you go:","" +randomEntertain);


