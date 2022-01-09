import { Color } from "./Color";

export class Fruit {
  constructor(private name: string, private color: Color) {}

  isEqual(other: Fruit): boolean {
    // ------------      TODO     ------------
    return this.name === other.name && this.color === other.color;
  }
}

