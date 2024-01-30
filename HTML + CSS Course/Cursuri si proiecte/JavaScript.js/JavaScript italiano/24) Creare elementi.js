// Creare elementi 
const myLi = document.createElement('li');

// add class
myLi.className = 'colore'

// add id
myLi.id = 'mela'

// aggiungere titolo
myLi.title = 'frutta'


// creare text node e appendere per scrivere sul HTML
// myLi.appendChild('ciao') non si puo appendere cosi, bisogna creare un textNode
myLi.appendChild(document.createTextNode('ciao con .createElement, createTextNode e appendChild'))

// aggiungere li al ul 

document.querySelector('ul').appendChild(myLi);
myLi.style.fontSize = '30px'






console.log(myLi)