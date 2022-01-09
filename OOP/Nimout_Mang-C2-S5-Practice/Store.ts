import { Customer } from "./Customer";
import { FeedBack } from "./Feedback";
import { Product } from "./Product";

export class Store{
    storeName: string;
    products: Product[] = []
    customers : Customer[] =[];
    constructor(storeName: string){
        this.storeName = storeName;
    }
    addProduct(products: Product[] ){
        for (let product of products){
            this.products.push(product)
        }
        
    }

    addCustomer(customer: Customer[]){
        for (let customer of this.customers){
            this.customers.push(customer);
        }
        
    }

    getProductLessThan(price:number):Product[]{
        let arrayProduct:Product[] = []
        for (let product of this.products){
            if (product.productPrice < price){
                arrayProduct.push(product);
            }
        }
        return arrayProduct;
    }
    getFeedbackCOntaining(comments:string):FeedBack[]{
        let Feedback:FeedBack[] = [];
        for (let pro of this.products){
            let feedbacks = pro.feedbacks
            for (let coMMent of feedbacks){
                if (coMMent.comment === comments){
                    Feedback.push(coMMent);
                }
            }
        }
        return Feedback;
    }

    getCustomerComments(customer:Customer):String[]{

        let comments :string[] = [];
        for(let product of this.products){
            let feedbacks = product.feedbacks;
            for(let feedback of feedbacks){
                if(feedback.custOmer.firstName === customer.firstName && feedback.custOmer.lastName === customer.lastName){
                    comments.push(feedback.comment);
                }
            }
        }
        return comments;

    }
}

