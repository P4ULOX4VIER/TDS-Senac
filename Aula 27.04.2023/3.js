/* 

Escreva um programa que receba o Pokémon inicial
escolhido pela pessoa e imprima no console o seu tipo:
o Bulbasauro (Planta e Veneno)
o Charmander (Fogo)
o Squirtle (Água)

*/

leitor = require("readline-sync")

console.log(" \n ---------------------------------- \n ")

let pokemon = leitor.question("Enter a pokemon name: ")
pokemon = pokemon.toLowerCase()

console.log(" \n ---------------------------------- \n ")

switch(pokemon){

    case "bulbassauro":
        console.log("Tipo: PLANTA E VENENO")
        break
    
    case "charmander":
        console.log("Tipo: FOGO")
        break

    case "squirtle":
        console.log("Tipo ÁGUA")
        break

    default:

        console.log("TIPO NÃO ENCONTRADO") //após default não precisa  usar o break




}


