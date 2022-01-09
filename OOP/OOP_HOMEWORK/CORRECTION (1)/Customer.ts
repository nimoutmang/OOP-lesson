import { Address } from "./address";

export class Customer {
  firstname: string;
  lastname: string;
  address?: Address;
  constructor(firstname: string, lastname: string, address?: Address) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
  }
}
