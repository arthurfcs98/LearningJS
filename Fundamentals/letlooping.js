const funcs = []
// using var we have a problem
for(let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
    //funcs[i]()
}

funcs[2]()
funcs[8]()
