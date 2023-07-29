// PROPRIEDADES DA STRING

/*

Peça para o usuário escrever uma frase e imprima no
console a frase alterada, com:
● Todas as letras maiúsculas;
● Na língua do i (substituindo a vogal "o" por "i");
● O tamanho da frase.

*/


const leitor = require ("readline-sync")

let frase = leitor.question("Informe uma frase:")
console.log("\n")

console.log(frase.toUpperCase())
console.log(frase.replaceAll("o","i"))
console.log(frase.length)