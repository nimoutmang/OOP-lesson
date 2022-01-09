"use strict";
exports.__esModule = true;
var Address_1 = require("./Address");
var Customer_1 = require("./Customer");
var Trip_1 = require("./Trip");
//ADDDRESS
var france = new Address_1.Address("Paris", "France");
var phnomPenh = new Address_1.Address("Phnom Penh", "Cambodia");
var kampot = new Address_1.Address("Kampot", "Cambodia");
var sieamReap = new Address_1.Address("Sieam Reap", "Cambodia");
//CUSTOMER
var ronan = new Customer_1.Customer("Ronan", "Ogor");
var him = new Customer_1.Customer("Him", "Hey");
var sovanda = new Customer_1.Customer("Sovanda", "Chib");
///KAKA Trip
var kakaBus = new Trip_1.Trip("KAKA Bus");
kakaBus.departurePlace = phnomPenh;
kakaBus.arrivalPlace = kampot;
kakaBus.customer.push(him, sovanda);
///LYHOR Trip
var lyhorExpress = new Trip_1.Trip("LYHOR Express");
lyhorExpress.departurePlace = phnomPenh;
lyhorExpress.arrivalPlace = sieamReap;
lyhorExpress.customer.push(him, sovanda, ronan);
console.log(lyhorExpress);
console.log(kakaBus);
