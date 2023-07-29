/* 

c) Escreva uma função que receba um número e devolva um booleano
indicando se ele é par ou não

*/

function mostrarPar(n1){

    const resultado = (n1 % 2 === 0) ? true : false
    return resultado

}

console.log(mostrarPar(3))