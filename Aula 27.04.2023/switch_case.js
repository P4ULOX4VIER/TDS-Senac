
// switch case


const leitor = require("readline-sync")
console.log(" \n ------------------------ \n")
let coutry = leitor.question("Where are you from? ")
coutry = coutry.toUpperCase()

switch (coutry){

    case "BRASIL":
        console.clear()
        console.log(" \n --> You are Brazilian!!")
        break
    
    case "USA":
        console.clear()
        console.log(" \n --> You are American!!")
        break
    
    case "ENGLAND":
        console.clear()
        console.log(" \n --> You are British!!")
        break

    default:
        console.clear()
        console.log ("\n  --> Nationality not found! ")
        break
            






}