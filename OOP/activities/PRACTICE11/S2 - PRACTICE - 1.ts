
// -------------------------------------------------------------
// CHALLENGE 1
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function getSumNumber(numbers: number[]): number {
  let result = 0;
  for (let n of numbers) {
    result += n;
  }
  return result;
}


// -------------------------------------------------------------
// CHALLENGE 2
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function CountNumberOf2(numbers: number[]): number {
  let count = 0;
  for (let value of numbers) {
    if (value == 2) {
      count++;
    }
  }
  return count;
}

// -------------------------------------------------------------
// CHALLENGE 3
// Rename with mean full names :  z1, z2 and  the function name
// -------------------------------------------------------------
function isRonanAndSovanda(words: string[]): boolean {
  let isRonan = false;
  let isSovanda = false;
  for (let word of words) {
    if (word === "ronan") {
      isRonan = true;
    }
    if (word === "sovanda") {
      isSovanda = true;
    }
  }
  return isRonan && isSovanda;
}

// -------------------------------------------------------------
// CHALLENGE 4
// Rename with mean full names :   the function name
// -------------------------------------------------------------
class Employee {
  isSenior: boolean;
  name: string;
}

function getAllSeniorEmployee(employees: Employee[]): Employee[] {
  let result: Employee[] = [];
  for (let employee of employees) {
    if (employee.isSenior) {
      result.push(employee);
    }
  }
  return result;
}

	

// -------------------------------------------------------------
// CHALLENGE 5
// Create a function to remove duplicated code
// -------------------------------------------------------------
function isEvenNumber(array: number[]) {
  let listHasEven = false;
  for (let value of array) {
    if (value % 2 == 0) {
      listHasEven = true;
    }
  }
  return listHasEven;
}

let list1 = [1, 5, 9, 8, 7, 6, 8];
let list2 = [2, 5, 8, 4, 9, 10];
let list3 = [1, 5, 9, 8, 7, 6, 8];

console.log(isEvenNumber(list1)?"list1 has even numbers" : "list1 has NO even numbers")
console.log(isEvenNumber(list2)?"list2 has even numbers" : "list2 has NO even numbers")
console.log(isEvenNumber(list3)?"list3 has even numbers" : "list3 has NO even numbers")

// -------------------------------------------------------------
// CHALLENGE 6
//  Add a GOOD comments instead of the todos
// -------------------------------------------------------------

/**
 * It's return true if password has more then 7 and has uppercase
 * @param   password , string
 * @return  true if lenght of password has more then 7 and has Uppercase
 */
function isValidPassword(password : string) : boolean{
	let hasUpperCase = false;
	for(let char of password) {
		if (char === char.toUpperCase() ) {
			hasUpperCase = true;
		}
	}	
	return password.length > 7 && hasUpperCase;
}




// -------------------------------------------------------------
// CHALLENGE 7
//  - Rename with meaningful name :  aaa  , zzzz
//  - Add a GOOD comments instead of the todos
// -------------------------------------------------------------


/**
 * 
 * @param   word, string for to check 
 * @return  true if the word contains 2 or more lower case
 */
function isLowerCaseMoreThenOrEqual2(word: string): boolean {
  let countLowerCase = 0;
  for (let char of word) {
    if (char === char.toLowerCase()) {
      countLowerCase++;
    }
  }
  return countLowerCase >= 2;
}