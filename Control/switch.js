const showcongrats = function () {
    console.log('PARABENS!!  ... ')
}

const showbye = function () {
    console.log('TCHAUU!! ... ')
}

const showhello = function () {
    console.log('OLÁ, BEM VINDO!! ...')
}



const menuchoice = function (option) {
    switch(option){
        case 0: 
            showhello()
            break
        case 1:
            showcongrats()
            break
        case 2:
            showbye()
            break
        default: 
            console.log('OPÇÃO INVALIDA ...')
    }
}
console.log('... MENU ...\n0 - HELLO\n1 - CONGRATULATIONS\n2 - BYE')
//let option = window.prompt('Please choose 1 option of menu', null)
let option = -1
menuchoice(option)
