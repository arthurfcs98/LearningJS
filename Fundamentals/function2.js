//No return 
function printSoma(a, b){
    console.log(a+b)
}

printSoma(2, 3)
printSoma(2)
printSoma()

//With return 
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 5))
console.log(soma(4))


