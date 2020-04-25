function Carro(velocidadeMax = 200, deltaAceleracao = 5,velocidadeAtual = 0 ){
    //atributo publico
    this.velocidadeAtual = velocidadeAtual
    // metodo publico
    this.acelerar = function() {
        if (this.velocidadeAtual + deltaAceleracao <= velocidadeMax) {
            this.velocidadeAtual += deltaAceleracao
        } else {
            this.velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico aqui seria um GETTER ? 
    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }

    //metodo publico aqui seria um SETTER ?
    this.setVelocidadeAtual = function(velocidadeinicial) {
        this.velocidadeAtual = velocidadeinicial
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(700, 20)
// ferrari.setVelocidadeAtual(200)
// ferrari.acelerar()
// ferrari.acelerar()
// console.log(ferrari.getVelocidadeAtual())
ferrari.velocidadeAtual = 300
ferrari.acelerar()
console.log(ferrari.velocidadeAtual)
console.log(ferrari.velocidadeAtual)

