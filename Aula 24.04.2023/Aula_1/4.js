const leitor = require("readline-sync")

console.log("\n")
let nome = leitor.question("Qual seu nome? ")
console.log("\n")

console.log("-----------------\n")
console.log("Bem vindo", nome)
console.log("\n")

let idade = leitor.question("Qual a sua idade? ")
console.log("\n")

console.clear()
console.log("Seu nome é ",nome," e sua idade é ",idade)