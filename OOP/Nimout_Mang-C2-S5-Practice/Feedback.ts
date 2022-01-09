import { Customer } from "./Customer";

export class FeedBack{
    comment: string;
    evaluation: number;
    custOmer: Customer; 

    constructor(comment: string, evaluation: number, custOmer: Customer ){
        this.comment = comment;
        this.evaluation = evaluation;
        this.custOmer = custOmer;
    }
    setCommentOfCustomer(custOmer: Customer){
        this.custOmer = custOmer;
    }
    
}