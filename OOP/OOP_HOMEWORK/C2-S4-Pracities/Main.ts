import { Address } from "./Address";
import { Customer } from "./Customer";
import { Trip } from "./Trip";


//ADDDRESS
let france = new Address("Paris", "France");
let phnomPenh = new Address("Phnom Penh", "Cambodia");
let kampot = new Address("Kampot", "Cambodia");
let sieamReap = new Address("Sieam Reap", "Cambodia");


//CUSTOMER

let ronan = new Customer("Ronan", "Ogor");
let him = new Customer("Him", "Hey");
let sovanda = new Customer("Sovanda", "Chib");

///KAKA Trip
let kakaBus = new Trip("KAKA Bus");
kakaBus.departurePlace = phnomPenh;
kakaBus.arrivalPlace = kampot;
kakaBus.customer.push(him, sovanda);



///LYHOR Trip
let lyhorExpress = new Trip("LYHOR Express");
lyhorExpress.departurePlace = phnomPenh;
lyhorExpress.arrivalPlace = sieamReap;
lyhorExpress.customer.push(him, sovanda, ronan);


console.log(lyhorExpress);
console.log(kakaBus);


