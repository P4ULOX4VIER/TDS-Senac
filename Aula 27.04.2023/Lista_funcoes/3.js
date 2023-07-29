/* 


3. Funções são trechos de códigos como quaisquer outros mas que 
podemos acessá-los mais de uma vez ao longo do código através de 
invocações/chamadas. Então, funções podem chamar/invocar outras 
funções também. Sua tarefa é escrever duas funções

a) Escreva uma function que recebe um parâmetro e imprime no console 
esse parâmetro

b) Escreva outra function que recebe dois valores como parâmetros mas 
nenhum retorno. Faça a soma entre esses valores e chame a sua primeira 
função mandando este resultado da soma como entrada para imprimi-lo

*/


//Function 1

function getParameter(parameter){
    console.log(parameter)
}


//Function 2

function adittionParameter(number1, number2){
    total = number1 + number2

    console.log(getParameter(total))
}

console.log(adittionParameter(2,5))

