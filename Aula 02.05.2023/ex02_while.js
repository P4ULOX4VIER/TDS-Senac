/*

● No nosso sistema, o usuário será solicitado para
inserir vários números, um após o outro
● Quando ele digitar o número '0', devemos parar
de solicitar novos inputs e imprimir no console a
soma de todos os números por ele indicados
● Ex.: Vamos supor que ele coloque: 10, 3, 50, 7, 0.
O resultado deve ser: 70

*/ 

const leitor = require("readline-sync")


let soma=0 


let numero = null // Uma vez criado o let aqui, não precisa colocar novamente dentro do laço, pois estará criando um novo número. 

while(numero !== 0 ){
    numero = leitor.questionInt("Enter a number: ") // não coloque let aqui

    soma = soma + numero
}

console.log("The sum is: ",soma)


