// TODO  :
import { Director } from "./Director";
import { School } from "./School";
import { Student } from "./Student";


//  1- UPdate the classes to mange
//          - a school has many students
//          - as school has 1 director

let directorPerson = new Director("Ronan");

let city = new School("Phnom Penh");

// 2 - Create a school with a director, and students
let student1 = new Student("Sophana");
let student2 =  new Student("Sopheak");
let student3 = new Student("Kimlang");

city.director.push(directorPerson);
city.students.push(student1, student2, student3);


