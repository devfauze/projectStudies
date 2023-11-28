//Declarando variaveis e coletando inputs

let nomeMotorista = prompt("Digite o nome do motorista");
let idade = parseInt(prompt("Digite a idade: "));
let temCNH = prompt("É habilitado? (sim/nao)");
let temCarro = prompt("Tem carro? (sim/nao)");

//Verficando autorizacao para dirigir

if (idade < 18 || temCNH === "nao") {
  console.log(nomeMotorista + " voce nao pode dirigir");
}
if (idade >= 18 && temCNH === "sim" && temCarro === "nao") {
  console.log(nomeMotorista + " voce pode dirigir mas nao tem carro");
}
if (idade >= 18 && temCNH === "sim" && temCarro === "sim") {
  console.log(nomeMotorista + " voce será o motorista");
}
