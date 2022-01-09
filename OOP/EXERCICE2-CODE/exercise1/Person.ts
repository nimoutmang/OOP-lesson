export class Person {
    private name: string;
    private yearOfBirth: number;
    constructor(name: string, yearOfBirth: number) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
    }
    getName(): string {
      return this.name;
    }
    getYearOfBirth(): number {
      return this.yearOfBirth;
    }
  }