const value = [7.7 , 3.4, 343.23,324.3]
console.log(value[0], value[3])
console.log(value[9])
value[4] = 'caixa'
console.log(value)
console.log(value.length)

value.push({id: 3}, false, null, 'teste')
console.log(value)

console.log(value.pop())
delete value[0]
console.log(value)

console.log(typeof value)
