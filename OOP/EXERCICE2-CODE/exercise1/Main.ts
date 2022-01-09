import { Calendar } from "./Calendar";
import { Person } from "./Person";

let calendar = new Calendar();
let sophanna = new Person("sophanna", 2000);
let kunthy = new Person("kunthy", 2001);
console.log("Sophnna is: " + calendar.getAge(sophanna));
console.log("Kunthy is: " + calendar.getAge(kunthy));

