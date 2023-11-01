let person = {
    calcAge(){
        return new Date().getFullYear()- this.birthYear;
    },

    greet(){
        console.log('have  a nice Day');
    },
    init(name,birthYear,gender){
        this.name = name;
        this.gender = gender;
        this.birthYear = birthYear;
    }
}

let john = Object.create(person);//prototypal inheritance implementation
 john.name = 'john';
 john.birthYear = 1990;
 john.gender = 'male';

console.log(john);
console.log(john.calcAge());
console.log(john.greet());

let merry = Object.create(person,{
    name:{value:'merry'},
    birthYear:{value: 1990},
    gender:{value:'Female'}
});
console.log(merry);

let mark = Object.create(person);
mark.init('mark',2002,'male');
console.log(mark);