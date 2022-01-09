import { Hospital } from "./Hospital";
import { Room } from "./Room";
import { Staff } from "./Staff";

export class Department extends Hospital{
    floor: number;
    rooms: Room[] = [];
    staffs: Staff[] = [];
    constructor(name: string,address: string, floor: number){
        super(name, address)
        this.name = name;
        this.floor = floor;
    }
}