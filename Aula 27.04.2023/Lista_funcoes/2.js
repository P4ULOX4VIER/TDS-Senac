/*

2. Crie uma função para cada uma das operações básicas (soma,
subtração, multiplicação e divisão). Em seguida, peça para o usuário
inserir dois números e chame essas 4 funções com esses valores
informados pelo usuário sendo o argumento. Por fim, mostre no console o
resultado das operações:

    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10

*/


leitor = require ("readline-sync")


//Adittion
function doAdittion (num1, num2){
    
    
    console.log("Inserted numbers: ", num1 , " and " ,num2)
    console.log("Adittion: ", num1 + num2)
    
}

//Subtraction

function doSubtraction(num1,num2){

    console.log("Subtraction: ", num1 - num2)

}

//Multiplication

function doMultiplication(num1, num1){
    console.log("Multiplication: ",num1 * num2)
}

//Division

function doDivision(num1, num2){
    console.log("Division: ", num1 / num2)
}



const num1 = leitor.questionFloat (" Enter a number: ")
const num2 = leitor.questionFloat (" Enter another number: ")

doAdittion(num1 , num2)
doSubtraction(num1 , num2)
doMultiplication(num1 , num2)
doDivision(num1 , num2)


