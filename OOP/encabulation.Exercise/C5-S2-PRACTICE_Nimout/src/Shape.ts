export abstract class Shape {
    constructor(public leftX: number, public bottomY: number){}

    abstract getWidth(): number ;

    abstract getHeight(): number;

    abstract getArea(): number;
}