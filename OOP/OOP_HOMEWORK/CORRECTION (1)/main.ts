import { Address } from "./address";
import { Customer } from "./customer";
import { DateTime } from "./DateTime";
import { Trip } from "./trip";

// Customer Address
let add_ronan = new Address("Paris", "France");
let add_sovanda = new Address("Phnom Penh", "Cambodia");

// Customer
let ronan = new Customer("Ronan", "Ogor", add_ronan);
let Him = new Customer("Him", "Hey");
let Sovanda = new Customer("Sovanda", "Chib", add_sovanda);

// Departure and Arrival Address
let kaka_departure = new Address("Phnom Penh", "Cambodia");
let kaka_arrival = new Address("Kampot", "Cambodia");

let lyhour_departure = new Address("Phnom Penh", "Cambodia");
let lyhour_arrival = new Address("Sieam Reap", "Cambodia");

let start = new DateTime("29/10/2021", "14.30");
let end = new DateTime("29/10/2021", "16.30");

let kakaBus = new Trip("KAKA Bus", kaka_departure, kaka_arrival, start, end);
let lyhourBus = new Trip(
  "lyhour Bus",
  lyhour_departure,
  lyhour_arrival,
  start,
  end
);

kakaBus.addCustomer(Him);
kakaBus.addCustomer(Sovanda);

lyhourBus.addCustomer(Him);
lyhourBus.addCustomer(Sovanda);
lyhourBus.addCustomer(ronan);

console.log(kakaBus);
console.log(lyhourBus);
