// Oggetti vs Array

// Oggetti 

const persona = {
    nome: "alex"
}

persona.nome
persona["nome"]

persona.cognome = "jula"
persona.cognome = "ioan-alexandru"

delete persona.nome;

console.log(persona)



// Array

const persona2 = ["veronica"];
persona2[0]
persona2[0] = "jennifer"

persona2.push("stoica")
persona2.pop()
console.log(persona2)

