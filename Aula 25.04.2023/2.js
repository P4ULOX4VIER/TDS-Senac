/*  ARRAY

Crie um array com pelo menos 5 raças de
cachorro
● Peça para o usuário inserir um número de 1 a 5
● Imprima no console a raça correspondente à
posição escolhida pelo usuário

*/ 

const leitor = require ("readline-sync")

const dog = ["marcelo", "pitbull","pretinho","caramelo","marcelo"]

let posicao = leitor.question("Choose a number between 1 and 5")
console.log("\n")


console.log("\n --------------------- \n")
console.log(    dog[posicao -1])
console.log("\n --------------------- \n")

