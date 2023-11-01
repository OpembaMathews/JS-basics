// setter & getter
// accessor properties are methods that gets or sets the values
// of an objects properties 

//accessor props are of 2 types
//1. Getter props - read an objects property value - get
//2. Setter properties - set an objects property value - set

//Encapsulation - Hide data from the external world...
//set calculated value for a property
// let john = {
//     name:'John',
//     birthYear: 1993,
//     annualSalary:12000,

//     //getter method/property example
//     get getName(){
//         return 'Mr. '+this.name;
//     },

//     //setter property is declared just like any methods
//     set setName(newName){
//         if(newName.length <4){
//             alert('Name should have more tha 4 Characters');
//         }else{
//             this.name= newName;
//         }
        
//     }
// }

// // console.log(john.getName);
// john.setName = 'John Kin';
// console.log(john.getName);

let User = class{
    constructor(name,pswd,role){
        this.name = name;
        this.password = pswd;
        this.role = role;

    }

    set setPassword(pswdd){
        if(pswdd.length < 8){
            console.log('Password should have 8 or more characters!')
        }else{
            this.password = pswdd;
        }
    }
 
}

let mark = new User('Mark','wfsdsd','admin');
// console.log(mark.password);
mark.setPassword = 'abdh';
console.log(mark.password);