/* 
        Autor: Paulo Roberto Xavier da Silva     Data: 25.04.2023 
  
3- Criar um algoritmo que leia o um número inteiro entre 1 e 7 e escreva 
o dia da semana correspondente. Caso o usuário digite um número 
fora desse intervalo, deverá aparecer uma mensagem informando que 
não existe dia da semana com esse número.

*/

const leitor = require("readline-sync") // receber variável no console

console.log("\n")
console.log("\n What's your favorite day of the week? \n \nChoose a number from 1 to 7: ")

const number = leitor.questionInt("Number: ")

console.clear()


if (number === 1){
    console.log("\n.............................\n")
    console.log(" ---> You chose SUNDAY!")
    console.log("\n.............................\n")

}else if (number === 2){
    console.log("\n.............................\n")
    console.log(" ---> You chose MONDAY!")
    console.log("\n.............................\n")

} else if (number ===3){
    console.log("\n.............................\n")
    console.log(" --> You chose TUESDAY!")
    console.log("\n.............................\n")

}else if(number === 4){
    console.log("\n.............................\n")
    console.log(" ---> You chose WEDNESDAY ")
    console.log("\n.............................\n")

}else if (number == 5){
    console.log("\n.............................\n")
    console.log(" ---> You chose THURSDAY!")
    console.log("\n.............................\n")
}else if (number === 6){
    console.log("\n.............................\n")
    console.log(" ---> You chose FRIDAY!")
    console.log("\n.............................\n")

} else if (number === 7){
    console.log("\n.............................\n")
    console.log(" ---> You chose SATURDAY!")
    console.log("\n.............................\n")

} else {
    console.log("\n.............................\n")
    console.log(" INVALID NUMBER! ")
    console.log("\n.............................\n")
}
