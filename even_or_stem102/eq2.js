// eq2.js
const inputE= document.querySelector("input"); 
inputE.onchange = function(e){
    const value = parseInt(inputE.value); 
    for(let i=1; i<= value; i++){
        const li= document.createElement('li'); 
        li.textContent= `${i}`;
        document.querySelector('ul').appendChild(li);
    }
}
