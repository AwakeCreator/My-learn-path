class WebDeveloper {
    constuctor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const openMinded = new WebDeveloper('Open', 'Minded');
console.log(openMinded);

if(10 > 5) {
    var test = true;
}
console.log(test);

if(10 > 5) {
    let test2 = true;
}
// console.log(test2); 
// L'errore avviene a causa del fatto che var e' globale invece let e' locale

// var tolera la redichiarazione
var utente = "Alex";
var utente = "Veronica";
console.log(utente);
// let invece no 
// let client = "Giorgio";
// let client = "Armani"
// console.log(client); // error

// variabile hoisting 
variabileVar = true;
console.log(variabileVar);
var variabileVar;

console.log(variabile_Var);
var variabile_Var = "undefined perche si deve dichiarare prima del console.log";

// variabileLet = false;
// console.log(variabileLet);
// let variabileLet;

// variabileConst = false;
// console.log(variabileConst);
// const variabileConst;

/* DE ACEEA TREBUIE FOLOSIT MEREU LET; DEOARECE FOLOSIND VAR, ATUNCI CAND 
VOM VREA SA SCHIMBAM CONTINUTUL UNEI VARIABILE VAR, NI SE VA SCHIMBA PESTE 
TOT IN COD CREAND FOARTE MULTA CONFUSIE*/ 

console.log("2 / 0  :", 2 / 0) // infinity
console.log("-2 / 0 :", -2 / 0) // -infinity

let score = 123;
let status = 'Test';
console.log(isFinite(score)); // true
console.log(isFinite(status)); // NaN

let name = 'Bob';
console.log(isNaN(name)); // true

let comment = "hello123"; 
console.log(isNaN(comment), isFinite(comment)); // true , false

// Math Functions

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());


console.log(Math.max(-1, 0, 1, 2, 3, 4)); 
console.log(Math.min(-1, 0, 1, 2, 3, 4));

console.log(Math.pow(2, 7));

console.log(Math.PI);

let nume = 'alex';
console.log(Boolean(nume)); // true pentru ca contine o stringa

let stringaGoala = "";
console.log(Boolean(stringaGoala)); // false


console.log(Boolean(213123%3 == 0)); // true perche 4 e' un sottomultiplo di 213123
console.log(213123%3 == 0); // acelasi rezultat 

console.log(`2 + 2 = ${2+2}`); // `` `` `` `` `` `` 

console.log(`1 + 2 = ${1+2}`); // `` `` `` `` `` `` 

console.log(`4 + 4 = ${3 + 2}`); // fico

let listaInvitati = `Invitati
* Veronica * 
* Alessia * 
* Mariana *`;
console.log(listaInvitati) ;

console.log(`JavaScript`.length);

let string = "Jennifer";
console.log(string[4]);
console.log(string.charAt(4));

let stringVariable = "Veronica";
// changing the value of first character
stringVariable[0] = 'A';
console.log(stringVariable[0]); // the value don't change


let  str = 'Gi';
// replacing the string G with H
str = 'H' + str[1];
console.log(str);

bigInt = 123n;
console.log(bigInt.length)
console.log(typeof bigInt)