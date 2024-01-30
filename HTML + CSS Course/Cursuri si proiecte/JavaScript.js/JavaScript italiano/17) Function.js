// Funzioni

// Function declaration

function grüßen() {
    console.log("Hallo zusammen");
}

grüßen();

function grüßen() {
    console.log("Hallo zusammen")
    console.log("Hallo zusammen")
    console.log("Hallo zusammen")
    console.log("Hallo zusammen")
}

function parametri() {
    console.log("Hallo" + " " + "Billy");
}

parametri();

function sagHallo(name) {
    console.log("Hallo" + " " + name);
}

sagHallo("Alex");

function ciao(name, nachname) {
    console.log("Hallo" + " " + name + " " + nachname);
}

ciao("Jula", "Ioan-Alexandru" );// se non metti il cognome per esempio ti dara undefined.

function ciao2(name = "mitico", nachname = "fantastico") {
    console.log("Hallo" + " " + name + " " + nachname );
}

ciao2("Jula"); // adesso non abbiamo inserito il cognome quindi ci ha dato il valore che abbiamo prefissato come default

ciao2()// stessa cosa di sopra ma fatta con due default 


// Function expression
// Quando è expression function si va ad assegnare ad una variabile

const doppio = function(x) {
    return x * 3     
}

console.log(doppio(10));

// IIFE

// immediately invoked function expression 
// le IFFI vengono create mettendo la funzione tra ();

(function saluta() {
    console.log("hello world")
})();

(function saluta2(nome) {
    console.log("Hello " + nome)
})("Kikko");

// Property methods
// Le funzioni all'interno degl'oggetti vengono chiamati metodi

const persona = {
    saluta: function(nome, cognome) {
        console.log("ciao a tutti io sono " + nome + " " + cognome);
    }, /* con la virgola quello che scrivi nella riga ancora piu sotto di mario rossi e' come se verra aggiunta qua*/
}

persona.saluta("Mario", "Rossi");

persona.ringrazia = function() {
    console.log("grazieeeeeee, e' tutto per oggi, ci vediamo alla prossima lezione")
}

persona.ringrazia();



