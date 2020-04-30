class ContaPoupanca {
    constructor(agencia, numeroConta,saldo){
        this.agencia = agencia
        this.numeroConta = numeroConta
        this.saldo = saldo
    }
    
    Sacar(valorRetirado){
        this.saldo -= valorRetirado 
    }

    Depositar(valorDepositado){
        this.saldo += valorDepositado
    }

    get verSaldo() {
        return this.saldo
    }

}

let contaArthur = new ContaPoupanca('6540', '19521-8', 617.50)
console.log(contaArthur.verSaldo)
contaArthur.Sacar(550.170)
console.log(contaArthur.verSaldo)
contaArthur.Depositar(1200)
console.log(contaArthur.verSaldo)