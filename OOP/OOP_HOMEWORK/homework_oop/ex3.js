var Numbers = /** @class */ (function () {
    function Numbers(a, b) {
        this.a = a;
        this.b = b;
    }
    Numbers.prototype.getSquare = function () {
        return new Numbers(Math.pow((this.a), 2), Math.pow((this.b), 2));
    };
    return Numbers;
}());
var obj = new Numbers(2, 3);
console.log("a=" + obj.getSquare().a + ", b=" + obj.getSquare().b);
