import { Person } from "./Person";

export class Patients extends Person{
    protected age: number;
    constructor(name: string, address: string, age: number){
        super(name, address)
        this.age = age;
    }
    getName():string{
        return this.name + '' + this.address;
    };
    getAng():number{
        return this.age;
    };
}