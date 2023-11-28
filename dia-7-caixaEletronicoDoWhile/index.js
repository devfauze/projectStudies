//DESAFIO CAIXA ELETRONICO
//O algoritmo deve permitir sacar e depositar
//Mostrar saldo invalido, media de valor das transacoes
//Maiores valores sacados e depositados
//Permitir o usuario encerrar ou iniciar operacao novamente

//Definindo variaveis
let saldo = 1000;
let maiorValorSacado = 0;
let maiorValorDepositado = 0;
let somaValoresSacados = 0;
let somaValoresDepositados = 0;
let totalDeTransacoes = 0;
let continuar = false;
const nomeUser = prompt("Nome do usuario: ");
const cpfUser = prompt("CPF do usuario");

//Estrutura DO WHILE para as operaceos
do {
  
  //Definindo a operacao
  const operacaoRealizar = prompt("Qual operacao deseja realizar? (s = saque / d = deposito)");
  const valorOperacao = parseInt(prompt("Valor a ser realizado na operacao"));

  //Valor invalido e operacao de saque
  if (valorOperacao < 0) {
    console.log("Valor insuficiente para fazer transacao");
  } else if (operacaoRealizar == "s" && valorOperacao > saldo) {
    console.log("Saldo insuficiente para saque!");
  } else if (operacaoRealizar == "s") {
    console.log(`Olá, ${nomeUser} ${cpfUser}, seu saldo inicial é de R$${saldo}`);
    saldo -= valorOperacao;
    totalDeTransacoes++;
    somaValoresSacados += valorOperacao;
    if (valorOperacao > maiorValorSacado) {
      maiorValorSacado = valorOperacao;
    }
    console.log(`Saldo após operacao ${saldo}`);
  } else {

    //Operacao de deposito
    console.log(`Olá, ${nomeUser} ${cpfUser}, seu saldo inicial é de R$${saldo}`);
    saldo += valorOperacao;
    totalDeTransacoes++;
    somaValoresDepositados += valorOperacao;
    if (valorOperacao > maiorValorDepositado) {
      maiorValorDepositado = valorOperacao;
    }
    console.log(`Saldo após operacao ${saldo}`);
  }
  
  //Escolha do usuario de continuar ou encerrar
  const opcao = prompt("Deseja continuar? (1 = sim /  2 = nao)")
  if(opcao === "1"){
    continuar = true
  } else if (opcao === "2"){
    continuar = false
  } else {
    console.log("Opcao invalida")
    continuar = false
  }
} while (continuar);

//Mostrar ao usuario suas operacoes
console.log(`\nSaldo final ${saldo}`)
console.log(`Maior valor depositado ${maiorValorDepositado}`)
console.log(`Maior valor sacado ${maiorValorSacado}`)
console.log(`Media de valor das operacoes: ${somaValoresDepositados + somaValoresSacados / totalDeTransacoes}`)

