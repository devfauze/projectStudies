
let confirmarCliente = "nao"
    while(confirmarCliente != "sim"){
    let nomeCliente = prompt("Qual seu nome? ")
    let idadeCliente = prompt("Qual sua idade? ")
    let salarioAtual = parseInt(prompt("Qual o seu salario atual? "))
    console.log("Seu nome é " + nomeCliente + ", sua idade é " + idadeCliente + " e seu salario atual é de: " + salarioAtual)
    confirmarCliente = prompt("As informacoes estao corretas? (sim / nao)")
  

  let aumento = 0.015
  console.log("Sua previsao salarial para os proximos 10 anos é de: ")

  for(let ano = 1; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2
    console.log((2023 + ano) + " = R$ " + salarioAtual)
  }
}