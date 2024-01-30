// Dati primitivi 

/* scrivendo typeof + variabile nella console.log vedrete
   il tipo dato che si trova dentro*/
// String
const nome = "Alex";
console.log(nome);
console.log(typeof nome);

// Number 
const eta = 26;
console.log(eta);
console.log(typeof eta);

//Boolean
const maschio = true ;
const femmina = false;
console.log(maschio);
console.log(femmina);
console.log(typeof femmina);

//Null 
const valore = null;
console.log(valore);

// Undefined
const anonimo = undefined;
console.log(anonimo);

// Symbol (per ora lo possiamo lasciare stare)
cuore = "❤";
const simbolo_cuore = Symbol(cuore);
console.log(simbolo_cuore);
 
// -------------------------------------

// DATI DI RIFERIMENTO - Reference type

// Arrays
const nomi = ["Alex", "Billy", "Jonny"];

console.log(nomi);
console.log(nomi[1]); 
console.log(typeof nomi) // perche oggetto?

// Oggetti

const giocatori = { // object
    nome1: "Alex" ,
    eta1: 26 , 
    altezza: 1.76 
    
}
console.log(giocatori)
giocatori.nome1 = "Veronica"; //hai cambiato il valore 
console.log(giocatori); /*cambiare il valore del oggetto
essendo una const(ante) è possibile solo con Array o
Oggetti, non cambiando l'oggetto stesso pero

/*persona = "prova" // stringa 
console.log(persona)*/ // ci dara errore