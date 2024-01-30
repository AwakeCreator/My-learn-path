// TYPE CONVERSION

// 1. numero a stringa

let valore;

valore = 5;
numero = typeof valore;

document.getElementById("numero").innerHTML = numero;

console.log(valore);
console.log(typeof valore);

valore = String(5);
document.getElementById("numero").innerHTML = valore;

console.log(valore);
console.log(typeof valore);

// 2. boolean a stringa

valore = String(true)
console.log(valore)
console.log(typeof valore);

// 3. toString()
valore = (5).toString(); 
// un'altro modo per richiamre una stringa 

// 4. Stringa a numero

valore = Number("5") //"5" normalmente essendo una stringa
console.log(valore);

// 5. boolean a numero

valore = Number(true); // viene trasformato in 1
console.log(valore);
console.log(typeof valore)

valore = Number(false); // ciene trasformato in 0
console.log(valore);

// 6. Stringa a numero 

valore = parseInt("100.35");// lascia solo il numero intero
console.log(valore)

valore = parseFloat("100.35");//prende anche cio che c'e dopo il punto
console.log(valore);

