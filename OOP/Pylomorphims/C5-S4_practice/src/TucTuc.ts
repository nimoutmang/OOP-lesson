import { Vehicle } from "./Vehicle";
export class TucTc extends Vehicle{
    private numberCustomer: number;
    constructor(numberCustomer: number, plateID: string, weight: number){
        super(plateID, weight);
        this.numberCustomer = numberCustomer;
    }
    getSpeed(): number{
        let speed = 130;
        return speed - this.numberCustomer*5;
    }
}