import { Door } from "./Door";

export class Room {
  name: string;
  doors: Door[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addDoor(door: Door) {
    this.doors.push(door);
  }
}
