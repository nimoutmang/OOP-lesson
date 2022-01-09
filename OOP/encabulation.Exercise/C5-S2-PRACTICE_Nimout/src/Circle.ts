import { Shape } from "./Shape";

export class Circle extends Shape{
    private radius: number;
    constructor(leftX:number, bottomY: number, radius: number){
        super(leftX, bottomY);
        this.radius = radius;
    }
    getWidth(): number {
        return this.radius + this.radius;
    }

    getHeight(): number {
        return this.getWidth();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius; 
    }

}
// Math.PI ~ 3.14