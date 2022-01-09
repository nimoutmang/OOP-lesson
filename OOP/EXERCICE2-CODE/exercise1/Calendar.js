"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var Calendar = /** @class */ (function () {
    function Calendar(currentYear) {
        if (currentYear === void 0) { currentYear = new Date().getFullYear(); }
        this.currentYear = currentYear;
    }
    Calendar.prototype.getAge = function (person) {
        var age = this.currentYear - person.getYearOfBirth();
        return age;
    };
    return Calendar;
}());
exports.Calendar = Calendar;
