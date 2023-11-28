//Declarando variaveis

let comFome = prompt("Está com fome? (sim/nao)");
let comDinheiro = prompt("Está com dinheiro? (sim/nao)");
let restauranteAberto = prompt("O restaurante está aberto? (sim/nao)");

//Declarando condicionais

if (comFome === "nao" || comDinheiro === "nao") {
  console.log("Hoje a janta será em casa");
} else if (comDinheiro === "sim" && restauranteAberto === "sim") {
  console.log("O jantar será no seu restaurante preferido!");
} else {
  console.log("Peça um delivery");
}
