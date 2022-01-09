"use strict";
exports.__esModule = true;
var Point_1 = require("./Point");
var p1 = new Point_1.Point(10, 20);
var p2 = new Point_1.Point(10, 20);
var p3 = new Point_1.Point(88, 88);
console.log(p1 === p2); // should be false
console.log(p1.isEqual(p2)); // should be true
console.log(p1.isEqual(p3)); // should be false
