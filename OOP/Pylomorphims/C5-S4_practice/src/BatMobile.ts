import { Vehicle } from "./Vehicle";
export class BatMobile extends Vehicle{
    protected isBatmanHere : boolean
    constructor(isBatmanHere : boolean, plateID: string, weight: number){
        super(plateID, weight);
        this.isBatmanHere = isBatmanHere;
    }
    getSpeed():number{
        let speed = 110;
        if ( this.isBatmanHere === true){
            speed = 500;
        }
        return speed;
    }
    
}