// function sayHello(){
//     console.log('------------------------------');
//     console.log('Hello  world');
//     console.log('------------------------------');
// }

// // sayHello();

// let a = sayHello;
// a();
// a();

// function sayHello(name){
//     console.log('------------------------------');
//     console.log('Hello  world ' + name +'!');
//     console.log('------------------------------');
// }

// sayHello('Bob');
// sayHello('Jane');


function calculateTax(amount){
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(123.9090);
console.log('The Tax for your amount is: ' +tax);