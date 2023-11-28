//DECLARANDO ARRAYS
const array = []
const indice = []
let contadorIndice = 0

//PEDINDO NUMERO A SER PROCURADO
const indiceProcurado = parseInt(prompt("Digite o numero a ser procurado: "))

//PEDINDO NUMEROS DO ARRAY
for(let i = 0; i < 10; i++){
  const elemento = parseInt(prompt(`Digite um numero ${i + 1}`))
  array[i] = elemento
}

//ALGORITMO PARA ENCONTRAR O NUMERO DESEJADO DENTRO DO ARRAY INSERIDO
for (i =  0; i < 10; i++){
  if(array[i] === indiceProcurado){
    indice[contadorIndice] = i
    contadorIndice++
  }
}

//RETORNA O NUMERO ENCONTRADO COM POSICAO NO INDICE
console.log(`O numero ${indiceProcurado} for encontrado nos indices: ${indice}`)