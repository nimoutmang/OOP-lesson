import { Address } from "./Address";
import { Customer } from "./Customer";

export class Trip{
    busName: string;
    customer : Customer[] = [];
    departurePlace?: Address ;
    arrivalPlace? : Address ;
    constructor(busName: string){
        this.busName = busName;
    }
    
}