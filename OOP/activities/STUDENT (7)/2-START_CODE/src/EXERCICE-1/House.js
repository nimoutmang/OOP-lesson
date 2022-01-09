var House = /** @class */ (function () {
    function House() {
        this.chairs = [];
    }
    /**
     * Add a chair of given ID
     * @param chairID the chair ID
     */
    House.prototype.addChair = function (chairID) {
        // TODO YOUR CODE
        return chairID;
    };
    return House;
}());
var Chair = /** @class */ (function () {
    function Chair(chairId, house) {
        this.chairId = chairId;
        this.house = house;
    }
    return Chair;
}());
// MAIN
var newHouse = new House();
newHouse.addChair(45);
// Add a chair of id 45
var newChair = new Chair(45, newHouse);
console.log(newChair);
