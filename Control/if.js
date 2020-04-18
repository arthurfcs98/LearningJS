function schoolstuation (ava1, ava2, ava3) {
    // ava1 = isNaN(ava1) ? 0 : ava1
    if(!isNaN(ava1) && !isNaN(ava2) && !isNaN(ava3)){
        const result = (ava1*1 + ava2*2 + ava3*2) / 5 
        if (result >= 7){
            console.log('Aprovado com ' + result.toFixed(2) + ' de nota')
        } else if (result >=4 && result<7){
            console.log('Recuperação com ' + result.toFixed(2) + ' de nota')
        } else if (result < 4){
            console.log('Reprovado com ' + result.toFixed(2) + ' de nota')
        }
    } else {
        console.log('Paramentros invalidos.')
    }
}

schoolstuation(6,0,5)


