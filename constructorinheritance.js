//parent class or  base class
let Person = function(name,gender,birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}
Person.prototype.calcAge = function(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log(age);
};

let john = new Person('John','male', 1996);
console.log(john);
console.log(john.calcAge());
// Person.calcAge()

//child class
let Employee = function(name,gender,birthYear,empId,salary){
    Person.call(this,name,gender,birthYear);
    this.empId = empId;
    this.salary = salary;
}
//Inheriting the prototype method of person
Employee.prototype  = Person.prototype;


Employee.prototype.calcsalary = function(){
    return this.salary *12;
}

Employee.prototype.empDetails = function(){
    console.log(this.name);
    console.log(this.empId);
}

let mark = new Employee('mark','male',1993,19,12000);
console.log(mark);