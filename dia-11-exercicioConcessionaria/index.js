let modeloCarro = []
let anoCarro = []
let valorCarro = []
let continuar = true
let contador = 0

while (continuar){
    let modelos = prompt("Digite o modelo do " + contador + " carro")
    modeloCarro[contador] = modelos
    let ano = prompt("Digite o ano do " + contador + " carro")
    anoCarro[contador] = ano
    let valor = parseInt(prompt("Digite o valor " + contador + " carro"))
    valorCarro[contador] = valor
    contador++

    let resposta = prompt("Deseja continuar? (s/n)")
    if(resposta === "n"){
        continuar = false
    }

}

console.log("Carros cadastrados:")
for(i = 0; i < modeloCarro.length; i++){
    console.log("Carro de modelo: " + modeloCarro[i] + ", ano de: " + anoCarro[i] + ", tem o valor de: " + valorCarro[i])
}

//Ordenar por valor
for(let i = 0; i < valorCarro.length; i++){

    for(let j = 0; j < valorCarro.length - i - 1; j++){

        if(valorCarro[j] > valorCarro[j + 1]){
            
            let modeloMaiorValor = modeloCarro[j]
            modeloCarro[j] = modeloCarro[j+1]
            modeloCarro[j + 1] = modeloMaiorValor

            let anoMaiorValor = anoCarro[j]
            anoCarro[j] = anoCarro[j+ 1]
            anoCarro[j + 1] = anoMaiorValor

            let maiorValor = valorCarro[j]
            valorCarro[j] = valorCarro[j + 1]
            valorCarro[j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço")
for (let i = 0; i < modelos.lenght; i++){
    console.log(modeloCarro[i] + " - " + anoCarro[i] + " - " + valorCarro[i])
}