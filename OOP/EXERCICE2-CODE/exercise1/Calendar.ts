import { Person } from "./Person";
export class Calendar {
  currentYear: number;
  constructor(currentYear: number = new Date().getFullYear()) {
    this.currentYear = currentYear;
  }
  getAge(person: Person): number {
    let age: number = this.currentYear - person.getYearOfBirth();
    return age;
  }
}