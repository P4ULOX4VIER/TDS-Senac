/*

5. Leia a idade e o tempo de serviço de um trabalhador e escreva se ele
pode ou não se aposentar. As condições para aposentadoria são
• Ter pelo menos 65 anos,
• Ou ter trabalhado pelo menos 30 anos,
• Ou ter pelo menos 60 anos e trabalhado pelo menos 25 anos.

*/
const leitor = require("readline-sync")

console.log("\n ------------------------------\n")
console.log("         RETIREMENT       ")
console.log("\n ------------------------------\n")
console.log("\n")


let age = leitor.questionInt(" ---> Hello! How old are you?  ")
console.log("\n")
let work = leitor.questionInt(" ---> How long did you work?  ")
console.log("\n")

console.clear()

if (age >= 65 || work >= 30){
    console.log("\n -------------------------------- \n")
    console.log("        YOU CAN RETIRE ")
    console.log("\n ------------------------------------- \n")

} else if (age >= 60 && work >= 25){
    console.log("\n -------------------------------- \n")
    console.log("       YOU CAN RETIRE ")
    console.log("\n ------------------------------------- \n") 

}else {
    console.log("\n -------------------------------- \n")
    console.log("           YOU CAN'T RETIRE ")
    console.log("\n ------------------------------------- \n")
}

