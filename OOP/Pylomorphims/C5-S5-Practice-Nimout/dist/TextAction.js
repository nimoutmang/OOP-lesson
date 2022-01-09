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
exports.TextAction = void 0;
var Abstraction_1 = require("./Abstraction");
var TextAction = /** @class */ (function (_super) {
    __extends(TextAction, _super);
    function TextAction(oldText, newText, reference) {
        var _this = _super.call(this, reference) || this;
        _this.oldText = oldText;
        _this.newText = newText;
        _this.oldText = oldText;
        _this.newText = newText;
        return _this;
    }
    TextAction.prototype.getActionName = function () {
        return;
    };
    TextAction.prototype["do"] = function () {
        return this.reference.setText(this.newText);
    };
    TextAction.prototype.undo = function () {
        return this.reference.setText(this.oldText);
    };
    return TextAction;
}(Abstraction_1.AbstractAction));
exports.TextAction = TextAction;
