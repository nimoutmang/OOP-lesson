import { Administractive } from "./Administractive";
import { Doctors } from "./Doctors";
import { Reseptionist } from "./Receptionist";

export class Staff{
    id: number; 
    name: string;
    role: string;
    salary: number;
    age: number
    doctors: Doctors[] = [];
    administractive: Administractive[] = [];
    receptionist: Reseptionist[] = [];
    constructor(id: number, name: string, role:string, salary: number, age: number){
        this.id = id;
        this.name = name;
        this.role = role;
        this.salary = salary;
        this.age = age;
    }
    getName(): string{
        return this.name + this.role;
    };
    getSalary(): number{
        return this.salary;
    };
    getAge(): number{
        return this.age;
    }

}