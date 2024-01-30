// Variabili 

// var, let, const


var Nome = "Alex";
var eta = 26;

console.log(Nome);
console.log(eta);

var cognome;
console.log(cognome); // ti dara undefined

cognome = "Ioan-Alexandru";
console.log(cognome); // adesso invece ti dara Ioan-Alexandru

var eta = 20;

eta = 21;

eta = 22;
console.log(eta);

let eta1 = 21
eta1 = 23
eta1 = 29
 console.log(eta1); // da come puoi vedere, viene presa solo l'ultima variabile

/* se fai la variabile con var o let 
il valore potra cambiare in futuro 
invece se la fai con const non potrai
cambiarla in futuro */ 

/* Variabili prima 2015 erano var 
dopo 2015 let, const*/

const NOME = "Alex";
console.log(NOME);
//NOME = "Vero"; //ti dara errore 

// sintassi

// lettere, numeri, _, $
/* i numeri non si possono mettere all'inizio della variabile,
 alla fine o in mezzo alla variabile si */

var $eta = 26;
console.log($eta); //se cambi in eta di dara 22

// inizializzare una variabile 

let nome;
nome = "Alex";
console.log(nome);// finqua, tutt'apposto 

// non si puo inizializzare con const pero

/*const nome324;
nome324 = "Alex"
console.log(nome)*/ // ti dara errore 

/*quando saremmo piu esperti in JavaScript vedremmo anche le differenze 
tra var e let  */ // per adesso pero continueremo con let e const inizialmente









