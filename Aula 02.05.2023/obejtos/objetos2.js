/*

Crie um objeto que represente um filme. Ele deve
ter dados da direção, o nome, o ano de
lançamento, uma lista com o elenco e uma
propriedade que diga se você já viu ou não.

● Acesse e imprima no console cada uma das
propriedades: metade usando notação do ponto
e a outra metade com notação de colchetes.

*/


const filme = {
    direcao: "Steven Spielberg",
    nome: "Diário de um programador",
    anoLancamento: 2023,
    elenco: ["Tobey Maguire", "Andrew Garfield", "Margot Hobbie"],
    assistido: false
}

//Notação ponto
console.log(filme.direcao)
console.log(filme.nome)
console.log(filme.anoLancamento)

console.log("")
//Notação colchetes

console.log(filme["elenco"])
console.log(filme["assistido"])