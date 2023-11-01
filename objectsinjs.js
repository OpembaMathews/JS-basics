//constructor function
let Person = function (name,gender,birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}
 //calculate the date.. it is a behaviour for the object person. using a prototype of the 
 //object

Person.prototype.calculateAge = function(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log(age); 
}
Person.prototype.city='London';

// console.log(Person.prototype);
//we now can create an object from the constructor function.. remember a constructor fun
//is also also an object on its own in javascript..

let John = new Person('john', 'Male', 1990);
// John.calculateAge();
console.log(John.hasOwnProperty('city')); 

let marry = new Person('Mary', 'Female', 1993);
// marry.calculateAge();
console.log(marry);

let peter = new Person('Peter','Male',1996);
// peter.calculateAge();
console.log(peter);

//other examples of js function constructor
// let now = new Date();
// let str = new String();


let mark={
    name:'mark',
    birthYears:1990 ,
    gender:'Male'
}

console.log(mark.hasOwnProperty('name'));

let firstName = " Rajat "; 
console.log(firstName); 
let modifiedName = firstName.toUpperCase().trim(); 
console.log(modifiedName)


let arr = [10,20,30];
console.log(arr.indexOf(30));

