import { Drink } from "./Drink";

export class Coffee extends Drink {
    private numOfSugar: number;
    constructor(name: string, price: number, numOfSugar: number) {
        super(name, price);
        this.numOfSugar = numOfSugar;
    }

    getDrinkInfo(): string {
        return 'Name: ' + this.name + '\nPrice: ' + this.price + '\nNumber of sugar: ' + this.numOfSugar;
    }
}