function sayHello(name) {
    return function (){
        console.log('Hello '+ name);
    }
    
}

let bob = sayHello('Bob');
let peter = sayHello('Peter');
let mum = sayHello('Nyasembo');

peter();
mum();
bob();