import { BatMobile } from "./BatMobile";
import { MiniVan } from "./MiniVan";
import { TucTc } from "./TucTuc";
import { VehicleConvey } from "./VehicleConvey";

let batMen = new BatMobile(true, '1002', 45 );
let miniVan = new MiniVan(45,5,'2002', 1);
let tuctuc = new TucTc(45, '2002', 3);

let vehicle = new VehicleConvey();
vehicle.addVehicle(batMen)
vehicle.addVehicle(miniVan)
vehicle.addVehicle(tuctuc)

console.log(batMen.getSpeed());
console.log(miniVan.getSpeed());
console.log(vehicle.getMaxSpeed());
console.log(tuctuc.getSpeed());