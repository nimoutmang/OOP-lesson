"use strict";
exports.__esModule = true;
var Calendar_1 = require("./Calendar");
var Person_1 = require("./Person");
var calendar = new Calendar_1.Calendar();
var sophanna = new Person_1.Person("sophanna", 2000);
var kunthy = new Person_1.Person("kunthy", 2001);
console.log("Sophnna is: " + calendar.getAge(sophanna));
console.log("Kunthy is: " + calendar.getAge(kunthy));
