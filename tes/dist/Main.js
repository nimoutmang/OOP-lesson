"use strict";
exports.__esModule = true;
var Doors_1 = require("./Doors");
var House_1 = require("./House");
var Rooms_1 = require("./Rooms");
var house1 = new House_1.House();
var nimoutRoom = new Rooms_1.Room('nimoutRoom');
var sanaRoom = new Rooms_1.Room('sanaRoom');
var door1 = new Doors_1.Door(1);
house1.allRoom.push(nimoutRoom, sanaRoom);
house1.allDoor.push(door1);
nimoutRoom.allDoor.push(door1);
console.log(house1, nimoutRoom);
