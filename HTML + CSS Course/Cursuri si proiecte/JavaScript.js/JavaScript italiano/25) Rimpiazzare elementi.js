//Rimpiazzare elementi 

const nuovoH3 = document.createElement('h3');
nuovoH3.className = 'saluto'
nuovoH3.appendChild(document.createTextNode('rimpiazzato con Javascript'));

const vecchioH3 = document.querySelector('h4');



console.log(nuovoH3);

console.log(vecchioH3);