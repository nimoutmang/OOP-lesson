var VehicleConvey = /** @class */ (function () {
    function VehicleConvey() {
        this.vehichles = [];
    }
    VehicleConvey.prototype.addVehicle = function (vehichles) {
        this.vehichles.push(vehichles);
    };
    VehicleConvey.prototype.getMaxSpeed = function () {
        var conveySpeed = 0;
        conveySpeed = this.vehichles[0].getSpeed();
        for (var _i = 0, _a = this.vehichles; _i < _a.length; _i++) {
            var allVehicle = _a[_i];
            var theSpeed = allVehicle.getSpeed();
            if (theSpeed < conveySpeed) {
                conveySpeed = theSpeed;
            }
        }
        return conveySpeed;
    };
    return VehicleConvey;
}());
