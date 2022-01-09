// // -------------------------------------------------------------
// // CHALLENGE 1
// // Create a function to void udplication of code
// // -------------------------------------------------------------
// let a = 40;
// let b = 50;
// let c = 10;
// let d = 5;
// let e = 10;
// let f = 5;
// function getLargestNumber(number: number){
//   let result = 0 ;
//   if (a >= b) {
//     result = a;
//   }else if (b > a) {
//     result = b;
//   }else if (c >= d){
//     result = c;
//   }else if (d > c){
//     result = d;
//   }else if (e >= f){
//     result =  e;
//   }else if (f > e){
//     result = f ;
//   }
//   return result;
// }
// console.log("The largest number is" + getLargestNumber(a));
// console.log("The largest number is" + getLargestNumber(b));
// console.log("The largest number is" + getLargestNumber(c));
// console.log("The largest number is" + getLargestNumber(d));
// console.log("The largest number is" + getLargestNumber(e));
// console.log("The largest number is" + getLargestNumber(f));
// // -------------------------------------------------------------
// // CHALLENGE 2
// //  Rename with meaningful name :  function name
// // -------------------------------------------------------------
// function getWordOfIndex(words: string[]): string[] {
//   let result: string[] = [];
//   for (let i = words.length - 1; i >= 0; i--) {
//     result.push(words[i]);
//   }
//   return result;
// }
// // -------------------------------------------------------------
// // CHALLENGE 3
// //  Rename with meaningful name :  function name
// // -------------------------------------------------------------
// function containsNumberLowerThan0(numbers: number[]): boolean {
//   let result = false;
//   for (let number of numbers) {
//     if (number < 0) {
//       result = true;
//     }
//   }
//   return result;
// }
// // -------------------------------------------------------------
// // CHALLENGE 4
// //  Rename with meaningful name :  function name and a, b, c , d , e, f, g
// // -------------------------------------------------------------
// function isLetterValidOfDays(word: string): boolean {
//   let a = word === "MONDAY";
//   let b = word === "TUESDAY";
//   let c = word === "WEDNESDAY";
//   let d = word === "THURDAY";
//   let e = word === "FRIDAY";
//   let f = word === "SATURDAY";
//   let g = word === "SUNDAY";
//   return a || b || c || d || e || f || g;
// }
// // -------------------------------------------------------------
// // CHALLENGE 5
// //  Change the code to have ONLY ONE return at the end
// // -------------------------------------------------------------
// function getEmployeeSalary(age: number): number {
//   let salary = 0;
//   if (age <= 20) {
//     salary = 200;
//   }
//   if (age > 20 && age <= 40) {
//     salary = 400;
//   } else {
//     salary =  600;
//   }
//   return salary;
// }
// -------------------------------------------------------------
// CHALLENGE 6
// Change the code  by creating a class Student and an array of Students, instead of 3 arrays of data
// -------------------------------------------------------------
// class Student{
//   studentNames: string;
//   studentYearBirths: number;
//   studentProvinces: string;
//   constructor( studentNames: string, studentYearBirths : number, studentProvinces: string){
//     this. studentNames = studentNames
//     this. studentYearBirths = studentYearBirths
//     this. studentProvinces = studentProvinces
//   }
//    getStudentName(index: number): string {
//     return studentNames[index];
//   }
//   getStudentYearBirth(index: number): number {
//     return studentYearBirths[index];
//   }
//   getStudentProvince(index: number): string {
//     return studentProvinces[index];
//   }
// }
// let studentNames: string[] = ["ronan", "rady", "him", "sovanda"];
// let studentYearBirths: number[] = [2000, 1953, 2015, 1800];
// let studentProvinces: string[] = ["kohgong", "pursat", "takoa", "modulkiri"];
// console.log("Sovanda Name: " + Student(studentNames));
// console.log("Sovanda yearOfBirth: " + Student(studentYearBirths));
// console.log("Sovanda Province: " +Student(studentProvinces));
var Student = /** @class */ (function () {
    function Student(name, yearBirth, province) {
        this.studentList = [];
        this.name = name;
        this.yearBirth = yearBirth;
        this.province = province;
    }
    Student.prototype.addStudent = function (newStudent) {
        this.studentList.push(newStudent);
    };
    Student.prototype.getStudentInfo = function () {
        return "Name: " + this.name + "\n" + "year birth" + this.yearBirth + "\n" + "Province: " + this.province;
    };
    return Student;
}());
var ronan = new Student("Ronan", 2000, "kohgong");
var rady = new Student("Rady", 1950, "pursat");
var him = new Student("Him", 2015, "takao");
