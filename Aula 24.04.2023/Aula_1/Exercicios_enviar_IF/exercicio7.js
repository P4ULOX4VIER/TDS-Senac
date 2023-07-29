/* 

7. Escrever um programa que leia o código do produto escolhido do 
cardápio de uma lanchonete e a quantidade. O programa deve 
calcular o valor a ser pago por aquele lanche. Considere que a cada 
execução somente será calculado um pedido. O cardápio da 
lanchonete segue o padrão abaixo:

|   Food/drink  |       |   Code    |       |   Price   |

    Hotdog                  100                R$ 1.20
  Simple Bauru              101                R$ 1.30
  Bauru with egg            102                R$ 1.50
  Hamburguer                103                R$ 1.20
  Cheeseburguer             104                R$ 1.70
    Juice                   105                R$ 2.20
    Coke                    106                R$ 1.00

*/

const leitor = require("readline-sync")

console.log("\n ------------------------------- \n")
console.log(" WELCOME TO JOE'S RESTAURANT!")
console.log("\n ------------------------------- \n")

console.log(" Enter the code of the food or driunk that you want: ")