import { Coffee } from "./Coffee";
import { Drink } from "./Drink";

class OrangeJuice extends Drink {
	private numOfOrange: number;
    constructor(name: string, price: number, numOfOrange: number) {
        super(name, price);
        this.numOfOrange = numOfOrange;
    }

    getDrinkInfo(): string {
        return 'Name: ' + this.name + '\nPrice: ' + this.price + '\nNumber of orange: ' + this.numOfOrange;
    }
}

let amazon = new Coffee ('Amazon Cafe', 5, 250);
let orange = new OrangeJuice('Juice Juice', 5, 300);

console.log(amazon.getDrinkInfo());
console.log(orange.getDrinkInfo());