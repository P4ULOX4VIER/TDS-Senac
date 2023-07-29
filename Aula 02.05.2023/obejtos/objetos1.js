// Crie um objeto aluno

const aluno = {
    nome: "Paulo",
    idade: 18,
    signo: "Aquário",
    comidasFavoritas: ["sushi", "hamburguer", "pizza"],
    saudar: function(){
        console.log("Olá")
    }
}

//Acessar
console.log(aluno.nome) //acessando valores do objeto
console.log(aluno["nome"])

//Alterar

aluno.nome = "Paulinho"
aluno["idade"] = 16

//
console.log(aluno.nome)