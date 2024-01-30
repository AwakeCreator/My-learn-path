console.log("Hello Alex ")
console.log("Today you will learn the usage of the objects, i hope you will have fun")
// OGGETTI - Struttura di dati 
/* Oggetti sono un'altro tipo di struttura di dati 
che ci permettono di strutturare i nostri dati in un 
modo piu organizzato */

/* Esercizio: fai un oggetto contenente nome, eta, indirizzo, sesso eterosessuale?, 
bambini, sposato ?, giochi preferiti.*/

const Alex = {
//  chiave        valore
    nome: "Jula Ioan-Alexandru",
    eta: 26,
    indirizzo: {via: "Traminerweg 42", citta: "Ulm", plz: 89075},
    maschio: true,
    bambini: 1,
    sposato: false,
    giochi_preferiti: ["COD", "Horizon:ZeroDown"]
}
console.log(Alex)
Alex.giochi_preferiti.push("CaesarIV");

console.log(Alex.eta);

/* Una cosa interessante del oggetto e' che non ha un ordine, quindi per richiamare 
i vari valore si deve far uso delle cosi dette chiavi*/ 

console.log(Alex["giochi_preferiti"][2]); 

Alex.eta = "quasi 27";
 
console.log(Alex)
console.log(typeof Alex.eta)

// CREARE OGGETTI

// 1.

const Veronica = {};
Veronica.eta = 26;
Veronica.sesso = "femminile";
console.log(Veronica);

// 2.

const Jennifer = {eta: "7 mesi", sesso: "femminile"};

// 3. 

const famiglia = new Object;
famiglia.membri = ["Alex","Veronica","Jennifer"];
console.log(famiglia);
famiglia.membri[0] = "Alexandru";
console.log(famiglia); 
/* E' interesante come il risultato sia cambiato nelle 
entrambe console.log di famiglia*/