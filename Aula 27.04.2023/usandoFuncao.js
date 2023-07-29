// FUNÇÃO


const leitor = require("readline-sync")

function formatar(texto){

    texto = texto.trim()
    texto = texto.toLowerCase()
    texto = texto.replaceAll(" " , "-")

    return texto
}


console.log(formatar("Vitor Hugo Lopes"))

let aluno = formatar("Paulo Xavier")

console.log("Bem vindo" + aluno )