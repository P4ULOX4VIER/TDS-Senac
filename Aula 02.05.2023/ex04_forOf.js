/*

Considere que você tem um array com várias
palavras. Nossa tarefa é criar uma função para
imprimi-las em uma só mensagem colocando
um espaço entre elas.
● Ex: Para este array ["Oi", "sumido", "tudo", "bem?",
"Saudades"], dar a mensagem "Oi sumido tudo
bem? Saudades"

*/

let frase = ""
let words = ["Oi", "sumido", "tudo", "bem?", "saudades"]

    //Atalho:  console.log(words.join(" "))

    for (let word of words){
        frase = frase + " " + word
    }

    console.log(frase.trim())