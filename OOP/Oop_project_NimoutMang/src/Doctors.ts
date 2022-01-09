export class Doctors{
    name: string;
    address: string;
    salary: number;
    age: number;
    constructor(name: string, address: string, salary: number, age: number ){
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.age = age;
    }
    getName(): string{
        return this.name;
    }
    getSalary(): number{
        return this.salary;
    }
    getAge(): number{
        return this.age;
    }
}