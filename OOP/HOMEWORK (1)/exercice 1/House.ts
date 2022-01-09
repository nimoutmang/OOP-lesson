import { Door } from "./Door";
import { Room } from "./Room";
export class House {
  name: string;
  rooms: Room[] = [];
  doors: Door[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  addDoor(door: Door) {
    this.doors.push(door);
  }

  getInformation(): string {
    // TODO
    // example
    //   House Molika has:
    //  - 1 door (pink)

    //  - 2 rooms
    // 	- bathroom
    // 			- 1 doors (white)
    // 	- living room
    // 			- 1 doors (purple)
    let Molikahouse = "House ";
    for(let door of this.doors){
      Molikahouse += this.name + " has : \n" + " - 1 door (" +  door.color + ")\n";

    }
    let ColorRoom = " 2 rooms \n";
    for (let room of this.rooms){
      ColorRoom +="  - " +  room.name + "\n" +  "  - 1 door ( " + room.doors[0].color + ")\n";
    }

    return Molikahouse + ColorRoom;
  }
}
