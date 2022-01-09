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
exports.ColorAction = void 0;
var Abstraction_1 = require("./Abstraction");
var ColorAction = /** @class */ (function (_super) {
    __extends(ColorAction, _super);
    function ColorAction(oldColor, newColor, reference) {
        var _this = _super.call(this, reference) || this;
        _this.oldColor = oldColor;
        _this.newColor = newColor;
        _this.oldColor = oldColor;
        _this.newColor = newColor;
        return _this;
    }
    ColorAction.prototype.getActionName = function () {
        return;
    };
    ColorAction.prototype["do"] = function () {
        return this.reference.setColor(this.newColor);
    };
    ColorAction.prototype.undo = function () {
        return this.reference.setColor(this.oldColor);
    };
    return ColorAction;
}(Abstraction_1.AbstractAction));
exports.ColorAction = ColorAction;
