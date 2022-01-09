"use strict";
exports.__esModule = true;
exports.Word = void 0;
var Word = /** @class */ (function () {
    function Word(text, isBold, color) {
        this.text = text;
        this.isBold = isBold;
        this.color = color;
    }
    Word.prototype.isEqual = function (other) {
        return this.text === other.text && this.isBold === other.isBold && this.color === other.color;
    };
    Word.prototype.getCode = function () {
        return "<word" + " " + "text='" + this.text + "', " + "bold='" + this.isBold + "', " + "color='" + this.color + "' />";
    };
    Word.prototype.setText = function (text) {
        this.text = text;
    };
    Word.prototype.setColor = function (color) {
        this.color = color;
    };
    Word.prototype.setBold = function (isBold) {
        this.isBold = isBold;
    };
    return Word;
}());
exports.Word = Word;
