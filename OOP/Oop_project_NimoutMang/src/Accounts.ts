import { Hospital } from "./Hospital";
export  class Account extends Hospital{
    constructor(name: string, address: string){
        super(name, address);
    }
    getName():string{
        return this.name;
    };

}