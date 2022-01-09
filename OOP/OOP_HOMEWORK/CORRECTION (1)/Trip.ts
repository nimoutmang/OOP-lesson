import { Address } from "./address";
import { Customer } from "./customer";
import { DateTime } from "./DateTime";

export class Trip {
  busName: string;
  customers: Customer[] = [];
  departurePlace: Address;
  arrivalPlace: Address;

  departureDate: DateTime;
  arrivalDate: DateTime;

  constructor(
    busName: string,
    departurePlace: Address,
    arrivalPlace: Address,
    departureDate: DateTime,
    arrivalDate: DateTime
  ) {
    this.busName = busName;
    this.departurePlace = departurePlace;
    this.arrivalPlace = arrivalPlace;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }
}
