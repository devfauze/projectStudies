class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
    }

    informacaoComputador(){
        console.log("As configuracoes desse computador é \nProcessador: " + this.processador + "\nMemoria Ram:" + this.memoriaRam + "\nA placa de vídeo é: " + this.video + "\nE Tem um armazenamento de: " + this.armazenamento + "\nDe ssd? " + this.ssd)
    }
}

console.log("====== CADASTRO DE COMPUTADORES ======")
let computadores = []
let continuar = true
let indexComputadores = 0

while(continuar){
    let tipo = prompt("Computador é: (Desktop ou Notebook)?")
    let processador = prompt("Processador: (INTEL ou AMD)?")
    let video = prompt("Video é: (Dedicado ou Integrado)")
    let armazenamento = prompt("Quantidade de armazenamento: ")
    let memoriaRam = prompt("Quantidade de memória ram: ")
    let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam)

    let ssd = prompt("Tem ssd: (sim ou nao)?")
    computador.ssd = ssd

    computadores[indexComputadores] = computador
    let desejaContinuar = prompt("Digite 1 para inserir mais um computador")
    if(desejaContinuar != 1){
        continuar = false
    }else{
        indexComputadores++
    }
}