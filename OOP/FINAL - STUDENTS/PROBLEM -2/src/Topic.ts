import { Category } from "./category"


export class Topic{
    private topic:Category;
    private year:number
    constructor(topic:Category, year:number){
        this.topic = topic;
        this.year = year;
    }
    getTopic(){
        return this.topic;
    }
    getYear(){
        return  this.year;
    }
    
}