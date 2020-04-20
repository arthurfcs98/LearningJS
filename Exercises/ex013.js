/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente a o dia. Considere que segunda é o dia 1 e domingo é o dia 7. Utilize a estrutura Switch.*/

const whatday = (day) => {
    if (day > 31) console.log("DATA INVALIDA")
    else{
        while (day > 7){
            day -= 7
        }
        switch(day){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: console.log("DIA ÚTIL")
                break
            case 6: console.log("SABADO")
                break
            case 7: console.log("DOMINGO")
                break
            default: console.log("DATA INVALIDA")
        }
    }
}

whatday(10)

