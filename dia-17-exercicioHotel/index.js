//Sistema de reservas para hotel

class Hotel{
    Id
    Nome
    Categoria
    Endereco
    Telefone

    constructor(id, nome, categoria, endereco, telefone){
        this.Id = 0
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reservas{
    IdReserva
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida

    constructor(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida){
        this.IdReserva = idReserva
        this.IdHotel = idHotel
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let arrayHoteis = []
let arrayReservas = []
let idHotelAux = 1
let reservaIdAux = 1

function CadastrarHotel(){
    let nome = prompt("Nome do hotel: ")
    let categoria = prompt("Categoria do hotel: 1 / 2 / 3 / 4 / 5 - estrelas")
    let endereco = prompt("Qual o endereco do hotel: ")
    let telefone = prompt("Telefone de contato do hotel: ")
    let hotel = new Hotel(idHotelAux, nome, categoria, endereco, telefone)

    idHotelAux++
    arrayHoteis.push(hotel)
}

function CadastrarReserva(){
    let idHotelAux
    let existente = false
    do{
        idHotelAux = parseInt(prompt("Digite o Id do hotel: "))
        for(i = 0; i < arrayHoteis.length; i++){
            if(idHotelAux == arrayHoteis[i].id){
                i = arrayHoteis.length
                existente = true
            } else if (i == arrayHoteis.length - 1){
                console.log("Id de hotel nao encontrado")
            }
        }
    } while(!existente)

    let nomeResponsavel = prompt("Digite o nome do hospede: ")
    let diaEntrada = prompt("Dia de check-in: ")
    let diaSaida 
    do{
        diaSaida = prompt("Digite o dia de check-out")
        if(diaSaida > diaEntrada){
            console.log("O dia de sa'ida deve ser maior que o de entrada.")
        }
    } while (diaSaida < diaEntrada)

    let reserva = new Reservas(idReserva, idHotel, nomeResponsavel, diaEntrada, diaSaida)
    reservaIdAux++
    arrayReservas.push = reserva
}

function ProcurarReservaHotel(idHotel){
    Reservas.forEach(reserva =>{
        if(idHotel == reserva.IdHotel){
            let i = idHotel - 1
            console.log("Hotel: " + arrayHoteis[i].Nome)
            console.log("Responsavel: " + arrayReservas[i].NomeResponsavel)
            console.log("Dia de check-in: " + arrayReservas[i].diaEntrada)
            console.log("Dia de check-out: " + arrayReservas[i].diaSaida)
        }
    })
}

function ProcurarHotelPelaReserva(idReserva){
    let idHotel = arrayReservas[idReserva - 1].idHotel
    console.log("Hotel: " + arrayHoteis[idHotel - 1].idHotel)
    console.log("Endereco: " + arrayHoteis[idHotel - 1].Endereco)
    console.log("Dia de entrada: " + arrayHoteis[idHotel - 1].diaEntrada)
    console.log("Dia de saida: " + arrayHoteis[idHotel - 1].diaSaida)
}

function ProcurarReservaPeloResponsavel(nome){
    for(let i = 0; i < Reservas.length; i++){
        if(nome == reserva[i].NomeResponsavel){
            console.log("Id da reserva: " + arrayReservas[i].idReserva)
            console.log("Hotel: " + arrayHoteis[(arrayReservas[i].idHotel) -1].Nome)
        }
    }
}

function ProcurarPelaCategoria(categoria){
    let hoteisProcurados = []
    for (i = 0; i < arrayHoteis.length; i++){
        if(categoria == arrayHoteis[i].Categoria){
        hoteisProcurados.push(arrayHoteis).Nome
        }
    }
    return hoteisProcurados
}

function AtualizarTelefone(idHotel, telefone){
    arrayHoteis[idHotel - 1].Telefone = telefone
    console.log("Telefone atualizado com sucesso!")
}

let continuar = true

do{
    let opcao = prompt("Escolha uma opcao \n1- Cadastrar hotel \n2- Cadastrar reserva \n3- Procurar reserva por hotel \n4- Procurar hotel pela reserva \n5- Procurar reserva pelo responsavel \n6- Procurar hoteis por categoria \n7- Atualizar telefone \n8- Encerrar programa")

    switch(opcao){
        case "1":
            CadastrarHotel()
            break
        case "2":
            CadastrarReserva()
            break
        case "3":
            ProcurarReservaHotel(prompt("Digite o id do hotel: "))
            break 
        case "4":
            ProcurarHotelPelaReserva(prompt("Digite o id da reserva: "))
            break 
        case "5":
            ProcurarReservaPeloResponsavel(prompt("Qual o nome do responsavel pela reserva: "))
            break
        case "6":
            let hoteisProcurados = ProcurarPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")))
            console.log(hoteisProcurados)
            break
        case "7":
            let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"))
            let telefone = parseInt(prompt("Digite o telefone desejado: "))
            AtualizarTelefone(idHotel, telefone)
            break
        case "8":
            console.log("Programa encerrado")
            continuar = false
            break   
        default:
            console.log("Opcao invalida")  
            break      
    }   
} while (continuar)