// let b = 10;
// console.log(b);

let car = {
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
}

/* car.printDescription();
console.log(car.year);

console.log(car['year']);
console.log(car[1]);

var antherCar = {};
antherCar.color = 'blue';
console.log(antherCar.color); */

var a = {
    propertyOne:{
        b:'bliss',
    }
};

// console.log(a.propertyOne.b);
// object graph
var c ={
    myProperty:[
        { d:'this'},
        { e:'can'},
        { f:'work'},
    ]
};

// console.log(c.myProperty);

let carLot = [
    { year:2007, make:'bmw', model:'4wdRunner'},
    { year:2009, make:'toyota', model:'4wdRunner'},
    { year:2008, make:'isuzu', model:'4wdRunner'}, 
];

let contacts = {
    customers:[
        {firstName:'Mathews', secondName:'Opiyo', contactNo:['0712974925','0700546683']},
        {firstName:'Mathews', secondName:'Opiyo', contactNo:10100},
        {firstName:'Mathews', secondName:'Opiyo', contactNo:10100},
    ],
    employees:[
        {firstName:'Mathews', secondName:'Opiyo', contactNo:['0712974925','0700546683']},
        {firstName:'Mathews', secondName:'Opiyo', contactNo:10100},
        {firstName:'Mathews', secondName:'Opiyo', contactNo:10100},
    ]
};