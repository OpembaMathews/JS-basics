// Inheritance between classes

class Person{
    constructor(name,gender,birthYear){
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear

    }

    calcAge(){
        console.log(new Date().getFullYear() - this.birthYear);

    }
}

class Employee extends Person {
    constructor(name,gender,birthYear, empId,salary){
        super(name,gender,birthYear);
        this.empId = empId;
        this.salary = salary;
    }
    calcSalary(){
        this.salary*12;
    }

    empdetails(){
        console.log(this.name);
        console.log(this.empId);
    }
}

let mark = new Employee('Makr','male',1995,201,1800);
console.log(mark);