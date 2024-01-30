// Loop

// for loop 

/*for (let i = 0; i < 100; i++) {
    console.log("ciao")
}

for (let i = 0; i <= 3; i++) {
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    if (i === 8) {
        console.log("mi piace 8")
        continue //scrive frase al posto di 8 poi continua 
    }
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    if (i === 8) {
        console.log("mi piace 8")
        break //scrive frase al posto di 8 poi si ferma
    }
    console.log(i)
} */


// While Loop 

/*let i = 1;

while (i < 10) {
    console.log(i);
    i++
}

while (i < 10) {
    console.log("Number:", i)
    i++
}*/


// Do While

/*let i = 1;

do {
    console.log(i);
    i++
}*/

//while(i < 15)

const fruits = ["apple", "banana", "kiwi", "ananas"];

/*for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}*/

// ForEach
// al poso di value index array si puo scrivere qualsiasi cosa, l'importante e' che l'ordine rimanga lo stesso
        //               pino   pio    pi
fruits.forEach(function(value, index, array) {
    //console.log di value index o array o tutti insieme 
    //console.log(index, value)
})


// Map

const newFruits = fruits.map(function(value,index, array) {
    //return index
    return "my fruit is:" + value
})
console.log(newFruits)

// For In 

const persona = {
    nome: "billy",
    eta: 18,
    hobby: "calcio"
}

for(let x in persona) {
    console.log(persona[x])
}