class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    tempoDistancia(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida{
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""

    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].tempoDistancia(this.Distancia)
        let vencedor = this.Participantes[0]

        for(let i = 1; i < this.Participantes.length; i++){
            let tempo = this.Participantes[i].tempoDistancia(this.Distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[i]
            }
        }

        return this.Vencedor = vencedor
    }

    ExibirVencedor(){
        alert("Vencedor: " + this.Vencedor.Nome)
    }
}

let corrida = new Corrida("Formula Mancos", "Corrida", 60000)

corrida.Participantes[0] = new Carro("Civic", 150, 180, 7)
corrida.Participantes[1] = new Carro("Polo", 165, 190, 6)
corrida.Participantes[2] = new Carro("DS3", 340, 250, 12)
corrida.Participantes[3] = new Carro("911", 550, 350, 11)

corrida.DefinirVencedor()
corrida.ExibirVencedor()