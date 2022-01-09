var person = { name: "Bopha", nationality: "French", salary: 10000 };
var person1 = { name: "Chenda", nationality: "Cambodia", salary: 20000 };
var person2 = { name: "Riya", nationality: "Cambodia", salary: 40000 };
function getName(person) {
    return person.name;
}
function sumSalaries(person1, person2) {
    return person1.salary + person2.salary;
}
function isFrench(person) {
    return person.nationality == "French";
}
console.log(getName(person));
