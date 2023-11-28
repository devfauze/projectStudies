let nomes = []
let senhas = []
let continuar = true
let contador = 0


while (continuar){
    let acaoUsuario = prompt("Deseja: Cadastrar (1) / Fazer login (2) / Excluir cadastro (3) / Encerrar (4)")

    switch(acaoUsuario){

        case "1": 
            nomes[contador] = prompt("Qual o nome do usuario? ")
            nomes[contador] = prompt("Insira sua senha: ")
            contador++
            break;

        case "2":
            let nomeLogin = prompt("Nome: ")
            let senhaLogin = prompt("Senha: ")
            let loginValido = false

            for(let i = 0; i < nomes.length; i++){
                if(nomeLogin == nomes[i] && senhaLogin == senhas[i]){
                    loginValido == true
                    alert("Login efetuado com sucesso!")
                }else{
                    alert("Erro ao fazer login!")
                }
            }

            break;

        case "3":
            let excluirNome = prompt("Digite o nome a ser excluído")
            let nomeAux = []
            let senhaAux = []
            let contadorAux = 0

            for(let i = 0; i < contador; i++){
                if(excluirNome == nomes[i]){
                    alert("Cadastro excluído!")
                } else{
                    nomeAux[contadorAux] = nomes[i]
                    senhaAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomeAux
            senhas = senhaAux
            contador--

            break;

            case "4":
                continuar = false
                break;
        
        default:
            console.log("Opcao invalida!")
            break
    }
}
