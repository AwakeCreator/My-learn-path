// Array - struttura di dati 
/* I Array servono a trattenere, immagazzinare
i nostri dati in qualche posto */

const amico1alex = "Keri"; /* mettere due nomi in
una constante non e' possibile */
const amico2alex = "Lucica";
const amico3alex = "Mihai";

// quindi e' meglio in questo caso creare un Array  
// indice -------->  0         1        2            3
const amiciAlex = ["Keri", "Lucica", "Mihai", "uno che cambia"];
console.log(amiciAlex);
//console.log(typeof amiciAlex); 
/*console.log(amiciAlex.lenght); /* dovrebbe risultare la lunghezza ma
a me da undefined... bho */
 
// Un Array puo contenere stringhe numeri boolean array ed oggetto 
const mix = ["stringa", 45, true, false, ["frutta"], {frutta: "Mela",
colore: "verde", misura: "media"}];
console.log(mix);
console.log(typeof mix)
console.log(mix[5])
console.log(mix)

console.log(amiciAlex[2]); console.log(amiciAlex[0]); /*richiamo il 
valore dentro l'array con l'indice */

/* se voglio cambiare il valore del array assegno un nuovo valore 
all'indice  */
amiciAlex[3] = "e' cambiato"; //ho cambiato l'indice 3 
console.log(amiciAlex); 

