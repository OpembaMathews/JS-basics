//class declaration
class Person{
    constructor(name,birthYear, gender){
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
       
    }
    
    calcAge(){
        console.log(new Date().getFullYear() - this.birthYear);
    }

}

Person.prototype.greet = function(){
    console.log('Hello '+ this.name);
}

let john = new Person('John',1990, 'Male');
console.log(john);
john.calcAge();
john.greet();

let abby = new Person('Abby',1990, 'Male');
console.log(abby);
// classes cannot be hoisted
// classes are first class citizen
//classes are excuted in strict mode.

//2. class expression

// let Person = class{

// }