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
exports.BoldAction = void 0;
var Abstraction_1 = require("./Abstraction");
var BoldAction = /** @class */ (function (_super) {
    __extends(BoldAction, _super);
    function BoldAction(oldBold, newBold, reference) {
        var _this = _super.call(this, reference) || this;
        _this.oldBold = oldBold;
        _this.newBold = newBold;
        _this.oldBold = oldBold;
        _this.newBold = newBold;
        return _this;
    }
    BoldAction.prototype.getActionName = function () {
        return;
    };
    BoldAction.prototype["do"] = function () {
        return this.reference.setBold(this.newBold);
    };
    BoldAction.prototype.undo = function () {
        return this.reference.setBold(this.oldBold);
    };
    return BoldAction;
}(Abstraction_1.AbstractAction));
exports.BoldAction = BoldAction;
