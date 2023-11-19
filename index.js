document.write("hello world ");
console.log("hello world");
// alert("Alert from aayush kapil");
console.warn("this is warning");
console.error("thsi is error");

var marks =  {
    aayush : 50 ,
    kapil : 50

}

console.log(marks)

var a = 10;
var b = 87;
function sum(a , b){
console.log(a+b);
}
sum(a,b);
if (a>5){
    console.log("hello, a is greater then 5 - ");
}
else{

    console.log("hello, a is less then 5 - ");
}


 arr = [1 ,2 ,3 ,4 ,5,8];
 console.log(arr.length);
 console.log(arr.slice(2 , 5));
//  for (var i = 0;i < arr.length;i++) {
//     console.log(arr[i]);
//  }

//  arr.forEach(function(elment) {
//     console.log(elment);
    
//  });

let mydate = new Date();
console.log(mydate)
console.log(mydate.getTime())
console.log(mydate.getHours())


// dom manupulation

let ele = document.getElementById('click')
console.log(ele)
console.log(ele.innerHTML);

let elec = document.getElementsByClassName("container");
console.log(elec)
elec[0].style.background = "yellow";
elec[0].classList.add("bg-primary");
elec[1].style.background = "red";

console.log(elec[1].innerHTML);
console.log(elec[1].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);

createle = document.createElement('p');
createle.innerText = "this is created text";
tn[0].appendChild(createle);

 function clicked(){
    console.log('the button was clicked ')
 }
// events
firstContainer.addEventListener('click' , function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
    console.log("clicked on container")})

firstContainer.addEventListener('mouseover' , function(){
    console.log("mouse on container")
})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup' , function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML 
    console.log("mouse up when clicked on container");
})

firstContainer.addEventListener('mousedown' , function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>  We have clicked <b/>"
    console.log("mouse down when clicked on container");
})


sum = (a , b)=>{
    console.log(a+b);
}
sum(2 , 5);

logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = " <b>we have clicked </b>";
    console.log(" we have clicked")
}

setTimeout(logkaro , 2000);

localStorage.clear();
localStorage.setItem('name ' , 'aayush kapil ' );
localStorage;

obj = {name : "Aaayush kapil" , length : 1 , a:{this : "that"

}}

jso = JSON.stringify(obj);
console.log(jso)
// document.write(jso)

