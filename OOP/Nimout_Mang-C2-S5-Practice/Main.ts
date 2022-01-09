import { Customer } from "./Customer";
import { FeedBack } from "./Feedback";
import { Product } from "./Product";
import { Store } from "./Store";


// Create Store
let OwnerShop = new Store("Sophanna Shop")

//Create customer 
let Sophanna= new Customer("Sophanna", "Chhorn")
let Naran = new Customer("Naran", "Mei");


// Create Product
let Book = new Product("Book", 15000)
let Pen = new Product("Pen", 1000)

OwnerShop.addProduct([Book, Pen]);
OwnerShop.addCustomer([Sophanna, Naran]);

// Create CommentOfFeedback
let buyer1  = new FeedBack("Not bad", 50, Sophanna);
let buyer2 = new FeedBack("It's so bad", 100, Naran);





// add  CommentOfFeedback to product
Book.addFeedback([buyer1,buyer2]);
Pen.addFeedback([buyer2]);

console.log(OwnerShop.getProductLessThan(2500));

// console.log(OwnerShop.getCustomerComments(Sophanna));
