class Numbers{
    constructor(public a: number, public b: number){

    }
    getSquare(){
        return new Numbers((this.a)**2, (this.b)**2)
    }
}
let obj = new Numbers(2,3)
console.log("a="+obj.getSquare().a+", b="+obj.getSquare().b)