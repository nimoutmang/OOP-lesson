"use strict";
exports.__esModule = true;
var Customer_1 = require("./Customer");
var Feedback_1 = require("./Feedback");
var Product_1 = require("./Product");
var Store_1 = require("./Store");
// Create Store
var OwnerShop = new Store_1.Store("Sophanna Shop");
//Create customer 
var Sophanna = new Customer_1.Customer("Sophanna", "Chhorn");
var Naran = new Customer_1.Customer("Naran", "Mei");
// Create Product
var Book = new Product_1.Product("Book", 15000);
var Pen = new Product_1.Product("Pen", 1000);
OwnerShop.addProduct([Book, Pen]);
OwnerShop.addCustomer([Sophanna, Naran]);
// Create CommentOfFeedback
var buyer1 = new Feedback_1.FeedBack("Not bad", 50, Sophanna);
var buyer2 = new Feedback_1.FeedBack("It's so bad", 100, Naran);
// 
// add  CommentOfFeedback to product
Book.addFeedback(buyer1);
Pen.addFeedback(buyer2);
console.log(OwnerShop.getProductLessThan(2500));
// console.log(OwnerShop.getCustomerComments(Sophanna));
