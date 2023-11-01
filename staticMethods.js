// stattic Methods

// class Person{
//     constructor(name,birthYear,gender){
//         this.name = name;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }
//     // Instance method
//     calcAge(){
//         console.log(new Date().getFullYear()- this.birthYear);
//     }
//     //static Method - always attached to the class 
//     static greet (){
//         console.log('Hey there how are you');
//     }
// }

// let john = new Person('John', 1990, 'Male');
// console.log(john);
// Person.greet();

let Person = class{
    constructor(name,birthYear,gender){
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
    }
}
Person.prototype.calcAge = function(){
    let age = new Date().getFullYear()-this.birthYear;
    console.log(age);
};

Person.greet = function(){
    console.log('Hellooo');
}
let mark = new Person('Mark',1993,'Male');
console.log(mark);
mark.calcAge();
Person.greet();