let a = 'first';

function scopeTest() {
    
    if (a!=''){
        a='changed';
        console.log(a);
        let c = 'Third';
    }

    // console.log(c);
    let b = 'second';
}

scopeTest();
console.log(a);