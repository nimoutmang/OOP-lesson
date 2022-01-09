"use strict";
exports.__esModule = true;
exports.Room = void 0;
var Room = /** @class */ (function () {
    function Room(name) {
        this.doors = [];
        this.name = name;
    }
    Room.prototype.addDoor = function (door) {
        this.doors.push(door);
    };
    return Room;
}());
exports.Room = Room;
