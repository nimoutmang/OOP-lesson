import { Color } from "./Color";
import { Fruit } from "./Fruit";
import { FruitBox } from "./FruitBox";

let banana1 = new Fruit("BANANA", Color.YELLOW);
let apple = new Fruit("APPLE", Color.GREEN);
let banana2 = new Fruit("BANANA", Color.YELLOW);

let fruitBox = new FruitBox();
fruitBox.addFruit(banana1);
fruitBox.addFruit(apple);
fruitBox.addFruit(banana2);

console.log(fruitBox.getFruits()); // should print only  BANANA and APPLE
