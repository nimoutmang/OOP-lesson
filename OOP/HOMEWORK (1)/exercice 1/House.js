"use strict";
exports.__esModule = true;
exports.House = void 0;
var House = /** @class */ (function () {
    function House(name) {
        this.rooms = [];
        this.doors = [];
        this.name = name;
    }
    House.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    House.prototype.addDoor = function (door) {
        this.doors.push(door);
    };
    House.prototype.getInformation = function () {
        // TODO
        // example
        //   House Molika has:
        //  - 1 door (pink)
        //  - 2 rooms
        // 	- bathroom
        // 			- 1 doors (white)
        // 	- living room
        // 			- 1 doors (purple)
        var Molikahouse = "House ";
        for (var _i = 0, _a = this.doors; _i < _a.length; _i++) {
            var door = _a[_i];
            Molikahouse += this.name + " has : \n" + " - 1 door (" + door.color + ")\n";
        }
        var ColorRoom = " 2 rooms \n";
        for (var _b = 0, _c = this.rooms; _b < _c.length; _b++) {
            var room = _c[_b];
            ColorRoom += "  - " + room.name + "\n" + "  - 1 door ( " + room.doors[0].color + ")\n";
        }
        return Molikahouse + ColorRoom;
    };
    return House;
}());
exports.House = House;
