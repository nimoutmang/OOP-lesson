"use strict";
exports.__esModule = true;
var Color_1 = require("./Color");
var Fruit_1 = require("./Fruit");
var FruitBox_1 = require("./FruitBox");
var banana1 = new Fruit_1.Fruit("BANANA", Color_1.Color.YELLOW);
var apple = new Fruit_1.Fruit("APPLE", Color_1.Color.GREEN);
var banana2 = new Fruit_1.Fruit("BANANA", Color_1.Color.YELLOW);
var fruitBox = new FruitBox_1.FruitBox();
fruitBox.addFruit(banana1);
fruitBox.addFruit(apple);
fruitBox.addFruit(banana2);
console.log(fruitBox.getFruits()); // should print only  BANANA and APPLE
