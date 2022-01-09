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
var Resource = /** @class */ (function () {
    function Resource(id) {
        this.id = id;
    }
    return Resource;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, age) {
        var _this = _super.call(this, id) || this;
        _this.age = age;
        return _this;
    }
    Person.prototype.getName = function () {
        return null;
    };
    return Person;
}(Resource));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, age, skills) {
        var _this = _super.call(this, id, age) || this;
        _this.skills = skills;
        return _this;
    }
    Teacher.prototype.getSkill = function () {
        return this.skills;
    };
    return Teacher;
}(Person));
