const btnTry = document.querySelector("#button1")
const btnReset = document.querySelector("#volta")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")

btnReset.addEventListener("click", reset)
btnTry.addEventListener("click", handleClick)

let numberAleatorio = random()
let contador = 1
console.log(numberAleatorio)

function random() {
    let numeroAleatorio = Math.round(Math.random() * 10)
    return numeroAleatorio
}

function handleClick(event) {
    // ? (event.prevenDefaut) fazer com que o "form" do hmtl não fique atualizando a tela a cada click
    event.preventDefault();

    let inputNumber = document.querySelector("#number");

    if (numberAleatorio == Number(inputNumber.value)) {

        toggleScreen()
        document.querySelector(".resultado").innerText = `Acertou em ${contador} tentarivas`
        inputNumber.value = ""

    }else{
        alert("Numero errado")
    }

    contador++;

}

function reset() {

    toggleScreen()
    contador = 1
    numberAleatorio= random()
    console.log(numberAleatorio)

}

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
