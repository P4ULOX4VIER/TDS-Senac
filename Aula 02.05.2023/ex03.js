const leitor = require ("readline-sync")

let lista = [] // cria uma lista vazia
let item = "" // cria item vazio

while(item != "sair"){
    item = leitor.question("Digite um intem para incluir no lista: ")

    if (item != "sair"){
        lista.push(item)
    }
}

console.clear()

for (let i = 0; i < lista.length; i++){
    console.log(" --> ", lista[i], " <-- ")
}