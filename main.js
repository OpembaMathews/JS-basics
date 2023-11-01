let lname = document.getElementById('lname')
lname.onfocus = function(){
    lname.style.backgroundColor = 'yellow';
}
lname.onblur = function(){
    lname.style.backgroundColor = 'white';
}

let h2 = document.querySelector("#contact_us");
h2.onmouseover = function (){
    h2.style.color = 'red';
}
h2.onmouseout = function (){
    h2.style.color = 'black';
}

// function displayAlert(){
//     alert('You Clicked on Submit')
// }
// document.getElementById('btn')
// .addEventListener('click',displayAlert)

document.getElementById('btn')
.addEventListener('click',function(){
    alert('You Clicked on Submit ');
})

document.getElementById('email')
.addEventListener('focus', function(){
    // console.log(this);
    this.style.backgroundColor = 'yellow';

})

document.getElementById('email')
.addEventListener('blur', function(){
    // console.log(this);
    this.style.backgroundColor = 'white';

})