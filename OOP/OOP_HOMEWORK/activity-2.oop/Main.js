"use strict";
exports.__esModule = true;
var House_1 = require("./House");
var Door_1 = require("./Door");
var Room_1 = require("./Room");
// TODO  :
//  1- Create:
//      - 1 house
var house = new House_1.House("ronan");
//        - 3 doors
var door1 = new Door_1.Door("White");
var door2 = new Door_1.Door("Black");
var door3 = new Door_1.Door("Pink");
//         - 2 rooms
var firstroom = new Room_1.Room("LisaRoom");
var secondroom = new Room_1.Room("RadoRoom");
// 2- Add the 2 rooms to the house
house.room.push(firstroom, secondroom);
// 3 – Add a door to the house and rooms
house.door.push(door1);
firstroom.door.push(door2);
firstroom.door.push(door3);
console.log(house);
