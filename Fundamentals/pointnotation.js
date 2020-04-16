console.log(Math.ceil(6.1))
const obj1 = {}
obj1.name = 'Salve'
obj1['prize'] = 'Salve 2'

console.log(obj1)

function Obj(name){ 
    this.name = name 
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2)
console.log(obj3)
