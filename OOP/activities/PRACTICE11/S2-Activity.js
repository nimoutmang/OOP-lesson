// -------------------------------------------------------------
// CHALLENGE 1
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function getSumNumber(numbers) {
    var result = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var n = numbers_1[_i];
        result += n;
    }
    return result;
}
// -------------------------------------------------------------
// CHALLENGE 2
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function CountNumberOf2(numbers) {
    var count = 0;
    for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
        var value = numbers_2[_i];
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
function isRonanAndSovanda(words) {
    var isRonan = false;
    var isSovanda = false;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
function getAllSeniorEmployee(employees) {
    var result = [];
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
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
function isEvenNumber(array) {
    var listHasEven = false;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        if (value % 2 == 0) {
            listHasEven = true;
        }
    }
    return listHasEven;
}
var list1 = [1, 5, 9, 8, 7, 6, 8];
var list2 = [2, 5, 8, 4, 9, 10];
var list3 = [1, 5, 9, 8, 7, 6, 8];
console.log(isEvenNumber(list1) ? "list1 has even numbers" : "list1 has NO even numbers");
console.log(isEvenNumber(list2) ? "list2 has even numbers" : "list2 has NO even numbers");
console.log(isEvenNumber(list3) ? "list3 has even numbers" : "list3 has NO even numbers");
// -------------------------------------------------------------
// CHALLENGE 6
//  Add a GOOD comments instead of the todos
// -------------------------------------------------------------
/**
 * It's return true if password has more then 7 and has uppercase
 * @param   password , string
 * @return  true if lenght of password has more then 7 and has Uppercase
 */
function isValidPassword(password) {
    var hasUpperCase = false;
    for (var _i = 0, password_1 = password; _i < password_1.length; _i++) {
        var char = password_1[_i];
        if (char === char.toUpperCase()) {
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
function isLowerCaseMoreThenOrEqual2(word) {
    var countLowerCase = 0;
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        if (char === char.toLowerCase()) {
            countLowerCase++;
        }
    }
    return countLowerCase >= 2;
}
