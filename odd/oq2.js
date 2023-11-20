// oq2.js

const inputE= document.querySelector("input"); 
inputE.onchange = function(e){
    const value = parseInt(inputE.value); 
    for(let i=1; i<= value; i++){
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = `${i}`;
        tr.appendChild(td);
        document.querySelector('tbody').appendChild(tr);
    }
}