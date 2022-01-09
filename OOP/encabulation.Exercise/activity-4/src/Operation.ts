abstract class Operation {
  constructor(public number1: number, public number2: number) {}

  abstract doOperation(): number;
}

// TODO 1 : Create a class AddOperation, which extends Operation
//          doOpenration must return the sum of the 2 numbers
class AddOperation extends Operation{
  constructor(number1: number, number2: number) {
    super(number1,number2)
  }
  doOperation(): number{
    return this.number1 + this.number2
  }
}
class MultiplyOperation extends Operation{
  constructor(number1: number, number2: number) {
    super(number1,number2)
  }
  doOperation(): number{
    return this.number1 * this.number2
  }
}
// TODO 2 : Create a class MultiplyOperation, which extends Operation
//          doOpenration must return the multiplication of the 2 numbers
let add = new AddOperation(10, 10);
console.log(add.doOperation());
