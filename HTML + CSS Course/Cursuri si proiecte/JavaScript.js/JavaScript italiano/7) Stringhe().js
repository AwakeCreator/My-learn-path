// STRINGHE 
            //01234567
const nome = "Gesualdo";
let risultato;

// length conta la lunghezza della parola/e inlcuso i spazi 
risultato = nome.length
console.log(risultato);

// toUpperCase() scrive tutto maiuscolo 
risultato = nome.toUpperCase();
console.log(risultato)

// toLowerCase() scrive tutto minuscole 
risultato = nome.toLowerCase();
console.log(risultato)

/* [] indica la lettera contando da destra a sinistra partendo
 il contaggio con il numero 0  */
risultato = nome [7]; // o 
console.log(risultato)

/* indexOf() fa il contrario di [] cioe metti una lettera e ti 
 fa vedere il numero corrispondente  */
risultato = nome.indexOf("G"); // 0
console.log(risultato)
risultato = nome.indexOf("g"); /* pare che qui ci dia il 
-1 in quanto il 0 e' occupato dal primo GESUALDO, almeno credo */
console.log(risultato);


// charAt()
risultato = nome.charAt(0); // G
console.log(risultato)


/* substring() si sceglie l'inizio e' la fine, la fine non 
 viene contata */
risultato = nome.substring(0, 8); 
console.log(risultato)
