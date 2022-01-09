import { Patients } from "./Patients";
export class Appointment{
    date: string;
    time: number;
    constructorn(date: string, time: number){
        this.date = date;
        this.time = time;
    }
}