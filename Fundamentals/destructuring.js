const peaple = {
    name: 'Arthur',
    age: 21,
    address: {
        street: 'Canuto',
        num : 707
    }
}
const { name, age, address} = peaple
console.log(name, age)
const {street: rua, num: numero} = address
const {address: {street, num}} = peaple

console.log(street,num)
console.log(rua, numero)
