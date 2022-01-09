"use strict";
exports.__esModule = true;
exports.School = exports.Classroom = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
var Classroom = /** @class */ (function () {
    function Classroom(school, name) {
        this.students = [];
        this.school = school;
        this.name = name;
    }
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.getNumberOfStudents = function () {
        return this.students.length;
    };
    return Classroom;
}());
exports.Classroom = Classroom;
var School = /** @class */ (function () {
    function School(name) {
        this.classrooms = [];
        this.name = name;
    }
    School.prototype.addClassroom = function (classroomName) {
        var newCLassroom = new Classroom(this, classroomName);
        this.classrooms.push(newCLassroom);
        return newCLassroom;
    };
    return School;
}());
exports.School = School;
