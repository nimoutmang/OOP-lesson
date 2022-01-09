import { Door } from "./Doors";
import { House } from "./House";
import { Room } from "./Rooms";

let house1 = new House();
let nimoutRoom = new Room('nimoutRoom');
let sanaRoom = new Room('sanaRoom');
let door1 = new Door(1);
house1.allRoom.push(nimoutRoom, sanaRoom);
house1.allDoor.push(door1);
nimoutRoom.allDoor.push(door1);
console.log(house1,nimoutRoom);