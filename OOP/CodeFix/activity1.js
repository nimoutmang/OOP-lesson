var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.area = this.width * this.height;
    }
    Rectangle.prototype.changeWidth = function (width) {
        this.width = width;
        this.area = width * this.height;
    };
    Rectangle.prototype.changHeight = function (height) {
        this.height = height;
        this.area = this.width * height;
    };
    return Rectangle;
}());
var smallRectangle = new Rectangle(4, 8);
smallRectangle.changeWidth(50);
console.log(smallRectangle);
