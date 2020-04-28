// let btnCriarconta = document.querySelector("button")
//         btnCriarconta.addEventListener('click', criarConta)
        function conferindologin() {
            return 4 >= 5 
        }
        function conferindoSenha() {
            return "a" ===  "a"
        }
        function veficarErro(login,senha) {
            let opçãoMensagem = ''
            if(login && senha) {
                opçãoMensagem = 0
            } else if (!login && !senha){
                opçãoMensagem = 1
            } else if (!login){
                opçãoMensagem = 2
            } else if (!senha){
                opçãoMensagem = 3
            }
            return opçãoMensagem
        }
        function criarConta() {
            let verificarLogin = conferindologin()
            console.log(verificarLogin)
            let verificarSenha = conferindoSenha()
            console.log(verificarSenha)
            let casoMensagem = veficarErro(verificarLogin,verificarSenha)
            switch(casoMensagem){
                case 0:
                    //document.querySelector("#resultado").textContent = "conta criada com sucesso"
                    console.log("conta criada com sucesso")
                    break
                case 1:
                    // document.querySelector("#resultado").textContent = "login precisa conter no minimo 5 caracteres e senhas não são iguais"
                    console.log("login precisa conter no minimo 5 caracteres e senhas não são iguais")
                    break
                case 2:
                    // document.querySelector("#resultado").textContent = "login precisa conter no minimo 5 caracteres"
                    console.log("login precisa conter no minimo 5 caracteres")
                    break
                case 3:
                    //document.querySelector("#resultado").textContent = "senhas não são iguais"
                    console.log("senhas não são iguais")
                    break
                default:
                    //document.querySelector("#resultado").textContent = "ERRO"

            }
        }

criarConta()