
/*
        Autor: Paulo Roberto Xavier da Silva     Data: 25.04.2023

1- Tendo como dados de entrada a altura e o sexo de uma pessoa,
construa um algoritmo que calcule seu peso ideal, utilizando as
seguintes fórmulas:
• para homens: (72.7 * altura) – 58;
• para mulheres: (62.1 * altura) – 44.7

*/

const leitor = require("readline-sync")

console.log("\n") //espaço em branco

let altura = leitor.questionFloat(" --> Qual a sua altura? ")

console.log("\n --> Qual o seu sexo: M ou F")
let sexo = leitor.question(" \nResposta: ")

console.clear()

if (sexo === "M" || sexo === "m"){
    pesoIdeal = (72.7 * altura ) - 58
    console.log("\n------------------------------------------")
    console.log(" --> O seu peso ideal é: ",pesoIdeal)
    console.log("------------------------------------------")

} else if (sexo ==="f" || sexo ==="F") {
    pesoIdeal = (62.1 * altura) - 44.7
    console.log("\n------------------------------------------")   
    console.log("--> O seu peso ideal é: ",pesoIdeal)
    console.log("------------------------------------------")
}









