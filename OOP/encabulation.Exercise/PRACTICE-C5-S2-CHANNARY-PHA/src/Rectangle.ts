import { Shape } from "./Shape";

export class Rectangle extends Shape{
    public rightX: number;
    public topY: number;
    constructor(leftX:number, bottomY: number, rightX: number, topY: number){
        super(leftX, bottomY);
        this.rightX = rightX;
        this.topY = topY;
    }
    getWidth(): number {
        return this.rightX - this.leftX;
    }

    getHeight(): number {
        return this.topY - this.bottomY;
    }

    getArea(): number {
        return this.getHeight() * this.getWidth();
    }

}