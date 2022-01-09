import { Door } from "./Doors";
export class Room{
    room: string;
    allDoor: Door[] = [];
    constructor(room: string){
        this.room = room;
    }
}
