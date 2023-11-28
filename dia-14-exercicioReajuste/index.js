var nome
var salario

function perguntar(){
    nome = prompt("Qual seu nome: ")
    salario = parseInt(prompt("Qual seu salario? "))
    calcularReajuste(nome, salario)
}

function calcularReajuste(nome, salario){
       var aumento = 0

       if(salario <= 1500){
        aumento = 0.2
       }else if (salario < 2000){
        aumento = 0.15
       }else if (salario < 3000){
        aumento = 0.10
       }else{
        aumento = 0.05
       }

       var novoSalario = salario + (salario * aumento)

        console.log("Nome: " + nome)
        console.log("Salario de : " + salario + ", ajuste de: " + aumento + ", salario apos ajuste: " + novoSalario)

        perguntarNovamente()
}

function perguntarNovamente(){
    var resposta = prompt("Deseja iniciar novamente (s/n)")

    if(resposta === "s"){
        perguntar()
    } else {
        console.log("Encerrando")
    }
}

perguntar()
