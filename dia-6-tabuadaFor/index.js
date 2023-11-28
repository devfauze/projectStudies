//Criar um algoritmo de estrutura de repeticao for
//que receba um numero, e exiba na tela o resultado
//de sua tabuada e dos proximos 2 numeros

//Declarando e recebendo variavel

let numero = parseInt(
  prompt("Escolha um numero inteiro e positivo para a tabuada:")
);

//Laco FOR

for (let i = numero; i <= numero + 2; i++) {
  console.log("Tabuada do numero: " + i);
  for (let j = 0; j <= 10; j++) {
    console.log(i + " X " + j + " = " + (i * j));
  }
}
