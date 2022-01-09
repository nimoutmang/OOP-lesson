"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productName, productPrice) {
        this.feedbacks = [];
        this.productName = productName;
        this.productPrice = productPrice;
    }
    Product.prototype.addFeedback = function (feedback) {
        for (var _i = 0, _a = this.feedbacks; _i < _a.length; _i++) {
            var feedback_1 = _a[_i];
            this.feedbacks.push(feedback_1);
        }
    };
    return Product;
}());
exports.Product = Product;
