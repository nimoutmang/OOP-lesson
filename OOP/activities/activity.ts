

// -------------------------------------------------------------
// CHALLENGE 1
// Rename with meaning full name :  function name
// -------------------------------------------------------------
function getRandomNumberBtwMinAndMax(min: number, max: number): number {
  let result = Math.random() * max; // Note :  Math.random() returns a number btw 0 and 1

  while (result < min) {
    result = Math.random() * max;
  }
  return result;
}


// -------------------------------------------------------------
// CHALLENGE 2
// Rename with meaning full name : a  and the function name
// -------------------------------------------------------------
function isLesssThanTen(a: number): boolean {
  return a < 10;
}



// -------------------------------------------------------------
// CHALLENGE 3
// Rename with mean full names :   the function name
// -------------------------------------------------------------
function isWordIncudeA(word: string): boolean {
  return word.includes("a");
}
