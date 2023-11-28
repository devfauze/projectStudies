class Livro{
    Titulo
    Autor
    Editora
    AnoPublicacao
    Disponibilidade = true

    constructor(titulo, autor, editora, anoPublicacao){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
    }
}

let livros = []
livros.push(new Livro("Livro1","Fauze","Editora F",2001))
livros.push(new Livro("Livro2","Fauze","Editora M",2002))
livros.push(new Livro("Livro3","Mariana","Editora N",2003))
livros.push(new Livro("Livro4","Mariana","Editora D",2004))
livros.push(new Livro("Livro5","Mariana","Editora G",2005))

class Biblioteca{
    Nome
    Endereco
    Telefone
    Acervo = []

    constructor(nome, endereco, telefone, acervo){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.Acervo = acervo
    }

    BuscarLivro(titulo){
        this.Acervo.forEach(livro => {
            if(livro.Titulo == titulo){
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo){
        let emprestado = false
        this.Acervo.forEach(livro => {
            if(livro.titulo == titulo){
                if(livro.Disponibilidade == true){
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if(emprestado){
            return true
        }else{
            return false
        }
    }

    DevolverLivro(titulo){
        livros.forEach(livro =>{
            if(livro.Titulo == titulo){
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }
}

let biblioteca = new Biblioteca("Biblioteca do Fauze", "Rua Dois", "11 99999-0000")

biblioteca.BuscarLivro("Livro1")
biblioteca.EmprestarLivro("Livro3")
biblioteca.DevolverLivro("Livro3")