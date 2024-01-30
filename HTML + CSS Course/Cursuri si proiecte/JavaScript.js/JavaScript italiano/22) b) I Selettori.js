// Selettori 

// .querySelector()

//selezionare e cambiare contenuto HTML .textContent
document.querySelector('#title').textContent = 'ciao con querySelector("#id").textContent e style.color = "white"';

document.querySelector('.saluto').textContent = 'ciao con querySelector(".className").textContent da javascript';


//stile .style
document.querySelector('#title').style.color = 'white';
document.querySelector('.saluto').style.color = 'yellow';
document.querySelector('h4').style.color = 'blue';

document.querySelector('li').style.background = 'red';
document.querySelector('li:nth-child(2)').style.background = 'yellow';
document.querySelector('li:nth-child(3)').style.background = 'blue'
document.querySelector('li:last-child').style.background = 'white';

// .querySelectorAll() 

const parole = document.querySelectorAll('h6');// anche #title .saluto
const altreParole = document.querySelectorAll('h7');

//metodo forEach

parole.forEach(function(lettere) {
    lettere.textContent = 'Modificato e stillizzato con .querySelectorAll metodo forEach';
    lettere.style.fontSize = '30px'
    lettere.style.color = 'cyan'
})

//for loop

for (let i = 0; i < altreParole.length; i++) {
    altreParole[i].style.fontSize = '30px'
    altreParole[i].style.color = 'navajowhite'
   altreParole[i].textContent = 'Modificato e stillizzato con .querySelectorAll metodo forLoop'
  
}









