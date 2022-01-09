"use strict";
exports.__esModule = true;
exports.FeedBack = void 0;
var FeedBack = /** @class */ (function () {
    function FeedBack(comment, evaluation, custOmer) {
        this.comment = comment;
        this.evaluation = evaluation;
        this.custOmer = custOmer;
    }
    FeedBack.prototype.setCommentOfCustomer = function (custOmer) {
        this.custOmer = custOmer;
    };
    return FeedBack;
}());
exports.FeedBack = FeedBack;
