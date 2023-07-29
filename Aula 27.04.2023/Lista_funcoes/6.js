/*

6. Escreva uma função que pergunta ao usuário o ano atual, o ano de 
nascimento de uma pessoa, e o ano em que sua carteira de identidade foi 
emitida (nessa ordem). A função deve imprimir no console um booleano 
(true ou false) que indica se a carteira precisa ser renovada ou não. A 
carteira precisa ser renovada segundo os seguintes critérios:

    • Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve 
ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser 
renovada).
    
    • Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser 
renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser 
renovada).
    
    • Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos


*/

const leitor = require("readline-sync")

function IDVerification (){
    
    console.log("\n ---------------------------- \n")
    console.log(" ID CARD RENOVATION CHECKER ")
    console.log("\n ---------------------------- \n")
    
    console.log("\n ---------------------------- \n")
    const year = leitor.questionInt(' --> What is the current year?')
    const birth = leitor.questionInt(" --> When were you born? [year] ")
    const emission = leitor.questionInt(" --> What year did you emite your ID Card?")
    console.log("\n ---------------------------- \n")

    console.clear()

    age = year - birth

    if (age <= 20){

        total = emission - birth
        result = (age - total) % 5 
        

        if (result === 0){
            
            returnResult = true // need to renew the ID card
            console.log(returnResult)
            
        } else {
            returnResult = false //Don't need to renew the ID Card
            console.log(returnResult)
            
        }
        

    }  else if (age > 20 && age <= 50){
        
        total = emission - birth
        result = (age - total) % 10

        if (result === 0){
            returnResult = true // need to renew the ID card
            console.log(returnResult)
        
        } else{
            
            returnResult = false // Don't need to renew the ID Card
            console.log(returnResult)
        }

   
    } else if ( age > 50 ) {
        
        total = emission - birth
        result = (age - total) % 15

        if (result === 0){
            
            returnResult = true //Need to renew the ID Card
            console.log(returnResult)
        
        } else {
            returnResult = false //Dont't need to renew the ID Card
            console.log (returnResult)
        }

    }



}

IDVerification()