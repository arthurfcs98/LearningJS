function Pessoa(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

p1 = new Pessoa("josé")
p1.falar()
