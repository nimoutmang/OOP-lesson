import { Classroom, School, Student} from "./School";
//Create 2 schools
let pnc = new School("PNC");
let pnp = new School("PNP");
//Create 2 classrooms
let wep = new Classroom(pnc, "WEP");
let sna = new Classroom(pnp, "SNA");
//Create 4 students
let student1 = new Student("Nimout", "Mang");
let student2 = new Student("Sophanna", "Chhorn");
let student3 = new Student("Sopheak", "Phor");
let student4 = new Student("Narath", "Chha");
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
