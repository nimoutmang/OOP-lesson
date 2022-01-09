import { Account } from "./Accounts";
import { Department } from "./Department";
import { Person } from "./Person";
import { Pharmacy } from "./Pharmacy";

export abstract class Hospital{
    name: string;
    address:string;
    departments: Department[] = [];
    persons: Person[] = [];
    pharmacy: Pharmacy;
    accounts: Account[] = [];
    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
    

}