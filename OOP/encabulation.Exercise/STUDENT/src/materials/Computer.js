"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Computer = void 0;
var Material_1 = require("./Material");
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer(id, computerName) {
        var _this = _super.call(this, id) || this;
        _this.name = computerName;
        return _this;
    }
    Computer.prototype.getName = function () {
        return this.name;
    };
    return Computer;
}(Material_1.Material));
exports.Computer = Computer;
