/* 

4. Faça uma função que execute o teorema de Pitágoras, recebendo dois 
catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a 
função e imprima o resultado no console

Dica: A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. É 
necessário isolar a hipotenusa, então ao final temos: hip = √(a² + b²)

*/

leitor = require ("readline-sync")



function executaPitagoras(catA, catB){
    const teorema = (catA * catA) + (catB * catB)

    return Math.sqrt(teorema)  //Math.sqrt() executa a raíz quadrada
}



const catA = leitor.questionFloat("Informe o cateto A")
const catB = leitor.questionFloat("Informe o cateto B")

console.log(executaPitagoras(catA , catB))