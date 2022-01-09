
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

function getAllSeniorEmployees(employees: Employee[]): Employee[] {
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
function hasEven(array: number[]): boolean {
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

console.log(hasEven(list1)?"list1 has even numbers" : "list1 has NO even numbers")
console.log(hasEven(list2)?"list2 has even numbers" : "list2 has NO even numbers")
console.log(hasEven(list3)?"list3 has even numbers" : "list3 has NO even numbers")

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










// // -------------------------------------------------------------
// // CHALLENGE 1
// // Rename with meaningful name :  function name
// // -------------------------------------------------------------
// function sumNumber(numbers: number[]): number {
//   let result = 0;
//   for (let n of numbers) {
//     result += n;
//   }
//   return result;
// }


// // -------------------------------------------------------------
// // CHALLENGE 2
// // Rename with meaningful name :  function name
// // -------------------------------------------------------------
// function countNumberOf2(numbers: number[]): number {
//   let count = 0;
//   for (let value of numbers) {
//     if (value == 2) {
//       count++;
//     }
//   }
//   return count;
// }

// // -------------------------------------------------------------
// // CHALLENGE 3
// // Rename with mean full names :  z1, z2 and  the function name
// // -------------------------------------------------------------
// function containRonanAndSovanda(words: string[]): boolean {
//   let z1 = false;
//   let z2 = false;
//   for (let word of words) {
//     if (word === "ronan") {
//       z1 = true;
//     }
//     if (word === "sovanda") {
//       z2 = true;
//     }
//   }
//   return z1 && z2;
// }

// // -------------------------------------------------------------
// // CHALLENGE 4
// // Rename with mean full names :   the function name
// // -------------------------------------------------------------
// class Employee {
//   isSenior: boolean;
//   name: string;
// }

// function getSeniorEmployee(employees: Employee[]): Employee[] {
//   let result: Employee[] = [];
//   for (let employee of employees) {
//     if (employee.isSenior) {
//       result.push(employee);
//     }
//   }
//   return result;
// }

	

// // -------------------------------------------------------------
// // CHALLENGE 5
// // Create a function to remove duplicated code
// // -------------------------------------------------------------

// function getEvenNumber(lists: number[]){
//   let listHasEven = false;
//   for(let n of lists){
//     if(n % 2 == 0){
//       listHasEven = true;
//     }
//   }
//   return listHasEven;
// }
// let list1 = [1, 5, 9, 8, 7, 6, 8];
// let list2 = [2, 5, 8, 4, 9, 10];
// let list3 = [1, 5, 9, 8, 7, 6, 8];

// console.log(getEvenNumber(list1) + "list1 has even numbers" + "list1 has NO even numbers");
// console.log(getEvenNumber(list2) + "list2 has even numbers" + "list2 has NO even numbers");
// console.log(getEvenNumber(list3) + "list3 has even numbers" + "list3 has NO even numbers");




// // -------------------------------------------------------------
// // CHALLENGE 6
// //  Add a GOOD comments instead of the todos
// // -------------------------------------------------------------

// /**
//  * is valid if password has more than 7 is uppercase
//  * @param   password, string
//  * @return  true if lenght of password more than 7 and has uppercase
//  */
// function isValidPassword(password : string) : boolean{
// 	let hasUpperCase = false;
// 	for(let char of password) {
// 		if (char === char.toUpperCase() ) {
// 			hasUpperCase = true;
// 		}
// 	}	
// 	return password.length > 7 && hasUpperCase;
// }




// // -------------------------------------------------------------
// // CHALLENGE 7
// //  - Rename with meaningful name :  aaa  , zzzz
// //  - Add a GOOD comments instead of the todos
// // -------------------------------------------------------------


// /**
//  * the characters is valid if character has lowwer case
//  * @param  word , string to check
//  * @return  true if word has more or equal than 2 or lowercase
//  */
// function isValidWord(word: string): boolean {
//   let count = 0;
//   for (let char of word) {
//     if (char === char.toLowerCase()) {
//       count++;
//     }
//   }
//   return count >= 2;
// }
