import { Appointment } from "./Appointment";
import { Diagnose } from "./Diagnose";
import { Hospital } from "./Hospital";
import { Patients } from "./Patients";
export abstract class Person extends Hospital {
    patients: Patients[] = [];
    appointment: Appointment[] = [];
    diagnose: Diagnose[] = [];
    constructor(name:string, address: string){
        super(name, address);
    }
    
}