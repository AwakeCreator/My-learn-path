// Selettori

// getElementById()

// Selettori nella console
console.log(document.all)

// getElementById() selezionare nella console
console.log(document.getElementById('title'))

// Prendere valore visualizzare nella console
console.log(document.getElementById('title').className)

// Cambiare valore in HTML

//cambiare contenuto con .textContent .innerText .innerHTML
document.getElementById('title').textContent = 'ciao con element by id e .style.color = "white" da javascript, anche la grandezza è stata cambiata con javascript'
// document.getElementById('title').innerText = 'ciao con innertext'
// document.getElementById('title').innerHTML = 'ciao con HTML'

//stile
document.getElementById('title').style.color = 'white'
document.getElementById('title').style.fontSize = "30px"

