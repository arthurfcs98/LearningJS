// let titulo = document.querySelector("h1").textContent
// let primeiroItem = document.querySelector(".itens").textContent
// let Itens = document.querySelectorAll(".itens")
// let listaItens = []
// for(conteudo of Itens){
//     listaItens.push(conteudo.textContent)
// }

// function teste(){
//     let inputtexto = document.querySelector("input").value
//     let textoparagrafo = document.querySelector("#TESTE2")
//     textoparagrafo.textContent = inputtexto
// }
// let listaitens = document.querySelectoraLL('li')
// for (let itens of listaitens){
//     itens.classList.toggle("azul")
//     itens.classList.toggle("vermelho")
// }
// listaitens.removeEventListener
let adicionar = 1;
let remover = 100;

let btn = document.querySelector("#btnClick");

btn.addEventListener("click", clicar)
btn.addEventListener("click", function(){
    if(adicionar > 3) {
        btn.removeEventListener("click",clicar)
    }
})

function clicar(){
    adicionar++
    remover--
    console.log(adicionar,remover)
}
