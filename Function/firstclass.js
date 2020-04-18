//litaral form
function fun1 () {}

// Function at a var
const fun2 = function () {}

// at Array
const array = [function(a,b) { return a + b}, fun1, fun2]
console.log(array[0](1,2))

// at Object
const obj1 = {}
obj1.talk = function() {return 'Talk!!'}
console.log(obj1.talk())

//Function as parameters
function run(fun){
    fun()
}
run(function () {console.log('Executing ... ... ...')})

// Returning a function
function sum(a,b) {
    return function (c) {
        console.log(a+b+c)
    }
}
sum(2, 3)(4)
const fiveplu = sum (2,3)
fiveplu(4)
