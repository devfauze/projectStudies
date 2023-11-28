//Declarando variaveis e input do usuario

let numeroUm = parseInt(prompt("Digite o primeiro numero: "));
let numeroDois = parseInt(prompt("Digite o segundo numero: "));
let operacaoMatematica = prompt(
  "Qual a operacao matematica a ser feita? (soma / subtracao / multiplicacao / divisao"
);
let resultado = 0;

//Caso SWITCH para resolucao

switch (operacaoMatematica) {
  case (operacaoMatematica = "soma"):
    resultado = numeroUm + numeroDois;
    console.log("Escolha de soma, resultado: " + resultado);
    break;

  case (operacaoMatematica = "subtracao"):
    resultado = numeroUm - numeroDois;
    console.log("Escolha de subtracao, resultado: " + resultado);
    break;

  case (operacaoMatematica = "multiplicacao"):
    resultado = numeroUm * numeroDois;
    console.log("Escolha de multiplicacao, resultado: " + resultado);
    break;

  case (operacaoMatematica = "divisao"):
    resultado = numeroUm / numeroDois;
    console.log("Escolha de divisao, resutlado: " + resultado);
    break;

  default:
    console.log("Escolha inexistente");
}
