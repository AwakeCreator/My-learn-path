// Operatori Base

// DRY - don't repeat yourself

let x = 20;

x * 2 ;
x *= 2 // e cosi via 


x += 1
x ++ // x -- e cosi via
console.log(x)

const maggioreEta = 18;

let etaBilly = 15;

//console.log(etaBilly > maggioreEta) // e tutti gl'altri operatori 

// If Else 

/* if(condizioni) {
    fai qualcosa
} else {
    fai qualcosaltro
} 

if (etaBilly > maggioreEta) {
    console.log("billy puo bere la birra")
} else {
    console.log("billy puo bere acqua")
}

etaBilly = 19;
if(etaBilly > maggioreEta) {
    console.log("adesso billy puo bere la birra")
} else {
    console.log("billy puo bere acqua")
}

etaBilly = 15
if(etaBilly < 18) {
    console.log("billy e' un adolescente")
} else {
    console.log("billy e' maggiorenne")
} */

/*etaBilly = 51
if(etaBilly < 13) {
    console.log("billy e' un bambino")
}   else if(etaBilly >= 13 && etaBilly < 16) {
        console.log("billy e' un adolescente")
}   else if(etaBilly < 18 && etaBilly > 15)  {
    console.log("billy e' un ragazzo in calore")
}   else if(etaBilly > 50) {
    console.log("billy e' vecchio");
}  
 else {
    console.log("billy e' un adulto");
} // puoi continuare con else if quanto vuoi 

let id = 70;

if (id == 70) {
    console.log("id e' 70")
} else {
    console.log("id non e' 70")
}

id = "70"

// == valore e' uguale
// === valore e tipo devono essere uguali

if(id == 70) {
    console.log("id e' una stringa ed e' 70")
} else {
    console.log("id e' una stringa ma non e' 70")
}

if(id === 70) {
    console.log("id e' una stringa ed e' 70")
} else{
    console.log("id e' 70 ma non e' un numero benche una stringa")
} */

// Operatori logici 

// AND &&

// if (etaBilly < 11) {
//     console.log("billy e' un bambino")
// } else if (etaBilly > 11 && etaBilly < 19) {
//     console.log("billy e' un ragazzo adolescente")
// } else {
//     console.log("billy e' un adulto")
// }

// OR || - Solo una condizione deve essere vera 

let eta = 101

if(eta < 3 || eta > 99) {
    console.log(" non puoi giocare")
} else {
    console.log("puoi giocare")
}

// NOT ! 

eta = 100

if(eta !== 124) {
    console.log("eta e' uguale a 100");
} else {
    console.log("eta non e' 100")
}

// Ternary operator

eta = 101;

eta === 100 ? console.log("eta e' 100") : console.log(" eta non e' 100")

2 + 2 === 6 ? console.log("si") : console.log("no")



