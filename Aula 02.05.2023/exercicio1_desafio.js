/*

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.

    DICA:
    Coloque o seu leitor de nomes dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu.
    Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

    c) Por fim, imprima o array com os nomes dos bichinhos no console

    */

const leitor = require ("readline-sync")

nome = ""
array = []

let number = leitor.questionInt("Informe quantos petes você tem")

if(number === 0){
    console.log("Não pode adotar")
} else{

    for(let i=0; i < number; i++){
        nome = leitor.question("Informe o nome do pet")
        array[i]= nome
    }


}

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

    
    