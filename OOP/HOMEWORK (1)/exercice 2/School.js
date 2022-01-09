"use strict";
exports.__esModule = true;
exports.School = void 0;
var School = /** @class */ (function () {
    function School(city) {
        this.director = [];
        this.students = [];
        this.city = city;
    }
    School.prototype.AddDirector = function (Director) {
        this.director.push(Director);
    };
    School.prototype.AddStudent = function (Student) {
        this.students.push(Student);
    };
    return School;
}());
exports.School = School;
