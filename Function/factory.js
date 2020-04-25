function Crairproduto(nome, preco, datadevalidade) {
    return {
        nome: nome,
        preço: preco,
        val: datadevalidade
    }
}
let produto1 = Crairproduto("Cerveja", 2.99, "23/08/2020")
console.log(produto1)

