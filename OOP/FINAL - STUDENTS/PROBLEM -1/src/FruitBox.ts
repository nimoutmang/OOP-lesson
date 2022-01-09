import { Fruit } from "./Fruit";

export class FruitBox {
  private fruits: Fruit[] = [];

  /**
   * Add the given fruit, if no similatr fruit are already in this box
   * @param fruit
   */
  addFruit(fruit: Fruit) {
    // ------------      TODO     ------------
    if( !this.contains(fruit)){
      return this.fruits.push(fruit);
    }
  }

  /**
   * @param fruit
   * @returns true if  no similar fruit are already in this box
   */
  contains(fruit: Fruit): boolean {
    // ------------      TODO     ------------
    for( let aFruit of this.fruits){
      if(fruit.isEqual(aFruit)){
        return true;
      }
    }
  }

  getFruits(): Fruit[] {
    return this.fruits; // return a COPY of the fruit
  };
};
