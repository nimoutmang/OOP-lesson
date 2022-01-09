export abstract class Vehicle{
    protected platedID : string;
    protected weight: number;
    constructor(platedID: string, weight: number){
        this.platedID = platedID;
        this.weight = weight;
    }
    abstract getSpeed(): number
    
}