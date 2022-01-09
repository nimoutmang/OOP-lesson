"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    return Student;
}());
exports.Student = Student;
