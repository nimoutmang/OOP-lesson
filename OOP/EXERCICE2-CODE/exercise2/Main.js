"use strict";
exports.__esModule = true;
var School_1 = require("./School");
//Create 2 schools
var pnc = new School_1.School("PNC");
var pnp = new School_1.School("PNP");
//Create 2 classrooms
var wep = new School_1.Classroom(pnc, "WEP");
var sna = new School_1.Classroom(pnp, "SNA");
//Create 4 students
var student1 = new School_1.Student("Nimout", "Mang");
var student2 = new School_1.Student("Sophanna", "Chhorn");
var student3 = new School_1.Student("Sopheak", "Phor");
var student4 = new School_1.Student("Narath", "Chha");
// Add student to class
sna.addStudent(student1);
sna.addStudent(student2);
wep.addStudent(student3);
wep.addStudent(student4);
//Add class to scholl
pnc.addClassroom("WEP");
pnp.addClassroom("SNA");
console.log(pnc);
console.log(pnp);
console.log(student1.getFullName());
wep.getNumberOfStudents();
console.log(student4.getFullName());
sna.getNumberOfStudents();
