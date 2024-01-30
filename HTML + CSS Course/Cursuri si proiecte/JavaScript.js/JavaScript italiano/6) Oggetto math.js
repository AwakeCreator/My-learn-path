// NUMERI 

const num1 = 24;
const num2 = 6;

let risultato;

risultato = num1 + num2;
risultato = num1 - num2;
risultato = num1 * num2;
risultato = num1 / num2;
// MODULO 
risultato = num1 % num2; // il modulo divide e fa vedere il resto 

// OGGETTO MATH

// Math.PI
risultato = Math.PI // si calcola il p greco 
console.log(risultato);

// Math.round() quello che fa è arrotondare all'intero piu vicino
risultato = Math.round(42.4) // 42
console.log(risultato);
risultato = Math.round(42.6) // 43
console.log(risultato);
// ora per curiosita vediamo cosa ci da se mettiamo .5 
risultato = Math.round(5.5);
console.log(risultato); // quindi se si trova in mezzo e cioe .5 ci dara il numero intero successivo 

/* Math.ceil() qui anche un'unita scatta il numero 
 successivo indipendentemente dall +-5  */
risultato = Math.ceil(42.7) // 43
console.log(risultato);
risultato = Math.ceil(43.1) // 44
console.log(risultato);

// Math.floor() qui e' il contrario di ceil 
risultato = Math.floor(5.9); // 5 
console.log(risultato);

// Math.sqrt() ci da la radice quadrata del numero 
risultato = Math.sqrt(64); // 8
console.log(risultato);

/* Math.abs() ci da il numero assoluto di un numero 
 negativo, cioe ci dara un numero positivo */
risultato = Math.abs(-54); // +54
console.log(risultato);

// Math.pow() fa la potenza di due numeri 
risultato = Math.pow(3, 2); // 9 
console.log(risultato);

/* Math.min() di una serie di numeri ci restituisce il 
 numero minore, anche negativo */
risultato = Math.min(10, 24 , 5 , 105 , 2 , 13, -5);
console.log(risultato); // -5 

// Math.max() il contrario di quello sopra 
risultato = Math.max(10, 24 , 5 , 105 , 2 , 13, -5);
console.log(risultato); // 105

/* Math.random() normalmente ci da un numero random
da 0 a 1, pero se vogliamo che ci dia per esempio 
un numero da 0 a 100 basta moltiplicare per 100 */
risultato = Math.random() * 100
console.log(risultato); // random con decimali

/* per evitare che il risultato sia con numeri decimali 
si fa Math.floor(Math.random()*100) */ 
risultato = Math.floor(Math.random() * 46);
console.log(risultato); // solo interi grazie alla formula 
