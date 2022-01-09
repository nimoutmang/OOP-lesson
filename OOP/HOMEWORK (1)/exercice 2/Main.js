"use strict";
exports.__esModule = true;
// TODO  :
var Director_1 = require("./Director");
var School_1 = require("./School");
var Student_1 = require("./Student");
//  1- UPdate the classes to mange
//          - a school has many students
//          - as school has 1 director
var directorPerson = new Director_1.Director("Ronan");
var city = new School_1.School("Phnom Penh");
// 2 - Create a school with a director, and students
var student1 = new Student_1.Student("Sophana");
var student2 = new Student_1.Student("Sopheak");
var student3 = new Student_1.Student("Kimlang");
city.director.push(directorPerson);
city.students.push(student1, student2, student3);
console.log(city);
