let tipoServico = prompt(
  "\n1 - Abastecer com gasolina; \n2 - Abastecer com etanol; \n3 - Calibrar os pneus"
);
let valor;
let qtdLitros;

switch (tipoServico) {
  case "1":
    valor = parseInt(prompt("Valor desejado para abastecer"));
    qtdLitros = valor / 5;
    console.log("Foi abastecido " + qtdLitros + "L de gasolina");
    break;

  case "2":
    valor = parseInt(prompt("Valor desejado para abastecer"));
    qtdLitros = valor / 3;
    console.log("Foi abastecido " + qtdLitros + "L de etanol");
    break;

  default:
    console.log("Pneus calibrados com sucesso!");
}
