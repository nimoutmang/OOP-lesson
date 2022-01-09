var WepAlumni = /** @class */ (function () {
    function WepAlumni(vueJS, nodeJS, canCodeOop, salary) {
        this.vueJS = vueJS;
        this.nodeJS = nodeJS;
        this.canCodeOop = true;
        this.salary = salary;
    }
    WepAlumni.prototype.getSalary = function (WepAlumni) {
        if (this.nodeJS > 1 && this.vueJS && this.canCodeOop) {
            return staff2.salary;
        }
        else if (this.vueJS === 1 && this.nodeJS < 1 && this.canCodeOop) {
            return staff2.salary;
        }
        else if (this.vueJS === 2 && this.nodeJS === 2 && this.canCodeOop) {
            return staff2.salary;
        }
        else {
            return staff2.salary;
        }
    };
    return WepAlumni;
}());
var staff1 = new WepAlumni(0.5, 0.5, true, 250);
var staff2 = new WepAlumni(1, 0.5, true, 350);
var staff3 = new WepAlumni(2, 2, false, 450);
var staff4 = new WepAlumni(2, 2, true, 700);
console.log(staff2.getSalary(WepAlumni));
