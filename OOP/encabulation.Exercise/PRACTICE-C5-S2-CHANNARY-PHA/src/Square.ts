import { Shape } from "./Shape";

export class Square extends Shape{
    public size: number;
    constructor(leftX:number, bottomY: number, size:number){
        super(leftX, bottomY);
        this.size = size;
    }
    getWidth(): number {
        return this.size;
    }

    getHeight(): number {
        return this.size;
    }

    getArea(): number {
        return  this.getWidth() * this.getHeight(); // Or this.size * this.size
    }
}