/* 
        Autor: Paulo Roberto Xavier da Silva     Data: 25.04.2023  

2- Escreva um algoritmo que leia o número de identificação, as 3 notas 
obtidas por um aluno nas 3 verificações e a média dos exercícios que 
fazem parte da avaliação, e calcule a média de aproveitamento, 
usando a fórmula: 

        MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 

A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve 
escrever o número do aluno, suas notas, a média dos exercícios, a 
média de aproveitamento, o conceito correspondente e a mensagem 
'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D 
ou E.

   | Média de aproveitamento |      | Conceito |
            >= 90                         A
        >= 75 e < 90                      B
        >= 60 e < 75                      C
        >= 40 e < 60                      D
            < 40                          E
*/


const leitor = require("readline-sync") // receber variável no console

console.log("\n--------------------------\n")
console.log("Olá, seja bem-vindo(a)!")
console.log("\n--------------------------\n")
console.log("\n")




const identificacao = leitor.question (" Por gentileza, informe o seu nº de identificação: ")



console.clear()

console.log("Informe as notas e a média nos campos abaixo: ↓ ")

const nota1 = leitor.questionFloat(" | Nota 1:")
const nota2 = leitor.questionFloat("\n | Nota 2:")
const nota3 = leitor.questionFloat("\n | Nota 3:")
const mediaExercicios = leitor.questionFloat(" | Média dos exercícios: \n")


mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios)/7 

console.clear()

if (mediaAproveitamento >= 90 ){
    console.log("\n------ NOTAS FINAIS ------")
    console.log(" | Número do aluno: ",identificacao," | \n")
    console.log(" | Nota 1: ",nota1," | \n")
    console.log(" | Nota 2: ",nota2," | \n")
    console.log(" | Nota 3: ",nota3," | \n")
    console.log("\n")
    console.log("\n")
    console.log(" | Média dos exercícios: ",mediaExercicios," | \n")
    console.log("\n--------------------\n")
    console.log("| Média de APROVEITAMENTO: ",mediaAproveitamento, " | ")
    console.log("CONCEITO FINAL: A ")
    console.log("\n")
    console.log("ALUNO APROVADO")

} else if (mediaAproveitamento >= 75 && mediaAproveitamento < 90){
    console.log("\n------ NOTAS FINAIS ------")
    console.log(" | Número do aluno: ",identificacao," | \n")
    console.log(" | Nota 1: ",nota1," | \n")
    console.log(" | Nota 2: ",nota2," | \n")
    console.log(" | Nota 3: ",nota3," | \n")
    console.log("\n")
    console.log("\n")
    console.log(" | Média dos exercícios: ",mediaExercicios," | \n")
    console.log("\n--------------------\n")
    console.log("| Média de APROVEITAMENTO: ",mediaAproveitamento, " | ")
    console.log("CONCEITO FINAL:  B" )
    console.log("\n")
    console.log("ALUNO APROVADO")

} else if (mediaAproveitamento >=60 && mediaAproveitamento < 75){
    console.log("\n------ NOTAS FINAIS ------")
    console.log(" | Número do aluno: ",identificacao," | \n")
    console.log(" | Nota 1: ",nota1," | \n")
    console.log(" | Nota 2: ",nota2," | \n")
    console.log(" | Nota 3: ",nota3," | \n")
    console.log("\n")
    console.log("\n")
    console.log(" | Média dos exercícios: ",mediaExercicios," | \n")
    console.log("\n--------------------\n")
    console.log("| Média de APROVEITAMENTO: ",mediaAproveitamento, " | ")
    console.log("CONCEITO FINAL: C" )
    console.log("\n")
    console.log("ALUNO APROVADO")

} else if (mediaAproveitamento >= 40 && mediaAproveitamento < 60){
    console.log("\n------ NOTAS FINAIS ------")
    console.log(" | Número do aluno: ",identificacao," | \n")
    console.log(" | Nota 1: ",nota1," | \n")
    console.log(" | Nota 2: ",nota2," | \n")
    console.log(" | Nota 3: ",nota3," | \n")
    console.log("\n")
    console.log("\n")
    console.log(" | Média dos exercícios: ",mediaExercicios," | \n")
    console.log("\n--------------------\n")
    console.log("| Média de APROVEITAMENTO: ",mediaAproveitamento, " | ")
    console.log("CONCEITO FINAL: D")
    console.log("\n")
    console.log("ALUNO REPROVADO")

}else if (mediaAproveitamento < 40){
    console.log("\n------ NOTAS FINAIS ------")
    console.log(" | Número do aluno: ",identificacao," | \n")
    console.log(" | Nota 1: ",nota1," | \n")
    console.log(" | Nota 2: ",nota2," | \n")
    console.log(" | Nota 3: ",nota3," | \n")
    console.log("\n")
    console.log("\n")
    console.log(" | Média dos exercícios: ",mediaExercicios," | \n")
    console.log("\n--------------------\n")
    console.log("| Média de APROVEITAMENTO: ",mediaAproveitamento, " | ")
    console.log("CONCEITO FINAL: E")
    console.log("\n")
    console.log("ALUNO REPROVADO!")
}


