Array.prototype.forit = function(fun) {
    for(let i = 0, len = this.length; i < len; i++ ){
            fun(this[i], i, this)
    }
}

let a = ['Arthur', 'João', "Carlos", "Andressa"]
const mostrarnome = (nome, indice) => console.log(`${indice +1} ${nome}`)

a.forit(mostrarnome)

