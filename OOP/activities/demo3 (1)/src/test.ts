class Person {
    name = "defaultName";
    address = "defaultAddress";
  }
  
  class Employee extends Person {
    salary = 1000;
  }
  
  let ronan = new Employee();
  console.log(ronan);
  