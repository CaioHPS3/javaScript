/*
    Basicamente existe três tipos de eventos do teclado
    Quando vc aperta, segura e solta
    
    Esse funções podendo ser chamada direto do html com os 
    atributos "onkeydown"(apertando), "onkeypress"(segurando) e "onkeyup" (soltou)
*/

function apertou(){
    console.log("Apertou")
}
function segurou(){
    console.log("Segurando")
}
function soltou(){
    console.log("Soltou")
}

// Fazendo a chamada do evento de click pelo proprio js
// ".addEventListener" chama o evendo do teclado, Sendo passado dois parametros
// o que ele tem que observar ex: quando soltar, segura ou aperta e a função do que ele vai fazer
//Nesse exemplo ele esta pegando qualquer vez que o usuario soltar o botão em toda a pagina
document.addEventListener("keyup", soltou)
//Exemplo pegando uma tag especifica
const input = document.querySelector("input")
console.log(input)
input.addEventListener("keyup", apertou())

const input2 = document.querySelector(".escreve2")
input2.addEventListener("keyup", soltou2)
function soltou2(x){
    //Se vc passa um parametro para função e ele vai receber algumas informações que vc pode acessar

    // ".key" retona a tecla que foi clicada resumidamente
    console.log(x.key)
    // ".code" retona a tecla que foi clicada de  completa ex:Alt da direita ou esquerda
    console.log(x.code)
    // Retorna se o shift estava sendo clicado na hora de aperta a tecla, boolan 
    console.log(x.shiftKey)
}

const lista = document.querySelector(".lista")
const input3 = document.querySelector(".list")

function handlekeyUp(x){

    if(x.key === "Enter"){
        let newli = document.createElement("li")
        newli.innerHTML = input3.value
        lista.appendChild(newli)

        input3.value = ""
    }
}

input3.addEventListener("keyup", handlekeyUp)
