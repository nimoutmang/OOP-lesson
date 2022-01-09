import { Vehicle } from "./Vehicle";
export class MiniVan extends Vehicle{
    protected numberCustomers : number;
    protected numberLuggage : number;
    constructor (numberCustomers: number, numberLuggage : number, plateID: string, weight: number){
        super(plateID, weight);
        this.numberCustomers = numberCustomers;
        this.numberLuggage = numberLuggage;
    }
    getSpeed():number{
        let speed = 130;
        return speed - (this.numberCustomers*20 + this.numberLuggage*10);
    } 
}