"use strict";
exports.__esModule = true;
var House_1 = require("./House");
var Door_1 = require("./Door");
var Room_1 = require("./Room");
var houseMolika = new House_1.House("Molika");
var pinkDoor = new Door_1.Door("pink");
var whiteDoor = new Door_1.Door("white");
var purpleDoor = new Door_1.Door("purple");
var badroom = new Room_1.Room("bathroom");
var livingRoom = new Room_1.Room("living room");
// 2- Add the 2 rooms to the house
houseMolika.addRoom(badroom);
houseMolika.addRoom(livingRoom);
// 3 – Add a door to the house and rooms
houseMolika.addDoor(pinkDoor);
badroom.addDoor(whiteDoor);
livingRoom.addDoor(purpleDoor);
console.log(houseMolika.getInformation());
