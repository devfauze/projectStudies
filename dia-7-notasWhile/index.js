let qtdAlunos = parseInt(prompt("Quantos alunos deseja cadastrar: "))
let contador = 1
let qtdHomens = 0
let maiorNotaHomens = 0
let qtdMulheresAcimaDeSete = 0
let mediaGeral = 0

while (contador <= qtdAlunos ){
  notas = parseInt(prompt("Qual a nota do " + contador + " aluno? "))
  sexoAluno = prompt("Qual o sexo do aluno? (h = homens / m = mulheres) ")

  if(sexoAluno == "h"){
    if(maiorNotaHomens < notas){
      maiorNotaHomens = notas
    }
    qtdHomens++
  }

  if(sexoAluno == "m" && notas > 7){
    qtdMulheresAcimaDeSete++
  }

  mediaGeral+=notas
  contador++
}

mediaGeral = mediaGeral / qtdAlunos

console.log("A média geral dos alunos foi: " + mediaGeral)
console.log("A quantidade de homens que enviaram nota foi de : " + qtdHomens)
console.log("A quantidade de mulheres que tiraram acima de 7 foi de : " + qtdMulheresAcimaDeSete)
console.log("A maior nota entre os homens foi de: " + maiorNotaHomens)