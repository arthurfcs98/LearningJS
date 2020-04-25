const CalculodaMedia  = (Cod, nota1, nota2, nota3) => {
    let media = 0
    let codigo = ''  
    let maiornota = Calcularmaiornota(nota1, nota2, nota3)
    let resultado = ''
    if (codigo == Cod) {    
        return("NEGATIVO")    
    } else {
        switch(maiornota) {
            case nota1:
                media = (nota1*4 + nota2*3 + nota3*3)/10
                break

            case nota2:
                media = (nota2*4 + nota1*3 + nota3*3)/10
                break

            case nota3:
                media = (nota3*4 + nota2*3 + nota1*3)/10
                break
        }
        resultado = Avaliacao(media)
        console.log("Codigo do aluno: " + Cod + ". Sua média foi de " + media.toFixed(2) + " e você foi " + resultado)
    }
}

const Calcularmaiornota = (nota1, nota2, nota3) =>{
    let nota = ''
    if (nota1 >= nota2 && nota1 >= nota3) nota = nota1
    else if (nota2 >= nota1 && nota2 >= nota3) nota = nota2
    else if (nota3 >= nota2 && nota3 >= nota1) nota = nota3
    return nota
}

const Avaliacao = (media) => {
    let resultado = ''
    if (media >= 5) resultado = "APROVADO"
    else if (media < 5) resultado = 'REPROVADO'
    return resultado
}

CalculodaMedia('ASCA001', 2, 2, 2)
