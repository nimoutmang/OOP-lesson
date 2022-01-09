import { House } from "./House";
import { Door } from "./Door";
import { Room } from "./Room";

let houseMolika = new House("Molika");
let pinkDoor = new Door("pink");
let whiteDoor = new Door("white");
let purpleDoor = new Door("purple");

let badroom = new Room("bathroom");
let livingRoom = new Room("living room");

// 2- Add the 2 rooms to the house
houseMolika.addRoom(badroom);
houseMolika.addRoom(livingRoom);

// 3 – Add a door to the house and rooms
houseMolika.addDoor(pinkDoor);
badroom.addDoor(whiteDoor);
livingRoom.addDoor(purpleDoor);

console.log(houseMolika.getInformation());
