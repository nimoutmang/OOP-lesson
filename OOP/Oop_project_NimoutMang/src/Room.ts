import { Bed } from "./Bed";
export class Room {
    name: string;
    beds: Bed[] =[];
    constructor(name:string){
        this.name = name;
    }
    addBed(bed: Bed){
        this.beds.push(bed);
        
    }
}