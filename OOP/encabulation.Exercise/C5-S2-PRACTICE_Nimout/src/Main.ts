import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { Triangle } from "./Triangle";

let circle = new Circle(2, 3, 3);
let rectangle = new Rectangle(1, 3, 4, 4);
let square = new Square(1, 4, 5);
let triangle = new Triangle(2, 1, 3, 4);

console.log(circle.getWidth());
console.log(rectangle.getArea());
console.log(square.getArea());
console.log(circle.getArea());
console.log(triangle.getArea());