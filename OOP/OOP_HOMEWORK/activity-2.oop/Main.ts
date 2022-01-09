import { House } from "./House";
import { Door } from "./Door";
import { Room } from "./Room";

// TODO  :
//  1- Create:
//      - 1 house
let house =  new House("ronan");
//        - 3 doors
let door1 = new Door("White");
let door2 = new Door("Black");
let door3 = new Door("Pink");
//         - 2 rooms
let firstroom = new Room("LisaRoom");
let secondroom = new Room("RadoRoom");

// 2- Add the 2 rooms to the house
house.room.push(firstroom, secondroom);
// 3 – Add a door to the house and rooms
house.door.push(door1);
firstroom.door.push(door2);
firstroom.door.push(door3);

console.log(house);

