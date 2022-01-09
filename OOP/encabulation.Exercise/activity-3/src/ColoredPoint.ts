import { Point } from "./Point";

export class ColoredPoint extends Point {
  constructor(x: number, y: number) {
    super(x, y);
  }

  /**
   * Depending on the point position:
   * - if x= 0 => green
   * - else if y= 0 => red
   * - else => yellow
   * @returns the color of the point
   */
  getColor(): string {
   
    let col:string;
    if (this.x===0){
        col='green';
    }else if(this.y===0){
      col='red';
    }else{
      col='yellow';
    }
    return col;
  }
}
