"use strict";
exports.__esModule = true;
exports.SChool = void 0;
var SChool = /** @class */ (function () {
    function SChool(name, address) {
        this.students = [];
        this.topics = [];
        this.scores = [];
        this.name = name;
        this.address = address;
    }
    SChool.prototype.addStudent = function (student) {
        return this.students.push(student);
    };
    SChool.prototype.addTopic = function (topic) {
        return this.topics.push(topic);
    };
    SChool.prototype.addScore = function (score) {
        return this.scores.push(score);
    };
    SChool.prototype.getAllStudent = function () {
        return this.students;
    };
    SChool.prototype.getAllTopic = function () {
        return this.topics;
    };
    SChool.prototype.getAllScore = function () {
        return this.scores;
    };
    return SChool;
}());
exports.SChool = SChool;
