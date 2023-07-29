/*

4. Criar um algoritmo que informe a quantidade total de calorias de uma
refeição a partir do usuário que deverá informar o prato, a sobremesa e
a bebida (veja a tabela a seguir).

|    PLATE     |         | CALORIES |            |  DESSERT  |          | CALORIES |        | DRINKS |       | CALORIES |

- Vegetarian                180 cal                -Pineapple              75 cal             -Tea              20 cal

- Fish                      230 cal                -Diet icecream         110 cal           -Orange juice       70 cal

- Chicken                   250 cal                -Diet mousse           170 cal           -Melon juice        100 cal

- Meat                      350 cal                -Diet chocolate        200 cal           -Diet coke          65 cal

*/


const leitor = require("readline-sync")
console.log("\n.....................................................................\n")
console.log(" ---- Hello consumer! Welcome to the calories calculator! ---- ")
console.log("\n")
console.log("This program will informe you how many calories you are consuming.")
console.log("\n...........................................................................\n")
console.log("\n")

console.log("What plate do you want? \n")
console.log(" 1- VEGETARIAN     2- FISH     3- CHICKEN      4- MEAT")
let plate = leitor.questionInt(" Option: ")

if (plate === 1){
    plate = 180

}else if (plate === 2 ) {
    plate = 230

} else if (plate === 3){
    plate = 250

} else if (plate === 4){
    plate = 350
} else {
    plate = 0
    console.log (" WRONG NUMBER!")
}

console.clear()

////// DESSERT

console.log("Now, choose a dessert: \n")
console.log(" 1- PINEAPPLE      2- DIET ICECREAM    3- DIET MOUSSE     4- CHOCOLATE MOUSSE\n")
let dessert = leitor.questionInt(" Option: ")

if (dessert === 1){
    Tdessert = 75

}else if (dessert === 2){
    Tdessert = 110

} else if (dessert === 3 ){
    Tdessert = 170

} else if (dessert === 4){
    Tdessert = 200

} else {
    Tdessert = 0
    console.log (" WRONG NUMBER!")
}

console.clear()

////// DRINKS 

console.log("The last part, a drink: \n")
console.log(" 1- TEA    2- ORANGE JUICE     3- MELON JUICE      4- DIET COKE")
let drink = leitor.questionInt(" Option: ")

if (drink === 1){
    Tdrink = 20

} else if (drink === 2){
    Tdrink = 70

} else if (drink === 3){
    Tdrink = 100

} else if (drink === 4){
    Tdrink = 65

} else{
    Tdrink = 0
    console.log(" WRONG NUMBER!")
}

console.clear()

/////// TOTAL

total = plate + Tdessert + Tdrink 

console.log("\n------------------------------\n")
console.log(" Total of calories: ", total)
console.log("\n------------------------------\n")
