let nomeUser = prompt("Digite o seu nome: ");
let idadeUser = parseInt(prompt("Digite sua idade: "));
let alturaUser = parseFloat(prompt("Digite sua altura: "));
let pesoUser = parseInt(prompt("Digite seu peso: "));
let profissaoUser = prompt("Qual sua profissao? ");

console.log(
  "Olá usuário, seu nome é " +
    nomeUser +
    " voce tem " +
    idadeUser +
    " anos, tem " +
    alturaUser +
    " de altura, pesa " +
    pesoUser +
    "kg, e é um " +
    profissaoUser
);

if (idadeUser > 18) {
  console.log("\nTá liberado tomar uma gelada!");
} else {
  console.log("\nSem gelada para voce!");
}

let idadeDias = idadeUser * 365;
let idadeSemanas = idadeUser * 52;
let idadeMeses = idadeUser * 12;

console.log(
  "\nSua idade em dias é de: " +
    idadeDias +
    ", em semanas: " +
    idadeSemanas +
    " e em meses: " +
    idadeMeses
);

let imcUser = pesoUser / (alturaUser * alturaUser);

if (imcUser < 18.5) {
  console.log("\nMagreza, seu IMC é de: " + imcUser);
} else if (imcUser >= 18.5 && imcUser <= 24.9) {
  console.log("\nNormal, seu IMC é de: " + imcUser);
} else if (imcUser >= 25 && imcUser <= 30) {
  console.log("\nSobrepeso, seu IMC é de: " + imcUser);
} else {
  console.log("Obesidade, seu IMC é de: " + imcUser);
}

let anoAtual = 2023;
let anoNasc = anoAtual - idadeUser;
console.log("\nVoce nasceu no ano de: " + anoNasc);

let anosVividosUser = anoNasc;
let idadeAtual = 0;
for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
  console.log(anoVivido + " - " + idadeAtual + " anos de idade");
  idadeAtual++;
}