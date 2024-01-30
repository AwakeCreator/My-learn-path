// Arrays - Metodi 

const colori = ["rosso", "giallo", "verde", "arancione"];
console.log(colori);

// push // con questa funzione si aggiunge un Array alla fine
colori.push("rosa");
console.log(colori);

// pop // toglie un Array dalla fine
//colori.pop();

// unshift // aggiunge un Array all'inizio
// colori.unshift("bianco");

// shift // toglie un Array dall'inizio 
//colori.shift(); 

// indexOf
// console.log(colori.indexOf("giallo")); // ci da l'indice del valore
// console.log(colori.indexOf("dasfcasv")); // ci da -1 quando il valore non esiste

// slice // pescare valori dalla variabile creandone una nuova
const nuovo = colori.slice(0, 4); /* il risultato sara bianco e rosso */
console.log(nuovo)

// concat serve per fondere due Array  

const arr1 = ["facebook", "instagram"];
const arr2 = ["whatsapp"];

console.log(arr1.concat(arr2));
// console.log(colori) ;

const colori_caldi = ["rosso","arancione","giallo,"];
const colori_freddi = ["blu","viola","grigio."];

console.log(colori_caldi.concat(colori_freddi));

colori_freddi_e_caldi = colori_caldi + colori_freddi
console.log(colori_freddi_e_caldi);