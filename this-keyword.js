/* let car = {
    make:'bmw',
    model:'745li',
    year:2010,
    getPrice: function () {
        // perform some cal

        return 5000;
        
    },
    printDescription: function () {
         console.log(this.make + ' ' +this.model);
        
    }
} */

 /* function first() {
    return this;
 }

 console.log(first()=== global);
 */

/*  function second() {
    'use strict'
    return this; 
 }

 console.log(second()===global);
 console.log(second()===undefined); */

/*  let myObject = {value:'my object'};
 global.value = 'Global Object';

 function third(name) {
    return this.value + ' '+ name;
 }

 console.log(third('bobbb'));
 console.log(third.call(myObject, 'Bob'));
 console.log(third.apply(myObject,['Bobb'])); */

 function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
 }

 let customer1 = {
    firstName:'Bobb',
    lastName:'Kollin',
    print:fifth
 }
 let customer2 = {
    firstName:'Chris ',
    lastName:'Kollin',
    print:fifth
 }
 customer2.print();
 customer1.print();
