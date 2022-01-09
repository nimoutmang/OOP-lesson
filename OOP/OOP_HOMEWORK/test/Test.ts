class School {
  name: string;
  students: Student[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }
}

class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}


//create two student
let Bopha = new Student("Bopha");
let Naran = new Student("Naran");
let kuthy = new Student("kuthy");
let sreynot = new Student("sreynot");

let pnc = new School("pnc");
//create a school
let up = new School("up");

pnc.addStudent(kuthy);
pnc.addStudent(sreynot);
//add two student and kunthy also 
up.addStudent(Bopha);
up.addStudent(Naran);
up.addStudent(kuthy);
console.log(kuthy.name);


