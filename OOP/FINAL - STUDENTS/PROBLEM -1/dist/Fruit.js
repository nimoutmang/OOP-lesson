"use strict";
exports.__esModule = true;
exports.Fruit = void 0;
var Fruit = /** @class */ (function () {
    function Fruit(name, color) {
        this.name = name;
        this.color = color;
    }
    Fruit.prototype.isEqual = function (other) {
        // ------------      TODO     ------------
        return this.name === other.name && this.color === other.color;
    };
    return Fruit;
}());
exports.Fruit = Fruit;
