/* 

2. Faça um programa que contenha um array com 5 das suas comidas
preferidas, armazenado em uma variável. Em seguida, siga os passos:

a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas
preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
Troque a segunda comida da sua lista pela inserida pelo usuário.
Imprima no console a nova lista.

*/

const leitor = require("readline-sync")

let comidas = ["massa" , "pastel" , "arroz", "bolacha", "refrigerante"]


console.log(comidas)

console.log("\n As minhas comidas favoritas são: ")
for (let i = 0; i < comidas.length; i++) {
    console.log("-->",comidas[i])
    
  }


console.log("\n Informe sua comida preferida")
const comidaFav = leitor.question("\n Resposta: ")

console.clear()

comidas[1] = comidaFav


console.log( " \n ----------------------------- \n ")
console.log(comidas)
console.log(" \n -------------------------------- \n ")