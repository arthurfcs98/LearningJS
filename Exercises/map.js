const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
const Somentepreco = (obj) => JSON.parse(obj).preco

let resultado = carrinho.map(Somentepreco)
console.log(resultado)


