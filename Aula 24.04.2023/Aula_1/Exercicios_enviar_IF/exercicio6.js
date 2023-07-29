/*

   6. Uma empresa vende o mesmo produto para quatro diferentes 
estados. Cada estado possui uma taxa diferente de imposto sobre o 
produto (MG 7%; SP 12%; RJ 15%; MS 8%). Faça um programa em que o 
usuário entre com o valor e o estado destino do produto e o programa 
retorne o preço final do produto acrescido do imposto do estado em 
que ele será vendido. Se o estado digitado não for válido, mostrar uma 
mensagem de erro

*/



const leitor = require("readline-sync")

console.log("\n------------------------------\n")
console.log(" Bem vindo(a)")
console.log("\n------------------------------\n")


let valorProduto = leitor.questionFloat("Informe o valor do produto escolhido: ")

console.log (" --- Selecione o estado abaixo --- \n")
console.log(" [1] MG \n")
console.log(" [2] SP \n")
console.log(" [3] RJ \n")
console.log(" [4] MS \n")
console.log("\n")

const op = leitor.questionInt(" Opção: ")

console.clear()

//// TESTANDO SE

if (op === 1){
    total = (0.07 * valorProduto) + valorProduto
    console.log("\n------------------------------\n")
    console.log(" O VALOR FINAL SERÁ DE R$: ",total)
    console.log("\n------------------------------\n")

} else if (op ===2){
    total = (0.12 * valorProduto) + valorProduto
    console.log("\n------------------------------\n")
    console.log(" O VALOR FINAL SERÁ DE R$: ",total)
    console.log("\n------------------------------\n")

} else if (op ===3){
    total = (0.15 * valorProduto) + valorProduto
    console.log("\n------------------------------\n")
    console.log(" O VALOR FINAL SERÁ DE R$: ",total)
    console.log("\n------------------------------\n")

} else if (op === 4){
    total = (0.08 * valorProduto) + valorProduto
    console.log("\n------------------------------\n")
    console.log(" O VALOR FINAL SERÁ DE R$: ",total)
    console.log("\n------------------------------\n")

} else {
    total = (0.07 * valorProduto) + valorProduto
    console.log("\n------------------------------\n")
    console.log(" ERRO! NÚMERO INVÁLIDO! ")
    console.log("\n------------------------------\n")
}


