let alunos = []
let notas = []
let continuar = true
let contador = 0

while (continuar){
    let nome = prompt("Digite o nome do " + (contador + 1) + " aluno")
    let nota = parseInt(prompt("Digite a nota do aluno"))
    alunos[contador] = nome
    nota[contador] = nome
    contador++
    let resposta = prompt("Deseja continuar? (s/n)")
    if(resposta == "n")
        continuar = false
    }

console.log("Nota dos alunos: ")
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i] + " - " + notas[i])
}

let somaNotas = 0
for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

let media = somaNotas / alunos.length
console.log("A soma das notas foi de: " + somaNotas)
console.log("A média geral das notas da turma foi de: " + media)