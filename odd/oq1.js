// oq1.js

const inputE= document.querySelector("#current"); 
const showNext= document.querySelector("div"); 
const result= document.querySelector("#show");

showNext.onclick= function(e){
    const value= parseInt(inputE.value); 
    result.textContent= `Next number is ${value + 1}`; 
}