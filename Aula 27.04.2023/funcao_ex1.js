/*

Crie uma função que:
● Receba um nome
● Imprima no console a frase `Olá, [nome]!`
● Invoque-a com 3 nomes diferentes

*/

leitor = require("readline-sync")

function Recepcionar (nome){

    console.log("Olá ",nome) //função que não retorna

}


for (let i = 0; i < 3; i++) {
    
    
    console.log("\n")
    let nome = leitor.question ("Informe seu nome ")
    Recepcionar(nome)
    console.log(" \n ------------------------------- \n ")

}

