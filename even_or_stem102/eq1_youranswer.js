// eq1.js
const inputE= document.querySelector("input"); 
const compute= document.querySelector("p"); 
const result1= document.querySelector("#result");

compute.onclick= function(e){
    const value= parseInt(inputE.value); 
    result1.textContent= `${value} x ${value}= ${value x value}`; 
}