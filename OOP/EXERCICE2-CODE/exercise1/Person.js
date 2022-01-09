"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getYearOfBirth = function () {
        return this.yearOfBirth;
    };
    return Person;
}());
exports.Person = Person;
