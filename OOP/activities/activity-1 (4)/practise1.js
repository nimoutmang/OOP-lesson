"use strict";
exports.__esModule = true;
exports.Personn = void 0;
var Personn = /** @class */ (function () {
    function Personn(name) {
        this.children = [];
        this.name = name;
    }
    Personn.prototype.addChild = function (child) {
        this.children.push(child);
    };
    Personn.prototype.printTree = function (space) {
        console.log(space + this.name);
        space += '\t';
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.printTree(space);
        }
    };
    return Personn;
}());
exports.Personn = Personn;
var sreynot = new Personn("sreynot");
var ronan = new Personn("ronan");
var sophea = new Personn("sophea");
var chanry = new Personn("chanry");
sreynot.addChild(ronan);
ronan.addChild(sophea);
sophea.addChild(chanry);
console.log(sreynot);
