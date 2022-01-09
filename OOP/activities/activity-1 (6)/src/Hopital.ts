class Person {
  name: string;
  address: string;
  dateBirth: string;
  constructor(name: string, address: string, dateBirth: string) {
    this.name = name;
    this.address = address;
    this.dateBirth = dateBirth;
  }
}

class Employee extends Person {
  name: string;
  address: string;
  dateBirth: string;
  salary: number;

  constructor(
    name: string, address:string, dateBirth:string, salary:number){
      super(name, address, dateBirth);
      this.salary = salary;
    }
} 
 
class Doctor extends Employee {
  name: string;
  address: string;
  dateBirth: string;
  salary: number;

  medicalBranch: string;

  constructor(
    name: string,
    address: string,
    dateBirth: string,
    salary: number,
    medicalBranch: string
  ){
    super(name, address, dateBirth, salary);
    this.medicalBranch = medicalBranch;
  }
}

class Manager extends Employee{
  skill: string;
  constructor(
    name: string,
    address: string,
    dateBirth: string,
    salary:number,
    skill:string
  ) {
    super(name,address,dateBirth,salary)
    this.skill = skill;
  }
}
let lida = new Employee('Lida', 'Li', '12/2/2001', 100);
let loda = new Manager ('Lida', 'Li','12/2/2001', 100, 'IT' );
