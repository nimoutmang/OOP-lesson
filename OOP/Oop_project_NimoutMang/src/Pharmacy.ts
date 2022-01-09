import { Hospital } from "./Hospital";
export class Pharmacy extends Hospital{
    midiction : string;
    constructor(name: string, address: string, midiction: string){
      super(name, address);
        this.midiction = midiction;
    }
}