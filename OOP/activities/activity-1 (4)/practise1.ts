// export class Personn {
//     private name: string;
//     private children: Personn[] = [];
  
//     constructor(name: string) {
//       this.name = name;
//     }
//     public addChild(child: Personn) {
//       this.children.push(child);
//     }
//     public printTree(space: string){
//         console.log(space + this.name);

//         space += '\t';
//         for (let child of this.children){
//             child.printTree(space);
//         }
//     }
    
//   }
  
  
  // let sreynot = new Personn("sreynot");
  // let ronan = new Personn("ronan");
  // let sophea = new Personn("sophea");
  // let chanry = new Personn("chanry");
  
//   sreynot.addChild(ronan);
//   ronan.addChild(sophea);
//   sophea.addChild(chanry);
// console.log(sreynot);  



export class Personn {
  private name: string;
  private children: Personn[] = [];

  constructor(name: string) {
    this.name = name;
  }
  public addChild(child: Personn) {
    this.children.push(child);
  }

  public printTree(space: string){
      console.log((space + this.name));

      space += "\t";
      for (let child of this.children){
        child.printTree(space);
      }
  }
}

let sreynot = new Personn("sreynot");
let ronan = new Personn("ronan");
let sophea = new Personn("sophea");
let chanry = new Personn("chanry");

sreynot.addChild(ronan);
ronan.addChild(sophea);
sophea.addChild(chanry);
sreynot.printTree(" ");

console.log(sreynot);
console.log(sophea);
console.log(chanry);
console.log(ronan);