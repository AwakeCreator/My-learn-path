// Selettori

// getElementsByClassName

//selezionare le classi plurale e usarle come Array per modificarle
const note_musicali = document.getElementsByClassName('note');
// console.log(note_musicali);

//style
// note_musicali[0].style.fontSize = '30px';

// document.getElementsByTagName 

//selezionare i TagName e usarli come Array per modificare
const lista = document.getElementsByTagName('li');
const h6 = document.getElementsByTagName('h6')
// console.log(lista);

const listaNumeri = Array.from(lista);
const listaNote = Array.from(note_musicali);
const lista_h6 = Array.from(h6)

// console.log(note_musicali);

listaNumeri.forEach(function(item) {
//    console.log(listaNumeri)
   item.style.fontSize = '30px'
})

listaNote.forEach(function(item) {
    // console.log(listaNote)
    item.style.fontSize = '30px'
})

lista_h6.forEach(function(item) {
    // lista_h6
    item.style.fontSize = '15px'
    item.textContent = 'Selezionato e cambiato con elementByTagName'    
})










