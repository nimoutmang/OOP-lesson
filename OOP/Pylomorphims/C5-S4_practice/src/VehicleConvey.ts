import { Vehicle } from "./Vehicle";
export class VehicleConvey{
    vehichles: Vehicle[] = [];
    addVehicle(vehichles: Vehicle){
        this.vehichles.push(vehichles)
    }
    getMaxSpeed(): number{
        let conveySpeed = 0
        conveySpeed = this.vehichles[0].getSpeed()
        for (let allVehicle of this.vehichles ){
            let theSpeed = allVehicle.getSpeed()
            if (theSpeed < conveySpeed){
                conveySpeed = theSpeed
            }
        }
        return conveySpeed

    }
}