"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.isEqual = function (other) {
        return this.x == other.x && this.y == other.y; // TODO  !!
    };
    return Point;
}());
exports.Point = Point;
