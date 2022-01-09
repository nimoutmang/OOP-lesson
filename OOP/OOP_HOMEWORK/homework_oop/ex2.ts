class WepAlumni{
    vueJS:number;
    nodeJS:number;
    canCodeOop:boolean;
    salary:number;
    

    constructor(vueJS:number, nodeJS:number, canCodeOop:boolean, salary:number){
        this.vueJS = vueJS;
        this.nodeJS = nodeJS;
        this.canCodeOop = true;
        this.salary = salary;


    }
    getSalary(WepAlumni){
        if(this.nodeJS > 1 && this.vueJS && this.canCodeOop){
            return staff2.salary
        }else if(this.vueJS === 1 && this.nodeJS < 1 && this.canCodeOop){
            return staff2.salary
        }else if(this.vueJS ===2 && this.nodeJS ===2 && this.canCodeOop){
            return staff2.salary
        }else{
            return staff2.salary
        }
    }

}
let staff1 = new WepAlumni(0.5, 0.5, true, 250);
let staff2 = new WepAlumni(1, 0.5, true, 350);
let staff3 = new WepAlumni(2, 2, false, 450);
let staff4 = new WepAlumni(2,2, true, 700);
console.log(staff2.getSalary(WepAlumni));