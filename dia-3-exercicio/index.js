//Declarando variaveis

let nome = "";
let idade = 0;
let altura = 0;
let peso = 0;

//Coletando informacoes do usuário

nome = prompt("Digite seu nome: ");
idade = parseInt(prompt("Digite a sua idade: "));
altura = parseFloat(prompt("Digite sua altura: "));
peso = parseInt(prompt("Digite seu peso: "));

//Calculos de IMC e Data de nascimento

let imc = 0;
imc = peso / (altura * altura);

let anoDataNasc = 0;
anoDataNasc = 2023 - idade;

//Exibicao dos dados no console

console.log(
  "Olá " +
    nome +
    " ,voce tem " +
    idade +
    " anos, nasceu em " +
    anoDataNasc +
    " , tem " +
    altura +
    " de altura, pesa " +
    peso +
    "kg e seu IMC é " +
    imc +
    "kg/m2"
);
