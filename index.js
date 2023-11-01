// console.log('Hello world');
// let name='josh'; // string literal
// console.log(name);

// const  interestRate = 0.3;
// interestRate = 1;

// console.log(interestRate);

// let age=30; // Number literal
// let isApproved=true; //boolean
// let secondName= undefined;
// let lastName=null;

let persoon = {
    name : 'Josh',
    age : 30
};
// persoon.name = 'Abby';
// persoon['name']= 'jUlie';
// console.log(persoon.name);

let selection = 'name';
persoon[selection] = 'Mary';
console.log(persoon.name);

//Arrays
let selectedColors=['red', 'blue'];
selectedColors[2]=2;
console.log(selectedColors.length);
// performing a task
function greet(name, lastName){
    console.log('Hello ' + name +' '+ lastName);
}

greet('john', 'Mbuta');
// greet('Joe');

// calculates a value

function square(number){
    return number * number;

}

// let area = square(2);
console.log(square(2));
