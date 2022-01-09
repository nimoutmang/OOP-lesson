var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.name = name;
    }
    School.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    return Student;
}());
var kuthy = new Student("kuthy");
var sreynot = new Student("sreynot");
var pnc = new School("pnc");
pnc.addStudent(kuthy);
pnc.addStudent(sreynot);
console.log(kuthy.name);
