//DECLARANDO ARRAY
const arrayUser = []

//COLETANDO QUANTIDADE DE NUMEROS DO ARRAY
const quantidadeArray = parseInt(prompt("Quantos numeros deseja inserir? "))

//ALGORITMO PARA INSERIR NUMERO INDIVIDUALMENTE
//BASEADO NA QUANTIDADE DECLARADA ANTES
for (i = 0; i < quantidadeArray; i++){
  const elemento = parseInt(prompt(`Insira um numero para a posicao ${i + 1}`))
  arrayUser[i] = elemento
}

//DECLARANDO VARIAVEL QUE FAZ A INVERSAO DO ARRAY
const arrayInvertido = arrayUser.slice(0).reverse()

//MOSTRANDO OS DOIS ARRAYS
console.log("Array inserido: " + arrayUser)
console.log("Array invertido: " + arrayInvertido)