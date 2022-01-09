import { Director } from "./Director";
import { Student } from "./Student";

export class School {
  city: string;
  director: Director[] = [];
  students: Student[] = [];

  constructor(city: string) {
    this.city = city;
  }
  AddDirector(Director: Director){
    this.director.push(Director);
  }
  AddStudent(Student: Student){
    this.students.push(Student);
  }
}
