//1- Criar um algoritmo que recebe valor e faça contagem usando FOR
//até o numero recebido

//Variavel
let numero = parseInt(prompt("Digite um numero inteiro e positivo: "));
//Loop FOR
for (let n = 0; n <= numero; n++) {
  console.log(n);
}

//2- Criar um algoritmo que use a estrutura FOR que faça a contagem até
//50 porém feita de 5 em 5
for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}

//3- Mesmo algoritmo do exercicio anterior, agora de ordem inversa
for (let j = 50; j >= 0; j -= 5) {
  console.log(j);
}
