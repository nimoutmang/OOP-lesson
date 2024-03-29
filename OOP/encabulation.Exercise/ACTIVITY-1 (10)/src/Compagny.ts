import { Computer } from "./materials/Computer";
import { Material } from "./materials/Material";
import { UsbKey } from "./materials/UsbKey";
import { Customer } from "./persons/Customer";
import { Employee } from "./persons/Employee";
import { Person } from "./persons/Person";
import { MeetingRoom } from "./rooms/MeetingRoom";
import { Room } from "./rooms/Room";

export class Compagny {
  allRooms: Room[] = [];
  allMaterials: Material[] = [];
  allPeople: Person[] = [];

  addRoom(room: Room) {
    this.allRooms.push(room);
  }
  addMaterial(material: Material) {
    this.allMaterials.push(material);
  }
  addPeople(person: Person) {
    this.allPeople.push(person);
  }

  /**
   * Find in compagny material or personn or room, the ressource
   * corresponding to given name.
   * TODO !!!!!!!
   * @param name
   * @returns
   */
  findByName(name: string): any[] {
    return [];
  }
}

// -------------------------------------
// TEST
let myCompagny = new Compagny();
myCompagny.addMaterial(new UsbKey(458, 5));
myCompagny.addMaterial(new Computer(458, "DELL 452"));

myCompagny.addRoom(new Room("Learning Lab"));
myCompagny.addRoom(new MeetingRoom("B32", true));

myCompagny.addPeople(new Customer("virak", "Mango Byte"));
myCompagny.addPeople(new Employee("thon", 4500));
