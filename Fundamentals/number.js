const peso1 =1.0
const peso2 =Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))

const avaliation1 = 9.871
const avaliation2 = 6.871

const total = avaliation1*peso1 +avaliation2 * peso2
const average = total / (peso1 + peso2)
console.log(average.toFixed(2))
console.log(average.toString(2))//Mostrar o numero em binário
console.log(Number.isInteger(average.toString()))
console.log(typeof average)

console.log("\n\nSOME CARES\n\n")

console.log(7 /0)
console.log("10" / 2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)
//cosole.log(10.toString())
console.log((10).toString)
