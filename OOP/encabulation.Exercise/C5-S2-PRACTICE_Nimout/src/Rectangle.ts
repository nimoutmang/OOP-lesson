import { Shape } from "./Shape";

export class Rectangle extends Shape{
    private rightX: number;
    private topY: number;
    constructor(leftX:number, bottomY: number, rightX: number, topY: number){
        super(leftX, bottomY);
        this.rightX = rightX;
        this.topY = topY;
    }
    getWidth(): number {
        return this.rightX - this.leftX;
    }

    getHeight(): number {
        return this.bottomY - this.topY;
    }

    getArea(): number {
        return this.getHeight() * this.getWidth();
    }

}