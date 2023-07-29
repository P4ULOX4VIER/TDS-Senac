/* 

Crie um programa que peça ao usuário para inserir o 
seu nome e sua cor favorita e imprima a mensagem: 
"A cor favorita de FULANO é COR"

Faça o exercício duas vezes, utilizando template
strings e concatenação

*/

const leitor = require ("readline-sync")

console.log("\n ------------------------------- \n")

const name = leitor.question("Enter your name: ")
const favColor = leitor.question("Now, enter your favorite color: ")

console.log("\n ------------------------------- \n")

const phrase = `${name}'s favorite color is ${favColor} !` // TEMPLATE STRING
console.log(phrase) //

////////// 

// CONCATENAÇÃO

console.log("\n ------------------------------- \n")

const name2 = leitor.question("Enter your name: ")
const favColor2 = leitor.question("Now, enter your favorite color: ")

console.log("\n ------------------------------- \n")

const phrase2 = name2 + "'s favorite color is " + favColor2
console.log(phrase2)


