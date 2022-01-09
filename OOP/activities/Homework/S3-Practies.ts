// -------------------------------------------------------------
// CHALLENGE 1
// Create a function to void udplication of code
// -------------------------------------------------------------
function getLargestNumber(number1,number2):number{
  let result=0;
  if (number1>number2){
    result=number1;
  }
  else{
    result=number2;
  }
  return result;
}
let a = 40;
let b = 50;
console.log("The largest number is ",getLargestNumber(a,b));


// -------------------------------------------------------------
// CHALLENGE 2
//  Rename with meaningful name :  function name
// -------------------------------------------------------------
function getReverseOfListWords(words: string[]): string[] {
  let result: string[] = [];
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }
  return result;
}

// -------------------------------------------------------------
// CHALLENGE 3
//  Rename with meaningful name :  function name
// -------------------------------------------------------------
function hasNumberSmallerThan0(numbers: number[]): boolean {
  let result = false;
  for (let number of numbers) {
    if (number < 0) {
      result = true;
    }
  }
  return result;
}

// -------------------------------------------------------------
// CHALLENGE 4
//  Rename with meaningful name :  function name and a, b, c , d , e, f, g
// -------------------------------------------------------------
function isUppercaseDay(word: string): boolean {
  let monday = word === "MONDAY";
  let tuesday = word === "TUESDAY";
  let wednesday = word === "WEDNESDAY";
  let thurday = word === "THURDAY";
  let friday = word === "FRIDAY";
  let saturday = word === "SATURDAY";
  let sunday = word === "SUNDAY";
  return monday || tuesday || wednesday || thurday || friday || saturday || sunday;
}

// -------------------------------------------------------------
// CHALLENGE 5
//  Change the code to have ONLY ONE return at the end
// -------------------------------------------------------------
function getEmployeeSalary(age: number): number {
  let result=0;
  if (age <= 20) {
    result=200;
  }
  if (age > 20 && age <= 40) {
    result=400;
  } else {
    result=600;
  }
  return result;
}

// -------------------------------------------------------------
// CHALLENGE 6
// Change the code  by creating a class Student and an array of Students, instead of 3 arrays of data
// -------------------------------------------------------------

class Student{
  name:string;
  yearBirth:number;
  province:string;
  listOfStudents:Student[]=[];
  constructor(name:string,yearBirth:number,province:string){
    this.name=name;
    this.yearBirth=yearBirth;
    this.province=province;
  }
  addStudent(newStudent:Student){
    this.listOfStudents.push(newStudent);
  }
  getStudentInformation() {
    return "Name: "+this.name+"\n"+"yearBirth: "+this.yearBirth+"\n"+"Province: "+this.province ;
  }
}
let ronan=new Student("Ronan",2000,"kohgong");
let rady=new Student("Rady",1950,"Pursat");
let him=new Student("Him",2015,"takao");

ronan.addStudent(ronan);
rady.addStudent(rady);
him.addStudent(him);

console.log(ronan.getStudentInformation());
console.log(rady.getStudentInformation());
console.log(him.getStudentInformation());




