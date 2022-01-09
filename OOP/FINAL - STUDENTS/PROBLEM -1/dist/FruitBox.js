"use strict";
exports.__esModule = true;
exports.FruitBox = void 0;
var FruitBox = /** @class */ (function () {
    function FruitBox() {
        this.fruits = [];
    }
    /**
     * Add the given fruit, if no similatr fruit are already in this box
     * @param fruit
     */
    FruitBox.prototype.addFruit = function (fruit) {
        // ------------      TODO     ------------
        if (!this.contains(fruit)) {
            return this.fruits.push(fruit);
        }
    };
    /**
     * @param fruit
     * @returns true if  no similar fruit are already in this box
     */
    FruitBox.prototype.contains = function (fruit) {
        // ------------      TODO     ------------
        for (var _i = 0, _a = this.fruits; _i < _a.length; _i++) {
            var aFruit = _a[_i];
            if (fruit.isEqual(aFruit)) {
                return true;
            }
        }
    };
    FruitBox.prototype.getFruits = function () {
        return this.fruits; // return a COPY of the fruit
    };
    ;
    return FruitBox;
}());
exports.FruitBox = FruitBox;
;
