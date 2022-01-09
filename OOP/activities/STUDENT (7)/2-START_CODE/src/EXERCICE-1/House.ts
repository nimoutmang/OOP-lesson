class House {
  private chairs: Chair[] = [];

  /**
   * Add a chair of given ID
   * @param chairID the chair ID
   */
  public addChair(chairID: number) {
    // TODO YOUR CODE
    return chairID;
  }
}

class Chair {
  constructor(private chairId: number, private house: House) {}
}

// MAIN
let newHouse = new House();
newHouse.addChair(45); 
// Add a chair of id 45
let newChair = new Chair(45, newHouse);
console.log(newChair)

