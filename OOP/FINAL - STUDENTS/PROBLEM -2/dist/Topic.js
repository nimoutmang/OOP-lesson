"use strict";
exports.__esModule = true;
exports.Topic = void 0;
var Topic = /** @class */ (function () {
    function Topic(topic, year) {
        this.topic = topic;
        this.year = year;
    }
    Topic.prototype.getTopic = function () {
        return this.topic;
    };
    Topic.prototype.getYear = function () {
        return this.year;
    };
    return Topic;
}());
exports.Topic = Topic;
