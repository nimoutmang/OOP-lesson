// -------------------------------------------------------------
// CHALLENGE 1
// Create a function to void udplication of code
// -------------------------------------------------------------
function getLargestNumber(number1, number2) {
    var result = 0;
    if (number1 > number2) {
        result = number1;
    }
    else {
        result = number2;
    }
    return result;
}
var a = 40;
var b = 50;
console.log("The largest number is ", getLargestNumber(a, b));
// -------------------------------------------------------------
// CHALLENGE 2
//  Rename with meaningful name :  function name
// -------------------------------------------------------------
function getReverseOfListWords(words) {
    var result = [];
    for (var i = words.length - 1; i >= 0; i--) {
        result.push(words[i]);
    }
    return result;
}
// -------------------------------------------------------------
// CHALLENGE 3
//  Rename with meaningful name :  function name
// -------------------------------------------------------------
function hasNumberSmallerThan0(numbers) {
    var result = false;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
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
function isUppercaseDay(word) {
    var monday = word === "MONDAY";
    var tuesday = word === "TUESDAY";
    var wednesday = word === "WEDNESDAY";
    var thurday = word === "THURDAY";
    var friday = word === "FRIDAY";
    var saturday = word === "SATURDAY";
    var sunday = word === "SUNDAY";
    return monday || tuesday || wednesday || thurday || friday || saturday || sunday;
}
// -------------------------------------------------------------
// CHALLENGE 5
//  Change the code to have ONLY ONE return at the end
// -------------------------------------------------------------
function getEmployeeSalary(age) {
    var result = 0;
    if (age <= 20) {
        result = 200;
    }
    if (age > 20 && age <= 40) {
        result = 400;
    }
    else {
        result = 600;
    }
    return result;
}
// -------------------------------------------------------------
// CHALLENGE 6
// Change the code  by creating a class Student and an array of Students, instead of 3 arrays of data
// -------------------------------------------------------------
var Student = /** @class */ (function () {
    function Student(name, yearBirth, province) {
        this.listOfStudents = [];
        this.name = name;
        this.yearBirth = yearBirth;
        this.province = province;
    }
    Student.prototype.addStudent = function (newStudent) {
        this.listOfStudents.push(newStudent);
    };
    Student.prototype.getStudentInformation = function () {
        return "Name: " + this.name + "\n" + "yearBirth: " + this.yearBirth + "\n" + "Province: " + this.province;
    };
    return Student;
}());
var ronan = new Student("Ronan", 2000, "kohgong");
var rady = new Student("Rady", 1950, "Pursat");
var him = new Student("Him", 2015, "takao");
ronan.addStudent(ronan);
rady.addStudent(rady);
him.addStudent(him);
console.log(ronan.getStudentInformation());
console.log(rady.getStudentInformation());
console.log(him.getStudentInformation());
