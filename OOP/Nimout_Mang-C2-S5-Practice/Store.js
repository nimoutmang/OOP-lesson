"use strict";
exports.__esModule = true;
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store(storeName) {
        this.products = [];
        this.customers = [];
        this.storeName = storeName;
    }
    Store.prototype.addProduct = function (products) {
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            this.products.push(product);
        }
    };
    Store.prototype.addCustomer = function (customer) {
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var customer_1 = _a[_i];
            this.customers.push(customer_1);
        }
    };
    Store.prototype.getProductLessThan = function (price) {
        var arrayProduct = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.productPrice < price) {
                arrayProduct.push(product);
            }
        }
        return arrayProduct;
    };
    Store.prototype.getFeedbackCOntaining = function (comments) {
        var Feedback = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var pro = _a[_i];
            var feedbacks = pro.feedbacks;
            for (var _b = 0, feedbacks_1 = feedbacks; _b < feedbacks_1.length; _b++) {
                var coMMent = feedbacks_1[_b];
                if (coMMent.comment === comments) {
                    Feedback.push(coMMent);
                }
            }
        }
        return Feedback;
    };
    Store.prototype.getCustomerComments = function (customer) {
        var comments = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            var feedbacks = product.feedbacks;
            for (var _b = 0, feedbacks_2 = feedbacks; _b < feedbacks_2.length; _b++) {
                var feedback = feedbacks_2[_b];
                if (feedback.custOmer.firstName === customer.firstName && feedback.custOmer.lastName === customer.lastName) {
                    comments.push(feedback.comment);
                }
            }
        }
        return comments;
    };
    return Store;
}());
exports.Store = Store;
