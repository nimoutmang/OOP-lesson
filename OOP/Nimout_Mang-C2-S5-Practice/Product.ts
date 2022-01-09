import { FeedBack } from "./Feedback";
export class Product{
    productName : string;
    productPrice : number;
    feedbacks: FeedBack[] = [];
    constructor(productName: string ,productPrice: number){
        this.productName = productName;
        this.productPrice = productPrice;
    }
    addFeedback(feedback: FeedBack[]){
    for (let feedback of this.feedbacks){
        this.feedbacks.push(feedback);
    }

        
    }
}