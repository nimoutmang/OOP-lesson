export class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public isEqual(other: Point): boolean {
    return this.x == other.x && this.y == other.y // TODO  !!
    

  }
}
