let nomes = []
let senhas = []

function solicitaOpcao(){
    let opcao = prompt("1 - Fazer cadastro / 2 - Fazer login / 3 - Excluir cadastro / 4 - Encerrar")
    return opcao
}

function realizarCadastro(){
    nomes.push(prompt("Digite seu nome: "))
    senhas.push(prompt("Insira uma senha: "))
}

function fazerLogin(nome, senha){
   let index = nomes.indexOf(nome)

   if(index !== -1 && senhas[index] === senha){
    return true
   } else {
    return false
   }
}

function excluirCadastro(nomeExcluir){
    let index = nomes.indexOf(nomeExcluir)
    
    if(index !== -1){
        nomes.splice(index,1)
        senhas.splice(index,1)
        alert("Cadastro excluído com sucesso")
    } else {
        alert("Erro ao excluir cadastro")
    }
}


let continuar = true
while(continuar){
    let opcao = solicitaOpcao()

    switch(opcao){
        case "1":
            realizarCadastro()
            break
        case "2":
            let nome = prompt("Digite seu nome: ")
            let senha = prompt("Digite sua senha: ")
            let login = fazerLogin(nome, senha)
            if(login){
                console.log("Login realizado com sucesso")
            }else{
                console.log("Erro ao fazer login")
            }
            break
        case "3":
            let nomeExcluir = prompt("Nome do usuário: ")
            excluirCadastro(nomeExcluir)
            break
        case "4":
            continuar = false
            console.log("Operacao encerrada!")
            break
        
        default:
            console.log("Opcao invalida!")
            break
    }
}