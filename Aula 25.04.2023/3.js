/* 

Para este exercício, comece criando um array com os 
valores: 1, 2, 3, 4, 5 e 6.
    
    1. Determine o tamanho do array
    2. Adicione o número 7
    3. Remova os números 4 e 5
    4. Determine o novo tamanho do array
 
*/


const array = [1, 2, 3, 4, 5, 6]

console.log("Tamanho do array: ")
console.log(array.length)

console.log(" \n ------------------------------ \n ")

array.push(7)
array.splice(3,2)



console.log("Novo tamanho do array")
console.log(array.length)

console.log(array)

console.log(" \n ------------------------------ \n ")


